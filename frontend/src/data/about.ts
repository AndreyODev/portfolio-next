/**
 * Textos da seção Sobre. Só fatos confirmados (perfil do GitHub e projetos).
 * Edite à vontade: o layout se ajusta ao tamanho do texto.
 */
export const about = {
  bio: [
    "Sou o Andrey Oliveira, o DreyODev. Estudo Engenharia de Software e moro em Saquarema, na Região dos Lagos.",
    "Faço sites e sistemas web de ponta a ponta: penso a página, escrevo o front-end e o back-end, monto o banco de dados e coloco tudo no ar.",
  ],
  /** "Do desenho ao deploy": a ordem importa, por isso é numerada. */
  processo: [
    {
      titulo: "Desenho",
      texto: "A página pensada primeiro para o celular, a partir do que o negócio precisa mostrar.",
      ferramentas: "HTML, CSS, Tailwind",
    },
    {
      titulo: "Front-end",
      texto: "A interface que o cliente do seu negócio vai usar, rápida e fácil de ler.",
      ferramentas: "React, Next.js, TypeScript, JavaScript",
    },
    {
      titulo: "Back-end e banco",
      texto: "Formulários, cadastros e painéis quando o site precisa guardar dados.",
      ferramentas: "Node.js, Express, Python, FastAPI, PostgreSQL",
    },
    {
      titulo: "No ar",
      texto: "Publicação com domínio e hospedagem, e o site funcionando de verdade.",
      ferramentas: "Vercel, Render, Supabase",
    },
  ],
} as const;
