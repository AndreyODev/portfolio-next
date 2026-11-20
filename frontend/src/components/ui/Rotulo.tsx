import { cn } from "@/lib/cn";

/** Rótulo em caixa alta espaçada entre dois fios (52px e 88px no quadro de 1920). */
export function Rotulo({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rotulo", className)}>
      <i aria-hidden="true" />
      {children}
      <i aria-hidden="true" />
    </span>
  );
}
