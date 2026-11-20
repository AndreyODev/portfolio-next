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
  /** Mês da entrega no formato AAAA-MM. O mais recente aparece primeiro. */
  date: string;
  status: ProjectStatus;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  /**
   * Captura de tela do site (1440x900, em public/images/entregas/).
   * Com imagem: linha editorial com a tela. Sem imagem: faixa tipográfica.
   */
  image?: { src: string; alt: string };
};
