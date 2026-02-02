'use client';

import HeroSection from '@/components/home/HeroSection';
import ScrollingTicker from '@/components/common/ScrollingTicker';
import ProductsSection from '@/components/home/ProductsSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ color: '#000000' }}>
      <HeroSection />
      <ScrollingTicker />
      <ProductsSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
