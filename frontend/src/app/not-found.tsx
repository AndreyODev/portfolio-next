import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

/** 404: a tela de fim de jogo, com o caminho de volta. */
export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100svh-7.5rem)] items-center bg-arcade">
      <div className="mx-auto w-full max-w-[90rem] px-4 py-20 sm:px-6 sm:py-28">
        <p aria-hidden="true" className="font-display text-[clamp(7rem,30vw,16rem)] font-black leading-[0.8]">
          <span className="inline-block -skew-x-[8deg]">404</span>
        </p>
        <h1 className="font-display mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-black uppercase leading-[0.9]">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-[44ch] text-lg">Esse endereço não existe. Volte para o início e escolha outra fase.</p>
        <Link
          href="/"
          className="font-rotulo mt-8 inline-flex items-center gap-3 bg-tinta px-6 py-4 text-lg font-bold uppercase tracking-[0.08em] text-arcade outline-offset-3 hover:outline-3 hover:outline-tinta"
        >
          <svg aria-hidden="true" viewBox="0 0 12 14" className="h-3.5 w-3 rotate-180 fill-current">
            <path d="M0 0 L12 7 L0 14 Z" />
          </svg>
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
