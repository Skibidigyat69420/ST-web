"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextSplit } from "./text-split";

const steps = [
  {
    number: "01",
    title: "Map",
    principle: "Discovery",
    description:
      "We begin with your specific situation — not a questionnaire. Education debt, practice loans, family obligations, income volatility, and professional goals. For a surgeon opening a clinic in Pune, the plan looks nothing like a government hospital physician in Delhi.",
  },
  {
    number: "02",
    title: "Build",
    principle: "Architecture",
    description:
      "Asset allocation, tax efficiency, and portfolio construction designed around your actual cash flow pattern. Not a model portfolio. Your portfolio. Adjusted for the irregularity of medical income, the concentration risk of a single practice, and the timeline of your specialty.",
  },
  {
    number: "03",
    title: "Adjust",
    principle: "Ongoing Care",
    description:
      "Annual reviews at minimum. More frequent check-ins around major life events — marriage, children, practice expansion, hospital affiliation changes, or planned relocation. We rebalance when your life changes, not just when markets move.",
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
              "radial-gradient(circle, rgba(15,118,110,0.03) 0%, transparent 70%)",
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
                How We Work
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divider mb-8 max-w-[60px]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-headline text-charcoal mb-6 font-serif">
                <TextSplit>No boilerplate. Only specifics.</TextSplit>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-stone-light max-w-xs mb-8">
                Every medical professional's financial context is different. We do
                not standardize. We diagnose, then build.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="p-6 border border-border/40 rounded-sm bg-ivory/50">
                <p className="text-caption tracking-[0.12em] text-stone-light mb-3">
                  COMPENSATION
                </p>
                <p className="text-body text-stone leading-relaxed">
                  We distribute regular mutual fund plans and receive trail
                  commissions from AMCs. No advice fees. No hidden charges.
                  You will always know exactly how we are paid.
                </p>
              </div>
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

            {/* Transparency note */}
            <FadeIn delay={0.5}>
              <div className="mt-24 p-8 border border-border/40 rounded-sm bg-sand/50">
                <p className="text-caption tracking-[0.15em] text-stone mb-4">
                  ON TRANSPARENCY
                </p>
                <p className="text-body-large text-stone leading-relaxed max-w-xl">
                  If you cannot explain how your wealth partner is paid, you do
                  not have a partner — you have a salesperson. We tell you our
                  compensation structure before you invest a single rupee.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
