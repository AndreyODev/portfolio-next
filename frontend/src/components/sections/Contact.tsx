import { Rotulo } from "@/components/ui/Rotulo";
import { siteConfig } from "@/config/site";
import { home } from "@/data/home";
import s from "./Contact.module.css";

const t = home.contato;

/**
 * Contato: a única faixa inteira em laranja (o contrapeso ao preto), com a borda superior curva.
 * O WhatsApp é a ação principal; e-mail, LinkedIn e GitHub ficam à direita.
 */
export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className={s.contato}>
      <div className={s.quadro}>
        <span className={`arco ${s.arco} ${s.arcoA}`} aria-hidden="true" />
        <span className={`arco ${s.arco} ${s.arcoB}`} aria-hidden="true" />

        <header className={s.cab}>
          <Rotulo className={s.rotulo}>{t.rotulo}</Rotulo>
          <h2 id="contato-titulo" className={s.titulo}>
            {t.titulo} <span className={s.caligrafia}>{t.caligrafia}</span>
          </h2>
        </header>

        <div className={s.base}>
          <div className={s.acao}>
            <p className={s.chamada}>{t.chamada}</p>
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className={s.botao}>
              {home.acoes.whatsapp}
              <small>{siteConfig.contact.whatsappLabel}</small>
            </a>
          </div>

          <dl className={s.canais}>
            {t.canais.map((canal) => (
              <div key={canal.rotulo}>
                <dt>{canal.rotulo}</dt>
                <dd>
                  <a href={canal.href} {...(canal.externo ? { target: "_blank", rel: "noopener" } : {})}>
                    {canal.valor}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
