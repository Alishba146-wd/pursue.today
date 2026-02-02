export default function AboutSection() {
  return (
    <section className="py-20 md:py-45 relative overflow-hidden" style={{ backgroundColor: '#2C7BBD' }}>
      <img src="/element.png" alt="" className="hidden md:block absolute top-10 left-0 w-110 opacity-60" />
      <img src="/element.png" alt="" className="hidden md:block absolute bottom-5 right-0 w-110 opacity-60" style={{ transform: 'rotate(180deg)' }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="fade-up">
        <p className="text-white text-base font-bold tracking-wide mb-4">ABOUT PURSUE TODAY</p>
        <div className="flex justify-center mb-8 -mt-2">
          <div className="h-0.5" style={{ width: 'calc(100% - 1.2em)', maxWidth: '180px', backgroundColor: 'rgba(255,255,255,0.5)' }}></div>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 leading-tight font-semibold">
          Build, Innovate and Experience the future with<br /><span className="italic">Pursue Today</span>
        </h2>
        <p className="text-sm lg:text-base text-white leading-relaxed max-w-2xl mx-auto font-normal">
          &ldquo;We believe in the power of seizing the opportunity and building the future. So you work on the conception, we&apos;ll work on making it a reality&rdquo;
        </p>
      </div>
    </section>
  );
}
