---
name: DreyODev
description: Portfólio do Andrey Oliveira como tela de seleção de personagem.
colors:
  arcade: "#f7d117"
  tinta: "#111111"
  grafite: "#2b2b2b"
  papel: "#ffffff"
  selecao: "#1f4bff"
typography:
  display:
    fontFamily: "Big Shoulders, Barlow Condensed, sans-serif"
    fontSize: "23.5vw"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders, Barlow Condensed, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
  title:
    fontFamily: "Big Shoulders, Barlow Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 900
    lineHeight: 1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.12em"
  label-button:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  column-gap: "32px"
  stack: "40px"
  section-mobile: "64px"
  section: "96px"
  bar: "48px"
components:
  button-primary:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.arcade}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  card-jogador:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "24px"
  slot-no-ar:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    size: "80px"
  slot-em-construcao:
    backgroundColor: "transparent"
    textColor: "{colors.papel}"
    rounded: "{rounded.none}"
    size: "80px"
  faixa:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
    typography: "{typography.label}"
    height: "48px"
---

# Design System: DreyODev

## Overview

**Creative North Star: "A Tela de Seleção de Personagem"**

O visitante não lê um currículo: ele escolhe o jogador. O sistema vem das telas de seleção de jogos de luta e arcade: um chão amarelo saturado, tinta preta em traço único, um cartão branco de ficha e um azul que só existe onde algo está selecionado. A densidade é de tela de jogo, com pouca coisa, tudo grande e chapado, e cada cor carrega um único significado.

A forma é reta e plana: nenhum canto arredondado, nenhuma sombra de profundidade, nenhum gradiente. A energia vem da inclinação (nome e painéis em paralelogramo), da escala extrema da tipografia display e do contorno de adesivo no retrato recortado. Estado se comunica por traço (espessura e contorno duplicado), não por troca de cor.

O mundo recusa o portfólio padrão de desenvolvedor: fundo escuro, "Olá, eu sou", grade de três cards, fileira de badges de tecnologia, barras de habilidade, nível ou XP. A ficha só tem fatos.

**Key Characteristics:**
- Uma cor, um significado: amarelo é chão, preto é tinta e faixa, branco é cartão e adesivo, azul é seleção.
- Traço único de 3px em tinta; cantos sempre retos.
- Big Shoulders 900 em caixa alta, gigante e inclinada; Barlow Condensed espaçada para rótulos; Barlow no texto.
- Paralelogramos inclinados como moldura e painel.
- Faixas pretas separam as telas (navegação, entregas, rodapé).
- Uma única entrada animada por página, desligada com `prefers-reduced-motion`.

## Colors

Paleta de pôster de arcade: quatro valores chapados e um acento reservado, sem tons intermediários decorativos.

### Primary
- **Amarelo Arcade** (`arcade`): o chão das telas de "jogo" (abertura, chamada final, 404), a `theme-color` do navegador, o texto do botão preto e os rótulos e links dentro das faixas pretas. Contraste com tinta de 12,7:1.

### Secondary
- **Azul de Seleção** (`selecao`): só o que está selecionado. O painel inclinado atrás do retrato (o personagem escolhido), o contorno duplo do slot ativo, o anel de foco do teclado, a `::selection` e o cursor de texto. Papel sobre azul tem 6,0:1; tinta sobre azul tem 3,15:1, portanto só texto grande.

### Neutral
- **Tinta** (`tinta`): todo o texto, todos os traços, as faixas pretas e o fundo do botão principal. Também é a cor da barra de rolagem sobre amarelo.
- **Grafite** (`grafite`): rótulos de campo (`dt`) sobre papel, a linha de ferramentas das etapas, o divisor vertical dentro da faixa preta e o hover de links sobre amarelo.
- **Papel** (`papel`): fundo do corpo e da seção Sobre, o cartão do jogador, os slots no ar, o texto sobre faixas pretas e a camada interna do contorno de adesivo.

### Named Rules
**The Uma Cor, Um Significado Rule.** Cada cor tem um papel e só um. Se uma nova peça precisa de cor, ela herda o significado da cor que usa; não existe cor de enfeite.

**The Azul É Seleção Rule.** `selecao` aparece apenas no item escolhido, no foco e no painel atrás do personagem selecionado. Molduras inclinadas fora da abertura são pretas. Azul em botão, título ou decoração é proibido.

## Typography

**Display Font:** Big Shoulders (com Barlow Condensed, sans-serif)
**Body Font:** Barlow (com system-ui, sans-serif)
**Label Font:** Barlow Condensed (com Barlow, system-ui)

**Character:** Big Shoulders 900 condensada e alta é a voz do placar e do nome do lutador; Barlow Condensed em caixa alta espaçada é a interface do jogo (campos, botões, navegação); Barlow é a fala humana, legível e calma. Todos com algarismos tabulares (`font-variant-numeric: tabular-nums` no `body`).

### Hierarchy
- **Display** (900, 23.5vw no celular e min(23vw, 34svh) no desktop, line-height 0.8, -0.01em, caixa alta, inclinação de -8°): só o nome DREYODEV de borda a borda na abertura e o "404". Decorativo e `aria-hidden`; o `h1` real é `sr-only`.
- **Headline** (900, clamp(3rem, 9vw, 6rem), line-height 0.92, caixa alta): títulos de seção. Na chamada final sobe para clamp(3.25rem, 10vw, 6rem), line-height 0.9, e inclina -8°.
- **Title** (900, clamp(2.25rem, 5vw, 3rem), line-height 1, caixa alta): subtítulo de bloco ("Do desenho ao deploy"); as etapas usam 2.25rem e o nome da entrega selecionada usa 1.875rem.
- **Body** (400, 1.125rem, subindo para 1.25rem em `sm`, line-height 1.625): texto corrido; largura máxima de 44 a 60ch.
- **Label** (Barlow Condensed 600/700, 0.875rem, 0.12em a 0.16em, caixa alta): navegação, rodapé, rótulo de faixa, metadados da entrega, ferramentas. Campos da ficha e do contato usam 1.125rem com 0.14em; botões usam 1.25rem a 1.5rem com 0.08em.

### Named Rules
**The Inclinação É do Nome Rule.** A inclinação de -8° vale para texto display de uma frase só (o nome, o 404, a chamada final). Títulos de seção comuns ficam retos.

**The Número Vazado Rule.** Numeração de etapas usa o algarismo em display com contorno de 2px em tinta e miolo transparente, ao lado do título cheio.

## Layout

Largura máxima de 90rem centralizada, margem lateral de 1rem no celular e 1.5rem a partir de `sm`. A partir de `lg` o conteúdo segue uma grade fixa de 10 colunas com 2rem entre colunas (texto em 5 + imagem em 5 na Sobre; 6 + 4 no Contato; faixas de largura total em 10). Seções respiram 4rem no celular e 6rem em `lg`; blocos dentro da seção ficam a 2.5rem.

A abertura em `lg` é um palco de altura de tela (100svh menos a barra de 3rem, entre 46rem e 62rem) com camadas absolutas: nome no terço superior, painel azul e retrato à frente do nome, cartão embaixo à esquerda e a faixa de entregas no pé. No celular tudo vira fluxo: nome em largura total, retrato logo abaixo cobrindo a base das letras, cartão sobreposto em -2.5rem e slots com rolagem horizontal.

Listas de dados usam grade de duas colunas (rótulo + valor) separadas por traços horizontais; listas de etapas viram 1, 2 e 4 colunas com traço vertical entre elas no desktop.

## Elevation & Depth

O sistema é plano. Não há sombra de elevação nem camadas tonais: profundidade vem de sobreposição real (o retrato à frente do nome, o cartão sobre o palco) e de contorno. Os dois usos de `box-shadow`/`drop-shadow` são traços sólidos sem desfoque, não sombras.

### Shadow Vocabulary
- **Anel de seleção** (`box-shadow: 0 0 0 9px var(--color-tinta), 0 0 0 12px var(--color-selecao)` junto com `outline: 3px solid var(--color-selecao); outline-offset: 3px`): contorno azul duplo do slot selecionado.
- **Contorno de adesivo** (oito `drop-shadow` sem desfoque: 4px em `--contorno`, branco, e 3px em tinta): só no retrato recortado.

### Named Rules
**The Traço, Não Sombra Rule.** Hover e seleção aumentam ou duplicam o contorno (outline de 3px com afastamento de 3px); nunca acrescentam sombra difusa nem deslocada.

## Shapes

Cantos sempre retos (0px), sem exceção. A borda canônica é o traço único de 3px em tinta (`border-traco`), usado em cartão, divisores, slots e moldura de foto. A segunda forma recorrente é o paralelogramo: painéis e molduras inclinados (-12° no painel de seleção, -6° na moldura da foto, com a imagem contra-inclinada por dentro). O único ícone é um triângulo de "play" em SVG, girado 180° para voltar.

## Components

### Buttons
Chapado, pesado, de controle de fliperama.
- **Shape:** retângulo reto (0px), sem borda própria.
- **Primary:** fundo tinta, texto arcade em Barlow Condensed 700 caixa alta 0.08em, 1rem por 1.5rem de respiro, triângulo de play em SVG antes do rótulo.
- **Hover / Focus:** hover acrescenta outline de 3px em tinta com afastamento de 3px (transição só do outline); foco usa o anel global de 3px em `selecao`.
- **Variante de chamada:** no Contato o botão vira bloco de largura da coluna, rótulo de 1.5rem com o número do WhatsApp em papel embaixo e o triângulo à direita.

### Cards / Containers
- **Cartão do jogador:** fundo papel, traço de 3px em tinta, 1.25rem (celular) a 1.5rem de respiro, cantos retos, sem sombra. Dentro, uma ficha `dl` (rótulo grafite 0.14em + valor tinta 0.04em em Barlow Condensed 700), traço separador e o botão principal. Serve para fichas de dados reais, nunca para enfeitar.

### Navigation
- **Faixa preta** de 3rem: fundo tinta, texto papel em label (Barlow Condensed 700, 0.875rem, 0.12em, caixa alta). Nome à esquerda, âncoras à direita com 1rem a 2rem de espaço. Hover: texto arcade sublinhado. O rodapé repete a mesma faixa, com a marca em arcade.

### Slots de entrega (Signature)
Quadrados de 4.5rem (celular) e 5rem, iniciais em display 900. **No ar** = cheio (papel com texto tinta); **em construção** = só o contorno de papel sobre a faixa preta. Hover = outline de 3px em papel; selecionado = anel azul duplo. Escolher um slot troca o painel ao lado (nome em display, metadados em label a 80%, resumo e links em arcade), anunciado com `aria-live`.

### Retrato adesivo (Signature)
Retrato recortado com contorno branco por dentro e tinta por fora, sempre à frente das letras do nome e sobre o painel azul inclinado. Na entrada, o contorno pisca de azul para branco enquanto o retrato sobe 3% e trava.

### Movimento
Uma entrada só por página: o nome desliza na diagonal (-4%, 2%) e o retrato trava 250ms depois, ambos em 600ms com `cubic-bezier(0.16, 1, 0.3, 1)`. Só sob `prefers-reduced-motion: no-preference`; o estado final é o estado padrão.

## Do's and Don'ts

### Do:
- **Do** usar o traço único de 3px em tinta para toda borda e divisor.
- **Do** reservar `selecao` para seleção, foco e o painel atrás do personagem escolhido.
- **Do** comunicar estado por traço: outline de 3px com afastamento de 3px no hover, anel duplo na seleção.
- **Do** separar telas com faixas pretas e rotulá-las em Barlow Condensed caixa alta.
- **Do** dar a cada nova seção composição própria dentro da grade de 10 colunas.
- **Do** manter a ficha só com fatos (nome, classe, base, datas reais).

### Don't:
- **Don't** arredondar cantos nem usar sombra difusa ou deslocada.
- **Don't** usar azul fora da seleção, nem cor nova sem significado.
- **Don't** repetir o palco da abertura (nome gigante + retrato + cartão) em outra seção.
- **Don't** usar barras de habilidade, nível, XP ou números inventados.
- **Don't** usar "Olá, eu sou", grade de três cards ou fileira de badges de tecnologia.
- **Don't** colocar sobretítulo acima de título, nem emoji ou caractere unicode no lugar de ícone (ícones em SVG).
