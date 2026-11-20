import type { Caderno, Repositorio, Serie } from "@/types/repositorio";

/*
 * Seção Projetos ("Código em evolução"): a curadoria dos repositórios do GitHub.
 * A ordem do arquivo é a ordem na página. As datas de criação no GitHub não são usadas:
 * vários repositórios foram enviados de uma vez e a data não diz quando o projeto foi feito.
 *
 * Só fatos do README ou do código. Para incluir um projeto, copie um bloco e ajuste;
 * repositório sem README entra só com uma descrição confirmada pelo Andrey.
 * Textos revisados a partir dos READMEs em 2026-11-20.
 */

const gh = (repo: string) => `https://github.com/AndreyODev/${repo}`;

/** Séries: o mesmo projeto refeito. As versões vão da primeira à mais recente. */
export const series: Serie[] = [
  {
    slug: "chamados",
    title: "Chamados",
    summary: "Um sistema de chamados de suporte refeito três vezes, da lista guardada na memória ao banco PostgreSQL.",
    versoes: [
      {
        slug: "api-chamados",
        title: "API em memória",
        summary:
          "A primeira API, feita numa aula de Laboratório de Programação Full Stack: cadastra e consulta chamados guardados na memória.",
        stack: ["FastAPI", "Pydantic", "Uvicorn"],
        repoUrl: gh("api-chamados"),
      },
      {
        slug: "formulario-fastapi-pydantic-sqlite",
        title: "Formulário e SQLite",
        summary: "Um formulário no navegador envia os chamados para a API, que valida os campos e salva em SQLite.",
        stack: ["JavaScript", "FastAPI", "Pydantic", "SQLite"],
        repoUrl: gh("formulario-fastapi-pydantic-sqlite"),
      },
      {
        slug: "projeto-chamados",
        title: "Sistema em equipe",
        summary: "Planejado com mais quatro colegas: arquitetura, modelo de dados e migration em PostgreSQL.",
        stack: ["Python", "PostgreSQL", "SQL"],
        repoUrl: gh("projeto-chamados"),
      },
    ],
  },
  {
    slug: "filmes",
    title: "Catálogo de filmes",
    summary: "A mesma API de filmes, com FastAPI e MongoDB, escrita em três versões.",
    versoes: [
      {
        slug: "fastapi-mongodb-docker",
        title: "Em contêiner",
        summary: "A API de filmes com FastAPI e MongoDB rodando em Docker.",
        stack: ["FastAPI", "MongoDB", "Docker"],
        repoUrl: gh("fastapi-mongodb-docker"),
      },
      {
        slug: "api-filmes-fastapi",
        title: "Em camadas, com testes",
        summary: "Rotas, serviços e repositórios separados, e testes do cadastro à exclusão de um filme.",
        stack: ["FastAPI", "PyMongo", "MongoDB", "pytest"],
        repoUrl: gh("api-filmes-fastapi"),
      },
      {
        slug: "cine-movie",
        title: "Cine Movie",
        summary: "A API organizada com Docker Compose e documentada em português e inglês.",
        stack: ["FastAPI", "MongoDB", "Docker Compose"],
        repoUrl: gh("cine-movie"),
      },
    ],
  },
];

/** Seleção do GitHub: os projetos avulsos, do mais relevante para o menos. */
export const selecao: Repositorio[] = [
  {
    slug: "sistema-gestao-materiais-construcao",
    title: "Gestão de Materiais",
    kind: "API REST",
    summary:
      "Fornecedores, pedidos de compra e estoque de obra, com regras que impedem estoque negativo e recebimento duplicado.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker", "Pytest"],
    repoUrl: gh("sistema-gestao-materiais-construcao"),
  },
  {
    slug: "reservas-laboratorios",
    title: "Reservas de Laboratórios",
    kind: "Sistema web",
    summary:
      "Reservas feitas pelo navegador; a API não deixa dois agendamentos ativos no mesmo laboratório, data e turno.",
    stack: ["JavaScript", "FastAPI", "Pydantic", "SQLite", "Pytest"],
    repoUrl: gh("reservas-laboratorios"),
  },
  {
    slug: "dropaai",
    title: "DropaAI",
    kind: "Plataforma web",
    summary:
      "Plataforma para a comunidade de Free Fire: recrutamento, equipes e conexão entre jogadores. Hoje está na fase de estrutura e documentação.",
    stack: ["HTML", "CSS", "JavaScript", "Express", "PostgreSQL"],
    repoUrl: gh("dropaai"),
    emConstrucao: true,
  },
  {
    slug: "gerenciamento-produtos",
    title: "Gerenciamento de Produtos",
    kind: "API REST",
    summary: "Cadastro de produtos com filtro de ativos, paginação e validação, organizado em camadas e com testes.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker", "Pytest"],
    repoUrl: gh("gerenciamento-produtos"),
  },
  {
    slug: "cine-anime",
    title: "CineAnime",
    kind: "Interface",
    summary:
      "Carrossel de animes em que o fundo e as informações mudam a cada título, com busca por sugestões e sem back-end.",
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: gh("cine-anime"),
  },
  {
    slug: "mural-avisos-academicos",
    title: "Mural de Avisos",
    kind: "API · em grupo",
    summary: "API feita em grupo para ligar um mural de avisos acadêmicos a um front-end fornecido pela disciplina.",
    stack: ["Python", "FastAPI", "Pydantic"],
    repoUrl: gh("mural-avisos-academicos"),
  },
];

/** Quantos projetos da seleção aparecem abertos; os seguintes ficam em "Ver mais". */
export const selecaoVisiveis = 6;

/** Cadernos de estudo: exercícios e anotações, listados só pelo nome. */
export const cadernos: Caderno[] = [
  { label: "Python", repoUrl: gh("python-studies") },
  { label: "Java", repoUrl: gh("java-studies") },
  { label: "C++", repoUrl: gh("cpp-studies") },
  { label: "Bancos relacionais", repoUrl: gh("relational-database-studies") },
  { label: "Desenvolvimento web", repoUrl: gh("web-development-studies") },
  { label: "Inglês", repoUrl: gh("english-journey") },
];

/** Todo o resto continua no GitHub. */
export const todosOsRepositorios = "https://github.com/AndreyODev?tab=repositories";
