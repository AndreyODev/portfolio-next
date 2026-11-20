import type { Project } from "@/types/project";

/**
 * Entregas exibidas na home. Para adicionar um projeto, copie um bloco e ajuste.
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
  {
    slug: "dropaai",
    title: "DropaAI",
    kind: "Plataforma web",
    summary: "Plataforma para a comunidade de Free Fire: recrutamento, equipes e conexão entre jogadores.",
    date: "2026-11",
    status: "em-construcao",
    stack: ["HTML", "CSS", "JavaScript", "Express", "PostgreSQL"],
    repoUrl: "https://github.com/AndreyODev/dropaai",
  },
];

/** Mais recente primeiro. `sort` é estável: empate mantém a ordem do arquivo. */
export const projectsRecentFirst = [...projects].sort((a, b) => b.date.localeCompare(a.date));
