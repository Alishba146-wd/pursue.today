import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-52 pb-24 md:pb-40 flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(214,236,247,0.7) 0%, rgba(228,241,250,0.75) 25%, rgba(255,255,255,0.8) 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ lineHeight: '1.2', color: '#000000' }}>
            <span className="font-normal">We Engineer</span><br />
            <span style={{ color: '#0264B8' }}>The Future</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-8 max-w-xl mx-auto" style={{ lineHeight: '1.5', color: '#4a4a4a' }}>
            We provide your team with the tools to<br className="hidden sm:inline" /> succeed in today&apos;s world and <em>beyond</em>
          </p>
        </div>
      </div>
    </section>
  );
}
