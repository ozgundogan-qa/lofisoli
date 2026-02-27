import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

// Premium ve organik hissiyat için Instrument Serif
const serifFont = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
});

// Temiz ve okunaklı detay metinleri için Inter
const sansFont = Inter({ 
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
    <html lang="tr" className="scroll-smooth">
      <body className={cn(
        "min-h-screen font-sans antialiased",
        sansFont.variable,
        serifFont.variable
      )}>
        {children}
      </body>
    </html>
  );
}
