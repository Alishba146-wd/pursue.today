export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20" style={{ background: 'linear-gradient(to right, #b8ddf0 0%, #c4e3f3 25%, #e4f1fa 40%, #ffffff 50%, #ffffff 70%, #e4f1fa 80%, #c4e3f3 90%, #b8ddf0 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <p className="text-sm md:text-base font-bold tracking-wide mb-2" style={{ color: '#2C7BBD' }}>WHY CHOOSE PURSUE TODAY?</p>
          <div className="flex justify-center mb-10">
            <div className="h-0.75" style={{ width: '180px', backgroundColor: 'rgba(2,100,184,0.4)' }}></div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ lineHeight: '1.2', color: '#000000', fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>
            Our <span className="font-semibold italic" style={{ color: '#2C7BBD' }}>Services</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: '#000000' }}>
            Let us build a perfect team for you to pursue your
            entrepreneurial aspirations.
            You give us the concepts we&apos;ll do the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all bg-white/50 shadow-md md:min-h-[220px] text-center" data-aos="fade-up">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4" style={{ color: '#2C7BBD', fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>Frontend Development</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium" style={{ color: '#000000' }}>
              Prefer simplicity over complexities of the web?
              Pursue Today team uses Javascript, Angular and React
              to create highly organized, beautiful yet super fast web
              apps.
            </p>
          </div>

          <div className="rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all bg-white/50 shadow-md md:min-h-[220px] text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4" style={{ color: '#2C7BBD', fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>Mobile Development</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium" style={{ color: '#000000' }}>
              Need Android development? Need iOS development?
              We are here for all your Mobile Development needs.
              Using Java and Kotlin, conducting test-driven
              development we materialise your designs to life.
            </p>
          </div>

          <div className="rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all bg-white/50 shadow-md md:min-h-[220px] text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4" style={{ color: '#2C7BBD', fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>Backend Development</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium" style={{ color: '#000000' }}>
              Whether you need a web app, a custom backend
              system or an API, our experts can help you. Using
              highly scalable technologies like Rails, Node and Go,
              we deliver the best results.
            </p>
          </div>

          <div className="rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all bg-white/50 shadow-md md:min-h-[220px] text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4" style={{ color: '#2C7BBD', fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>DevOps</h3>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium" style={{ color: '#000000' }}>
              A bridge between developers and operations, DevOps
              handles the entire development cycle by automating
              and monitoring the software development process, including CI/CD and any infrastructure changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
