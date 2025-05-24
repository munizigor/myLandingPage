
import Link from 'next/link';
import { MountainSnow, Menu } from 'lucide-react';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="py-4 md:py-6 shadow-sm bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-primary hover:text-primary/90 transition-colors">
          <MountainSnow className="h-7 w-7 text-accent" />
          <span>Equilíbrio Digital</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-foreground/80">
          <Link href="#expertise" className="hover:text-primary transition-colors">Experiência</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Habilidades</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contato</Link>
          <ThemeToggleButton />
        </nav>

        {/* Mobile Navigation & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-4 mt-12 p-4">
                <SheetClose asChild>
                  <Link href="#expertise" className="text-lg block py-2 hover:text-primary transition-colors">Experiência</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#skills" className="text-lg block py-2 hover:text-primary transition-colors">Habilidades</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#contact" className="text-lg block py-2 hover:text-primary transition-colors">Contato</Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
