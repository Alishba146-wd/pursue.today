import Image from 'next/image';
import ScrollingTicker from '@/components/common/ScrollingTicker';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import ClientsSection from '@/components/services/ClientsSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-[88px]" style={{ color: '#000000' }}>
      <div className="relative w-full h-[330px] sm:h-[430px] lg:h-[580px]">
        <Image
          src="/services-hero.png"
          alt="Pursue Today Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4" data-aos="fade-up">
          <Image
            src="/services-text.png"
            alt="Services"
            width={700}
            height={120}
            className="w-[280px] sm:w-[450px] lg:w-[700px] h-auto"
          />
        </div>
      </div>
      <div className="mt-14">
        <ScrollingTicker />
      </div>
      <ServicesGridSection />
      <ClientsSection />
    </div>
  );
}
