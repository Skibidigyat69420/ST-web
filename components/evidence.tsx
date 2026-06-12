"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextSplit } from "./text-split";

const stats = [
  {
    value: "₹500Cr+",
    label: "Assets Under Advisory",
    description: "Across mutual funds, PMS, AIF, and SIF structures",
  },
  {
    value: "3",
    label: "SEBI Registrations",
    description: "Investment Adviser, Portfolio Manager, AIF",
  },
  {
    value: "150+",
    label: "Client Relationships",
    description: "Professionals, practitioners, and family stewards",
  },
  {
    value: "2019",
    label: "Year Founded",
    description: "Built through multiple market cycles with discipline",
  },
];

export function Evidence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-56 px-6 overflow-hidden">
      {/* Background accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,148,125,0.025) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <FadeIn>
            <span className="text-caption tracking-[0.2em] text-stone block mb-4">
              Evidence & Trust
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline text-charcoal max-w-2xl mx-auto font-serif">
              <TextSplit>Built on regulation, sustained by discipline</TextSplit>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 * index}>
              <motion.div
                className="group relative p-8 lg:p-10 bg-ivory hover:bg-ivory-light transition-colors duration-700 text-center h-full flex flex-col"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-display-sm text-charcoal block mb-3 font-serif">
                  {stat.value}
                </span>
                <span className="text-caption tracking-[0.15em] text-stone block mb-4">
                  {stat.label}
                </span>
                <p className="text-body text-stone-light mt-auto">
                  {stat.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Regulatory badges */}
        <FadeIn delay={0.4}>
          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "SEBI Registered Investment Adviser",
              "SEBI Registered Portfolio Manager",
              "SEBI Registered AIF",
              "AMFI Registered Distributor",
            ].map((badge) => (
              <span
                key={badge}
                className="text-caption tracking-[0.1em] text-stone-light px-4 py-2 border border-border/60 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
