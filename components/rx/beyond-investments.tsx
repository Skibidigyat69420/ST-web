"use client";

import { motion } from "framer-motion";
import { FadeIn, TextSplit } from "./text-split";
import {
  Building2,
  ArrowUpRight,
  Users,
  ShieldCheck,
  Briefcase,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Practice & Clinic Setup",
    description:
      "From choosing the right entity structure to equipment financing and location analysis. We help you avoid the costly mistakes most medical professionals make when opening their first clinic.",
  },
  {
    icon: ArrowUpRight,
    title: "Expansion & Financing",
    description:
      "Evaluating debt versus equity for growth, second-location feasibility, and capital deployment timing. Expansion is exciting. Ill-timed expansion is expensive.",
  },
  {
    icon: Users,
    title: "Succession Planning",
    description:
      "Who takes over your practice? How do you value it? What happens to your patients and staff? We design transitions that protect everyone involved — including you.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Formation & Asset Protection",
    description:
      "Family trusts, asset segregation, and liability shields. For medical professionals, malpractice risk makes asset protection non-negotiable. We structure it properly from day one.",
  },
  {
    icon: Briefcase,
    title: "Career Transitions",
    description:
      "Moving from hospital employment to private practice? Switching cities? Renegotiating your contract? These moments have enormous financial implications. We help you read the fine print.",
  },
  {
    icon: FileText,
    title: "Long-Term Business Planning",
    description:
      "Strategic planning for the full lifecycle of your practice — growth, stabilization, partnership, and eventual exit. A practice is a business. It deserves a business plan.",
  },
];

export function BeyondInvestments() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-56 px-6 overflow-hidden bg-sand"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(15,118,110,0.04) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.03) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <FadeIn>
            <span className="text-caption tracking-[0.2em] text-stone block mb-4">
              Beyond Investments
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline text-charcoal max-w-2xl mx-auto font-serif">
              <TextSplit>A practice is a business</TextSplit>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-large text-stone mt-6 max-w-lg mx-auto">
              Medical training does not teach balance sheets, partnership
              agreements, or asset protection. That is where we come in.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.08 * index}>
              <motion.div
                className="group relative p-8 lg:p-10 bg-ivory hover:bg-ivory-light transition-colors duration-700 h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-caption tracking-[0.15em] text-stone-light">
                    0{index + 1}
                  </span>
                  <service.icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-accent transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-subhead text-charcoal mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-body text-stone leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
