# Portfólio — Andrey Oliveira

Portfólio pessoal. Front e back são projetos **independentes**: cada pasta tem as próprias dependências, scripts e servidor, e só são conectados no final via variável de ambiente.

| Pasta | Stack | Status | Como rodar |
| --- | --- | --- | --- |
| [`frontend/`](frontend/) | Next.js 16, React 19, TypeScript, Tailwind 4 | Home com design aplicado | `cd frontend && npm install && npm run dev` → http://localhost:3010 |
| `backend/` | — | Ainda não criado | — |

Nada é instalado na raiz. Detalhes do frontend em [frontend/README.md](frontend/README.md).

## Próximos passos

1. Design definido: ver [DESIGN.md](DESIGN.md) (direção "Monumental + laranja").
2. Cadastrar os sites publicados em `frontend/src/data/projects.ts` (Entregas) e os repositórios do GitHub em `frontend/src/data/repositorios.ts` (Projetos), revisar os textos em `frontend/src/data/about.ts` e manter a lista de tecnologias em `frontend/src/data/stack.ts`.
3. Se precisar, criar `backend/` como servidor próprio e conectar pelo `NEXT_PUBLIC_API_URL`.
