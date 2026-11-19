import type { Metadata, Viewport } from "next";
import { Gilda_Display, Jost } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Fontes baixadas no build e servidas pelo próprio site (sem CDN em tempo de execução).
// A Allura (caligrafias) só existe na home: fica em lib/fonts.ts para não ser pré-carregada nas outras rotas.
const gilda = Gilda_Display({ variable: "--font-gilda", subsets: ["latin"], weight: "400" });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: { default: `${siteConfig.brand} · ${siteConfig.name}`, template: `%s | ${siteConfig.brand}` },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.social.github }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} · ${siteConfig.name}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  colorScheme: "dark",
};

/*
 * A abertura do hero roda uma vez por visita: a partir da segunda página vista na mesma aba,
 * <html data-visto> desliga a animação. Sem JS (ou sem sessionStorage), tudo aparece pronto.
 */
const marcaVisita = `try{if(sessionStorage.getItem("hero-visto"))document.documentElement.dataset.visto="";else sessionStorage.setItem("hero-visto","1")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${gilda.variable} ${jost.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: marcaVisita }} />
      </head>
      <body className="relative flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
