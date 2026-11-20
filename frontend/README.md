# Frontend — Portfólio

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4. Roda sozinho, sem depender de backend.

## Rodar

```bash
cd frontend
npm install
cp .env.example .env.local   # opcional enquanto não houver backend
npm run dev                  # http://localhost:3010
```

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento na porta 3010 (a 3000 fica livre para outros projetos) |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção na porta 3010 |
| `npm run lint` | ESLint |
| `npm run typecheck` | Gera os tipos de rota e roda o `tsc` |
| `npm run check` | lint + typecheck + build (rode antes de commitar) |

## Estrutura

```
frontend/
├── public/              # arquivos estáticos servidos na raiz (/images/...)
│   └── images/
└── src/
    ├── app/             # ROTAS: cada pasta com page.tsx vira uma URL
    │   ├── layout.tsx   # casca de todas as páginas (html, header, footer, fontes)
    │   ├── page.tsx     # página inicial "/" — só monta as seções
    │   ├── not-found.tsx
    │   └── globals.css  # Tailwind + variáveis de tema
    ├── components/
    │   ├── layout/      # peças fixas da página: Header, Footer
    │   ├── sections/    # blocos da home: Hero, Deliveries, About, Stack, Projects, Contact
    │   └── ui/          # peças reutilizáveis e genéricas: Container, Section
    ├── config/site.ts   # nome, descrição, menu e redes (fonte única)
    ├── data/            # conteúdo local (entregas, repositórios, sobre, stack, textos da home) enquanto não há backend
    ├── lib/             # funções utilitárias sem React (cn)
    ├── services/api.ts  # único ponto de contato com o backend
    └── types/           # tipos compartilhados (Project, Repositorio)
```

Regra prática para saber onde colocar algo:

- **É uma URL nova?** → `src/app/<rota>/page.tsx`
- **É um bloco visual de uma página?** → `components/sections`
- **É usado em vários lugares e não sabe nada do portfólio?** → `components/ui`
- **É texto ou lista de conteúdo?** → `config` (dados do site) ou `data` (conteúdo)
- **Fala com o backend?** → `services`

Importe sempre com o atalho `@/` (aponta para `src/`), ex.: `import { siteConfig } from "@/config/site"`.

## Conexão com o backend (futuro)

O front não depende do backend. Quando ele existir:

1. Suba o backend no servidor dele (porta sugerida: 3333).
2. Em `frontend/.env.local`, defina `NEXT_PUBLIC_API_URL=http://localhost:3333`.
3. Troque o uso de `src/data/*` por funções em `src/services/api.ts` que chamem `apiFetch(...)`.

Observação: variáveis `NEXT_PUBLIC_*` entram no JavaScript no momento do `build`. Se mudar a URL, rode o build de novo.

## Problemas conhecidos

**`npm run dev` falha com "Too many open files (os error 24)"**: o limite de observadores de arquivo do Linux (`fs.inotify.max_user_instances`, padrão 128) já está tomado por outros programas abertos. Feche editores e servidores que não está usando ou aumente o limite (precisa de sudo):

```bash
echo 'fs.inotify.max_user_instances=1024' | sudo tee /etc/sysctl.d/60-inotify.conf && sudo sysctl --system
```
