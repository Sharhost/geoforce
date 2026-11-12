import { Nav } from "@/components/Nav";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Hero } from "@/components/sections/Hero";
import { PlatformsMarquee } from "@/components/sections/PlatformsMarquee";
import { WhatIsGeo } from "@/components/sections/WhatIsGeo";
import { SeoGeoTable } from "@/components/sections/SeoGeoTable";
import { Methodology } from "@/components/sections/Methodology";
import { Services } from "@/components/sections/Services";
import { Deliverables } from "@/components/sections/Deliverables";
import { Metrics } from "@/components/sections/Metrics";
import { Trust } from "@/components/sections/Trust";
import { WhyNow } from "@/components/sections/WhyNow";
import { NotPromise } from "@/components/sections/NotPromise";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlatformsMarquee />
        <WhatIsGeo />
        <SeoGeoTable />
        <Methodology />
        <Services />
        <Deliverables />
        <Metrics />
        <Trust />
        <WhyNow />
        <NotPromise />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}