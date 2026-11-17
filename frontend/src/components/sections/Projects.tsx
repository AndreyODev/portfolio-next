import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { formatMonth } from "@/lib/date";

const STATUS_LABEL = { "no-ar": "No ar", "em-construcao": "Em construção" } as const;

const COLUNAS = "sm:grid-cols-[7rem_1fr_11rem_9rem]";

/** A tábua das entregas: uma linha por projeto, a mais recente no topo. */
export function Projects() {
  const rows = [...projects].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="entregas" aria-labelledby="entregas-titulo" className="scroll-mt-16 bg-mar-0 text-mar-9">
      <Container>
        <h2
          id="entregas-titulo"
          className="font-condensada border-b-2 border-mar-9 py-4 text-sm font-bold uppercase tracking-[0.14em] sm:sr-only"
        >
          Entregas
        </h2>
        <div
          aria-hidden="true"
          className={`font-condensada hidden border-b-2 border-mar-9 py-4 text-sm font-bold uppercase tracking-[0.14em] sm:grid ${COLUNAS}`}
        >
          <span>Preamar</span>
          <span>Projeto</span>
          <span>Tipo</span>
          <span>Situação</span>
        </div>

        <ol>
          {rows.map((project) => (
            <li
              key={project.slug}
              id={`projeto-${project.slug}`}
              className={`grid scroll-mt-20 gap-x-6 gap-y-1 border-b-2 border-mar-2 py-6 transition-colors target:bg-mar-1 hover:bg-mar-1 sm:items-baseline ${COLUNAS}`}
            >
              <span className="text-sm font-bold text-mar-7">{formatMonth(project.date)}</span>
              <div>
                <h3 className="font-expandida text-xl font-extrabold uppercase">{project.title}</h3>
                <p className="mt-1 max-w-[60ch] text-mar-8">{project.summary}</p>
                <p className="mt-3 flex flex-wrap gap-4 text-sm font-bold">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener" className="underline hover:text-mar-6">
                      Abrir o site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener" className="underline hover:text-mar-6">
                      Ver o código
                    </a>
                  )}
                </p>
              </div>
              <span className="text-mar-8">{project.kind}</span>
              <span className="font-condensada text-sm font-bold uppercase tracking-[0.14em]">
                {STATUS_LABEL[project.status]}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
