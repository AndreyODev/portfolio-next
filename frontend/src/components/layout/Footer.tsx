import { siteConfig } from "@/config/site";

/** Faixa preta final, a mesma família da navegação. */
export function Footer() {
  return (
    <footer className="bg-tinta text-papel">
      <div className="font-rotulo mx-auto flex max-w-[90rem] flex-col gap-3 px-4 py-6 text-sm font-semibold uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="text-arcade">{siteConfig.brand}</span> · {siteConfig.name} · {siteConfig.location}
        </p>
        <ul className="flex gap-5">
          <li>
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="hover:text-arcade hover:underline">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener" className="hover:text-arcade hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={siteConfig.social.github} target="_blank" rel="noopener" className="hover:text-arcade hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
