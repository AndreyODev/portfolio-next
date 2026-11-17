const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

/** "2026-11" → "nov 2026" */
export function formatMonth(yearMonth: string) {
  const [year, month] = yearMonth.split("-");
  const label = MONTHS[Number(month) - 1];
  return label ? `${label} ${year}` : yearMonth;
}
