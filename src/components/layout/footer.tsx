export function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-border/50 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Equilíbrio Digital. All rights reserved.</p>
        <p className="text-xs mt-1">Crafting digital harmony and balance.</p>
      </div>
    </footer>
  );
}
