import Image from 'next/image';
import ScrollingTicker from '@/components/common/ScrollingTicker';

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-[88px]" style={{ color: '#000000' }}>
      {/* Hero Section */}
      <div className="relative w-full h-[330px] sm:h-[430px] lg:h-[580px] flex items-center justify-center px-4" style={{ background: 'linear-gradient(to right, #b8ddf0 0%, #c4e3f3 25%, #e4f1fa 40%, #ffffff 50%, #ffffff 70%, #e4f1fa 80%, #c4e3f3 90%, #b8ddf0 100%)' }}>
        <Image
          src="/products-02 (1).png"
          alt="Our Products"
          width={800}
          height={300}
          className="w-[340px] sm:w-[500px] lg:w-[800px] h-auto"
          data-aos="fade-up"
        />
      </div>
      <div className="mt-14">
        <ScrollingTicker />
      </div>

      {/* GoCustomer.ai Section */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: '#E8E0F0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28">
            {/* Logo */}
            <div className="flex-shrink-0" data-aos="fade-right">
              <Image
                src="/products-03.png"
                alt="GoCustomer.ai Logo"
                width={300}
                height={300}
                className="w-[180px] sm:w-[220px] lg:w-[300px] h-auto"
              />
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left" data-aos="fade-left">
              <h3
                className="text-4xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em', color: '#5B4B9E' }}
              >
                GOCUSTOMER.AI
              </h3>
              <p className="text-xl lg:text-2xl text-gray-700 mb-4 italic">
                All-in-one AI to find, convert, and engage<br />
                customers. Simple, powerful, no tech team.
              </p>
              <a
                href="https://gocustomer.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="explore-btn inline-block px-4 py-1.5 rounded-full border-2 text-base font-medium transition"
                style={{ borderColor: '#2C7BBD', color: '#2C7BBD' }}
              >
                Explore The Product
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MeetRep.ai Section */}
      <section className="py-24 lg:py-36" style={{ background: 'linear-gradient(to right, #e4f1fa 0%, #f0f7ff 25%, #ffffff 50%, #ffffff 70%, #f0f7ff 85%, #e4f1fa 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-28">
            {/* Text Content */}
            <div className="text-center lg:text-right" data-aos="fade-right">
              <h3
                className="text-4xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em', color: '#000000' }}
              >
                MEETREP.AI
              </h3>
              <p className="text-xl lg:text-2xl text-gray-700 mb-4 italic">
                An AI agent that delivers live interactive product<br />
                demos the moment a prospect clicks.
              </p>
              <a
                href="https://meetrep.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="explore-btn inline-block px-4 py-1.5 rounded-full border-2 text-base font-medium transition"
                style={{ borderColor: '#2C7BBD', color: '#2C7BBD' }}
              >
                Explore The Product
              </a>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0" data-aos="fade-left">
              <Image
                src="/products-04.png"
                alt="MeetRep.ai Logo"
                width={300}
                height={300}
                className="w-[180px] sm:w-[220px] lg:w-[300px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
