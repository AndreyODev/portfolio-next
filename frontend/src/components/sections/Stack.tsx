import { Rotulo } from "@/components/ui/Rotulo";
import { home } from "@/data/home";
import { stack } from "@/data/stack";
import s from "./Stack.module.css";

const t = home.stack;

/**
 * Stack: as tecnologias do Andrey agrupadas por área, uma linha por área entre fios.
 * O nome de cada tecnologia em Gilda grande é o próprio visual: sem logos, barras nem níveis.
 */
export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-titulo" className={s.stack}>
      <div className={s.quadro}>
        <span className={`arco ${s.arco}`} aria-hidden="true" />

        <div className={s.cab}>
          <Rotulo className={s.rotulo}>{t.rotulo}</Rotulo>
          <h2 id="stack-titulo" className={s.titulo}>
            {t.titulo} <span className={s.caligrafia}>{t.caligrafia}</span>
          </h2>
          <p className={s.intro}>{t.intro}</p>
        </div>

        <ul className={s.areas}>
          {stack.map((grupo, i) => (
            <li key={grupo.area} className={s.area}>
              <div className={s.sobreArea}>
                <h3 id={`stack-area-${i}`} className={s.areaNome}>
                  {grupo.area}
                </h3>
                <p className={s.areaTexto}>{grupo.texto}</p>
              </div>
              <ul className={s.nomes} aria-labelledby={`stack-area-${i}`}>
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
