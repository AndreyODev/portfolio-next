/**
 * Stack do Andrey: as tecnologias que ele usa, agrupadas por área (lista confirmada por ele em 2026-11-20).
 * Só fatos: sem nível, porcentagem, anos de uso ou logos.
 * Para incluir uma tecnologia, acrescente o nome no grupo certo; para uma área nova, um objeto novo.
 * O layout se ajusta à quantidade.
 */
export const stack = [
  {
    area: "Front-end",
    texto: "O que o visitante vê e usa, no celular e no computador.",
    itens: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    area: "Back-end",
    texto: "As APIs e as regras que funcionam por trás das páginas.",
    itens: ["Express", "FastAPI"],
  },
  {
    area: "Banco de dados",
    texto: "Onde ficam guardados cadastros, pedidos e conteúdos.",
    itens: ["PostgreSQL", "MongoDB"],
  },
  {
    area: "Infra e versionamento",
    texto: "O projeto rodando igual em qualquer máquina e o histórico de cada mudança.",
    itens: ["Docker", "Git"],
  },
  {
    area: "Design e organização",
    texto: "As telas desenhadas antes do código e as tarefas em ordem.",
    itens: ["Figma", "Trello"],
  },
] as const;
