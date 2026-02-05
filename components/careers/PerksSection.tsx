import Image from "next/image";

const perks = [
  { icon: "/perks/career [Recovered]-06.png" },
  { icon: "/perks/career [Recovered]-07.png" },
  { icon: "/perks/career [Recovered]-08.png" },
  { icon: "/perks/career [Recovered]-09.png" },
  { icon: "/perks/career [Recovered]-10.png" },
  { icon: "/perks/career [Recovered]-11.png" },
  { icon: "/perks/career [Recovered]-12.png" },
  { icon: "/perks/career [Recovered]-13.png" },
  { icon: "/perks/career [Recovered]-14.png" },
  { icon: "/perks/career [Recovered]-15.png" },
];

export default function PerksSection() {
  return (
    <section className="py-20 px-4 w-full bg-[linear-gradient(270deg,#D1EDFA_0%,#FFFFFF_100%)] items-center flex flex-col">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase"
          style={{ color: "#2C7BBD", fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}
        >
          What we provide to our Employees
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {perks.map((perk, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center justify-center
              ${index === perks.length - 2 ? "lg:col-start-2" : ""}
              ${index === perks.length - 1 ? "lg:col-start-3" : ""}
            `}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="w-20 h-20 md:w-32 md:h-40 lg:w-48 lg:h-48 relative">
              <Image
                src={perk.icon}
                alt={`Perk ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
