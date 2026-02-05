import { Button } from "@/components/common/button";
import ImageGallery from "@/components/careers/ImageGallery";
import ScrollingTicker from "@/components/common/ScrollingTicker";
import InfoSection from "@/components/careers/InfoSection";
import PerksSection from "@/components/careers/PerksSection";
import TestimonialsSection from "@/components/careers/TestimonialsSection";
import ContactSection from "@/components/careers/ContactSection";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-[88px]">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-32 pb-12 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#99D4F7_0%,#FFFFFF_100%)]" />

        <div className="relative z-10 max-w-8xl mx-auto flex flex-col items-center justify-center text-center mb-20">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-wide italic"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}
            data-aos="fade-up"
          >
            <span className="text-black not-italic">JOIN OUR </span>
            <span className="text-[#0264B8]">TEAM</span>
          </h1>

          <p className="text-base md:text-xl text-black mb-8 max-w-2xl mx-auto font-medium opacity-90" data-aos="fade-up" data-aos-delay="100">
            Take a step in the right direction for your career
          </p>

          <Button
            variant="outline"
            className="explore-btn rounded-full px-12 py-7 text-sm font-semibold hover:scale-105 transition-all mb-20"
            style={{
              borderColor: "#0264B8",
              color: "#0264B8",
              backgroundColor: "transparent",
              borderWidth: "2px",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            See Open Roles
          </Button>

          <ImageGallery />
        </div>
      </section>

      {/* Ticker Section */}
      <div className="w-full relative z-20">
        <ScrollingTicker />
      </div>

      <InfoSection />

      <PerksSection />

      <TestimonialsSection />

      <ContactSection />
    </div>
  );
}
