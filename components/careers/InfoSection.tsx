import Image from "next/image";

export default function InfoSection() {
  return (
    <section
      className="w-full py-16 md:py-24 px-4 sm:px-6 text-center"
      style={{ backgroundColor: "#2C7BBD" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Text heading for mobile */}
        <h2
          className="block sm:hidden text-lg font-semibold text-white mb-6 uppercase leading-tight"
          style={{ fontFamily: 'var(--font-conthrax)', letterSpacing: '0.03em' }}
          data-aos="fade-up"
        >
          WORKING AT PURSUE TODAY MEANS FLEXIBILITY, GROWTH AND MEANINGFUL CHOICES.
        </h2>

        {/* Image heading for tablet and desktop */}
        <div className="hidden sm:block mb-6" data-aos="fade-up">
          <Image
            src="/Screenshot_2026-02-05_182145-removebg-preview (1).png"
            alt="Working at Pursue Today means flexibility, growth and meaningful choices."
            width={1100}
            height={150}
            className="w-[700px] lg:w-[1100px] h-auto mx-auto"
          />
        </div>

        <p className="text-white text-base md:text-lg max-w-3xl mx-auto opacity-90 font-light" data-aos="fade-up" data-aos-delay="100">
          Build a career that suits your lifestyle, in a company where your
          <br className="hidden md:block" /> voice is heard. Let's build
          the future together.
        </p>
      </div>
    </section>
  );
}
