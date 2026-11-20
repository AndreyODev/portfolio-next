/**
 * Informações globais do site: nome, descrição, navegação e redes.
 * Altere aqui e o reflexo aparece em todo o site (metadata, header, footer).
 */
export const siteConfig = {
  name: "Andrey Oliveira",
  /** Marca escrita gigante na abertura (pedido do Andrey). */
  brand: "DreyODev",
  role: "Desenvolvedor full stack",
  /** Assinatura curta acima do nome, no cabeçalho. */
  tagline: "dev full stack",
  pitch: "Faço sites para negócios da Região dos Lagos, do desenho ao deploy.",
  /** Trecho do pitch destacado em laranja no hero. */
  pitchHighlight: "Região dos Lagos",
  description: "Andrey Oliveira faz sites para negócios da Região dos Lagos, do desenho ao deploy.",
  locale: "pt-BR",
  nav: [
    { label: "Entregas", href: "#entregas" },
    { label: "Sobre", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Contato", href: "#contato" },
  ],
  location: "Saquarema, RJ",
  // Contatos públicos autorizados pelo Andrey (ver PRODUCT.md).
  contact: {
    whatsapp: "https://wa.me/5522997568439",
    whatsappLabel: "(22) 99756-8439",
    email: "andreyoliveira72005@gmail.com",
  },
  social: {
    github: "https://github.com/AndreyODev",
    githubLabel: "AndreyODev",
    linkedin: "https://www.linkedin.com/in/andrey-oliveira-dev/",
    linkedinLabel: "andrey-oliveira-dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
