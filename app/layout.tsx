import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import AOSInit from '@/components/AOSInit';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      <body className={poppins.className}><AOSInit />{children}</body>
    </html>
  );
}
