import { siteConfig } from "@/config/site";

/**
 * Textos da home que não são dados do Andrey (esses ficam em config/site.ts e data/).
 * Cada seção tem um rótulo com fios, um título em Gilda e uma caligrafia em Allura.
 */
export const home = {
  acoes: {
    whatsapp: "Chamar no WhatsApp",
    whatsappCurto: "WhatsApp",
    menu: "Menu",
    menuAbrir: "Abrir o menu",
    menuFechar: "Fechar o menu",
  },
  hero: {
    rotulo: siteConfig.name,
    caligrafia: "full stack",
    descer: ["Ver as", "entregas"],
  },
  entregas: {
    rotulo: "Entregas",
    titulo: "Sites",
    caligrafia: "no ar",
    intro: "Cada projeto tem o site publicado ou o código aberto no GitHub.",
    abrirSite: "Abrir o site",
    verCodigo: "Ver o código",
    status: { "no-ar": "No ar", "em-construcao": "Em construção" },
  },
  sobre: {
    rotulo: "Sobre",
    titulo: "Quem é o",
    caligrafia: siteConfig.brand,
    legenda: `${siteConfig.name} · ${siteConfig.location}`,
    retratoAlt: "Andrey Oliveira, de camiseta branca, olhando para a câmera.",
    processoTitulo: "Do desenho ao deploy",
  },
  stack: {
    rotulo: "Stack",
    titulo: "Ferramentas",
    caligrafia: "de trabalho",
    intro: "As tecnologias que eu uso para desenhar, construir e publicar cada projeto.",
  },
  contato: {
    rotulo: "Contato",
    titulo: "Próxima fase:",
    caligrafia: "o seu site.",
    chamada: "Me conte o que o seu negócio precisa. A conversa começa no WhatsApp.",
    canais: [
      {
        rotulo: "E-mail",
        valor: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
        externo: false,
      },
      { rotulo: "LinkedIn", valor: siteConfig.social.linkedinLabel, href: siteConfig.social.linkedin, externo: true },
      { rotulo: "GitHub", valor: siteConfig.social.githubLabel, href: siteConfig.social.github, externo: true },
    ],
  },
  rodape: {
    links: [
      { label: "WhatsApp", href: siteConfig.contact.whatsapp },
      { label: "LinkedIn", href: siteConfig.social.linkedin },
      { label: "GitHub", href: siteConfig.social.github },
    ],
  },
  naoEncontrada: {
    titulo: "Página não encontrada",
    texto: "Esse endereço não existe. Volte para o início.",
    voltar: "Voltar para o início",
  },
} as const;
