# Portfólio — notas para o Claude

- Front e back são isolados: `frontend/` roda sozinho; `backend/` (quando existir) terá servidor próprio. Nada é instalado na raiz.
- Frontend: Next.js **16.4** com `cacheComponents` e `partialPrefetching` ligados no `next.config.ts`. Essa versão muda APIs: leia `frontend/node_modules/next/dist/docs/` antes de usar recursos novos (ver `frontend/AGENTS.md`, que o `next dev` recria sozinho; mantenha commitado).
- Tipos globais como `LayoutProps<"/">` vêm do `next typegen`; por isso `npm run typecheck` roda `next typegen && tsc --noEmit`.
- Conteúdo fica em `src/config/site.ts` e `src/data/`; a única ponte com o backend é `src/services/api.ts` via `NEXT_PUBLIC_API_URL` (inlined no build).
- Design: direção **Seleção de Personagem** (contrato em `.impeccable/surfaces/frontend-src-app-page-tsx.md`). Hero aguardando aprovação; Sobre e Contato ainda provisórios. A direção Tábua de Marés foi recusada e está só no branch `design/tabua-de-mares`.
- O build avisa `Failed to find font override values for font Big Shoulders`: é só a falta de métricas para a fonte reserva; a fonte carrega normal.
- `retrato-recorte.webp` foi gerado do `retrato-frontal.webp` com rembg (`u2net_human_seg`) num venv temporário fora do projeto. O modelo `birefnet-portrait` estoura a memória desta máquina.
- Validação: `cd frontend && npm run check` (lint + typecheck + build).
- Porta do front: **3010** (a 3000 é usada pelo backend da pousada-algodao). Backend futuro: 3333.
- Neste PC, `npm run dev` pode falhar com "Too many open files (os error 24)" do Turbopack: é o limite `fs.inotify.max_user_instances=128` estourado por outros programas (Cursor, Claude etc.), não erro do código. Contorno sem sudo: `npm run build && npm run start` (launch.json `frontend-prod`). Solução definitiva (com sudo, decisão do usuário): `fs.inotify.max_user_instances=1024` em `/etc/sysctl.d/`.
