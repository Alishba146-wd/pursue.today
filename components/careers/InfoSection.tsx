export default function InfoSection() {
  return (
    <section
      className="w-full py-16 md:py-24 px-4 sm:px-6 text-center"
      style={{ backgroundColor: "#2C7BBD" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-cascadia)', letterSpacing: '0.03em' }}
          data-aos="fade-up"
        >
          Working At Pursue Today Means<br className="hidden lg:block" /> Flexibility, Growth And Meaningful Choices.
        </h2>

        <p className="text-white text-base md:text-lg max-w-3xl mx-auto opacity-90 font-light" data-aos="fade-up" data-aos-delay="100">
          Build a career that suits your lifestyle, in a company where your
          <br className="hidden md:block" /> voice is heard. Let's build
          the future together.
        </p>
      </div>
    </section>
  );
}
