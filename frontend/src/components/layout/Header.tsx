import Link from "next/link";
import { MenuCelular } from "@/components/layout/MenuCelular";
import { siteConfig } from "@/config/site";
import { home } from "@/data/home";

/**
 * Cabeçalho transparente sobre a abertura: assinatura, navegação e o WhatsApp em pílula.
 * No celular, a navegação vira um menu em tela cheia (MenuCelular).
 */
export function Header() {
  return (
    <header className="cabecalho">
      <Link href="/" prefetch={false} className="cabecalho-marca">
        <small>{siteConfig.tagline}</small>
        <b>{siteConfig.name}</b>
      </Link>

      <nav aria-label="Principal" className="cabecalho-nav">
        <ul>
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a href={`/${item.href}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="cabecalho-pilula">
        {home.acoes.whatsappCurto}
        <i aria-hidden="true" />
      </a>

      <MenuCelular />
    </header>
  );
}
