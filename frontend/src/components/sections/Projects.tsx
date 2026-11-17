import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="rounded-lg border border-foreground/10 p-5">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm opacity-80">{project.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded bg-foreground/5 px-2 py-1">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
