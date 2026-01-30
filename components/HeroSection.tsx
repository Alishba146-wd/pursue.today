export default function HeroSection() {
  return (
    <section className="pt-32 md:pt-52 pb-24 md:pb-40 flex items-center" style={{ background: 'radial-gradient(circle at 50% 50%, #d6ecf7 0%, #e4f1fa 25%, #ffffff 60%)' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
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
