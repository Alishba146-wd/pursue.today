import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Bebas_Neue, Orbitron } from 'next/font/google';
import localFont from 'next/font/local';
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

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-orbitron',
});

const conthrax = localFont({
  src: '../public/font/Conthrax-SemiBold.otf',
  variable: '--font-conthrax',
  weight: '600',
});

const cascadiaMono = localFont({
  src: '../public/font/CascadiaMono-VariableFont_wght.ttf',
  variable: '--font-cascadia',
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
      <body className={`${poppins.className} ${bebasNeue.variable} ${orbitron.variable} ${conthrax.variable} ${cascadiaMono.variable}`}><AOSInit /><Header />{children}<Footer /></body>
    </html>
  );
}
