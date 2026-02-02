import Image from 'next/image';

export default function OurGoalSection() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: 'linear-gradient(to right, #c8e0f8, #f0f7ff 30%, #f0f7ff 70%, #c8e0f8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left - Text Card */}
        <div className="w-full lg:flex-1" data-aos="fade-right">
          <div className="rounded-2xl border border-[#0264B8]/30 p-8 lg:p-10">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide" style={{ color: '#2C7BBD', fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>
                OUR GOAL
              </h2>
              <div className="w-full h-[1px] mt-2" style={{ backgroundColor: '#2C7BBD' }} />
            </div>
            <div className="mb-10" />
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed text-left">
              We believe in utilizing our energy and resources into building the products of the future. Our goal is to create such solutions and products that not only facilitate businesses and users but also bring about a cultural shift in the technology landscape.
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end" data-aos="fade-left">
          <div className="rounded-2xl overflow-hidden border-2 border-[#0264B8]/30 w-full h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[400px] relative">
            <Image
              src="/our goal.png"
              alt="Team member working"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="w-full h-[1.5px]" style={{ backgroundColor: '#2C7BBD' }} />
      </div>
    </section>
  );
}
