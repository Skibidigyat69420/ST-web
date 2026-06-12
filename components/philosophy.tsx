"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextRevealLines } from "./text-split";

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left column - Label */}
          <div className="lg:col-span-4">
            <FadeIn delay={0}>
              <span className="text-caption tracking-[0.2em] text-stone block mb-4">
                Our Philosophy
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="divider mb-8 max-w-[60px]" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-stone-light max-w-xs">
                We do not chase returns. We build structures that generate them
                as a byproduct of sound reasoning.
              </p>
            </FadeIn>
          </div>

          {/* Right column - Main statement */}
          <div className="lg:col-span-8 lg:pl-12">
            <TextRevealLines
              children="Thesis first.\nProduct second.\nAlways."
              className="text-headline text-charcoal mb-12"
              lineClassName="font-serif"
              delay={0.2}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FadeIn delay={0.4}>
                <p className="text-body-large text-stone leading-relaxed">
                  Most wealth advice begins with a product. Ours begins with a
                  question. We believe that enduring wealth is built on
                  intellectual honesty, not market timing.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="text-body-large text-stone leading-relaxed">
                  Whether you are a professional building a practice, a
                  practitioner seeking precision, or a family stewarding a
                  legacy, the principle remains the same: reasoned structure
                  outperforms noise.
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
