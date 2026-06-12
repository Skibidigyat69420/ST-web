"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextRevealLines } from "./text-split";
import { Shield, Target, HandHeart } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Protection",
    subtitle: "Preserve what you have built",
    description:
      "Capital preservation is not an afterthought. It is the foundation. We construct downside buffers, liquidity ladders, and risk thresholds before we ever discuss returns.",
    details: [
      "Liquidity mapping aligned to life events",
      "Concentration risk monitoring",
      "Downside scenario stress testing",
    ],
    accent: "border-accent/12",
    orbColor: "rgba(168,148,125,0.06)",
  },
  {
    icon: Target,
    title: "Positioning",
    subtitle: "Place capital where it belongs",
    description:
      "Strategic asset allocation tailored to your income pattern, tax bracket, and time horizon. We do not chase momentum. We position for endurance.",
    details: [
      "Tax-aware asset location",
      "Currency and geographic diversification",
      "Rebalancing discipline with volatility filters",
    ],
    accent: "border-accent-warm/12",
    orbColor: "rgba(196,176,146,0.05)",
  },
  {
    icon: HandHeart,
    title: "Fiduciary",
    subtitle: "Your interest, always first",
    description:
      "We are bound by obligation, not convenience. Every recommendation is weighed against what serves you best — not what pays us most. Transparency is structural, not promotional.",
    details: [
      "Full fee and conflict disclosure",
      "No proprietary product pushing",
      "Independent research, client-aligned advice",
    ],
    accent: "border-accent-deep/12",
    orbColor: "rgba(122,107,90,0.05)",
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
                Our Principles
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divider mb-8 max-w-[60px]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-stone-light max-w-xs">
                Every decision we make is filtered through these three
                non-negotiables. They are not marketing words. They are
                operating constraints.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 lg:pl-12">
            <TextRevealLines
              children="Principles before products.\nAlways."
              className="text-headline text-charcoal mb-8"
              lineClassName="font-serif"
              delay={0.2}
            />
            <FadeIn delay={0.5}>
              <p className="text-body-large text-stone max-w-lg leading-relaxed">
                Most wealth advice starts with a product. We start with a
                principle. Only when protection, positioning, and fiduciary
                obligation are satisfied do we discuss instruments.
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
