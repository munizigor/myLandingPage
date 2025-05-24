import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 text-center">
      <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-accent/50">
        <Image 
          src="https://placehold.co/300x300.png" 
          alt="IT Expert Portrait" 
          layout="fill"
          objectFit="cover"
          data-ai-hint="professional portrait"
          className="transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
        Harmonizing <span className="text-accent">Data</span>, Engineering <span className="text-accent">Balance</span>.
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
        Expert IT solutions for a digitally balanced world. Specializing in data science, analytics, and strategic insights to foster growth and clarity.
      </p>
      <div className="space-x-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="#contact">Connect With Me</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
          <Link href="#expertise">View Expertise</Link>
        </Button>
      </div>
    </section>
  );
}
