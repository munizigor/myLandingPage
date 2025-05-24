import Link from 'next/link';
import { MountainSnow } from 'lucide-react'; // Using an abstract icon for balance/harmony

export function Header() {
  return (
    <header className="py-4 md:py-6 shadow-sm bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-primary hover:text-primary/90 transition-colors">
          <MountainSnow className="h-7 w-7 text-accent" />
          <span>Equilíbrio Digital</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-foreground/80">
          <Link href="#expertise" className="hover:text-primary transition-colors">Expertise</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
