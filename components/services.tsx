"use client";

import { motion } from "framer-motion";
import { FadeIn, TextSplit } from "./text-split";
import {
  Landmark,
  LineChart,
  Shield,
  Globe,
  FileText,
  ScrollText,
} from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Mutual Funds",
    description:
      "Diversified, regulated portfolios with disciplined rebalancing, tax-loss harvesting, and systematic exit planning.",
    tag: "Core",
  },
  {
    icon: LineChart,
    title: "Portfolio Management",
    description:
      "Discretionary, concentrated strategies for qualified investors. Minimum investment: ₹50 lakh. Custom mandates available.",
    tag: "Coming Soon",
  },
  {
    icon: Shield,
    title: "Alternative Investments",
    description:
      "Category II AIF access for non-correlated, structured exposure. Minimum investment: ₹1 crore. SEBI AIF registration under application.",
    tag: "Coming Soon",
  },
  {
    icon: ScrollText,
    title: "Structured Investment Funds",
    description:
      "Tailored SIF structures combining capital protection with defined upside participation. Built for specific risk-return profiles.",
    tag: "Coming Soon",
  },
  {
    icon: FileText,
    title: "Trust & Succession",
    description:
      "Multi-generational trust structures, family constitutions, and succession planning. Governance before distribution.",
    tag: "Coming Soon",
  },
  {
    icon: Globe,
    title: "Global Allocation",
    description:
      "GIFT City and offshore structures for currency-hedged, geographically diversified exposure. Tax reporting included.",
    tag: "Coming Soon",
  },
];

export function Services() {
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
              "radial-gradient(circle, rgba(168,148,125,0.04) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(196,176,146,0.03) 0%, transparent 70%)",
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
              What We Offer
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-headline text-charcoal max-w-2xl mx-auto font-serif">
              <TextSplit>What we offer</TextSplit>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-large text-stone mt-6 max-w-lg mx-auto">
              Each service is offered only when it aligns with your structure
              and risk temperament.
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
                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-caption tracking-[0.15em] text-stone-light">
                    {service.tag}
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

        {/* Bottom note */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-caption tracking-[0.12em] text-stone-light max-w-xl mx-auto">
              Not all services are suitable for all investors. Minimum
              investments apply. We disclose fees, risks, and conflicts before
              onboarding.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
