'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/common/button';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 lg:h-[88px] items-center justify-between">

          {/* Left - Nav Links (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={`text-sm font-medium transition ${pathname === href ? 'text-black underline underline-offset-4 decoration-2' : 'text-gray-800 hover:text-black'}`}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Center - Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <Image
              src="/header-logo.png"
              alt="Pursue Today"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Right - Social Links + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://www.linkedin.com/company/pursuetoday/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedIn.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.facebook.com/share/1BtMyuNZDX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Image src="/Facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/pursue.today?igsh=MWUzcDg4bWI1d3lkcg==" target="_blank" rel="noopener noreferrer">
              <Image src="/Insta.png" alt="Instagram" width={24} height={24} />
            </a>

            <Button asChild className="ml-2 rounded-full px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition" style={{ backgroundColor: '#0264B8' }}>
              <Link href="/hire-a-team">Hire a Team</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`block text-sm font-medium transition ${pathname === href ? 'text-black underline underline-offset-4 decoration-2' : 'text-gray-800 hover:text-black'}`} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <a href="https://www.linkedin.com/company/pursuetoday/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedIn.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.facebook.com/share/1BtMyuNZDX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Image src="/Facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/pursue.today?igsh=MWUzcDg4bWI1d3lkcg==" target="_blank" rel="noopener noreferrer">
              <Image src="/Insta.png" alt="Instagram" width={24} height={24} />
            </a>
          </div>
          <Button asChild className="block text-center rounded-full px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition w-full" style={{ backgroundColor: '#0264B8' }}>
            <Link href="/hire-a-team" onClick={() => setMenuOpen(false)}>Hire a Team</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
