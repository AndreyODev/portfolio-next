"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { formatMonth } from "@/lib/date";
import type { Project } from "@/types/project";

const STATUS_LABEL = { "no-ar": "No ar", "em-construcao": "Em construção" } as const;

function initials(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[1][0] : title.slice(0, 2)).toUpperCase();
}

/**
 * Fileira de slots das entregas. Escolher um slot seleciona a entrega:
 * o slot ganha o contorno azul duplo e o painel ao lado mostra os dados dela.
 * Slot cheio = no ar; slot só no contorno = em construção.
 */
export function Roster({ projects, className }: { projects: Project[]; className?: string }) {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  if (!project) return null;

  return (
    <div id="entregas" className={cn("scroll-mt-12 border-t-traco border-tinta bg-tinta text-papel", className)}>
      <div className="mx-auto grid max-w-[90rem] gap-x-8 gap-y-4 px-4 py-5 sm:px-6 lg:grid-cols-[auto_auto_1fr] lg:items-center">
        <h2 className="font-rotulo text-sm font-bold uppercase tracking-[0.16em] text-arcade">Entregas</h2>

        <ul className="-mx-1 flex gap-4 overflow-x-auto px-1 py-2" aria-label="Escolha uma entrega">
          {projects.map((p, i) => {
            const isSelected = i === selected;
            const live = p.status === "no-ar";
            return (
              <li key={p.slug} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`${p.title}, ${STATUS_LABEL[p.status]}`}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "font-display grid size-[4.5rem] place-items-center border-traco text-3xl font-black uppercase transition-[outline,box-shadow] sm:size-20",
                    live ? "border-papel bg-papel text-tinta" : "border-papel bg-transparent text-papel",
                    isSelected
                      ? "outline-3 outline-offset-3 outline-selecao shadow-[0_0_0_9px_var(--color-tinta),0_0_0_12px_var(--color-selecao)]"
                      : "hover:outline-3 hover:outline-offset-3 hover:outline-papel",
                  )}
                >
                  {initials(p.title)}
                </button>
              </li>
            );
          })}
        </ul>

        <div aria-live="polite" className="min-w-0 lg:border-l-traco lg:border-grafite lg:pl-8">
          <p className="font-display text-3xl font-black uppercase leading-none">{project.title}</p>
          <p className="font-rotulo mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-papel/80">
            {project.kind} · {STATUS_LABEL[project.status]} · {formatMonth(project.date)}
          </p>
          <p className="mt-2 max-w-[60ch] text-papel/90">{project.summary}</p>
          <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-semibold">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener" className="text-arcade underline">
                Abrir o site
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener" className="text-arcade underline">
                Ver o código
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
