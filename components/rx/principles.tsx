"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextRevealLines } from "./text-split";
import { Shield, Gauge, Scale } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Prudence",
    subtitle: "Late start, no room for early mistakes",
    description:
      "Medical professionals begin earning in their thirties — a decade behind most other professionals. A single bad investment at forty carries far more weight than at twenty-five. We build every portfolio with that asymmetry in mind: capital preservation first, growth second.",
    details: [
      "Defensive core before speculative exposure",
      "Liquidity aligned to career milestones",
      "Downside buffers sized to your timeline",
    ],
    accent: "border-accent/12",
    orbColor: "rgba(15,118,110,0.06)",
  },
  {
    icon: Gauge,
    title: "Positioning",
    subtitle: "Income in medicine is not linear",
    description:
      "A resident's cash flow looks nothing like a consultant's. Private practice earnings fluctuate with patient volume, seasonality, and regulatory shifts. We do not set an allocation and forget it. We adjust as your income pattern evolves.",
    details: [
      "Allocation shifts with career stage",
      "Tax-aware location across account types",
      "Rebalancing triggered by life events, not just calendars",
    ],
    accent: "border-accent-warm/12",
    orbColor: "rgba(20,184,166,0.05)",
  },
  {
    icon: Scale,
    title: "Fiduciary-Level Standards",
    subtitle: "One question precedes every recommendation",
    description:
      "We distribute regular mutual fund plans and earn trail commissions from AMCs. That model only works if the client understands exactly how we are paid and why a particular fund was chosen. Every conversation begins with the same test: is this in your interest, or ours?",
    details: [
      "Full commission disclosure on request",
      "No proprietary products to push",
      "Independent research, client-aligned guidance",
    ],
    accent: "border-accent-deep/12",
    orbColor: "rgba(19,78,74,0.05)",
  },
];

export function Principles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative py-32 md:py-56 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 md:mb-36">
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="text-caption tracking-[0.2em] text-stone block mb-4">
                Our Philosophy
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divider mb-8 max-w-[60px]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-stone-light max-w-xs">
                Three constraints we operate under. Not slogans. Boundaries.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 lg:pl-12">
            <TextRevealLines
              children={"Built for a life in medicine.\nNot a spreadsheet."}
              className="text-headline text-charcoal mb-8"
              lineClassName="font-serif"
              delay={0.2}
            />
            <FadeIn delay={0.5}>
              <p className="text-body-large text-stone max-w-lg leading-relaxed">
                Generic wealth frameworks assume a steady income climb from age
                twenty-two. A medical professional's curve looks nothing like that.
                Our principles exist to bridge the gap between textbook finance and
                the reality of a career in medicine.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Three Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={0.15 * index}>
              <motion.div
                className={`group relative p-8 lg:p-10 border rounded-sm ${principle.accent} bg-ivory/40 backdrop-blur-sm h-full overflow-hidden`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Ambient orb inside card */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150"
                  style={{ background: `radial-gradient(circle, ${principle.orbColor} 0%, transparent 70%)` }}
                />

                {/* Number */}
                <span className="text-caption tracking-[0.15em] text-stone-light block mb-6">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <principle.icon
                    size={26}
                    strokeWidth={1.1}
                    className="text-accent transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-subhead text-charcoal mb-2 font-serif relative z-10">
                  {principle.title}
                </h3>
                <span className="text-caption tracking-[0.12em] text-accent block mb-4">
                  {principle.subtitle}
                </span>
                <p className="text-body text-stone mb-8 leading-relaxed relative z-10">
                  {principle.description}
                </p>

                {/* Details list */}
                <ul className="space-y-3 pt-6 border-t border-border/40 relative z-10">
                  {principle.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-body text-stone-light flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        className="absolute right-[12%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block"
        style={{ y: lineY }}
      />
    </section>
  );
}
