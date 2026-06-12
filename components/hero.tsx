"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90dvh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Rich ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large primary orb */}
        <motion.div
          className="absolute -top-[30%] -right-[15%] w-[70vw] h-[70vw] rounded-full"
          style={{
            y: orbY,
            background:
              "radial-gradient(circle, rgba(168,148,125,0.08) 0%, transparent 65%)",
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Secondary orb */}
        <motion.div
          className="absolute -bottom-[20%] -left-[20%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,176,146,0.06) 0%, transparent 65%)",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Accent orb */}
        <motion.div
          className="absolute top-[40%] left-[10%] w-[30vw] h-[30vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(122,107,90,0.04) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative thin lines */}
        <motion.div
          className="absolute top-[15%] left-[20%] w-[1px] h-[25vh]"
          style={{
            background: "linear-gradient(to bottom, transparent, #d4cfc5, transparent)",
          }}
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[25%] right-[25%] w-[1px] h-[18vh]"
          style={{
            background: "linear-gradient(to bottom, transparent, #d4cfc5, transparent)",
          }}
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[40%] w-[1px] h-[15vh]"
          style={{
            background: "linear-gradient(to bottom, transparent, #d4cfc5, transparent)",
          }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        {/* Subtle geometric accent */}
        <svg
          className="absolute top-[20%] right-[15%] w-24 h-24 opacity-[0.06]"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#8c7350"
            strokeWidth="0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#8c7350"
            strokeWidth="0.5"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, y, scale }}
      >
        <motion.p
          className="text-caption tracking-[0.4em] text-stone mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          AMFI REGISTERED MUTUAL FUND DISTRIBUTOR · PUNE
        </motion.p>

        <motion.h1
          className="text-display text-charcoal mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Sound Thesis<span className="text-accent">.</span>
        </motion.h1>

        <motion.div
          className="w-20 h-[1px] bg-accent mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <motion.p
          className="text-subhead text-stone max-w-2xl mx-auto font-serif leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Wealth, reimagined with reason.
        </motion.p>

        <motion.p
          className="text-body text-stone-light mt-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Whatever your profession, your wealth deserves a structure
          that outlasts market cycles.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-stone-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
