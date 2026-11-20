/** Seta diagonal dos links externos (nunca o caractere unicode). */
export function SetaExterna({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M3 11L11 3M5 3h6v6" />
    </svg>
  );
}

/** Seta para baixo do círculo "Ver as entregas". */
export function SetaBaixo({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 14 18" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M7 1v15M1 10l6 6 6-6" />
    </svg>
  );
}
