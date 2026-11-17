import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

/** Bloco de seção da página, com âncora (#id) usada pela navegação. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-20 py-16">
      <Container>
        <h2 id={`${id}-titulo`} className="mb-6 text-2xl font-semibold">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
