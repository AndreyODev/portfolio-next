import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>
        <nav aria-label="Principal">
          <ul className="flex gap-4 text-sm sm:gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline">
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
