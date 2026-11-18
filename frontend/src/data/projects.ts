import type { Project } from "@/types/project";

/**
 * Entregas exibidas na tábua. Para adicionar um projeto, copie um bloco e ajuste.
 * Ordem não importa: o site ordena pela data.
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

/** Mais antigo primeiro (ordem da curva). Empate mantém a ordem do arquivo. */
export const projectsByDate = [...projects].sort((a, b) => a.date.localeCompare(b.date));
