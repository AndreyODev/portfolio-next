/**
 * Formatos da seção Projetos ("Código em evolução"): repositórios do GitHub, publicados ou não.
 * Os projetos publicados com a tela do site ficam nas Entregas (`types/project.ts`).
 */

/** Um repositório da seleção. Texto e tecnologias tirados do README ou do código, nunca supostos. */
export type Repositorio = {
  slug: string;
  title: string;
  /** Tipo do projeto, ex.: "API REST", "Sistema web", "Interface". */
  kind: string;
  summary: string;
  stack: string[];
  repoUrl: string;
  /** Demonstração publicada. Só quando existir de verdade; sem ela, o link não aparece. */
  demoUrl?: string;
  /** Projeto ainda em construção (mostra o status com o círculo vazado). */
  emConstrucao?: boolean;
};

/** Uma versão dentro de uma série: o mesmo problema resolvido de novo. */
export type Versao = Pick<Repositorio, "slug" | "title" | "summary" | "stack" | "repoUrl" | "demoUrl">;

/** O mesmo projeto refeito em versões. A linha laranja liga as versões na ordem do arquivo. */
export type Serie = {
  slug: string;
  title: string;
  summary: string;
  versoes: Versao[];
};

/** Repositório de exercícios e anotações (aparece só como um link no índice de cadernos). */
export type Caderno = {
  label: string;
  repoUrl: string;
};
