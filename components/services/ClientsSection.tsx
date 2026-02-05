import Image from 'next/image';

const clients = [
  { src: '/pursue today website about us se-03.png', alt: 'Electrical.com' },
  { src: '/pursue today website about us se-04.png', alt: 'Amplify Product Intelligence' },
  { src: '/pursue today website about us se-05.png', alt: 'K' },
];

export default function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl lg:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em', color: '#2C7BBD' }}
          data-aos="fade-up"
        >
          SOME OF OUR CLIENTS AROUND THE GLOBE
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20" data-aos="fade-up">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.alt}
                width={300}
                height={150}
                className="object-contain h-[80px] lg:h-[120px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
