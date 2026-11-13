import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ds/section";

const facts = [
  { value: "Desde 2016", label: "em dados" },
  { value: "AWS e Azure", label: "nuvens de produção" },
  { value: "+25%", label: "precisão em previsões" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="border-b border-border bg-background">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-[minmax(0,1fr)_320px] md:py-24 lg:gap-16">
        <div className="min-w-0">
          <p className="eyebrow">Estratégia e engenharia de dados</p>
          <h1 className="mt-4 max-w-[16ch] font-serif text-[2.5rem] leading-[1.1] tracking-[-0.02em] text-foreground md:text-display">
            Harmonizando dados, gerando equilíbrio.
          </h1>
          <p className="mt-6 max-w-measure text-body-lg text-muted-foreground">
            Soluções especializadas em TI para um mundo digitalmente equilibrado. Ciência de dados, analytics e
            insights estratégicos para promover crescimento e clareza.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#contato">
                Entre em contato <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#experiencia">Ver experiência</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="tabular font-mono text-data font-medium text-foreground">{f.value}</dd>
                <dd className="mt-1 text-small text-muted-foreground">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-secondary md:max-w-none">
          <Image
            src="https://placehold.co/640x800.png"
            alt="Retrato do especialista em dados"
            fill
            sizes="(min-width: 768px) 320px, 280px"
            className="object-cover"
            data-ai-hint="professional portrait"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
