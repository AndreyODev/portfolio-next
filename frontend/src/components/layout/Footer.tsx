import { siteConfig } from "@/config/site";
import { home } from "@/data/home";

/** Rodapé em preto-2: marca, nome e local à esquerda; WhatsApp, LinkedIn e GitHub à direita. */
export function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-quadro">
        <p>
          <b>{siteConfig.brand}</b>
          <span>
            {siteConfig.name} · {siteConfig.location}
          </span>
        </p>
        <ul>
          {home.rodape.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
