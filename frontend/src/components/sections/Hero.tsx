import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

/** Primeira dobra. Estrutura provisória: o visual será definido na etapa de design. */
export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <p className="text-sm uppercase tracking-wide opacity-70">{siteConfig.role}</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{siteConfig.name}</h1>
        <p className="mt-4 max-w-xl opacity-80">{siteConfig.description}</p>
      </Container>
    </section>
  );
}
