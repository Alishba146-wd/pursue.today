import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Bebas_Neue } from 'next/font/google';
import AOSInit from '@/components/common/AOSInit';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'Pursue Today - We Engineer The Future',
  description: 'We provide your team with the tools to succeed in today\'s world and beyond. Build, Innovate and Experience the future with Pursue Today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${bebasNeue.variable}`}><AOSInit /><Header />{children}<Footer /></body>
    </html>
  );
}
