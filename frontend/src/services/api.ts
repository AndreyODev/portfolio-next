/**
 * Ponto único de conexão com o backend (ainda não existe).
 *
 * O front roda sozinho usando os dados de `src/data`. Quando o backend
 * estiver pronto, defina NEXT_PUBLIC_API_URL no `.env.local` e troque as
 * chamadas de `src/data` por funções deste arquivo.
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const isApiConfigured = API_URL.length > 0;

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!isApiConfigured) {
    throw new Error("NEXT_PUBLIC_API_URL não está definida (veja .env.example).");
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });

  if (!response.ok) {
    throw new Error(`API ${response.status} em ${path}`);
  }

  return response.json() as Promise<T>;
}
