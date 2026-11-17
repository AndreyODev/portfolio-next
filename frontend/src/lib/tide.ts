/**
 * Geometria da curva de maré do hero. Coordenadas em porcentagem (0–100)
 * da área da curva, para que rótulos HTML e o SVG fiquem alinhados.
 * A altura de cada pico é só desenho: não representa dado real de maré.
 */
export const NOW_X = 93;

type Point = { x: number; y: number };

const PEAK_HEIGHTS = [40, 32, 44, 36];
const TROUGHS = [92, 86];

export function tideLayout(count: number) {
  const start = 4;
  const end = 78;
  const step = (end - start) / Math.max(count, 1);

  const peaks: Point[] = Array.from({ length: count }, (_, i) => ({
    x: start + step * (i + 0.5),
    // O pico mais recente é sempre o mais alto: é a preamar de agora.
    y: i === count - 1 ? 26 : PEAK_HEIGHTS[i % PEAK_HEIGHTS.length],
  }));

  const extremes: Point[] = [{ x: 0, y: 70 }];
  peaks.forEach((peak, i) => {
    extremes.push({ x: peak.x - step / 2, y: TROUGHS[i % TROUGHS.length] });
    extremes.push(peak);
  });
  if (peaks.length > 0) {
    const last = peaks[peaks.length - 1];
    extremes.push({ x: Math.min(last.x + step / 2, NOW_X - 2), y: 90 });
  }
  extremes.push({ x: 100, y: 58 });

  return { peaks, path: smoothPath(extremes) };
}

/** Curva suave entre extremos alternados (tangente horizontal em cada um). */
function smoothPath(points: Point[]) {
  // viewBox 1000 x 100: x vai de 0 a 1000, y de 0 a 100.
  const sx = (x: number) => (x * 10).toFixed(1);
  const [first, ...rest] = points;
  let d = `M${sx(first.x)} ${first.y}`;
  let prev = first;
  for (const p of rest) {
    const mid = (p.x - prev.x) / 2;
    d += ` C${sx(prev.x + mid)} ${prev.y} ${sx(p.x - mid)} ${p.y} ${sx(p.x)} ${p.y}`;
    prev = p;
  }
  return d;
}
