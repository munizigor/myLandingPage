
import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/theme-provider";

const plexSans = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Equilíbrio Digital - Expertise em TI',
  description: 'Apresentando expertise profissional em TI em ciência de dados, analytics e soluções estratégicas para um mundo digitalmente equilibrado.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plexSans.variable} ${sourceSerif.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider storageKey="portfolio-theme" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
