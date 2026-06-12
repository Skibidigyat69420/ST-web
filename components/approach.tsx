"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextSplit } from "./text-split";

const steps = [
  {
    number: "01",
    title: "Understand",
    principle: "Protection",
    description:
      "We begin by mapping your complete financial landscape — income patterns, existing assets, liabilities, liquidity needs, and risk temperament. No templates. No assumptions. Every plan starts with your reality.",
  },
  {
    number: "02",
    title: "Structure",
    principle: "Positioning",
    description:
      "From understanding emerges architecture. Asset allocation, tax efficiency, regulatory compliance, and governance frameworks are woven into a coherent, documented plan aligned to your time horizon.",
  },
  {
    number: "03",
    title: "Steward",
    principle: "Fiduciary",
    description:
      "Markets move. Lives change. We monitor, rebalance, and recalibrate with quarterly reviews and annual thesis refreshes. Every decision is weighed against your best interest — not what is convenient to sell.",
  },
];

export function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      id="approach"
      ref={containerRef}
      className="relative py-32 md:py-56 px-6 overflow-hidden"
    >
      {/* Background visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[20%] right-[8%] w-[45vw] h-[45vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,148,125,0.03) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left column - Sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <FadeIn>
              <span className="text-caption tracking-[0.2em] text-stone block mb-4">
                Our Approach
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divider mb-8 max-w-[60px]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-headline text-charcoal mb-6 font-serif">
                <TextSplit>Three stages of reasoned wealth</TextSplit>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-stone-light max-w-xs">
                Each engagement follows the same disciplined sequence — refined
                across hundreds of relationships. Every stage maps to one of
                our three principles.
              </p>
            </FadeIn>
          </div>

          {/* Right column - Steps */}
          <div className="lg:col-span-8 lg:pl-12 relative">
            {/* Vertical progress line */}
            <div className="absolute left-[19px] md:left-[27px] top-0 bottom-0 w-[1px] bg-border hidden md:block">
              <motion.div
                className="w-full bg-accent origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-24 md:space-y-32">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={0.1 * index}>
                  <div className="flex gap-6 md:gap-10">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center bg-ivory relative z-10">
                        <span className="text-caption text-stone">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 md:pt-3">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-subhead text-charcoal font-serif">
                          {step.title}
                        </h3>
                        <span className="text-caption tracking-[0.12em] text-accent px-2 py-1 border border-accent/20 rounded-full">
                          {step.principle}
                        </span>
                      </div>
                      <p className="text-body-large text-stone max-w-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
