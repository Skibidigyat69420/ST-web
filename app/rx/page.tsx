"use client";

import { useState } from "react";
import { SmoothScrollProvider } from "@/components/rx/smooth-scroll";
import { BootScreen } from "@/components/rx/boot-screen";
import { CustomCursor } from "@/components/rx/custom-cursor";
import { ScrollProgress } from "@/components/rx/scroll-progress";
import { GrainOverlay } from "@/components/rx/grain-overlay";
import { Navigation } from "@/components/rx/navigation";
import { Hero } from "@/components/rx/hero";
import { Principles } from "@/components/rx/principles";
import { MedicalJourney } from "@/components/rx/doctor-journey";
import { Approach } from "@/components/rx/approach";
import { BeyondInvestments } from "@/components/rx/beyond-investments";
import { Vision } from "@/components/rx/vision";
import { Closing } from "@/components/rx/closing";
import { Footer } from "@/components/rx/footer";

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
        <MedicalJourney />
        <Approach />
        <BeyondInvestments />
        <Vision />
        <Closing />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
