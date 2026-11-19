"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { home } from "@/data/home";

/**
 * Menu do celular: botão de 3 traços que abre uma sobreposição preta em tela cheia.
 * Esc fecha, o foco fica preso dentro enquanto aberto e volta ao botão ao fechar.
 */
export function MenuCelular() {
  const [aberto, setAberto] = useState(false);
  const botao = useRef<HTMLButtonElement>(null);
  const painel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const el = painel.current;
    const focaveis = () => Array.from(el?.querySelectorAll<HTMLElement>("a, button") ?? []);
    focaveis()[0]?.focus();
    document.documentElement.style.overflow = "hidden";

    function aoTeclar(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const lista = focaveis();
      const primeiro = lista[0];
      const ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo?.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro?.focus();
      }
    }

    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.documentElement.style.overflow = "";
    };
  }, [aberto]);

  function fechar() {
    setAberto(false);
    botao.current?.focus();
  }

  return (
    <>
      <button
        ref={botao}
        type="button"
        className="menu-botao"
        aria-expanded={aberto}
        aria-controls="menu-celular"
        aria-label={home.acoes.menuAbrir}
        onClick={() => setAberto(true)}
      >
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
      </button>

      <div
        ref={painel}
        id="menu-celular"
        role="dialog"
        aria-modal="true"
        aria-label={home.acoes.menu}
        className="menu-painel"
        hidden={!aberto}
      >
        <button type="button" className="menu-fechar" aria-label={home.acoes.menuFechar} onClick={fechar}>
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </button>
        <nav aria-label="Principal (celular)">
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={`/${item.href}`} onClick={() => setAberto(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener" className="btn-laranja menu-whats">
          {home.acoes.whatsapp}
        </a>
      </div>
    </>
  );
}
