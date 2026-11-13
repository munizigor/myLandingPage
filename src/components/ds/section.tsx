import { cn } from "@/lib/utils";

/** Faixa de seção com largura total e container interno (content-width). */
export function Section({
  id,
  tone = "default",
  className,
  children,
}: {
  id?: string;
  tone?: "default" | "muted";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 md:py-24",
        tone === "muted" ? "bg-secondary" : "bg-background",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

/** Eyebrow + título (h2) + lead opcional, alinhados à esquerda. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <header className={cn("grid max-w-measure gap-3", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-serif text-[1.75rem] leading-9 text-foreground md:text-heading-2">{title}</h2>
      {lead && <p className="text-body-lg text-muted-foreground">{lead}</p>}
    </header>
  );
}
