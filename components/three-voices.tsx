"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./text-split";
import { Briefcase, Stethoscope, TreePine } from "lucide-react";

const voices = [
  {
    id: "professionals",
    icon: Briefcase,
    title: "For Professionals",
    subtitle: "CAs & CFAs",
    description:
      "Convert your community trust into a structured, thesis-led advisory practice. We provide the research infrastructure, compliance backbone, and operational support so you can serve with reason, not sell products.",
    highlight: "Apply → Build → Serve",
    accent: "bg-accent/5 border-accent/10",
    iconColor: "text-accent",
  },
  {
    id: "practitioners",
    icon: Stethoscope,
    title: "For Practitioners",
    subtitle: "Doctors & Medical Professionals",
    description:
      "Your career saves lives. Your wealth deserves the same precision. We diagnose your financial landscape, prescribe structures aligned with your values, and monitor with the rigor of medicine.",
    highlight: "Diagnose → Prescribe → Monitor",
    accent: "bg-accent-warm/5 border-accent-warm/10",
    iconColor: "text-accent-warm",
  },
  {
    id: "families",
    icon: TreePine,
    title: "For Families",
    subtitle: "Multi-Generational Stewards",
    description:
      "Wealth is not the end. It is the beginning of a responsibility. We help families preserve capital, position for growth, and pass on governance — not just assets — to the next generation.",
    highlight: "Preserve → Position → Pass On",
    accent: "bg-accent-deep/5 border-accent-deep/10",
    iconColor: "text-accent-deep",
  },
];

export function ThreeVoices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="practice"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 overflow-hidden"
    >
      {/* Background texture */}
      <motion.div
        className="absolute inset-0 bg-ivory-light"
        style={{ y: bgY }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <FadeIn>
            <span className="text-caption tracking-[0.2em] text-stone block mb-4">
              One Thesis, Three Expressions
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline text-charcoal max-w-2xl mx-auto font-serif">
              Built for those who think before they act
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {voices.map((voice, index) => (
            <FadeIn key={voice.id} delay={0.15 * index}>
              <motion.div
                className={`group relative p-8 lg:p-10 border rounded-sm ${voice.accent} backdrop-blur-sm transition-all duration-700 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)]`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Icon */}
                <div className="mb-8">
                  <voice.icon
                    size={24}
                    strokeWidth={1.2}
                    className={`${voice.iconColor} transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>

                {/* Content */}
                <span className="text-caption tracking-[0.15em] text-stone-light block mb-3">
                  {voice.subtitle}
                </span>
                <h3 className="text-subhead text-charcoal mb-4 font-serif">
                  {voice.title}
                </h3>
                <p className="text-body text-stone mb-8 leading-relaxed">
                  {voice.description}
                </p>

                {/* Highlight */}
                <div className="pt-6 border-t border-border/40">
                  <span className="text-caption tracking-[0.12em] text-accent">
                    {voice.highlight}
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
