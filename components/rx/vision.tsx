"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextRevealLines } from "./text-split";

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left column - Label */}
          <div className="lg:col-span-4">
            <FadeIn delay={0}>
              <span className="text-caption tracking-[0.2em] text-stone block mb-4">
                Our Vision
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divider mb-8 max-w-[60px]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-stone-light max-w-xs">
                India has over 1.3 million medical professionals. Most have no
                access to wealth frameworks that understand how they actually
                earn, spend, and build wealth. We want to change that.
              </p>
            </FadeIn>
          </div>

          {/* Right column - Main statement */}
          <div className="lg:col-span-8 lg:pl-12">
            <TextRevealLines
              children={"Not just your money.\nYour profession."}
              className="text-headline text-charcoal mb-12"
              lineClassName="font-serif"
              delay={0.2}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FadeIn delay={0.4}>
                <p className="text-body-large text-stone leading-relaxed">
                  A medical professional's income curve, risk profile, and life
                  priorities are fundamentally different from a software
                  engineer's or a lawyer's. The framework should reflect that.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="text-body-large text-stone leading-relaxed">
                  We are starting in India because the gap is widest here —
                  between the complexity of a medical career and the generic
                  nature of most financial guidance.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="absolute right-[15%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block"
          style={{ y: lineY }}
        />
      </div>
    </section>
  );
}
