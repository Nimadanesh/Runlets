import { AmbientGlow } from "@/components/landing/AmbientGlow";
import { HeroSpotlight } from "@/components/landing/HeroSpotlight";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteRays } from "@/components/landing/SiteRays";
import {
  BigIdeaSection,
  FinalCtaSection,
  HeroSection,
  HowItWorksSection,
  IdeaSection,
  LineageSection,
  LoopSection,
  NetworkSection,
  NotOnlyDevsSection,
  ProblemSection,
  SmallIdeaSection,
  WhatIsSection,
  WhoSection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <AmbientGlow />
      <SiteRays />
      <SiteHeader />
      <main>
        <HeroSpotlight>
          <HeroSection />
        </HeroSpotlight>
        <IdeaSection />
        <ProblemSection />
        <WhatIsSection />
        <HowItWorksSection />
        <LoopSection />
        <LineageSection />
        <SmallIdeaSection />
        <WhoSection />
        <NotOnlyDevsSection />
        <NetworkSection />
        <BigIdeaSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
