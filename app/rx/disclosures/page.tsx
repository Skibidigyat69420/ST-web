"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const tags = [
  "AMFI Registered Distributor",
  "Subject to Market Risks",
  "Read Scheme Documents",
  "No Guaranteed Returns",
];

export default function RxDisclosuresPage() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Header */}
      <header className="px-6 md:px-12 py-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            href="/rx"
            className="flex items-center gap-2 text-caption tracking-[0.15em] text-stone hover:text-charcoal transition-colors duration-500"
          >
            <ArrowLeft size={16} />
            BACK
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption tracking-[0.2em] text-stone block mb-6">
              REGULATORY DISCLOSURES
            </span>

            <div className="space-y-6 text-body-large text-charcoal-soft/90 leading-relaxed max-w-3xl">
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
                  href="mailto:hello@soundthesis.com"
                  className="text-accent hover:text-accent-deep transition-colors duration-300"
                >
                  hello@soundthesis.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+918810642436"
                  className="text-accent hover:text-accent-deep transition-colors duration-300"
                >
                  +91 88106 42436
                </a>
                . If unresolved for over 30 days, approach AMFI at{" "}
                <a
                  href="https://www.amfiindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-deep transition-colors duration-300"
                >
                  www.amfiindia.com
                </a>{" "}
                or SEBI SCORES portal.
              </p>
            </div>

            <motion.div
              className="mt-16 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-caption tracking-[0.15em] text-stone px-4 py-2 border border-border/60 rounded-full bg-ivory-light/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Dark footer */}
      <footer className="bg-dark px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-caption tracking-[0.2em] text-stone-light">
              SOUND THESIS
            </span>
            <span className="text-caption tracking-[0.2em] text-accent">
              Rx
            </span>
          </div>
          <span className="text-caption tracking-[0.1em] text-stone-light/60 text-center md:text-right">
            AMFI Registered Distributor · Pune, India
          </span>
        </div>
      </footer>
    </div>
  );
}
