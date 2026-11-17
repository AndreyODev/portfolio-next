import type { CSSProperties } from "react";
import { formatMonth } from "@/lib/date";
import { cn } from "@/lib/cn";
import { NOW_X, tideLayout } from "@/lib/tide";
import type { Project } from "@/types/project";

const STATUS_LABEL = { "no-ar": "no ar", "em-construcao": "em construção" } as const;

/**
 * Curva de maré: cada pico é uma entrega, em ordem de data.
 * O SVG estica na largura; pontos e rótulos são HTML posicionados em %,
 * assim o texto não deforma. No celular a faixa rola na horizontal e
 * começa pelo fim (as entregas mais recentes).
 */
export function TideCurve({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  const { peaks, path } = tideLayout(projects.length);
  const latest = projects.length - 1;

  return (
    <div className="flex flex-row-reverse overflow-x-auto overscroll-x-contain [scrollbar-width:thin]">
      <div
        className="mare-revela relative h-60 w-(--mare-largura) shrink-0 sm:h-64 sm:w-full"
        style={{ "--mare-largura": `${projects.length * 240 + 160}px` } as CSSProperties}
      >
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d={path}
            fill="none"
            stroke="var(--color-mar-3)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol aria-label="Entregas em ordem de data">
          {projects.map((project, i) => {
            const peak = peaks[i];
            const isLatest = i === latest;
            const labelLeft = peak.x > 72;
            return (
              <li
                key={project.slug}
                className="absolute"
                style={{ left: `${peak.x}%`, top: `${peak.y}%` }}
              >
                <a
                  href={`#projeto-${project.slug}`}
                  className={cn(
                    "group absolute flex -translate-y-1/2 items-center gap-3 outline-offset-4",
                    labelLeft ? "right-0 translate-x-[7px] flex-row-reverse text-right" : "-translate-x-[7px]",
                  )}
                >
                  <span
                    className={cn(
                      "size-3.5 shrink-0 rounded-full border-2 transition-colors",
                      isLatest
                        ? "border-mar-0 bg-mar-0"
                        : "border-mar-3 bg-mar-8 group-hover:border-mar-0 group-hover:bg-mar-0",
                    )}
                  />
                  <span className="-translate-y-5 whitespace-nowrap">
                    <span
                      className={cn(
                        "font-condensada block text-[0.95rem] font-bold uppercase tracking-[0.08em] transition-colors",
                        isLatest ? "text-mar-0" : "text-mar-2 group-hover:text-mar-0",
                      )}
                    >
                      {project.title}
                    </span>
                    <span className="block text-sm text-mar-2">
                      {formatMonth(project.date)} · {STATUS_LABEL[project.status]}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>

        <div
          className="absolute inset-y-0 border-l-2 border-dashed border-boia"
          style={{ left: `${NOW_X}%` }}
          aria-hidden="true"
        >
          <span className="font-condensada absolute bottom-2 left-0 bg-boia px-1.5 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-boia-tinta">
            Agora
          </span>
        </div>
      </div>
    </div>
  );
}
