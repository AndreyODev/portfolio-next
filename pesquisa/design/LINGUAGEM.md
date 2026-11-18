# Linguagem visual: DreyODev (portfólio do Andrey Oliveira)

Referência aprovada: hero da home em 2026-11-18 (`frontend/src/components/sections/Hero.tsx`, rota `/`). Direção: **Seleção de Personagem**. O visitante não lê um currículo, ele escolhe o jogador. Combina com o Andrey (dev jovem, perto da comunidade de games, dono da marca DreyODev) e mostra as entregas logo na primeira tela.

## Tokens (`frontend/src/app/globals.css`)

- Cores, uma cor para cada significado:
  - `arcade` #f7d117: o chão das telas de "jogo" (abertura e chamada final).
  - `tinta` #111111: texto, traço e faixas pretas.
  - `papel` #ffffff: cartões e o contorno de adesivo.
  - `selecao` #1f4bff: **só** o que está selecionado (painel atrás do Andrey, slot ativo, foco do teclado).
  - `grafite` #2b2b2b: rótulos e divisores em faixa preta.
  - Contraste: tinta/arcade 12,7; tinta/papel 18,9; papel/selecao 6,0; tinta/selecao 3,15 (só texto grande).
- Fontes:
  - `font-display` Big Shoulders 900, caixa alta, inclinada com `-skew-x-[8deg]` só no nome gigante.
  - `font-rotulo` Barlow Condensed 600/700, caixa alta espaçada 0.08–0.16em, em rótulos, campos, botões e navegação.
  - `font-sans` Barlow 400/600/700 no texto corrido.
  - Algarismos tabulares.
- Traço: `border-traco` = 3px preto. Sem raio (tudo reto) e sem sombra decorativa.
- Seleção: `outline-3 outline-offset-3 outline-selecao` + anel duplo (`shadow-[0_0_0_9px_tinta,0_0_0_12px_selecao]`).
- Motion: `cubic-bezier(0.16, 1, 0.3, 1)`, 600ms, uma entrada por página.

## Gestos recorrentes

1. **Nome gigante + retrato na frente**: DREYODEV de borda a borda e o retrato recortado cobrindo a base das letras. Só na abertura; não repetir em outra seção.
2. **Painel inclinado**: paralelogramo `-skew-x-12`. Azul só atrás do personagem selecionado; em outras seções a moldura inclinada é preta.
3. **Cartão do jogador**: caixa branca com `border-traco`, campos em `dl` (rótulo condensado em grafite + valor). Para fichas e dados, nunca para enfeitar.
4. **Slots**: quadrados com iniciais em `font-display`. Cheio = no ar; só contorno = em construção; seleção = contorno azul duplo; hover = contorno branco. Estado por traço, não por cor.
5. **Faixa preta**: separa telas (navegação, entregas, rodapé). Rótulo de faixa em `font-rotulo` amarelo.

## Composição

- Largura máxima de 90rem, margem lateral de 1rem (celular) ou 1.5rem (sm+). Grade de 10 colunas no desktop.
- Abertura (`lg`): palco de altura de tela (`100svh - 3rem`, entre 46 e 62rem); cartão embaixo à esquerda, faixa de entregas no pé. Celular: nome, retrato, cartão e faixa em fluxo.
- Celular: palco de 92vw; os slots das entregas precisam caber na primeira tela (390×844), por isso os links secundários do cartão só aparecem no desktop.
- Sobre: título display + bio à esquerda, foto `trabalhando` em moldura preta inclinada à direita, e a sequência numerada "Do desenho ao deploy" (4 etapas, números vazados) fechando a seção.
- Contato: tela "próxima fase" em amarelo, título display inclinado (máx. 6rem) à esquerda, WhatsApp preto e a lista de canais (`dl`) à direita.
- 404: "fim de jogo" em amarelo, 404 gigante e o caminho de volta.
- Cada nova seção precisa de composição própria: não repetir palco, cartão + retrato.

## Mídia

- `retrato-recorte.webp`: derivado do retrato frontal (rembg) com silhueta de busto **fechada** (corte curvo atravessando os ombros, 16px de margem transparente), para o contorno de adesivo `.retrato-adesivo` (4px branco + 3px preto) dar a volta inteira. Não usar máscara em gradiente: esfuma os ombros e quebra o adesivo (apontado na revisão final).
- `trabalhando.webp`: foto real de trabalho; sem legenda de local nem de projeto.
- Sem foto: o layout continua de pé com tipografia e o painel inclinado.

## Motion

- Nome desliza na diagonal (`.nome-entra`) e o contorno do retrato pisca de azul para branco (`--contorno`). Só com `prefers-reduced-motion: no-preference`; o estado padrão já é visível.

## Não fazer

- A Tábua de Marés (maré, curva, azul do mar) foi recusada.
- Nada de barras de habilidade, nível, XP ou números inventados: a ficha só tem fatos.
- Nada de "Olá, eu sou", grade de três cards ou fileira de badges de tecnologia.
- Azul fora da seleção, sobretítulo acima de título, emoji ou caractere unicode no lugar de ícone.
- Fotos da academia e o retrato em ângulo não foram autorizados.
