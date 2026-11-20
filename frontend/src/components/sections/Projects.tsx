import { SetaExterna } from "@/components/ui/Icones";
import { Rotulo } from "@/components/ui/Rotulo";
import { home } from "@/data/home";
import { cadernos, selecao, selecaoVisiveis, series, todosOsRepositorios } from "@/data/repositorios";
import type { Repositorio, Serie, Versao } from "@/types/repositorio";
import s from "./Projects.module.css";

const t = home.projetos;

/** "1" → "01": numeração das versões e da seleção. */
const dois = (n: number) => String(n).padStart(2, "0");

/** "1 projeto", "2 projetos". */
const projetos = (n: number) => (n === 1 ? t.contagem.um : t.contagem.varios);

function Links({ item }: { item: Versao }) {
  return (
    <div className={s.links}>
      {item.demoUrl && (
        <a href={item.demoUrl} target="_blank" rel="noopener" className="link-seta">
          {t.verDemo}
          <span className="sr-only">: {item.title}</span>
          <SetaExterna />
        </a>
      )}
      <a href={item.repoUrl} target="_blank" rel="noopener" className="link-seta">
        {t.verCodigo}
        <span className="sr-only">: {item.title}</span>
        <SetaExterna />
      </a>
    </div>
  );
}

function Tecnologias({ stack }: { stack: string[] }) {
  return (
    <ul className={s.techs} aria-label={t.tecnologias}>
      {stack.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}

/** Série: o mesmo projeto em versões, ligadas por uma linha laranja que continua depois da última. */
function SerieBloco({ serie }: { serie: Serie }) {
  const colunas = Math.min(serie.versoes.length, 4);
  return (
    <article className={s.serie} aria-labelledby={`serie-${serie.slug}`}>
      <p className={s.meta}>
        {t.serie} · {serie.versoes.length} {t.versoes}
      </p>
      <h3 id={`serie-${serie.slug}`} className={s.serieNome}>
        {serie.title}
      </h3>
      <p className={s.serieResumo}>{serie.summary}</p>
      <ol className={s.versoes} style={{ "--n": colunas } as React.CSSProperties}>
        {serie.versoes.map((versao, i) => (
          <li key={versao.slug} className={s.versao}>
            <span className={s.no} aria-hidden="true" />
            <span className={s.num} aria-hidden="true">
              {dois(i + 1)}
            </span>
            <h4 className={s.versaoNome}>{versao.title}</h4>
            <p className={s.versaoTexto}>{versao.summary}</p>
            <Tecnologias stack={versao.stack} />
            <Links item={versao} />
          </li>
        ))}
      </ol>
    </article>
  );
}

/** Linha do sumário: número, nome em Gilda, fio-guia até o tipo; resumo, tecnologias e links. */
function Item({ projeto, n }: { projeto: Repositorio; n: number }) {
  return (
    <li className={s.item}>
      <span className={s.n} aria-hidden="true">
        {dois(n)}
      </span>
      <div>
        <div className={s.linhaNome}>
          <h4 className={s.nome}>{projeto.title}</h4>
          <span className={s.guia} aria-hidden="true" />
          <p className={`${s.meta} ${s.tipo}`}>{projeto.kind}</p>
        </div>
        <div className={s.linhaInfo}>
          <p className={s.resumo}>{projeto.summary}</p>
          <div className={s.lado}>
            {projeto.emConstrucao && (
              <p className={s.status}>
                <i aria-hidden="true" />
                {t.emConstrucao}
              </p>
            )}
            <Tecnologias stack={projeto.stack} />
            <Links item={projeto} />
          </div>
        </div>
      </div>
    </li>
  );
}

/**
 * Projetos ("Código em evolução"): os repositórios do GitHub, publicados ou não.
 * Três níveis de curadoria: séries (a evolução visível), a seleção (sumário) e os cadernos de estudo.
 * Tudo vem de `src/data/repositorios.ts`; o layout se ajusta à quantidade.
 */
export function Projects() {
  const abertos = selecao.slice(0, selecaoVisiveis);
  const fechados = selecao.slice(selecaoVisiveis);

  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className={s.projetos}>
      <div className={s.quadro}>
        <span className={`arco ${s.arco}`} aria-hidden="true" />

        <header className={s.cab}>
          <Rotulo className={s.rotulo}>{t.rotulo}</Rotulo>
          <h2 id="projetos-titulo" className={s.titulo}>
            {t.titulo} <span className={s.caligrafia}>{t.caligrafia}</span>
          </h2>
          <p className={s.intro}>{t.intro}</p>
        </header>

        {series.length > 0 && (
          <div className={s.series}>
            {series.map((serie) => (
              <SerieBloco key={serie.slug} serie={serie} />
            ))}
          </div>
        )}

        {selecao.length > 0 && (
          <div className={s.selecao}>
            <div className={s.sub}>
              <h3 id="projetos-selecao">{t.selecao}</h3>
              <p>
                {dois(selecao.length)} {projetos(selecao.length)}
              </p>
            </div>
            <ol className={s.sumario} aria-labelledby="projetos-selecao">
              {abertos.map((projeto, i) => (
                <Item key={projeto.slug} projeto={projeto} n={i + 1} />
              ))}
            </ol>
            {fechados.length > 0 && (
              <details className={s.mais}>
                <summary>
                  <b aria-hidden="true" />
                  {t.verMais} {fechados.length} {projetos(fechados.length)}
                </summary>
                <ol className={s.sumario} start={selecaoVisiveis + 1}>
                  {fechados.map((projeto, i) => (
                    <Item key={projeto.slug} projeto={projeto} n={selecaoVisiveis + i + 1} />
                  ))}
                </ol>
              </details>
            )}
          </div>
        )}

        <div className={s.cadernos}>
          <div>
            <h3 id="projetos-cadernos" className={s.cadRotulo}>
              {t.cadernos}
            </h3>
            <p className={s.cadTexto}>{t.cadernosTexto}</p>
          </div>
          <ul className={s.cadLista} aria-labelledby="projetos-cadernos">
            {cadernos.map((caderno) => (
              <li key={caderno.repoUrl}>
                <a href={caderno.repoUrl} target="_blank" rel="noopener">
                  {caderno.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={todosOsRepositorios} target="_blank" rel="noopener" className={`link-seta ${s.todos}`}>
            {t.todos}
            <SetaExterna />
          </a>
        </div>
      </div>
    </section>
  );
}
