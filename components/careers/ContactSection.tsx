"use client";
import { Button } from "@/components/common/button";

export default function ContactSection() {
  return (
    <section className="w-full pb-32 pt-28 px-4 bg-[linear-gradient(90deg,#D6EEFB_0%,#FFFFFF_100%)]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold text-[#0264B8] mb-16 tracking-wide" data-aos="fade-up">
          CAN'T FIND WHAT YOU'RE LOOKING FOR?
        </h2>

        <form className="flex flex-col gap-14 text-left w-full max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-b border-black py-3 bg-transparent focus:outline-none placeholder:text-gray-500 font-normal text-lg"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Message"
              className="w-full border-b border-black py-3 bg-transparent focus:outline-none placeholder:text-gray-500 font-normal text-lg"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="explore-btn rounded-full px-20 py-7 text-sm font-semibold hover:scale-105 transition-all"
              style={{
                borderColor: "#2C7BBD",
                color: "#2C7BBD",
                borderWidth: "2px",
              }}
            >
              LET'S TALK
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
