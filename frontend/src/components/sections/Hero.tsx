import type { CSSProperties } from "react";
import Image from "next/image";
import { SetaBaixo } from "@/components/ui/Icones";
import { Rotulo } from "@/components/ui/Rotulo";
import { siteConfig } from "@/config/site";
import { home } from "@/data/home";
import foto from "../../../public/images/andrey/trabalhando-hero.webp";
import pessoa from "../../../public/images/andrey/trabalhando-hero-pessoa.webp";
import s from "./Hero.module.css";

/** As duas camadas da foto precisam escolher o mesmo arquivo do srcset para não desalinharem. */
const SIZES = "(min-width: 1024px) 64vw, 100vw";

/** Separa o trecho destacado do pitch ("Região dos Lagos") para pintá-lo de laranja. */
function partesDoPitch() {
  const { pitch, pitchHighlight } = siteConfig;
  const i = pitch.indexOf(pitchHighlight);
  if (i < 0) return { antes: pitch, destaque: "", depois: "" };
  return { antes: pitch.slice(0, i), destaque: pitchHighlight, depois: pitch.slice(i + pitchHighlight.length) };
}

/**
 * Abertura: DREYODEV monumental sangrando nas bordas, com a cabeça do Andrey (recorte alinhado
 * pixel a pixel à foto) cobrindo a base das letras. Camadas, de baixo para cima: foto, crista,
 * véu, arcos, nome, recorte, textos e a borda curva. Medidas do quadro de 1920x1080 em Hero.module.css.
 */
export function Hero() {
  const letras = Array.from(siteConfig.brand.toUpperCase());
  const { antes, destaque, depois } = partesDoPitch();

  return (
    <section aria-labelledby="hero-titulo" className={s.hero}>
      <h1 id="hero-titulo" className="sr-only">
        {siteConfig.name}, o {siteConfig.brand}: {siteConfig.role.toLowerCase()}. {siteConfig.pitch}
      </h1>

      <div className={s.veu} aria-hidden="true" />

      <div className={s.palco}>
        <div className={s.foto}>
          <Image
            src={foto}
            alt=""
            fill
            sizes={SIZES}
            loading="eager"
            fetchPriority="high"
            className={s.imagem}
          />
        </div>
        <div className={s.crista} aria-hidden="true" />
        <span className={`${s.orbita} ${s.orbitaA}`} aria-hidden="true" />
        <span className={`${s.orbita} ${s.orbitaB}`} aria-hidden="true" />

        <Rotulo className={`hero-anim ${s.rotulo}`}>{home.hero.rotulo}</Rotulo>

        <p className={s.nome} aria-hidden="true">
          {letras.map((letra, i) => (
            <span key={i} className={`hero-anim ${s.letra}`} style={{ "--i": i } as CSSProperties}>
              {letra}
            </span>
          ))}
        </p>

        <div className={s.pessoa}>
          <Image
            src={pessoa}
            alt=""
            fill
            sizes={SIZES}
            loading="eager"
            fetchPriority="high"
            className={s.imagem}
          />
        </div>

        <p className={`hero-anim ${s.caligrafia}`} aria-hidden="true">
          {home.hero.caligrafia}
        </p>

        <p className={`hero-anim ${s.apoio}`} aria-hidden="true">
          {antes}
          {destaque && <em>{destaque}</em>}
          {depois}
        </p>

        <div className={s.acoes}>
          <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className={`btn-laranja hero-anim ${s.whats}`}>
            {home.acoes.whatsapp}
          </a>
          <a href="#entregas" className={s.descer}>
            <span className={`hero-anim ${s.circulo}`}>
              <SetaBaixo className={s.seta} />
            </span>
            <span>
              {home.hero.descer[0]}
              <br />
              {home.hero.descer[1]}
            </span>
          </a>
        </div>
      </div>

      <div className={s.borda} aria-hidden="true" />
    </section>
  );
}
