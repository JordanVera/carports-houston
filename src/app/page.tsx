import { CtaSection } from '@/components/sections/cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesGrid } from '@/components/sections/services-grid';
import { StatsSection } from '@/components/sections/stats-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <CtaSection
        title="Quality Metal Structures"
        description="Expert carport and metal building services for residential and commercial needs in Houston. Get in touch today."
      />
    </>
  );
}
