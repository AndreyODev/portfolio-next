import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

/** Faixa de cabeçalho da tábua: quem, onde e para onde ir. */
export function Header() {
  return (
    <header className="border-b-2 border-mar-5">
      <Container className="font-condensada flex h-14 items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.1em] sm:text-sm sm:tracking-[0.14em]">
        <Link href="/" className="whitespace-nowrap text-mar-0">
          {siteConfig.name}
          <span className="hidden text-mar-2 sm:inline"> · {siteConfig.location}</span>
        </Link>
        <nav aria-label="Principal">
          <ul className="flex gap-3 sm:gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-mar-1 hover:text-mar-0 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
