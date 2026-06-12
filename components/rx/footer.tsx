"use client";

import { FadeIn } from "./text-split";

export function Footer() {
  return (
    <footer className="relative bg-dark py-20 px-6 border-t border-white/4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <FadeIn>
              <span className="text-caption tracking-[0.25em] text-linen block mb-1">
                SOUND THESIS
              </span>
              <span className="text-caption tracking-[0.3em] text-accent block mb-4">
                Rx
              </span>
              <p className="text-body text-stone-light max-w-xs leading-relaxed">
                A thesis-led wealth practice for medical professionals in India. Pune.
              </p>
            </FadeIn>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-6">
            <FadeIn delay={0.1}>
              <span className="text-caption tracking-[0.15em] text-stone-light block mb-4">
                Contact
              </span>
              <div className="space-y-2">
                <p className="text-body text-stone-light">
                  ketan.srivastava@soundthesis.com
                </p>
                <p className="text-body text-stone-light">
                  +91 8810642436
                </p>
                <p className="text-body text-stone-light mt-4">
                  PL. NO. 67, OFFICE NO. 207,<br />
                  ASHOK SANKUL, Gokhalenagar,<br />
                  Pune, Maharashtra, 411016
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Regulatory */}
          <div className="md:col-span-3">
            <FadeIn delay={0.2}>
              <span className="text-caption tracking-[0.15em] text-stone-light block mb-4">
                Regulatory
              </span>
              <div className="space-y-2">
                <a
                  href="/rx/disclosures"
                  className="text-body text-stone-light hover:text-linen transition-colors duration-500 block"
                >
                  Disclosures
                </a>
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-stone-light hover:text-linen transition-colors duration-500 block"
                >
                  SEBI SCORES
                </a>
                <a
                  href="https://www.amfiindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-stone-light hover:text-linen transition-colors duration-500 block"
                >
                  AMFI India
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom bar */}
        <FadeIn delay={0.3}>
          <div className="mt-20 pt-8 border-t border-white/4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-caption tracking-[0.1em] text-stone-light/50">
              &copy; {new Date().getFullYear()} Sound Thesis Capital. All rights
              reserved.
            </p>
            <p className="text-caption tracking-[0.1em] text-stone-light/50 text-center md:text-right max-w-md">
              AMFI Registered Mutual Fund Distributor &middot; Pune, India
            </p>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn delay={0.4}>
          <p className="mt-8 text-[0.65rem] leading-relaxed text-stone-light/35 text-center max-w-4xl mx-auto">
            Investments in securities markets are subject to market risks. Read
            all related documents carefully before investing. Past performance
            is not indicative of future returns. Registration does not imply
            endorsement by SEBI. Please refer to our disclosures page for
            complete regulatory information, risk factors, fee structures, and
            grievance redressal mechanism.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
