import Image from "next/image";
import { about } from "@/data/about";
import trabalhando from "../../../public/images/andrey/trabalhando.webp";

/**
 * Sobre: ficha do jogador + lista de golpes ("do desenho ao deploy").
 * Texto à esquerda, foto real de trabalho numa moldura inclinada que sangra à direita.
 */
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-12 overflow-x-clip bg-papel">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-10 lg:gap-x-8 lg:py-24">
        <div className="lg:col-span-5 lg:self-center">
          <h2
            id="sobre-titulo"
            className="font-display text-[clamp(3rem,9vw,6rem)] font-black uppercase leading-[0.92]"
          >
            Quem é o DreyODev
          </h2>
          <div className="mt-6 max-w-[56ch] space-y-4 text-lg leading-relaxed sm:text-xl">
            {about.bio.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>
        </div>

        <div className="relative px-3 lg:col-span-5 lg:px-6">
          <div className="relative mx-auto aspect-[4/5] max-w-md -skew-x-6 overflow-hidden border-traco border-tinta bg-tinta lg:max-w-none lg:aspect-square">
            <Image
              src={trabalhando}
              alt="Andrey sentado diante de um monitor e de um notebook com código aberto."
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="h-full w-full scale-110 skew-x-6 object-cover object-[50%_35%]"
            />
          </div>
        </div>

        <div className="lg:col-span-10">
          <h3 className="font-display border-b-traco border-tinta pb-4 text-[clamp(2.25rem,5vw,3rem)] font-black uppercase leading-none">
            Do desenho ao deploy
          </h3>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {about.processo.map((etapa, i) => (
              <li
                key={etapa.titulo}
                className="border-b-traco border-tinta py-6 sm:pr-6 lg:border-b-0 lg:border-r-traco lg:pl-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="font-display flex items-baseline gap-3 text-4xl font-black uppercase leading-none">
                  <span className="text-transparent [-webkit-text-stroke:2px_var(--color-tinta)]">{i + 1}</span>
                  {etapa.titulo}
                </p>
                <p className="mt-3 text-lg">{etapa.texto}</p>
                <p className="font-rotulo mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-grafite">
                  {etapa.ferramentas}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
