import { Nav } from "@/components/Nav";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Hero } from "@/components/sections/Hero";
import { PlatformsMarquee } from "@/components/sections/PlatformsMarquee";
import { WhatIsGeo } from "@/components/sections/WhatIsGeo";
import { SeoGeoTable } from "@/components/sections/SeoGeoTable";
import { Methodology } from "@/components/sections/Methodology";
import { Deliverables } from "@/components/sections/Deliverables";
import { Metrics } from "@/components/sections/Metrics";
import { Trust } from "@/components/sections/Trust";
import { WhyNow } from "@/components/sections/WhyNow";
import { NotPromise } from "@/components/sections/NotPromise";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { SectionFade } from "@/components/SectionFade";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlatformsMarquee />
        
        <SectionFade><WhatIsGeo /></SectionFade>
        <SectionFade><SeoGeoTable /></SectionFade>
        <SectionFade><Methodology /></SectionFade>
        
        {/* Блок Services удален */}
        
        <SectionFade><Deliverables /></SectionFade>
        <SectionFade><Metrics /></SectionFade>
        <SectionFade><Trust /></SectionFade>
        <SectionFade><WhyNow /></SectionFade>
        <SectionFade><NotPromise /></SectionFade>
        <SectionFade><Faq /></SectionFade>
        
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
