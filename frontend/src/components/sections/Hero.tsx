import Image from "next/image";
import { Roster } from "@/components/sections/Roster";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import retrato from "../../../public/images/andrey/retrato-recorte.webp";

const FICHA = [
  { campo: "Nome", valor: siteConfig.name },
  { campo: "Classe", valor: siteConfig.role },
  { campo: "Base", valor: siteConfig.location },
];

/**
 * Abertura: tela de seleção de personagem.
 * Celular: nome, retrato, cartão e slots em fluxo.
 * Desktop (lg): tudo num palco de altura de tela, com o retrato à frente do nome.
 */
export function Hero() {
  const recentes = [...projects].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section aria-labelledby="hero-titulo" className="relative isolate overflow-hidden bg-arcade">
      <h1 id="hero-titulo" className="sr-only">
        {siteConfig.name}, o {siteConfig.brand}: {siteConfig.role.toLowerCase()}. {siteConfig.pitch}
      </h1>

      <div className="relative mx-auto max-w-[90rem] lg:h-[calc(100svh-3rem)] lg:min-h-[46rem] lg:max-h-[62rem]">
        {/* Palco: nome gigante, painel de seleção e retrato */}
        <div className="relative h-[124vw] max-h-[40rem] overflow-hidden lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-0 lg:h-auto lg:max-h-none">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[18%] w-[64%] -skew-x-12 bg-selecao lg:left-[46%] lg:w-[30%]"
          />
          <p
            aria-hidden="true"
            className="nome-entra font-display absolute inset-x-0 top-[2%] select-none text-center text-[23.5vw] font-black uppercase leading-[0.8] tracking-[-0.01em] text-tinta lg:top-[3%] lg:text-[min(23vw,34svh)]"
          >
            <span className="inline-block -skew-x-[8deg]">{siteConfig.brand}</span>
          </p>
          <Image
            src={retrato}
            alt="Andrey Oliveira, de camiseta branca, olhando para a câmera."
            priority
            sizes="(min-width: 1024px) 38vw, 90vw"
            className="retrato-adesivo absolute -bottom-1 left-1/2 h-[87%] w-auto max-w-none -translate-x-1/2 lg:left-[61%] lg:bottom-[6rem] lg:h-[76%]"
          />
        </div>

        {/* Cartão do jogador */}
        <div className="relative z-10 mx-4 -mt-10 border-traco border-tinta bg-papel p-5 sm:mx-6 sm:p-6 lg:absolute lg:bottom-[11rem] lg:left-6 lg:mx-0 lg:mt-0 lg:w-[min(30rem,36%)] xl:left-[max(1.5rem,calc((100%-84rem)/2))]">
          <dl className="font-rotulo grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-lg uppercase">
            {FICHA.map(({ campo, valor }) => (
              <div key={campo} className="contents">
                <dt className="font-bold tracking-[0.14em] text-grafite">{campo}</dt>
                <dd className="font-bold tracking-[0.04em]">{valor}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 border-t-traco border-tinta pt-4 text-lg leading-snug">{siteConfig.pitch}</p>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener"
            className="font-rotulo mt-5 flex items-center justify-center gap-3 bg-tinta px-6 py-4 text-xl font-bold uppercase tracking-[0.08em] text-arcade transition-[outline] hover:outline-3 hover:outline-offset-3 hover:outline-tinta"
          >
            <svg aria-hidden="true" viewBox="0 0 12 14" className="h-3.5 w-3 fill-current">
              <path d="M0 0 L12 7 L0 14 Z" />
            </svg>
            Chamar no WhatsApp
          </a>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-semibold">
            <a href={`mailto:${siteConfig.contact.email}`} className="underline">
              E-mail
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener" className="underline">
              LinkedIn
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener" className="underline">
              GitHub
            </a>
          </p>
        </div>

        <Roster projects={recentes} className="relative z-10 mt-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0" />
      </div>
    </section>
  );
}
