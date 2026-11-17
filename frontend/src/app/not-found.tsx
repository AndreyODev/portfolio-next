import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <p className="mt-4 opacity-80">O endereço acessado não existe.</p>
      <Link href="/" className="mt-6 inline-block underline">
        Voltar para o início
      </Link>
    </Container>
  );
}
