# Portfólio — Andrey Oliveira

Portfólio pessoal. Front e back são projetos **independentes**: cada pasta tem as próprias dependências, scripts e servidor, e só são conectados no final via variável de ambiente.

| Pasta | Stack | Status | Como rodar |
| --- | --- | --- | --- |
| [`frontend/`](frontend/) | Next.js 16, React 19, TypeScript, Tailwind 4 | Home com design aplicado | `cd frontend && npm install && npm run dev` → http://localhost:3010 |
| `backend/` | — | Ainda não criado | — |

Nada é instalado na raiz. Detalhes do frontend em [frontend/README.md](frontend/README.md).

## Próximos passos

1. Design definido: ver [DESIGN.md](DESIGN.md) (direção "Seleção de Personagem").
2. Cadastrar todos os projetos em `frontend/src/data/projects.ts` e revisar os textos em `frontend/src/data/about.ts`.
3. Se precisar, criar `backend/` como servidor próprio e conectar pelo `NEXT_PUBLIC_API_URL`.
