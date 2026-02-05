'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="block rounded-lg h-36 md:h-48 overflow-hidden">
      {show ? (
        <a href="https://maps.app.goo.gl/X8pK5quuvLDXZLpK6" target="_blank" rel="noopener noreferrer" className="block h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13417.346275165575!2d-96.797358!3d32.783334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9921f4f27e37%3A0x11d3b32e07ea77d6!2s325%20North%20St.%20Paul%20Street%20Suite%203100%2C%20Dallas%2C%20TX%2075201!5e0!3m2!1sen!2sus!4v1769713124784!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      ) : (
        <div className="w-full h-full bg-gray-700 animate-pulse rounded-lg" />
      )}
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
  ];

  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#00213A' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12" data-aos="fade-up">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:info@pursue.today" className="flex items-start gap-3 text-gray-300 hover:text-white transition">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="font-medium">info@pursue.today</span>
              </a>
              <a href="tel:3073949982" className="flex items-start gap-3 text-gray-300 hover:text-white transition">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="font-medium">(307) 394-9982</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="font-medium">325 N. St. Paul Street, Suite 3100, Dallas, Texas, 75201, USA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block font-medium transition ${pathname === href ? 'text-white underline underline-offset-4 decoration-2' : 'text-gray-300 hover:text-white'}`}
                >
                  {label}
                </Link>
              ))}
              <a href="#privacy" className="block text-gray-300 hover:text-white transition font-medium">Privacy Policy</a>
              <a href="#terms" className="block text-gray-300 hover:text-white transition font-medium">Terms & Conditions</a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
            <LazyMap />
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-base font-medium">
          © 2022 Pursue Today LLC
        </div>
      </div>
    </footer>
  );
}
