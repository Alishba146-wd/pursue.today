import Image from "next/image";

const perks = [
  { title: "Health\nInsurance", icon: "/perk1.png" },
  { title: "Quarterly\nFamily Treat", icon: "/perk2.png" },
  { title: "Annual\nRetreats", icon: "/perk3.png" },
  { title: "Yearly\nIncrements", icon: "/perk4.png" },
  { title: "Tea on\nthe House", icon: "/perk5.png" },
  { title: "Insane\nLearning", icon: "/perk6.png" },
  { title: "Bi-annual\nBonuses", icon: "/perk7.png" },
  { title: "Paid\nLeaves", icon: "/perk8.png" },
  { title: "Indoor\nGaming", icon: "/perk9.png" },
  { title: "Flexible\nWorking Hours", icon: "/perk10.png" },
];

export default function PerksSection() {
  return (
    <section className="py-20 px-4 w-full bg-[linear-gradient(270deg,#D1EDFA_0%,#FFFFFF_100%)] items-center flex flex-col">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-semibold uppercase"
          style={{ color: "#2C7BBD", fontFamily: 'var(--font-conthrax)', letterSpacing: '0.01em' }}
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
                alt={perk.title}
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
