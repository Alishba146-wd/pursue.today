import { Button } from '@/components/button';

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-30" style={{ background: 'radial-gradient(circle at 35% 50%, #c4e3f3 0%, #d6ecf7 25%, #ffffff 60%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ lineHeight: '1.2', color: '#000000' }}>
              Our <span style={{ color: '#0264B8', fontStyle: 'italic' }}>Products</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg mb-8 leading-relaxed" style={{ color: '#000000', fontWeight: '500' }}>
              Create opportunities for yourself using our products<br />
              ranging from software solutions and technological<br />
              tools to the latest social networks, find everything<br />
              you need here!
            </p>
            <Button variant="outline" className="rounded-full px-5 py-1 text-sm font-semibold hover:scale-105 transition-transform" style={{ borderColor: '#0264B8', color: '#0264B8', borderWidth: '2px' }}>
              Explore More
            </Button>
          </div>

          {/* Desktop cards */}
          <div className="hidden lg:block relative h-[500px]" data-aos="fade-left">
            <div className="absolute top-0 left-4 w-80 h-70 rounded-[2rem] overflow-hidden hover:scale-105 transition-transform" >
              <img src="/goflows.png" alt="HeyDev" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-44 left-57 w-80 h-70 rounded-[2rem] overflow-hidden hover:scale-105 transition-transform z-10" >
              <img src="/meetrep.png" alt="GoCustomer" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Tablet cards */}
          <div className="hidden md:flex lg:hidden gap-4 justify-center" data-aos="fade-left">
            <div className="w-48 h-64 rounded-[1.5rem] overflow-hidden">
              <img src="/goflows.png" alt="HeyDev" className="w-full h-full object-contain" />
            </div>
            <div className="w-48 h-64 rounded-[1.5rem] overflow-hidden">
              <img src="/meetrep.png" alt="GoCustomer" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Mobile cards */}
          <div className="flex md:hidden gap-3 justify-center" data-aos="fade-up">
            <div className="w-36 h-48 rounded-[1.5rem] overflow-hidden">
              <img src="/goflows.png" alt="HeyDev" className="w-full h-full object-contain" />
            </div>
            <div className="w-36 h-48 rounded-[1.5rem] overflow-hidden">
              <img src="/meetrep.png" alt="GoCustomer" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
