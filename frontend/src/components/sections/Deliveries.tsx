import Image from "next/image";
import { SetaExterna } from "@/components/ui/Icones";
import { Rotulo } from "@/components/ui/Rotulo";
import { home } from "@/data/home";
import { projectsRecentFirst } from "@/data/projects";
import { formatMonth } from "@/lib/date";
import type { Project } from "@/types/project";
import s from "./Deliveries.module.css";

const t = home.entregas;

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null;
  return (
    <div className={s.links}>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener" className="link-seta">
          {t.abrirSite}
          <SetaExterna />
        </a>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener" className="link-seta">
          {t.verCodigo}
          <SetaExterna />
        </a>
      )}
    </div>
  );
}

function Status({ project }: { project: Project }) {
  return (
    <p className={project.status === "no-ar" ? s.status : `${s.status} ${s.obra}`}>
      <i aria-hidden="true" />
      {t.status[project.status]}
    </p>
  );
}

/** Projeto com tela: linha editorial. A tela alterna de lado pela posição entre as linhas com tela. */
function Linha({ project, lado }: { project: Project & { image: NonNullable<Project["image"]> }; lado: "esq" | "dir" }) {
  const tela = (
    <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" />
  );
  return (
    <li className={`${s.linha} ${lado === "dir" ? s.dir : ""}`}>
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener" className={s.tela} tabIndex={-1} aria-hidden="true">
          {tela}
        </a>
      ) : (
        <div className={s.tela}>{tela}</div>
      )}
      <div className={s.info}>
        <p className={s.meta}>
          {project.kind} · {formatMonth(project.date)}
        </p>
        <h3 className={s.nome}>{project.title}</h3>
        <p className={s.resumo}>{project.summary}</p>
        <Status project={project} />
        <Links project={project} />
      </div>
    </li>
  );
}

/** Projeto sem tela: faixa tipográfica com o nome vazado. */
function Faixa({ project }: { project: Project }) {
  return (
    <li className={s.faixa}>
      <h3 className={s.nomeVazado}>{project.title}</h3>
      <div className={s.faixaInfo}>
        <p className={s.meta}>
          {project.kind} · {formatMonth(project.date)}
        </p>
        <p className={s.resumo}>{project.summary}</p>
      </div>
      <div className={s.lado}>
        <Status project={project} />
        <Links project={project} />
      </div>
    </li>
  );
}

/**
 * Entregas: cabeçalho monumental ("Sites" + "no ar") e os projetos, do mais recente ao mais antigo.
 * A lista é variável: cada projeto com `image` vira uma linha com a tela, e os sem `image`, uma faixa.
 */
export function Deliveries() {
  const linhas = projectsRecentFirst.reduce<Array<{ project: Project; lado: "esq" | "dir" }>>((acc, project) => {
    const telasAntes = acc.filter((l) => l.project.image).length;
    acc.push({ project, lado: telasAntes % 2 === 0 ? "esq" : "dir" });
    return acc;
  }, []);

  return (
    <section id="entregas" aria-labelledby="entregas-titulo" className={s.entregas}>
      <div className={s.quadro}>
        <span className={`arco ${s.arco}`} aria-hidden="true" />

        <header className={s.cab}>
          <Rotulo className={s.rotulo}>{t.rotulo}</Rotulo>
          <h2 id="entregas-titulo" className={s.titulo}>
            {t.titulo} <span className={s.caligrafia}>{t.caligrafia}</span>
          </h2>
          <p className={s.intro}>{t.intro}</p>
        </header>

        <ol className={s.lista}>
          {linhas.map(({ project, lado }) =>
            project.image ? (
              <Linha key={project.slug} project={{ ...project, image: project.image }} lado={lado} />
            ) : (
              <Faixa key={project.slug} project={project} />
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
