import type { Project } from "@/types/project";

/**
 * Entregas exibidas na home: projetos concluídos e publicados. Repositórios que não estão no ar
 * (estudos, faculdade, projetos em construção) vão para `repositorios.ts`, na seção Projetos.
 * Para adicionar uma entrega, copie um bloco e ajuste.
 * O site ordena pela data (mais recente primeiro); empate mantém a ordem do arquivo.
 * Com `image`, o projeto vira uma linha com a tela; sem, uma faixa tipográfica.
 *
 * `date` abaixo = mês de criação do repositório no GitHub. Ajuste se o site
 * entrou no ar em outro mês.
 */
export const projects: Project[] = [
  {
    slug: "estrela-grill",
    title: "Estrela Grill",
    kind: "Landing page",
    summary: "Site da churrascaria Estrela Grill.",
    date: "2026-11",
    status: "no-ar",
    stack: ["JavaScript"],
    repoUrl: "https://github.com/AndreyODev/estrela-grill-churrascaria",
    liveUrl: "https://estrela-grill-churrascaria-psi.vercel.app",
    image: {
      src: "/images/entregas/tela-estrela-grill.webp",
      alt: "Tela inicial do site da Estrela Grill: espeto de carne e o título Sinta o sabor da brasa.",
    },
  },
  {
    slug: "sushi-vaz",
    title: "Sushi Vaz",
    kind: "Landing page",
    summary: "Site do restaurante Sushi Vaz.",
    date: "2026-11",
    status: "no-ar",
    stack: ["TypeScript"],
    repoUrl: "https://github.com/AndreyODev/landing-page-sushi-vaz",
    liveUrl: "https://landing-page-sushi-vaz.vercel.app",
    image: {
      src: "/images/entregas/tela-sushi-vaz.webp",
      alt: "Tela inicial do site do Sushi Vaz: título Deixe com o chef e uma peça de sushi.",
    },
  },
];

/** Mais recente primeiro. `sort` é estável: empate mantém a ordem do arquivo. */
export const projectsRecentFirst = [...projects].sort((a, b) => b.date.localeCompare(a.date));
