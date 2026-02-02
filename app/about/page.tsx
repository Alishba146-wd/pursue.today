import Image from 'next/image';
import ScrollingTicker from '@/components/common/ScrollingTicker';
import AboutUsSection from '@/components/about/AboutUsSection';
import WhatWeDoSection from '@/components/about/WhatWeDoSection';
import OurGoalSection from '@/components/about/OurGoalSection';
import TeamSection from '@/components/about/TeamSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 lg:pt-[88px]" style={{ color: '#000000' }}>
      <div className="relative w-full h-[330px] sm:h-[430px] lg:h-[580px]">
        <Image
          src="/main picture.png"
          alt="Pursue Today Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center -mt-44 sm:-mt-60 lg:-mt-85 px-4">
          <Image
            src="/lets pursue today.png"
            alt="Let's Pursue Today to build a new tomorrow!"
            width={700}
            height={120}
            className="w-[200px] sm:w-[350px] lg:w-[500px] h-auto"
          />
        </div>
      </div>
      <div className="mt-14">
        <ScrollingTicker />
      </div>
      <AboutUsSection />
      <WhatWeDoSection />
      <OurGoalSection />
      <TeamSection />
    </div>
  );
}
