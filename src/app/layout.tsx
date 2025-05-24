import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming this is how Geist fonts are loaded, or it might be next/font/local
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// If Geist fonts are local, the setup would be different, e.g., using next/font/local
// For this example, we assume `Geist` and `Geist_Mono` are correctly configured
// to load the respective fonts and set CSS variables.
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  // weight: ['300', '400', '500', '700'], // Example weights if needed
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  // weight: ['400', '700'], // Example weights if needed
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
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased"> {/* font-family is set in globals.css */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
