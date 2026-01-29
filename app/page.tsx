'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScrollingTicker from '@/components/ScrollingTicker';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ color: '#000000' }}>
      <Header />
      <HeroSection />
      <ScrollingTicker />
      <ProductsSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
