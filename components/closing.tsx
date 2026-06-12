"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, TextRevealLines } from "./text-split";

export function Closing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 md:py-56 px-6 overflow-hidden bg-dark"
    >
      {/* Rich ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[40%] -right-[25%] w-[80vw] h-[80vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(166,139,91,0.06) 0%, transparent 65%)",
          }}
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[25%] -left-[15%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(140,115,80,0.04) 0%, transparent 65%)",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(94,75,50,0.03) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative lines */}
        <motion.div
          className="absolute top-[20%] left-[30%] w-[1px] h-[20vh]"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)",
          }}
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[25%] w-[1px] h-[15vh]"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
          }}
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        style={{ opacity, y }}
      >
        <FadeIn>
          <span className="text-caption tracking-[0.2em] text-stone-light block mb-10">
            Begin the Conversation
          </span>
        </FadeIn>

        <TextRevealLines
          children="Quiet decisions.\nStrong structures."
          className="text-headline text-linen mb-12"
          lineClassName="font-serif"
          delay={0.2}
        />

        <FadeIn delay={0.5}>
          <p className="text-body-large text-stone-light max-w-lg mx-auto mb-12 leading-relaxed">
            Whether you are building a practice, growing personal wealth, or
            stewarding a family legacy, the first step is a conversation.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="group relative px-8 py-4 border border-linen/15 text-linen text-caption tracking-[0.15em] hover:bg-linen/5 transition-all duration-500"
            >
              <span className="relative z-10">GET IN TOUCH</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </a>
            <a
              href="mailto:ketan.srivastava@soundthesis.com"
              className="text-caption tracking-[0.15em] text-stone-light hover:text-linen transition-colors duration-500"
            >
              ketan.srivastava@soundthesis.com
            </a>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
