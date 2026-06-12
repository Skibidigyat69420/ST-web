"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextSplit } from "./text-split";
import { Compass, TrendingUp, Landmark } from "lucide-react";

const paths = [
  {
    icon: Compass,
    title: "Building Security",
    description:
      "You have accumulated wealth. Now preserve it. We construct downside buffers, liquidity ladders, and tax-efficient structures so your capital endures beyond market cycles.",
    highlight: "Protect · Position · Preserve",
    accent: "bg-accent/5 border-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Building Wealth",
    description:
      "Your career demands focus. Your wealth demands structure. We diagnose your financial landscape, build precision allocation, and monitor with discipline — so you can stay focused on what you do best.",
    highlight: "Diagnose · Allocate · Monitor",
    accent: "bg-accent-warm/5 border-accent-warm/10",
    iconColor: "text-accent-warm",
  },
  {
    icon: Landmark,
    title: "Building Legacy",
    description:
      "Wealth is not the end. It is the beginning of a responsibility. We help families preserve capital, design governance, and pass on stewardship — not just assets — to the next generation.",
    highlight: "Preserve · Govern · Transfer",
    accent: "bg-accent-deep/5 border-accent-deep/10",
    iconColor: "text-accent-deep",
  },
];

export function ForYourPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="practice"
      ref={containerRef}
      className="relative py-32 md:py-56 px-6 overflow-hidden"
    >
      {/* Background layer */}
      <motion.div
        className="absolute inset-0 bg-sand"
        style={{ y: bgY }}
      />

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,148,125,0.04) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[8%] w-[35vw] h-[35vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,176,146,0.03) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <FadeIn>
            <span className="text-caption tracking-[0.2em] text-stone block mb-4">
              For Your Path
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline text-charcoal max-w-2xl mx-auto font-serif">
              <TextSplit>
                Whatever you do, your wealth deserves structure
              </TextSplit>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-large text-stone mt-6 max-w-lg mx-auto">
              Three paths. One philosophy. Each tailored to where you are in
              your journey — not your job title.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, index) => (
            <FadeIn key={path.title} delay={0.15 * index}>
              <motion.div
                className={`group relative p-8 lg:p-10 border rounded-sm ${path.accent} backdrop-blur-sm transition-all duration-700 hover:shadow-[0_12px_50px_rgba(0,0,0,0.04)] h-full`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Icon */}
                <div className="mb-8">
                  <path.icon
                    size={26}
                    strokeWidth={1.1}
                    className={`${path.iconColor} transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-subhead text-charcoal mb-4 font-serif">
                  {path.title}
                </h3>
                <p className="text-body text-stone mb-8 leading-relaxed">
                  {path.description}
                </p>

                {/* Highlight */}
                <div className="pt-6 border-t border-border/40">
                  <span className="text-caption tracking-[0.12em] text-accent">
                    {path.highlight}
                  </span>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
