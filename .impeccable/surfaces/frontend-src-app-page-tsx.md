---
version: 1
slug: "frontend-src-app-page-tsx"
primary_target: "frontend/src/app/page.tsx"
related_targets: []
---

## Scope

Home do portfólio (`frontend/src/app/page.tsx`), rota `/`. Visitor mode: **Persuade**.

Audience: dono de negócio da Região dos Lagos no celular e recrutador no desktop. Action: chamar no WhatsApp (primária); e-mail, LinkedIn e GitHub (secundárias). Proof: projetos reais de `src/data/projects.ts`, com link. Pinned by the user: "DREYODEV" gigante de borda a borda, com a foto dele à frente das letras (como "ALGODÃO" da pousada-algodao). Fotos: só `retrato-recorte.webp` (derivada do retrato frontal) e `trabalhando.webp`. Nada de números, barras de habilidade ou nível inventados.

## Direction contract

THESIS: O visitante não lê um currículo, ele escolhe o jogador. A home é uma tela de seleção de personagem: DREYODEV é o personagem selecionado e as entregas são os slots da fileira. Recusa o portfólio padrão (fundo escuro, "Olá, eu sou", grade de cards, badges).

OWN-WORLD: Chão amarelo-arcade saturado (#f7d117) cobrindo a abertura; tinta preta; branco para o cartão do jogador e o contorno de adesivo do recorte; azul de seleção (#1f4bff) reservado ao que está selecionado (o painel inclinado atrás do Andrey, o slot ativo, o foco). Big Shoulders 900 inclinada no nome; Barlow Condensed em caixa alta para rótulos e campos; Barlow no texto. Traço único de 3px preto. Grade fixa de 10 colunas.

STORY: Em 3 segundos: esse é o Andrey, o DreyODev, faz sites para negócios da Região dos Lagos. Ele vê as entregas já na primeira tela, escolhe uma, abre o site real e chama no WhatsApp.

FIRST VIEWPORT: Faixa preta de navegação no topo. DREYODEV em Big Shoulders 900 inclinada, preto, de borda a borda no terço superior. Atrás do Andrey, um painel azul inclinado; o retrato recortado, com contorno branco de adesivo, fica à frente das letras e cobre a base delas. À esquerda, o cartão do jogador (branco, traço preto): campos NOME, CLASSE, BASE, a frase "Faço sites para negócios da Região dos Lagos, do desenho ao deploy." e o botão preto "Chamar no WhatsApp". Fecha numa faixa preta com a fileira de slots das entregas e o painel do slot selecionado. No celular: nome em largura total, retrato logo abaixo cobrindo a base do nome, cartão e botão em largura total, slots com rolagem horizontal.

Signature interaction: escolher um slot (clique, toque ou teclado) seleciona a entrega: o slot ganha o contorno azul duplo e o painel ao lado troca para o nome, tipo, situação e links dela. Motion: uma entrada só, o nome desliza na diagonal e o retrato "trava" com um flash do contorno, em 600ms; nada disso com `prefers-reduced-motion`.

FORM: Seleção de Personagem, 6ª da lista ordenada da rodada 2 (1 Capa de revista, 2 Figurinha de álbum, 3 Lambe-lambe, 4 Camisa de jogo, 5 Crachá, 6 Seleção de personagem, 7 Thumbnail de criador). seed:311b6db483f32969

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises

- Mapa de orientação: a cor de seleção (azul) é só do item ativo.
- Osciloscópio: tudo alinhado a uma grade fixa de 10 colunas.
- Fita de procedência: no ar é slot cheio; em construção é slot só no contorno.
- Linhas de emissão: hover e seleção mudam espessura e duplicam o contorno, não a cor.
- Jardim de chuva: uma cor, um significado (amarelo chão, preto tinta, azul seleção).

## Unresolved

- Capturas de tela dos sites para os slots: ainda não existem; os slots usam tipografia.
- Seções Sobre e Contato: depois da aprovação do hero.
