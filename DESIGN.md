---
name: DreyODev
description: Portfólio do Andrey Oliveira, o DreyODev, com o nome monumental sobre o preto e uma única cor, o laranja.
colors:
  preto: "#0c0c0c"
  preto-2: "#161616"
  branco: "#f4f4f1"
  apoio: "rgba(244, 244, 241, 0.72)"
  fio: "rgba(244, 244, 241, 0.18)"
  laranja: "#ff7a1a"
  laranja-tinta: "#170900"
typography:
  display:
    fontFamily: "Gilda Display, Georgia, serif"
    fontSize: "372px"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Gilda Display, Georgia, serif"
    fontSize: "230px"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gilda Display, Georgia, serif"
    fontSize: "104px"
    fontWeight: 400
    lineHeight: 0.9
  script:
    fontFamily: "Allura, cursive"
    fontSize: "150px"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    letterSpacing: "0.62em"
  label-button:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    letterSpacing: "0.26em"
rounded:
  none: "0px"
  pill: "999px"
  arch: "320px 320px 0 0"
spacing:
  gutter: "clamp(20px, 8.33vw, 160px)"
  section-top: "150px"
  row-gap: "80px"
  nav-height: "84px"
components:
  button-primary:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.laranja-tinta}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "0 34px"
    height: "62px"
  button-on-orange:
    backgroundColor: "{colors.preto}"
    textColor: "{colors.laranja}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "0 40px"
    height: "76px"
  nav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.laranja}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "44px"
  screen-frame:
    backgroundColor: "{colors.preto-2}"
    rounded: "{rounded.none}"
    size: "960px x 600px"
---

# Design System: DreyODev

Medidas em px referem-se ao quadro de 1920 px da referência (`pesquisa/handoff-home/`). No código, elas viram `calc(N * var(--f))` (seções) ou `calc(N * var(--u))` (hero), com mínimos legíveis em telas menores.

## Overview

**Creative North Star: "Monumental + laranja"**

O nome do Andrey em escala de letreiro, sangrando nas duas bordas da tela, com a cabeça dele (recortada da própria foto de trabalho) cobrindo a base do "O", o mesmo gesto da abertura ALGODÃO da pousada-algodao. O chão é preto, o texto é um branco quente e existe uma única cor, o laranja, que aparece na caligrafia, num destaque por bloco, no botão principal, nos fios e nos arcos.

A densidade é baixa e editorial: cada seção tem um rótulo com fios, um título enorme em Gilda Display e uma palavra manuscrita em Allura por cima. As provas são reais: nas Entregas, a tela dos sites publicados, em cor natural; nos Projetos, o código dos repositórios do GitHub. O preto não fica sozinho: a faixa de Contato é inteira laranja, o contrapeso que tira o "ar de luto".

Recusados com o Andrey: vinho/bordô, carvão quente, marinho, papel claro, tijolo, verde-garrafa; fotos em P&B (sensação de luto); Big Shoulders, Bricolage e Bodoni; o design anterior "Seleção de Personagem" (amarelo/azul).

**Key Characteristics:**
- Nome monumental com oclusão: só na abertura.
- Uma cor: laranja #ff7a1a; todo o resto é preto, preto-2 e branco.
- Gilda Display sempre em peso 400; a hierarquia vem do tamanho.
- Caligrafia Allura inclinada -4°, uma por seção, nunca sobre o rosto.
- Arcos finos laranja como ambiente e bordas curvas entre faixas.

## Colors

Preto como chão, branco quente para ler e o laranja como única voz.

### Primary
- **Laranja** (#ff7a1a): caligrafias, destaque de uma expressão por bloco ("Região dos Lagos"), botão principal, rótulos e seus fios, arcos (1.5px a 42–45%), ponto de status "no ar", foco do teclado. Sobre o preto: 7,5:1.

### Neutral
- **Preto** (#0c0c0c): chão do hero, das Entregas e da Stack.
- **Preto 2** (#161616): faixas vizinhas (Sobre, Projetos e rodapé) e a elipse que desce sobre o Contato.
- **Branco** (#f4f4f1): nome, títulos e texto principal.
- **Apoio** (branco a 72%): texto secundário (resumos, bio, meta). 9,3:1 sobre o preto, 8,9:1 sobre o preto 2.
- **Fio** (branco a 18%): bordas das telas, linhas das faixas e da grade de etapas.
- **Laranja tinta** (#170900): texto sobre o botão laranja (7,5:1).

### Named Rules
**The One Voice Rule.** O laranja é a única cor. Nada de segunda cor de destaque, gradiente em texto ou cinza solto: secundário é branco com opacidade.

**The Orange Floor Rule.** A faixa de Contato é inteira laranja (texto e botão em preto). Não troque por preto: uma página toda escura com fotos foi lida como luto.

## Typography

**Display Font:** Gilda Display 400 (com Georgia)
**Body Font:** Jost 300/400/500 (com system-ui)
**Script Font:** Allura (só na home, carregada por `src/lib/fonts.ts`)

**Character:** uma didone de letreiro, delicada em tamanho gigante, contra uma geométrica limpa e muito espaçada em caixa alta. A caligrafia laranja é a assinatura que atravessa o título.

### Hierarchy
- **Display** (400, `372px` no quadro = 19.4vw, line-height 0.8, -0.012em): só o DREYODEV do hero (74px no celular de 390).
- **Headline** (400, 230 / 210 / 150px, line-height 0.86, -0.01em): "Sites", "Código", "Próxima fase:", "Quem é o". No celular, 18–22cqw.
- **Title** (400, 104px / 0.9): nome do projeto e nome da série (Projetos). Faixa sem tela: 150px vazado (`-webkit-text-stroke: 1.5px` branco a 55%). Na seleção dos Projetos, 72px; nome da versão, 52px.
- **Script** (Allura, 196 / 168 / 150 / 128px, -4°): "full stack", "o seu site.", "no ar", "em evolução", "DreyODev".
- **Body** (Jost 300, 24px / 1.6, apoio): intros, resumos, bio. Etapas em 19px / 1.5.
- **Label** (Jost 400, 15–17px, 0.28–0.62em, caixa alta): rótulos com fios, meta "LANDING PAGE · NOV 2026", links com seta. O apoio do hero é Jost 400 21px / 1.62, 0.3em.

### Named Rules
**The Single Weight Rule.** Gilda sempre 400. Para hierarquia, mude o tamanho, nunca o peso.

**The One Script Rule.** Uma caligrafia por seção, sobreposta ao título. No celular, só se não cobrir rosto nem texto (no hero do celular ela não aparece).

## Layout

- **Quadro de 1920:** margem de conteúdo de 160px (`--gutter: clamp(20px, 8.33vw, 160px)`); navegação em ~1204px centralizados (360/356px das bordas). Acima de 1920px a composição para de crescer e centraliza.
- **Unidades:** nas seções, `--f = min(100cqw, 1920px) / 1920` (o `<main>` é o contêiner, então não conta a barra de rolagem). No hero, um palco de 1920×1080 em `--u = min(100cqw/1920, (100cqh + 180px)/1080, 1px)`, ancorado na base: a largura manda e a altura só reduz a escala quando a tela é baixa demais (o palco pode perder até 180px de ar no topo).
- **Hero:** `100svh` entre 720 e 1080px. Celular (<1024px): composição própria em `--m = 100cqw/390`.
- **Entregas:** cabeçalho de 470px; linhas de 600px com tela 960×600 e texto de 560px a 100px dela, alternando lados pela ordem; 80px entre linhas; a faixa tipográfica tem coluna de nome de 900px.
- **Sobre:** retrato em arco 640×900 + coluna de 800px a 160px dele; etapas em grade 2×2.
- **Stack** (sem maquete; composição própria em 2026-11-20): cabeçalho de 400px (título Gilda 150px, caligrafia 128px, intro de 440px a 1160px da margem); uma linha por área entre fios, com coluna de 460px para a área (rótulo + frase) e os nomes em Gilda 88px na coluna restante. Celular: título 14cqw, nomes 10cqw.
- **Projetos** (maquete em `pesquisa/redesign/maquetes/05-projetos.html`, aprovada em 2026-11-20): fundo preto-2 entre a Stack e o Contato. Cabeçalho de 470px como o das Entregas ("Código" 230px, "em evolução" 150px a 440/168px do título, intro de 540px a 1060px). Série: nome (coluna de 900px) e resumo à direita; versões em colunas iguais com 80px entre elas (até 4 por linha), a linha laranja 52px acima. Seleção: número (120px) | nome — fio-guia — tipo (coluna de 520px), e embaixo resumo (até 760px) | tecnologias e links. Cadernos: 460px | nomes | "Todos os repositórios". Celular: a linha da série fica vertical à esquerda e o fio-guia some.
- **Contato:** faixa de 1060px; chamada e botão à esquerda (620px), canais à direita (580px).
- **Celular:** tudo empilha; tela em largura total antes do texto; etapas em 1 coluna; rodapé em 2 linhas. Nenhuma página tem rolagem horizontal (`body { overflow-x: clip }`).

## Elevation & Depth

Plano, sem sombras. A profundidade vem de camadas: foto → crista escura → véu → arcos → nome → recorte do Andrey → textos → borda curva. Entre faixas, uma elipse da cor da faixa anterior invade a seguinte (80px no hero, 60px no Contato).

### Named Rules
**The Occlusion Rule.** O recorte (`trabalhando-hero-pessoa.webp`) usa exatamente a mesma caixa, `object-fit`, `object-position` e `sizes` da foto de fundo. Se um mudar, o outro muda junto.

## Shapes

- Pílulas (999px) para todos os botões e a pílula do WhatsApp no cabeçalho.
- Arco (320px 320px 0 0) só no retrato do Sobre, com um arco laranja fino em volta do topo.
- Telas dos sites com canto reto e borda de 1px fio.
- Círculos: o "Ver as entregas" (52px, borda 1.5px branco a 70%), o ponto de status (9px) e os arcos de ambiente, sempre cortados por `clip-path`.

## Components

### Buttons
- **Primário (laranja):** pílula de 62px, padding 0 34px, Jost 500 17px, 0.26em, caixa alta, texto `laranja-tinta`. Hover clareia para #ff9445.
- **Sobre laranja (Contato):** pílula preta de 76px, texto laranja + número em branco a 80%. Hover #262626.
- **Pílula do cabeçalho:** contorno laranja 1px a 70%, 44px, "WHATSAPP" a 0.34em e ponto laranja; hover preenche de laranja.
- **Foco:** contorno laranja de 2px com 4px de afastamento em todo elemento focável (preto dentro da faixa laranja).

### Link com seta
Jost 15px, 0.28em, caixa alta, sublinhado com o fio (padding-bottom 8px) e seta diagonal em SVG (nunca o caractere unicode). Hover: fio e texto laranja.

### Rótulo com fios
Jost 17px a 0.62em em laranja, entre um fio de 52px e outro de 88px (a 80%). Faz parte do título logo abaixo. Na faixa laranja, fica preto.

### Linha de entrega (projeto com `image`)
Tela 960×600 (`object-position: top`) com borda de 1px fio; meta, nome em Gilda 104px, resumo, status e links. Hover/foco na linha: borda laranja de 2px e zoom de 1.03 na imagem, 400ms `cubic-bezier(.16,1,.3,1)`. A tela inteira é link para o site publicado.

### Faixa tipográfica (projeto sem `image`)
Fios em cima e embaixo, nome em Gilda 150px vazado (o "p" atravessa o fio), meta e resumo no meio, status "EM CONSTRUÇÃO" com círculo vazado e "VER O CÓDIGO" à direita. Nome longo quebra dentro da coluna de 900px.

### Linhas da stack
Uma linha por área (Front-end, Back-end, Banco de dados, Infra e versionamento, Design e organização), dados em `src/data/stack.ts`. À esquerda, o nome da área (Jost 500 16px, 0.28em) e uma frase em linguagem simples para quem não é da área; à direita, os nomes das tecnologias em Gilda 88px, separados por uma barra em branco a 30% (oculta para leitores de tela). Sem logos, barras de habilidade, níveis ou anos: o nome é o visual e a lista só tem fatos.

### Série (Projetos)
O mesmo projeto refeito em versões, dados em `src/data/repositorios.ts`. Meta "SÉRIE · 3 VERSÕES", nome em Gilda 104px e resumo; as versões ficam ligadas por uma linha laranja de 1.5px com um ponto de 13px em cada versão. A última versão ganha um anel (é onde a série está hoje) e a linha continua depois dela, esmaecendo até a borda: a série segue. Cada versão: número laranja, nome em Gilda 52px, o que mudou, tecnologias e "Ver o código".

### Linha da seleção (Projetos)
Sumário editorial: número em Jost, nome em Gilda 72px, um fio-guia até o tipo do projeto (como num índice de revista), resumo, tecnologias em caixa alta separadas por barra, status "EM CONSTRUÇÃO" quando for o caso e os links ("Ver a demonstração" só se existir `demoUrl`). Hover/foco: o fio-guia e o número ficam laranja. Nome longo quebra e o fio-guia some. Os projetos além de `selecaoVisiveis` ficam num `<details>` "Ver mais N projetos" (círculo com + que vira ×).

### Cadernos de estudo
Índice curto dos repositórios de exercícios e anotações (links em caixa alta com o fio embaixo) e o link "Todos os repositórios". O resto do GitHub não aparece no site.

### Navigation
Cabeçalho transparente sobre o hero (84px): assinatura "dev full stack" (Gilda itálico 15px laranja) sobre "Andrey Oliveira" (Gilda 24px), links Jost 16px (Entregas, Sobre, Stack, Projetos, Contato) e a pílula do WhatsApp. No celular (64px): assinatura e botão de 3 traços que abre uma sobreposição preta em tela cheia (links em Gilda, botão laranja), com `aria-expanded`/`aria-controls`, foco preso, Esc fecha e o foco volta ao botão.

### Motion
- Hero, uma vez por visita (`sessionStorage` + `html[data-visto]`): letras do nome sobem uma a uma (60ms de intervalo, 900ms, expo.out), a caligrafia se escreve com `clip-path`, o apoio e o botão sobem, o círculo aparece por último (~1,5s).
- Entregas, Stack e Projetos: cada linha sobe 24px ao entrar na tela; Sobre: o retrato se revela de baixo para cima. Nos Projetos, a linha de cada série se desenha da primeira versão para a última enquanto a página rola (linha do tempo nomeada `--linha-serie`, da lista). Todos com `animation-timeline: view()`; sem suporte, aparecem prontos.
- Toda seção com essas animações usa `overflow: clip`, não `hidden`: `hidden` cria um contêiner de rolagem, a `view()` passa a medir a seção (que não rola) e a animação fica parada. Assim estavam Entregas, Sobre e Stack até 2026-11-20.
- `prefers-reduced-motion`: tudo pronto e parado.

## Do's and Don'ts

### Do:
- **Do** manter o laranja #ff7a1a como a única cor e o secundário como branco com opacidade.
- **Do** usar fotos e telas em cor natural, cada raster com o `.webp.json` de procedência ao lado.
- **Do** tirar todo texto de `src/config/site.ts` e `src/data/` (inclusive `src/data/home.ts`).
- **Do** separar as provas: projeto publicado com tela vai para as Entregas (`projects.ts`); repositório que não está no ar vai para os Projetos (`repositorios.ts`), com texto tirado do README e sem datas do GitHub.
- **Do** manter as duas camadas da foto do hero com as mesmas medidas e o mesmo `sizes`.
- **Do** conferir mudanças visuais com `pesquisa/handoff-home/verificacao/captura.mjs` contra `referencia-visual/`.

### Don't:
- **Don't** usar vinho, carvão, marinho, papel claro, tijolo ou verde-garrafa; nem Big Shoulders, Bricolage ou Bodoni.
- **Don't** deixar a página inteira em preto com fotos P&B: o Contato fica laranja.
- **Don't** pôr caligrafia sobre o rosto do Andrey.
- **Don't** usar Gilda em outro peso, gradiente em texto ou uma segunda cor de destaque.
- **Don't** repetir o nome monumental com oclusão fora da abertura.
