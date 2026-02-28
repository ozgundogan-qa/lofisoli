import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Cleaner modern font chosen from ui-ux-pro-max guidelines (Manrope based on Stitch design)
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Solivagus Outdoor | El Yapımı Paracord Tasarımları',
  description: 'Vahşi doğanın kalbinde, elde dokunan zarafet. Doğadan ilham alan el yapımı premium paracord bileklikler.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className={cn(
        "min-h-screen font-sans antialiased bg-background text-foreground flex flex-col",
        manrope.variable,
        manrope.className
      )}>
        <Header />
        <main className="flex-1 flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
