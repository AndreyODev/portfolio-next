# Linguagem visual: DreyODev (redesign "Monumental + laranja")

Referência aprovada: hero da home em 2026-11-18 (`pesquisa/redesign/maquetes/01-hero.html` e `01-hero-mobile.html`). O Andrey pediu "DREYODEV grande igual fizemos na pousada" (abertura ALGODÃO da pousada-algodao) e escolheu preto e branco com laranja depois de recusar vinho, carvão, marinho, claro, tijolo e verde-garrafa.

## Tokens

- `preto` #0c0c0c: o chão de todas as seções. Use `#161616` como segundo tom para separar faixas vizinhas.
- `branco` #f4f4f1: nome, títulos e texto. Para texto secundário use branco a 72%, nunca cinza solto.
- `laranja` #ff7a1a: a única cor. Vai na caligrafia, no destaque de uma expressão por bloco, no botão principal, nos fios e nos arcos.
- `laranja-tinta` #170900: texto sobre o botão laranja.
- Fotos e telas em **cor natural**. A versão em P&B foi recusada porque passava sensação de luto.

## Fontes

- **Gilda Display 400** (didone): nome monumental e títulos de seção, em caixa alta ou mista, sempre em peso único (a hierarquia vem do tamanho).
- **Jost 300/400/500**: texto, navegação, rótulos e botões. Rótulos e apoio vão em caixa alta espaçada (0.22 a 0.62em).
- **Allura**: uma palavra ou expressão manuscrita em laranja por seção, por cima do título, como o "da praia". No celular, só se não cobrir rosto ou texto.

## Gestos recorrentes

1. **Nome monumental com oclusão**: DREYODEV a 372px no quadro de 1920 (19.4vw), sangrando nas duas bordas. O topo da cabeça do Andrey (recorte `trabalhando-hero-pessoa.webp`) cobre a base do "O" (no celular, de "RE"), como o telhado no ALGODÃO. Só na abertura.
2. **Rótulo com fios**: um texto curto em caixa alta espaçada, laranja, entre dois fios finos. Fica acima de um título monumental e faz parte do conjunto (não é um sobretítulo solto).
3. **Caligrafia laranja** sobreposta ao título, inclinada -4°.
4. **Arcos finos laranja**: círculos de 1.5px a 45% de opacidade, cortados. São ambiente, nunca contêm conteúdo.
5. **Círculo com seta**: o "Ver as entregas" e as chamadas de rolagem.
6. **Borda curva**: a transição entre faixas é um arco largo.

## Composição

- Grade de desktop com margem de 160px (conteúdo) e 360px (navegação centralizada), em 1920.
- O hero do celular empilha: nome em largura total, foto com a cabeça cobrindo a base do nome, apoio e o botão do WhatsApp em largura total.

## Mídia

- `trabalhando-hero.webp` (maquete: `trab-cor.jpg`): foto de trabalho em cor natural (contraste 1.08, saturação 0.92), com o fundo (cortinas e monitor) escurecido em gradiente do topo até 55% da altura, atrás do nome. O Andrey fica na luz.
- `trabalhando-hero-pessoa.webp` (maquete: `trab-cor-pessoa.png`): recorte da mesma foto (isnet limitado pela máscara humana do u2net, com o nariz preservado), alinhado pixel a pixel à foto.
- Telas reais dos sites entregues, em cor. No hover ganham a moldura laranja.

## Motion (para a implementação)

- Na abertura, as letras sobem uma a uma, a caligrafia se desenha e o apoio sobe em linhas, como na pousada, em versão curta (cerca de 1,5s).
- Com `prefers-reduced-motion`, tudo aparece pronto e parado.

## Não fazer

- Vinho/bordô, carvão quente, marinho, papel claro, tijolo, verde-garrafa: todos recusados.
- Big Shoulders, Bricolage e Bodoni recusadas. O design "Seleção de Personagem" (amarelo/azul) foi substituído por este (histórico em `pesquisa/design/LINGUAGEM.md`).
- Mais de uma cor de destaque, gradiente em texto, cinza solto.
- Página inteira em preto com fotos em P&B: passou sensação de luto. O laranja precisa ocupar pelo menos uma faixa inteira (o Contato).
- Caligrafia sobre o rosto do Andrey.

## Implementação (2026-11-19)

A home foi implementada a partir de `pesquisa/handoff-home/`. Em 1920 cada seção fica a no máximo 1px da referência. O que mudou ou foi decidido na implementação:

- **Escala do hero:** o palco de 1920×1080 escala pela largura; a altura só reduz a escala quando a tela é baixa demais (`--u = min(100cqw/1920, (100cqh + 180px)/1080, 1px)`), e o palco perde até 180px de ar no topo. Assim, num 1920×950 (navegador comum) o nome continua sangrando e a cabeça continua sobre o "O". O PROMPT pedia `min(19.4vw, 34.4svh)`, que nessa tela encolheria o nome e deixaria faixas pretas nas laterais.
- **Faixa do DropaAI:** na maquete o resumo invadia o status e o "Ver o código". A coluna do texto agora termina antes deles; com o resumo atual, a quebra de linha muda ("…Free Fire: / recrutamento, equipes e conexão entre jogadores.") e a faixa fica com os mesmos 180px. Nome longo quebra dentro da coluna de 900px.
- **Hover da 1ª linha:** a referência mostra a moldura laranja fixa; na página ela aparece com o mouse ou o foco.
- **Mínimos de leitura:** abaixo de 1920 as medidas escalam junto, mas texto e botões têm piso (ex.: apoio do hero ≥ 12px, texto ≥ 17px), o que muda quebras de linha só em telas pequenas (1024px).
- **Allura** só é carregada na home (`src/lib/fonts.ts`), para a 404 não pré-carregar uma fonte que não usa.
