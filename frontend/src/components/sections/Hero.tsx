import { TideCurve } from "@/components/tide/TideCurve";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { projectsByDate } from "@/data/projects";

/** Primeira dobra: a promessa, a ação e a curva das entregas. */
export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="overflow-hidden pt-12 sm:pt-20">
      <Container>
        <h1
          id="hero-titulo"
          className="font-expandida max-w-[12ch] text-[clamp(2.6rem,8.6vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-balance text-mar-0"
        >
          Sites que entram no ar.
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg text-mar-1 sm:text-xl">
          Faço sites para negócios da Região dos Lagos, do desenho ao deploy.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener"
            className="bg-boia px-7 py-4 text-center text-lg font-bold text-boia-tinta transition-colors hover:bg-boia-claro"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="#entregas"
            className="border-2 border-mar-2 px-7 py-4 text-center text-lg font-bold text-mar-0 transition-colors hover:bg-mar-9"
          >
            Ver as entregas
          </a>
        </div>
      </Container>

      <div className="mt-10 sm:mt-4">
        <TideCurve projects={projectsByDate} />
      </div>
    </section>
  );
}
