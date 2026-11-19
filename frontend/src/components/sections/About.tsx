import Image from "next/image";
import { Rotulo } from "@/components/ui/Rotulo";
import { about } from "@/data/about";
import { home } from "@/data/home";
import retrato from "../../../public/images/andrey/retrato-frontal.webp";
import s from "./About.module.css";

const t = home.sobre;

/**
 * Sobre: retrato em arco à esquerda; "Quem é o" + "DreyODev" manuscrito, bio e a sequência
 * "Do desenho ao deploy" (numerada: a ordem importa) à direita.
 */
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className={s.sobre}>
      <div className={s.quadro}>
        <span className={`arco ${s.arcoB}`} aria-hidden="true" />

        <figure className={s.retrato}>
          <span className={`arco ${s.arcoA}`} aria-hidden="true" />
          <div className={s.moldura}>
            <Image src={retrato} alt={t.retratoAlt} fill sizes="(min-width: 1024px) 34vw, 80vw" />
          </div>
          <figcaption className={s.legenda}>{t.legenda}</figcaption>
        </figure>

        <div className={s.lado}>
          <Rotulo className={s.rotulo}>{t.rotulo}</Rotulo>
          <h2 id="sobre-titulo" className={s.titulo}>
            {t.titulo} <span className={s.caligrafia}>{t.caligrafia}</span>
          </h2>
          <div className={s.bio}>
            {about.bio.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          <h3 className={s.etapasTitulo}>{t.processoTitulo}</h3>
          <ol className={s.etapas}>
            {about.processo.map((etapa, i) => (
              <li key={etapa.titulo}>
                <span className={s.numero} aria-hidden="true">
                  {i + 1}
                </span>
                <h4>{etapa.titulo}</h4>
                <p>{etapa.texto}</p>
                <small>{etapa.ferramentas}</small>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
