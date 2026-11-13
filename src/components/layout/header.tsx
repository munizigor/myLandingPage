"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-card transition-shadow duration-150",
        scrolled && "shadow-ds-md"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-xl font-semibold text-primary">
          Equilíbrio Digital
        </Link>

        <nav aria-label="Seções" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-transparent py-1 text-label text-muted-foreground transition-colors duration-150 hover:border-primary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card">
              <SheetTitle className="font-serif text-lg text-primary">Equilíbrio Digital</SheetTitle>
              <nav aria-label="Seções" className="mt-8 flex flex-col">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Link href={l.href} className="border-b border-border py-3 text-body text-foreground">
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
