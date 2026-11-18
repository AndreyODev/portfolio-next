import { siteConfig } from "@/config/site";

const CANAIS = [
  { rotulo: "E-mail", valor: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, externo: false },
  { rotulo: "LinkedIn", valor: "andrey-oliveira-dev", href: siteConfig.social.linkedin, externo: true },
  { rotulo: "GitHub", valor: "AndreyODev", href: siteConfig.social.github, externo: true },
];

/** Chamada final: a tela de "continuar?" do jogo, com o WhatsApp como opção principal. */
export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-12 bg-arcade">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-10 lg:gap-x-8 lg:py-24">
        <div className="lg:col-span-6">
          <h2
            id="contato-titulo"
            className="font-display text-[clamp(3.25rem,10vw,6rem)] font-black uppercase leading-[0.9] text-balance"
          >
            <span className="inline-block origin-bottom-left -skew-x-[8deg]">
              Próxima fase: <span className="whitespace-nowrap">o seu site.</span>
            </span>
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg sm:text-xl">
            Me conte o que o seu negócio precisa. A conversa começa no WhatsApp.
          </p>
        </div>

        <div className="lg:col-span-4 lg:self-end">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener"
            className="group flex items-center justify-between gap-4 border-traco border-tinta bg-tinta px-6 py-5 text-arcade outline-offset-3 transition-[outline] hover:outline-3 hover:outline-tinta"
          >
            <span>
              <span className="font-rotulo block text-2xl font-bold uppercase tracking-[0.08em]">
                Chamar no WhatsApp
              </span>
              <span className="mt-1 block text-papel">{siteConfig.contact.whatsappLabel}</span>
            </span>
            <svg aria-hidden="true" viewBox="0 0 12 14" className="h-5 w-4 shrink-0 fill-current">
              <path d="M0 0 L12 7 L0 14 Z" />
            </svg>
          </a>

          <dl className="mt-6 border-t-traco border-tinta">
            {CANAIS.map((canal) => (
              <div
                key={canal.rotulo}
                className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b-traco border-tinta py-3"
              >
                <dt className="font-rotulo font-bold uppercase tracking-[0.14em]">{canal.rotulo}</dt>
                <dd className="min-w-0 break-words">
                  <a
                    href={canal.href}
                    {...(canal.externo ? { target: "_blank", rel: "noopener" } : {})}
                    className="font-semibold underline hover:text-grafite"
                  >
                    {canal.valor}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
