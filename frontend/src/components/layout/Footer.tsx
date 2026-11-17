import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8 text-sm">
      <Container className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p>{siteConfig.name}</p>
        <a href={siteConfig.social.github} className="hover:underline" rel="noopener" target="_blank">
          GitHub
        </a>
      </Container>
    </footer>
  );
}
