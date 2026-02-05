'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  { name: 'Aurangzaib Ramzan', role: 'Sr.Software Engineer', image: '/ramzan.png' },
  { name: 'Farzeen Akram', role: 'Head of Talent and Culture', image: '/farzeenAkram.png' },
  { name: 'Muhammad Sheraz', role: 'Project Manager', image: '/sheraz.png' },
  { name: 'Shifa Quddus', role: 'QA Analyst', image: '/shifa.png' },
  { name: 'Amna Mubashar', role: 'Python Developer', image: '/Amna Mubashar - Python Developer.png' },
  { name: 'Momal Musa', role: 'Graphic Designer', image: '/Momal Musa- Graphic Designer.png' },
  { name: 'Shoaib Mehmood', role: 'Node.Js Developer', image: '/Shoaib Mehmood-Node . Js Developer.png' },
  { name: 'Syed Shahab Shah', role: 'Mern Stack Developer', image: '/Syed Shahab Shah - Mern Stack Developer.png' },
];

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: 'linear-gradient(to right, #c8e0f8, #f0f7ff 30%, #f0f7ff 70%, #c8e0f8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-4 -mt-10" data-aos="fade-up">
          <h2 className="text-5xl lg:text-6xl font-bold" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.01em' }}>
            Amazing <span className="italic" style={{ color: '#2C7BBD' }}>Team</span>
          </h2>
        </div>
        <p className="text-center text-base lg:text-lg text-gray-800 mb-12">
          Great things in business are never done by one{' '}
          person. <strong>They&apos;re done by a team of people.</strong>
        </p>

        {/* Team Carousel */}
        <div data-aos="fade-up" className="rounded-2xl lg:rounded-3xl border border-[#0264B8]/20 p-4 sm:p-6 lg:p-10 relative">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="min-w-full sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-24px)] flex-shrink-0 snap-start">
                <div className="rounded-xl border-2 border-[#0264B8] overflow-hidden relative h-[260px] sm:h-[300px] lg:h-[350px] bg-white">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-white" />
                  )}
                </div>
                <h3 className="font-bold text-lg mt-3">{member.name}</h3>
                <p className="text-gray-700 text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft size={20} style={{ color: '#0264B8' }} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight size={20} style={{ color: '#0264B8' }} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
