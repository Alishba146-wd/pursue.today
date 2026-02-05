"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialImages = [
  "/career_t1.png",
  "/career_t2.png",
  "/career_t3.png",
  "/career_t4.png",
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonialImages.length) % testimonialImages.length
    );
  };

  return (
    <section className="w-full mb-20 relative">
      <div className="bg-[#2C7BBD] py-4 text-center mb-12" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl font-bold text-white tracking-widest"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.01em" }}
        >
          TESTIMONIALS
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-12 relative flex items-center justify-center" data-aos="fade-up" data-aos-delay="100">
        <button
          onClick={prev}
          className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-black/20 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <div className="relative w-full aspect-[3/2] max-w-5xl drop-shadow-xl flex justify-center h-[300px] md:h-[450px] lg:h-[650px]">
          <Image
            src={testimonialImages[currentIndex]}
            alt={`Testimonial ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={next}
          className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-black/20 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </section>
  );
}
