/**
 * Formato de um projeto do portfólio.
 * Quando houver backend, a API deve devolver objetos neste mesmo formato.
 */
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
};
