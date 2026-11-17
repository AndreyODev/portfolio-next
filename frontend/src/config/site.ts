/**
 * Informações globais do site: nome, descrição, navegação e redes.
 * Altere aqui e o reflexo aparece em todo o site (metadata, header, footer).
 */
export const siteConfig = {
  name: "Andrey Oliveira",
  role: "Desenvolvedor Web",
  description: "Andrey Oliveira faz sites para negócios da Região dos Lagos, do desenho ao deploy.",
  locale: "pt-BR",
  nav: [
    { label: "Entregas", href: "#entregas" },
    { label: "Sobre", href: "#sobre" },
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
    linkedin: "https://www.linkedin.com/in/andrey-oliveira-dev/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
