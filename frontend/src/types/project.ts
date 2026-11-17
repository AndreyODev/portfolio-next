/**
 * Formato de um projeto do portfólio.
 * Quando houver backend, a API deve devolver objetos neste mesmo formato.
 */
export type ProjectStatus = "no-ar" | "em-construcao";

export type Project = {
  slug: string;
  title: string;
  /** Tipo de entrega, ex.: "Landing page", "Plataforma web". */
  kind: string;
  summary: string;
  /** Mês da entrega no formato AAAA-MM. É o que posiciona o pico na curva. */
  date: string;
  status: ProjectStatus;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};
