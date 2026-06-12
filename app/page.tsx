"use client";

import { useState } from "react";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { BootScreen } from "@/components/boot-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { GrainOverlay } from "@/components/grain-overlay";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { ForYourPath } from "@/components/for-your-path";
import { Approach } from "@/components/approach";
import { Services } from "@/components/services";

import { Closing } from "@/components/closing";
import { RegulatoryBanner } from "@/components/regulatory-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <SmoothScrollProvider>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      <CustomCursor />
      <ScrollProgress />
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <Principles />
        <ForYourPath />
        <Approach />
        <Services />
        <Closing />
        <RegulatoryBanner />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
