import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Text */}
        <div className="flex-1 text-left">
          <h2 className="text-6xl lg:text-7xl font-semibold mb-6" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>
            About <span style={{ color: '#2C7BBD' }} className="italic">Us</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
            With our cutting edge products and highly skilled team of engineers we work on engineering a new tomorrow for businesses as well as individuals
          </p>
          <p
            className="text-6xl lg:text-8xl font-bold mt-8 italic -ml-3"
            style={{ color: '#e0e7ef' }}
          >
            Since 2016
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="rounded-2xl border-2 border-[#0264B8] overflow-hidden w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/about us.png"
              alt="Pursue Today Team at booth"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
