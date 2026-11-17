---
version: 1
slug: "frontend-src-app-page-tsx"
primary_target: "frontend/src/app/page.tsx"
related_targets: []
---

## Scope

Home do portfólio (`frontend/src/app/page.tsx`), rota `/`. Visitor mode: **Persuade**.

Audience: dono de negócio da Região dos Lagos no celular (chega por link no WhatsApp) e recrutador no desktop. Action: chamar no WhatsApp (primária); e-mail, LinkedIn e GitHub (secundárias). Proof: projetos reais com link no ar, cadastrados pelo Andrey em `src/data/projects.ts`. Constraints: lista de projetos variável (1 a dezenas); nenhum número, cliente ou depoimento inventado.

## Direction contract

THESIS: Cada site entregue é uma preamar. A home é a tábua de marés das entregas do Andrey, uma tabela rigorosa de quando cada site entrou no ar, e recusa o portfólio de dev padrão (fundo escuro, "Olá, eu sou", grade de três cards, badges de tecnologia).

OWN-WORLD: Mar de Saquarema como chão: azul-profundo saturado cobrindo a primeira dobra, tons tirados de uma régua de profundidade com 11 passos (nenhum cinza fora dela), espuma clara para as faixas de tabela, laranja de boia de sinalização reservado à ação e ao marcador AGORA. Tipografia Archivo em larguras variáveis: expandida em caixa alta nos títulos, condensada em caixa alta espaçada nos cabeçalhos de coluna, algarismos tabulares de posição fixa. Um único traço de 2px para curva, filetes e bordas. Só o projeto em foco recebe a cor cheia.

STORY: Em 3 segundos o visitante entende: Andrey faz sites para negócios da Região dos Lagos e põe no ar. Ele vê as entregas como marés com data, acredita porque cada linha tem link para o site real, e toca no WhatsApp.

FIRST VIEWPORT: Faixa superior de tábua (nome · Saquarema, RJ à esquerda, navegação à direita) sobre filete. Título expandido em duas linhas, "Sites que entram no ar.", ocupando cerca de 60% da largura; abaixo, uma linha de apoio e o botão laranja "Chamar no WhatsApp" com o secundário "Ver as entregas". A metade inferior é a curva de maré em largura total: cada pico é um projeto (nome + mês/ano + "no ar"), com a linha tracejada AGORA em laranja. A tela fecha na faixa clara de cabeçalho da tábua (PREAMAR · PROJETO · TIPO · SITUAÇÃO), que é o começo da seção seguinte. No celular: título em 3 linhas, CTA em largura total, curva com rolagem horizontal própria e só os 3 picos mais recentes.

Signature interaction: tocar ou passar o mouse num pico acende a linha correspondente da tábua e vice-versa. Motion: a curva se desenha uma vez, da esquerda para a direita, em 1,2s; nada disso acontece com `prefers-reduced-motion`.

FORM: Tábua de Marés de Saquarema, 6ª da minha lista ordenada (1 Placa de obra, 2 Guia comercial, 3 Letreiros pintados, 4 Mapa da linha intermunicipal, 5 Placar de surfe, 6 Tábua de marés, 7 Log de deploy). seed:311b6db483f32969

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises (from the declined challengers)

- Floresta luminescente: só o elemento em foco recebe a cor cheia.
- Xilogravura: a grade da tábua é a keyline fixa; as seções somam camadas sobre ela.
- Linha clara: uma única espessura de traço.
- Nixie: algarismos tabulares em posição fixa.
- Ficha de ampliação: régua de 11 tons de profundidade como único sistema de neutros.

## Unresolved

- Picos usam a data do projeto (mês/ano) informada pelo Andrey; a altura do pico é só desenho, não dado real de maré. Não exibir alturas em metros.
- Lista real de projetos e as datas: o Andrey vai preencher.
