# Portfólio — notas para o Claude

- Front e back são isolados: `frontend/` roda sozinho; `backend/` (quando existir) terá servidor próprio. Nada é instalado na raiz.
- Frontend: Next.js **16.4** com `cacheComponents` e `partialPrefetching` ligados no `next.config.ts`. Essa versão muda APIs: leia `frontend/node_modules/next/dist/docs/` antes de usar recursos novos (ver `frontend/AGENTS.md`, que o `next dev` recria sozinho; mantenha commitado).
- Tipos globais como `LayoutProps<"/">` vêm do `next typegen`; por isso `npm run typecheck` roda `next typegen && tsc --noEmit`.
- Conteúdo fica em `src/config/site.ts` e `src/data/`; a única ponte com o backend é `src/services/api.ts` via `NEXT_PUBLIC_API_URL` (inlined no build).
- Design: direção **Monumental + laranja** (DREYODEV gigante em Gilda Display com a cabeça do Andrey cobrindo a base do "O"; preto, uma única cor laranja #ff7a1a, Contato inteiro laranja), aprovada em 2026-11-18 e implementada em 2026-11-19. Sistema em `DESIGN.md` (+ `.impeccable/design.json`); linguagem, rejeições e desvios aceitos em `pesquisa/redesign/LINGUAGEM.md`; pacote de referência (imagens, HTML, PROMPT e captura) em `pesquisa/handoff-home/`; contrato da home em `.impeccable/surfaces/frontend-src-app-page-tsx.md`. Leia antes de mexer no visual. Histórico: "Seleção de Personagem" em `pesquisa/design/LINGUAGEM.md` (substituída) e Tábua de Marés no branch `design/tabua-de-mares` (recusada).
- Capturas de página inteira para revisão: o `--screenshot` do Chromium distorce o hero (usa `svh`); use CDP com `captureBeyondViewport` mantendo a viewport real (1440x900 e 390x844).
- Os `.webp.json` ao lado das fotos em `public/images/andrey/` são o registro de origem (procedência) das imagens; mantenha ao trocar uma foto.
- Recortes de pessoa (rembg) rodam num venv temporário fora do projeto; o modelo `birefnet-portrait` estoura a memória desta máquina. O recorte do hero (`trabalhando-hero-pessoa.webp`) tem de ficar alinhado pixel a pixel à `trabalhando-hero.webp` e as duas `<Image>` usam o mesmo `sizes`.
- Validação: `cd frontend && npm run check` (lint + typecheck + build).
- Porta do front: **3010** (a 3000 é usada pelo backend da pousada-algodao). Backend futuro: 3333.
- Neste PC, `npm run dev` pode falhar com "Too many open files (os error 24)" do Turbopack: é o limite `fs.inotify.max_user_instances=128` estourado por outros programas (Cursor, Claude etc.), não erro do código. Contorno sem sudo: `npm run build && npm run start` (launch.json `frontend-prod`). Solução definitiva (com sudo, decisão do usuário): `fs.inotify.max_user_instances=1024` em `/etc/sysctl.d/`.
- CSS Modules: a regra `*.css` do `@tailwindcss/turbopack` no `next.config.ts` tem `condition` excluindo `*.module.css`; sem isso o `as: "*.css"` transforma os módulos em CSS global e as classes somem.
- As seções usam `--f` (1px do quadro de 1920) definido em `main > *` com `cqw` (o `<main>` é o contêiner, sem contar a barra de rolagem); o hero usa `--u`/`--m` próprios. Ver `DESIGN.md` › Layout.
- `captura.mjs` (em `pesquisa/handoff-home/verificacao/`) rola a página antes de capturar, porque as imagens do `next/image` são lazy.
