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
              "radial-gradient(circle, rgba(13,92,92,0.06) 0%, transparent 65%)",
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
              "radial-gradient(circle, rgba(18,163,163,0.04) 0%, transparent 65%)",
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
              "radial-gradient(circle, rgba(9,63,63,0.03) 0%, transparent 70%)",
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
          children={"Start with a call."}
          className="text-headline text-linen mb-12"
          lineClassName="font-serif"
          delay={0.2}
        />

        <FadeIn delay={0.5}>
          <p className="text-body-large text-stone-light max-w-lg mx-auto mb-12 leading-relaxed">
            No product pitch. No portfolio review. Just a conversation about
            where you are, where you are headed, and whether we are the right
            people to help you get there.
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

      {/* Regulatory Disclosures */}
      <div className="relative z-10 max-w-4xl mx-auto mt-24 md:mt-32 px-6">
        <div className="border-t border-linen/10 pt-12 md:pt-16">
          <FadeIn>
            <span className="text-caption tracking-[0.2em] text-stone-light block mb-6">
              REGULATORY DISCLOSURES
            </span>

            <div className="space-y-5 text-body-large text-stone-light/80 leading-relaxed max-w-3xl">
              <p>
                Sound Thesis Capital is an AMFI registered Mutual Fund
                Distributor. We currently do not hold SEBI registrations for
                Investment Adviser, Portfolio Manager, or Alternative Investment
                Fund. These registrations are under application.
              </p>

              <p>
                Mutual Fund investments are subject to market risks. Read all
                scheme related documents carefully before investing. Past
                performance is not indicative of future returns.
              </p>

              <p>
                We receive commission and trail commission from mutual fund
                companies for distributing their schemes. The commission
                structure varies across fund houses and schemes. Details are
                available on request.
              </p>

              <p>
                For grievance redressal, contact{" "}
                <a
                  href="mailto:ketan.srivastava@soundthesis.com"
                  className="text-linen hover:text-accent transition-colors duration-300"
                >
                  ketan.srivastava@soundthesis.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+918810642436"
                  className="text-linen hover:text-accent transition-colors duration-300"
                >
                  +91 88106 42436
                </a>
                . If unresolved for over 30 days, approach AMFI at{" "}
                <a
                  href="https://www.amfiindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linen hover:text-accent transition-colors duration-300"
                >
                  www.amfiindia.com
                </a>{" "}
                or SEBI SCORES portal.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "AMFI Registered Distributor",
                "Subject to Market Risks",
                "Read Scheme Documents",
                "No Guaranteed Returns",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-caption tracking-[0.12em] text-stone-light/70 px-4 py-2 border border-linen/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
