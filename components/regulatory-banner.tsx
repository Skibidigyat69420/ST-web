"use client";

import { FadeIn } from "./text-split";

export function RegulatoryBanner() {
  return (
    <section className="relative py-16 md:py-20 px-6 bg-sand border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-caption tracking-[0.2em] text-stone block mb-6">
            Regulatory Disclosures
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4 text-body text-stone-light leading-relaxed">
            <p>
              Sound Thesis Capital is an AMFI registered Mutual Fund Distributor.
              We currently do not hold SEBI registrations for Investment Adviser,
              Portfolio Manager, or Alternative Investment Fund. These registrations
              are under application.
            </p>
            <p>
              Mutual Fund investments are subject to market risks. Read all scheme
              related documents carefully before investing. Past performance is not
              indicative of future returns.
            </p>
            <p>
              We receive commission and trail commission from mutual fund companies
              for distributing their schemes. The commission structure varies across
              fund houses and schemes. Details are available on request.
            </p>
            <p>
              For grievance redressal, contact hello@soundthesis.com or call
              +91 88106 42436. If unresolved for over 30 days, approach AMFI at
              www.amfiindia.com or SEBI SCORES portal.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap gap-3">
            {[
              "AMFI Registered Distributor",
              "Subject to Market Risks",
              "Read Scheme Documents",
              "No Guaranteed Returns",
            ].map((tag) => (
              <span
                key={tag}
                className="text-caption tracking-[0.1em] text-stone-light px-3 py-1.5 border border-border/50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
