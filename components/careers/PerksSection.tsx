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
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#0264B8", fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}
        >
          PERKS
        </h2>
        <p className="text-[#4a4a4a] text-lg">
          What we provide to our Employees
        </p>
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
