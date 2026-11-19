# Implementar a home `/` — "Monumental + laranja" (DREYODEV)

Reconstrua visualmente a home do portfólio (`frontend/src/app/page.tsx` e as seções em `frontend/src/components/sections/`) conforme o conceito aprovado pelo Andrey em 2026-11-18, com fidelidade total. Ele substitui o design atual ("Seleção de Personagem", amarelo/azul). **Não reinterprete nem "melhore".** Cada seção, capturada em 1920 px, deve ficar praticamente indistinguível da referência.

O gesto central vem da abertura "ALGODÃO" do projeto irmão `~/projetos/pousada-algodao` (`frontend/src/components/home/Hero.tsx`). Pode consultar como referência de técnica (oclusão do nome, glifos, motion), mas **não copie a paleta, a foto nem o texto de lá**.

## 0. Fontes da verdade (em ordem de prioridade)
1. `pesquisa/handoff-home/referencia-visual/*.png`: capturas exatas (`01-hero` 1920×1080, `01-hero-mobile` 390×844, `02-entregas` 1920×2240, `03-sobre` 1920×1300, `04-contato` 1920×1200 e `00-panorama-anotado`).
2. `pesquisa/handoff-home/referencia-html/*.html` + `base.css` + `img/`: o HTML/CSS que gerou cada imagem (re-renderizado e conferido: diferença 0). O posicionamento absoluto é **só maquete**: converta em layout responsivo (seção 4). As fontes vêm do Google Fonts na maquete; no site, use `next/font/google` (self-host no build).
3. Este texto, para dados, comportamento, responsividade e motion.
4. `pesquisa/redesign/LINGUAGEM.md`: tokens, gestos e o que **não** fazer (paletas e fontes recusadas).

Se este texto divergir das imagens, **as imagens vencem**.

## 1. Restrições
- **Next.js 16.4** (App Router, `cacheComponents` ligado). Leia `frontend/AGENTS.md` e consulte `frontend/node_modules/next/dist/docs/` antes de usar APIs. No `<Image>`, `priority` foi descontinuado: use `loading="eager"` + `fetchPriority="high"` na imagem do hero.
- **Porta 3010.** Neste PC, `npm run dev` costuma falhar com "Too many open files" (limite de inotify, não é erro do código). Para conferir, use `npm run build && npm run start` (`.claude/launch.json` → `frontend-prod`).
- **Mexa só na home e no que ela precisar:**
  - `src/app/layout.tsx`: fontes e metadados.
  - `src/app/globals.css`: tokens.
  - `src/components/layout/Header.tsx` e `src/components/layout/Footer.tsx`.
  - `src/components/sections/*`.
  - `src/app/not-found.tsx`: reestilize na nova linguagem, preto com título em Gilda e botão laranja.
- **Remova** o que só servia ao design antigo:
  - `Roster.tsx`;
  - os tokens `arcade`, `tinta`, `papel`, `selecao` e `grafite`;
  - as fontes Big Shoulders e Barlow;
  - `.retrato-adesivo`.
  Use `gio trash` em vez de `rm`.
- **Dados:** nada de texto escrito à mão no JSX.
  - Contatos, nome, marca, pitch, nav e local: `src/config/site.ts` (já existem).
  - Projetos: `src/data/projects.ts`, tipo em `src/types/project.ts`.
  - Bio e etapas: `src/data/about.ts` (já existe, texto final).
  - Textos novos (crie `src/data/home.ts` ou estenda `site.ts`):
    - caligrafias: `"full stack"` (hero), `"no ar"` (entregas), `"DreyODev"` (sobre), `"o seu site."` (contato);
    - título das entregas: `"Sites"`;
    - intro das entregas: `"Cada projeto tem o site publicado ou o código aberto no GitHub."`;
    - título do sobre: `"Quem é o"`;
    - legenda do retrato: `"Andrey Oliveira · Saquarema, RJ"` (derive de `name` + `location`);
    - título do contato: `"Próxima fase:"`;
    - chamada do contato: `"Me conte o que o seu negócio precisa. A conversa começa no WhatsApp."`.
- **Projetos com tela:** acrescente em `Project` um campo opcional `image?: { src: string; alt: string }`.
  - Projeto com `image` vira linha editorial com a tela.
  - Projeto sem `image` vira a faixa tipográfica (como o DropaAI).
  - A lista é variável: o Andrey vai cadastrar mais projetos. A alternância esquerda/direita segue a ordem; o mais recente vem primeiro.
- **Nada inventado:** nenhum número, cliente, depoimento ou promessa além do que está nos dados.
- **Links externos:** `target="_blank" rel="noopener"`. O WhatsApp sempre usa `siteConfig.contact.whatsapp` (`https://wa.me/5522997568439`).
- Não faça commit sem que eu peça. Trabalhe num branch a partir da `main`.

## 2. Imagens
| Arquivo em `pesquisa/handoff-home/assets/` | Destino sugerido | Uso | Origem |
|---|---|---|---|
| `trabalhando-hero.webp` (1200×1600) | `public/images/andrey/` | Hero, camada de fundo | `trabalhando.webp` (foto do Andrey, autorizada). Contraste 1.08, saturação 0.92 e fundo (cortinas/monitor) escurecido em gradiente do topo até 55% da altura, com a pessoa intocada. |
| `trabalhando-hero-pessoa.webp` (1200×1600, alfa) | `public/images/andrey/` | Hero, camada da frente (oclusão) | Recorte da mesma foto: máscara isnet-general-use limitada pela máscara u2net_human_seg dilatada em 20px. **Alinhado pixel a pixel** com o arquivo acima. |
| `tela-estrela-grill.webp` (1440×900) | `public/images/entregas/` | Entregas | Captura de https://estrela-grill-churrascaria-psi.vercel.app (site do Andrey), 2026-11-18. |
| `tela-sushi-vaz.webp` (1440×900) | `public/images/entregas/` | Entregas | Captura de https://landing-page-sushi-vaz.vercel.app (site do Andrey), 2026-11-18. |
| `public/images/andrey/retrato-frontal.webp` (já no projeto) | — | Sobre, retrato em arco | Foto do Andrey, autorizada. |

- Todas as fotos são do Andrey e autorizadas para o site. Não use `academia` nem `retrato-angulo`, que não estão no projeto e não foram autorizadas.
- Ao adicionar cada raster, registre a origem com `~/.claude/skills/impeccable/scripts/impeccable embed-prompt <arquivo> --prompt "ORIGIN: ..."`. Isso gera o `.webp.json` ao lado, como os que já existem em `public/images/andrey/`.
- `retrato-recorte.webp` e o seu `.json` deixam de ser usados. Remova-os com `gio trash`.

## 3. Seções (medidas no quadro de 1920 px)

**Tokens** (`globals.css` → `@theme`):

| Token | Valor | Uso |
|---|---|---|
| `preto` | #0c0c0c | chão |
| `preto-2` | #161616 | faixas vizinhas: Sobre e rodapé |
| `branco` | #f4f4f1 | — |
| `apoio` | branco a 72% | texto secundário |
| `laranja` | #ff7a1a | a única cor |
| `laranja-tinta` | #170900 | texto sobre laranja |
| `fio` | branco a 18% | — |

**Fontes:**
- Gilda Display 400: nome e títulos, sempre peso 400.
- Jost 300/400/500: texto, navegação, rótulos e botões.
- Allura: caligrafias.

**Contraste:**
- laranja sobre preto: 7,5:1;
- preto (ou `laranja-tinta`) sobre laranja: 7,5:1;
- texto `apoio` sobre preto: 9,3:1;
- texto `apoio` sobre `preto-2`: 8,9:1;
- chamada preto 82% sobre laranja: 5,8:1.

### Cabeçalho (sobre o hero, transparente) — ver `01-hero.html` `.nav`
- **Altura e largura:** 84px. O conteúdo fica entre 360px e 356px das bordas, o que corresponde a um contêiner de cerca de 1200px centralizado.
- **Assinatura:** "dev full stack" em itálico Gilda 15px laranja, sobre "Andrey Oliveira" em Gilda 24px.
- **Links:** Entregas, Sobre e Contato, em Jost 16px.
- **Pílula do WhatsApp:** contorno laranja de 1px, texto "WHATSAPP" espaçado em 0.34em, com um ponto laranja. É o equivalente ao "Reservar" da pousada.
- **Celular:** assinatura à esquerda e um botão de menu (3 traços) à direita. O botão abre uma sobreposição preta em tela cheia com os links e o WhatsApp.
  - O botão tem `aria-expanded` e `aria-controls`.
  - Esc fecha a sobreposição.
  - O foco volta ao botão ao fechar.

### 1. Abertura — `01-hero.png` / `01-hero.html`
- **Camadas, de baixo para cima:**
  1. **Foto `trabalhando-hero`:** caixa em top 150, left 700, 1220×930, `object-fit: cover`, `object-position: 50% 0`. Máscara que dissolve os primeiros 240px à esquerda e os primeiros 200px do topo.
  2. **Crista:** círculo de 1780px com o centro fora da tela à esquerda, em preto a 95%, que escurece a lateral esquerda.
  3. **Véu:** gradiente vertical (topo a 45%, nada no meio, base a 55%).
  4. **Arcos finos laranja:** 1.5px a 42% de opacidade, cortados.
  5. **Nome DREYODEV:** em `<span aria-hidden>`, com um `<h1 class="sr-only">` de texto completo (ex.: "Andrey Oliveira, o DreyODev: desenvolvedor full stack. Faço sites…").
     - Gilda Display 400, 372px no quadro de 1920×1080. Responsivo: `font-size: min(19.4vw, 34.4svh)`.
     - Line-height 0.8, letter-spacing -0.012em, centralizado.
     - Topo do bloco em 312px.
     - Sangra nas duas bordas: o D e o V ficam cortados.
  6. **Recorte `trabalhando-hero-pessoa`:** **mesma caixa e mesmo `object-fit`/`object-position` da foto**, mais a máscara que dissolve os primeiros 150px à esquerda.
     - É ela que faz o topo da cabeça do Andrey cobrir a base do "O".
     - Garanta que as duas camadas usem `sizes` idênticos, para não desalinharem.
  7. **Rótulo, caligrafia, apoio e ações.**
- **Rótulo:** "ANDREY OLIVEIRA" com fios de 52px e 88px, Jost 17px, letter-spacing 0.62em, laranja. Posição: left 436, top 286.
- **Caligrafia:** "full stack", Allura 196px laranja, rotação -4°, em left 120, top 498. Fica por cima do nome, na mesma relação do "da praia" com o ALGODÃO.
- **Apoio:** "FAÇO SITES PARA NEGÓCIOS DA **REGIÃO DOS LAGOS**, DO DESENHO AO DEPLOY." (de `siteConfig.pitch`, com "Região dos Lagos" em laranja).
  - Jost 21px/1.62, letter-spacing 0.3em, caixa alta.
  - Posição: left 160, top 770, largura 600.
- **Ações** (top 920):
  - **Botão do WhatsApp:** pílula laranja de 62px de altura, texto "CHAMAR NO WHATSAPP" em `laranja-tinta`, letter-spacing 0.26em.
  - **"Ver as entregas":** círculo de 52px com seta (SVG), texto em duas linhas com letter-spacing 0.3em. Ancora em `#entregas`.
- **Base:** borda inferior curva (elipse preta subindo da base, como na pousada).
- **Altura:** 100svh, entre cerca de 720px e 1080px. Acima de 1920px a composição para de crescer e centraliza.

### 2. Entregas — `02-entregas.png` / `02-entregas.html` (`id="entregas"`)
- **Cabeçalho** (left 160, top 150):
  - rótulo "ENTREGAS" com fios;
  - título "Sites" em Gilda 230px;
  - caligrafia "no ar", Allura 150px laranja, sem quebra de linha, sobrepondo a base do "s" final (left 470, top 170 relativo ao bloco);
  - à direita (left 1220, top 330, 540px de largura), o texto de intro em Jost 300 24px.
- **Linha editorial (projeto com `image`)** (altura 600):
  - **Tela:** 960×600, `object-fit: cover`, `object-position: top`, borda de 1px `fio`.
  - **Bloco de texto:** 560px de largura, a 100px da tela.
  - **Meta:** "LANDING PAGE · NOV 2026" (`kind` + `formatMonth(date)`), Jost 15px, letter-spacing 0.32em, `apoio`.
  - **Nome:** Gilda 104px/0.9.
  - **Resumo:** Jost 300 24px.
  - **Status:** ponto laranja + "NO AR" (`status`).
  - **Links:** "ABRIR O SITE ↗" (`liveUrl`) e "VER O CÓDIGO ↗" (`repoUrl`), sublinhados com o fio e seta em SVG. Nunca use caractere unicode.
  - **Alternância:** a 1ª linha tem a tela à esquerda, a 2ª à direita, e assim por diante. Espaço entre linhas: cerca de 80px.
- **Hover/foco da linha:** a tela ganha borda laranja de 2px (a 1ª linha da referência mostra esse estado) e zoom de 1.03 na imagem, em 400ms `cubic-bezier(.16,1,.3,1)`. O link inteiro da tela leva ao `liveUrl`.
- **Faixa tipográfica (projeto sem `image`):**
  - fios em cima e embaixo;
  - nome em Gilda 150px **vazado** (`-webkit-text-stroke: 1.5px` branco a 55%, preenchimento transparente);
  - meta e resumo no meio;
  - à direita, o status "EM CONSTRUÇÃO" com um círculo vazado no lugar do ponto, e "VER O CÓDIGO ↗".

### 3. Sobre — `03-sobre.png` / `03-sobre.html` (`id="sobre"`, fundo `preto-2`)
- **Retrato:** `retrato-frontal.webp` em moldura de arco (`border-radius: 320px 320px 0 0`), 640×900, em left 160, top 150, `object-position: 50% 32%`, com um arco laranja fino em volta do topo. Legenda abaixo em Jost 300 15px, letter-spacing 0.3em, `apoio`.
- **Coluna direita** (left 960, largura 800):
  - rótulo "SOBRE";
  - título "Quem é o" em Gilda 150px;
  - caligrafia "DreyODev", Allura 128px laranja, sobrepondo o fim do título;
  - os dois parágrafos de `about.bio` em Jost 300 24px/1.6, cor `apoio`, cerca de 110px abaixo do título.
- **"Do desenho ao deploy":** título em Gilda 60px (top 720), seguido de uma grade de 2×2 (`about.processo`), com fio no topo. Cada etapa tem:
  - numeral Gilda 58px laranja (1 a 4; a sequência é a ordem do processo);
  - título em Jost 500 16px, letter-spacing 0.28em;
  - texto em Jost 300 19px, cor `apoio`;
  - ferramentas em Jost 13px, letter-spacing 0.18em, branco a 50%.

### 4. Contato + rodapé — `04-contato.png` / `04-contato.html` (`id="contato"`)
- **Faixa inteira laranja** (altura 1060), com a borda superior curva: a elipse do fundo anterior desce sobre ela. É o contrapeso que tira o "ar de luto" do preto. Não troque essa faixa por preto.
- **Título:**
  - rótulo "CONTATO" em preto, com fios pretos;
  - "Próxima fase:" em Gilda 210px preto;
  - caligrafia "o seu site." em Allura 168px **preto**, sobrepondo a base do título (left 470, top 190 relativo ao bloco).
- **Chamada:** Jost 26px/1.5, preto a 82%, em top 660, largura 620.
- **Botão:** pílula preta de 76px de altura, texto "CHAMAR NO WHATSAPP" em laranja e o número `whatsappLabel` em branco a 80%, em top 800.
- **Canais:** à direita (left 1180, top 640, largura 580), uma `dl` com E-mail, LinkedIn e GitHub. Fios pretos a 35%; rótulos em Jost 500 15px, letter-spacing 0.3em; valores em Jost 22px sublinhados (`mailto:` no e-mail).
- **Arcos:** pretos a 22%.
- **Rodapé** (`preto-2`, 140px de altura): à esquerda, "DreyODev" em Gilda 22px seguido de "ANDREY OLIVEIRA · SAQUAREMA, RJ" em Jost 14px, letter-spacing 0.26em. À direita, os links WhatsApp, LinkedIn e GitHub.

## 4. Responsividade
- **Quadro e medidas:** o quadro de referência é 1920 px, com `--gutter: clamp(20px, 8.33vw, 160px)`. Os tamanhos de display usam `clamp()` ou `min(vw, svh)`; a composição para de crescer acima de 1920 px; nenhuma página pode ter rolagem horizontal. O nome sangra de propósito, mas o `body` tem `overflow-x: clip` nessa seção.
- **Larguras para testar:** 1280, 1440, 1536, 1905 e 1920, além de 390×844.
- **Celular (390×844), hero:** siga `01-hero-mobile.png`.
  - **Nome:** 74px (≈ 19vw), top 160, sangrando de leve.
  - **Rótulo:** centralizado em top 128.
  - **Foto e recorte:** top 70, 390×520, `object-position: 30% 0`, com a foto dissolvendo nos primeiros 150px do topo e nos últimos 25%. A cabeça cobre a base de "RE".
  - **Caligrafia "full stack":** **não aparece**, porque cobriria o rosto.
  - **Apoio:** Jost 14px, letter-spacing 0.22em, em top 610.
  - **Botão do WhatsApp:** largura total (com margem de 24px) em top 730.
  - O "Ver as entregas" some.
- **Celular, demais seções:** empilhar.
  - **Entregas:** título e caligrafia, a intro e, por projeto, tela em largura total e depois o texto. Títulos em cerca de 22vw.
  - **Sobre:** arco do retrato (cerca de 80% da largura) antes do texto, e etapas em 1 coluna.
  - **Contato:** título em cerca de 18vw, botão em largura total e canais abaixo.
  - **Rodapé:** em 2 linhas.

## 5. Motion
Respeite `prefers-reduced-motion`: com ele, tudo aparece pronto e parado, e nada fica escondido se o JS falhar. Use CSS (keyframes + `animation-delay` por letra). GSAP só se for indispensável, instalado dentro de `frontend/`.
- **Hero** (uma vez por visita), cerca de 1,5s no total:
  - letras do nome sobem uma a uma (`translateY` 60% → 0 + opacidade, stagger de 60ms, `expo.out`);
  - a caligrafia se revela da esquerda para a direita (`clip-path`);
  - o apoio sobe em linhas;
  - por fim, o círculo do "Ver as entregas".
- **Entregas:** cada linha sobe 24px e aparece ao entrar na viewport (IntersectionObserver ou `animation-timeline: view()` com fallback). O hover está na seção 3.
- **Sobre:** o retrato se revela de baixo para cima com `clip-path`, uma vez.
- **Contato:** sem animação além do hover dos links e do botão (sublinhado ou leve clareamento).

## 6. Verificação obrigatória (não declare pronto sem isto)
1. `cd frontend && npm run build && npm run start` (porta 3010).
2. Capture a página inteira com `node pesquisa/handoff-home/verificacao/captura.mjs http://localhost:3010/ desktop.png 1920 1080 0`. Ele mantém a viewport real (o hero usa `svh`), desliga motion e captura até o fim.
3. Recorte cada seção e compare lado a lado com `referencia-visual/`. Corrija até não haver diferença perceptível: no máximo cerca de 8 px de posição, e nenhuma diferença de quebra de linha, recorte, oclusão do nome ou cor.
4. Capture também 1440×900, 1905×1068 e 390×844 (`... 390 844 1`) e confira o hero do celular com `01-hero-mobile.png`.
5. **Navegador embutido:**
   - console sem erros nem avisos;
   - Tab percorre na ordem visual, com foco visível em laranja;
   - menu do celular abre e fecha (Esc fecha);
   - "Ver as entregas" rola até `#entregas`;
   - links do WhatsApp com o número certo;
   - 404 em rota inexistente.
6. **Lista de projetos:** a página continua de pé com 1 projeto e com 6 projetos, misturando com e sem `image`. Teste trocando os dados localmente e desfaça depois.
7. `npm run check` (lint + typecheck + build) sem erros.
8. No final:
   - mostre as comparações referência × implementação e liste os desvios que restarem;
   - refaça o `DESIGN.md` a partir do que foi construído (fluxo `impeccable document`);
   - atualize `pesquisa/redesign/LINGUAGEM.md` se algo mudou;
   - atualize `CLAUDE.md`: o design atual passa a ser "Monumental + laranja", e `pesquisa/design/LINGUAGEM.md` fica como histórico.

## 7. Critérios de aceite
- [ ] Hero, Entregas, Sobre e Contato iguais às referências em 1920, e o hero do celular igual a `01-hero-mobile.png`.
- [ ] O nome sangra nas bordas e a cabeça do Andrey cobre a base do "O" (desktop) e de "RE" (celular), com as duas camadas da foto alinhadas.
- [ ] Todos os textos vêm de `config`/`data`; a lista de projetos é variável (com e sem tela).
- [ ] Fotos e telas em cor natural, cada uma com o `.json` de origem.
- [ ] Responsivo, sem rolagem horizontal, motion conforme a seção 5, `prefers-reduced-motion` respeitado.
- [ ] Menu do celular acessível; foco visível; contraste AA.
- [ ] Design antigo removido (tokens, fontes, `Roster.tsx`, `retrato-recorte`); `npm run check` sem erros.
