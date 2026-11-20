---
version: 2
slug: "frontend-src-app-page-tsx"
primary_target: "frontend/src/app/page.tsx"
related_targets:
  - "frontend/src/components/sections/Hero.tsx"
  - "frontend/src/components/sections/Deliveries.tsx"
  - "frontend/src/components/sections/About.tsx"
  - "frontend/src/components/sections/Stack.tsx"
  - "frontend/src/components/sections/Projects.tsx"
  - "frontend/src/components/sections/Contact.tsx"
---

## Scope

Home do portfólio (`frontend/src/app/page.tsx`), rota `/`. Visitor mode: **Persuade**.

Audience: dono de negócio da Região dos Lagos no celular e recrutador no desktop. Action: chamar no WhatsApp (primária); e-mail, LinkedIn e GitHub (secundárias). Proof: sites publicados de `src/data/projects.ts`, com a tela (Entregas), e repositórios do GitHub de `src/data/repositorios.ts`, com o código (Projetos). Nada de números, clientes, depoimentos ou promessas fora dos dados.

## Direction contract

THESIS: "Monumental + laranja", aprovado pelo Andrey em 2026-11-18. DREYODEV gigante em Gilda Display sangrando nas bordas, com a cabeça do Andrey (recorte da foto de trabalho) cobrindo a base do "O", como a abertura ALGODÃO da pousada-algodao. Substitui a "Seleção de Personagem" (amarelo/azul), recusada.

OWN-WORLD: chão preto (#0c0c0c, faixas vizinhas #161616), branco quente, uma única cor (laranja #ff7a1a). Gilda Display 400, Jost 300/400/500, Allura para uma caligrafia por seção. Fotos e telas em cor natural. Faixa de Contato inteira laranja.

FIDELITY: a referência é `pesquisa/handoff-home/` (imagens em 1920 e 390, HTML conferido, PROMPT.md). Conferir com `pesquisa/handoff-home/verificacao/captura.mjs`; desvios aceitos estão em `pesquisa/redesign/LINGUAGEM.md` ("Implementação").

STORY: em 3 segundos, esse é o Andrey, o DreyODev, dev full stack que faz sites para negócios da Região dos Lagos. Rola, vê os sites no ar com a tela real, conhece quem ele é e as quatro etapas, vê as ferramentas que ele usa (Stack), vê a trajetória no código (Projetos: séries, seleção e cadernos) e chama no WhatsApp na faixa laranja.

FIRST VIEWPORT: cabeçalho transparente (assinatura, Entregas/Sobre/Stack/Projetos/Contato, pílula WHATSAPP). Rótulo ANDREY OLIVEIRA com fios; DREYODEV de borda a borda; foto de trabalho à direita com a cabeça na frente do nome; "full stack" em Allura laranja sobre o nome; apoio em caixa alta com "Região dos Lagos" em laranja; botão laranja e o círculo "Ver as entregas". No celular: nome em 74px, foto logo abaixo com a cabeça cobrindo "RE", apoio e botão em largura total, sem caligrafia.

FINISH: build verificado em 1920 (diferença de pixel ≤ 0,42% por seção, deslocamentos ≤ 1px), 1905, 1536, 1440, 1280, 1024 e 390; DESIGN.md e sidecar regravados; cada raster com o `.webp.json` de procedência.

## Unresolved

- O hover da 1ª linha das Entregas aparece fixo na referência; na página ele só aparece com o mouse ou o foco.
- Tablets em retrato (768–1023px) usam a composição do celular ampliada; não há referência para essa faixa.
