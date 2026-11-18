import Link from "next/link";
import { siteConfig } from "@/config/site";

/** Faixa preta de navegação da tela de seleção. */
export function Header() {
  return (
    <header className="bg-tinta text-papel">
      <div className="font-rotulo mx-auto flex h-12 max-w-[90rem] items-center justify-between gap-3 px-4 text-sm font-bold uppercase tracking-[0.12em] sm:px-6">
        <Link href="/" className="whitespace-nowrap">
          {siteConfig.name}
        </Link>
        <nav aria-label="Principal">
          <ul className="flex gap-4 sm:gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-arcade hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
