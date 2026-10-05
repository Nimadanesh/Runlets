import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
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
    <>
      <SiteHeader />
      <main>
        <HeroSection />
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
    </>
  );
}
