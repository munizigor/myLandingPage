import { Container } from "@/components/ds/section";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-body font-semibold text-primary">Equilíbrio Digital</p>
        <p className="text-small text-muted-foreground">
          © {new Date().getFullYear()} Equilíbrio Digital. Estratégia e engenharia de dados.
        </p>
      </Container>
    </footer>
  );
}
