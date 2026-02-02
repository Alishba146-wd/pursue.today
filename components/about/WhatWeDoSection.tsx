import Image from 'next/image';

export default function WhatWeDoSection() {
  return (
    <section style={{ backgroundColor: '#2C7BBD' }} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left - Image */}
        <div className="flex-1 flex justify-center lg:justify-start" data-aos="fade-right">
          <div className="rounded-2xl overflow-hidden border-2 border-white/30 w-[350px] h-[350px] lg:w-[450px] lg:h-[400px] relative">
            <Image
              src="/what we do.png"
              alt="Team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Text Card */}
        <div className="flex-1" data-aos="fade-left">
          <div className="rounded-2xl border border-white/30 p-8 lg:p-10">
            <div className="inline-block">
              <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>
                WHAT WE DO
              </h2>
              <div className="w-full h-[1px] bg-white mt-2" />
            </div>
            <div className="mb-10" />
            <p className="text-white text-base lg:text-lg leading-relaxed text-left">
              We are a products and services company. Providing software development teams to client who fit in our vision. Pursue Today believes in building and creating products to simplify life of its customers, whether through SaaS products or through connection building applications where you can share your stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
