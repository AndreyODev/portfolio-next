import type { Metadata } from "next";
import Link from "next/link";
import { Rotulo } from "@/components/ui/Rotulo";
import { home } from "@/data/home";

export const metadata: Metadata = {
  title: home.naoEncontrada.titulo,
};

/** 404: preto, o número monumental em Gilda e o caminho de volta em laranja. */
export default function NotFound() {
  const t = home.naoEncontrada;
  return (
    <section className="nao-encontrada">
      <div className="nao-encontrada-quadro">
        <Rotulo>404</Rotulo>
        <h1>{t.titulo}</h1>
        <p>{t.texto}</p>
        {/* Sem prefetch: o da home traria CSS que esta página não usa (aviso no console). */}
        <Link href="/" prefetch={false} className="btn-laranja">
          {t.voltar}
        </Link>
      </div>
    </section>
  );
}
