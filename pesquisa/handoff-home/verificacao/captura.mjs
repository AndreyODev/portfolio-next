// Uso: node captura.mjs <url> <saida.png> <largura> <altura> <mobile 0|1>
// Abre o Chromium headless via CDP, mantém a viewport real (svh correto), desliga motion e captura a página inteira.
// Captura de página inteira via CDP, mantendo a altura de viewport real (svh correto).
import { spawn } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
const [url, out, w, h, mobile] = process.argv.slice(2);
const prof = mkdtempSync(process.argv[7] ?? tmpdir() + "/cdp-");
const chrome = spawn("chromium", ["--headless=new", "--remote-debugging-port=9333", `--user-data-dir=${prof}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws;
for (let i = 0; i < 50 && !ws; i++) {
  await sleep(200);
  try {
    const list = await (await fetch("http://127.0.0.1:9333/json")).json();
    const page = list.find((t) => t.type === "page");
    if (page) ws = new WebSocket(page.webSocketDebuggerUrl);
  } catch {}
}
await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
await send("Emulation.setDeviceMetricsOverride", { width: +w, height: +h, deviceScaleFactor: 1, mobile: mobile === "1" });
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await send("Page.enable");
await send("Page.navigate", { url });
await sleep(2500);
// Rola a página inteira antes da captura: imagens com loading="lazy" (next/image) só carregam perto da viewport.
await send("Runtime.evaluate", { expression: `(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=${+h}/2){scrollTo(0,y);await new Promise(r=>setTimeout(r,120))}scrollTo(0,0)})()`, awaitPromise: true });
await sleep(1500);
const { result } = await send("Runtime.evaluate", { expression: "document.documentElement.scrollHeight", returnByValue: true });
const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, clip: { x: 0, y: 0, width: +w, height: result.value, scale: 1 } });
writeFileSync(out, Buffer.from(shot.data, "base64"));
console.log(out, w + "x" + result.value);
ws.close(); chrome.kill();
