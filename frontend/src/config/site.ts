/**
 * Informações globais do site: nome, descrição, navegação e redes.
 * Altere aqui e o reflexo aparece em todo o site (metadata, header, footer).
 */
export const siteConfig = {
  name: "Andrey Oliveira",
  role: "Desenvolvedor Web",
  description: "Portfólio de Andrey Oliveira — projetos, experiência e contato.",
  locale: "pt-BR",
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],
  social: {
    github: "https://github.com/AndreyODev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
