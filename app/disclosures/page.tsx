"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

const disclosureSections = [
  {
    title: "AMFI Mutual Fund Distributor Disclosure",
    status: "active",
    content: `
Sound Thesis Capital is an AMFI registered Mutual Fund Distributor holding ARN-XXXXX.

Disclosures:
• We receive commission / trail commission from mutual fund companies for distributing their schemes
• The commission structure varies across fund houses and schemes
• Details of actual commission received are available on request
• We do not assure or guarantee any returns on mutual fund investments
• Investors are advised to read all scheme related documents carefully before investing

Investors may visit www.amfiindia.com for information on mutual funds.
    `,
  },
  {
    title: "SEBI Investment Adviser Registration",
    status: "coming-soon",
    content: `
Application under review with the Securities and Exchange Board of India (SEBI).

This registration will enable us to provide investment advice and guidance across asset classes under the SEBI (Investment Advisers) Regulations, 2013.

Status: Coming Soon
    `,
  },
  {
    title: "SEBI Portfolio Manager Registration",
    status: "coming-soon",
    content: `
Application under review with the Securities and Exchange Board of India (SEBI).

This registration will enable discretionary portfolio management services for qualified investors with a minimum investment of ₹50,00,000 (Fifty Lakhs), under the SEBI (Portfolio Managers) Regulations, 2020.

Status: Coming Soon
    `,
  },
  {
    title: "SEBI Alternative Investment Fund Registration",
    status: "coming-soon",
    content: `
Application under review with the Securities and Exchange Board of India (SEBI).

This registration will enable Category II AIF offerings for sophisticated investors with a minimum investment of ₹1,00,00,000 (One Crore), under the SEBI (Alternative Investment Funds) Regulations, 2012.

Status: Coming Soon
    `,
  },
  {
    title: "Structured Investment Funds (SIF)",
    status: "coming-soon",
    content: `
Structured Investment Fund distribution services are planned for launch upon completion of relevant regulatory registrations.

Status: Coming Soon
    `,
  },
  {
    title: "Trust & Succession Services",
    status: "coming-soon",
    content: `
Trust structuring and succession planning services will be offered in collaboration with qualified legal professionals upon formal launch of the family stewardship practice.

Status: Coming Soon
    `,
  },
  {
    title: "General Risk Disclosures",
    status: "active",
    content: `
All investments in securities markets are subject to market risks. Investors should read all related documents carefully before investing.

Key Risks:
• Market Risk: The value of investments may fluctuate due to changes in market conditions, economic factors, or geopolitical events
• Liquidity Risk: Some investments may not be easily convertible to cash without significant loss in value
• Credit Risk: The possibility that an issuer may default on interest or principal payments
• Interest Rate Risk: Changes in interest rates may affect the value of fixed-income securities
• Currency Risk: International investments are subject to exchange rate fluctuations
• Regulatory Risk: Changes in laws and regulations may impact investment values and strategies

Past performance is not indicative of future returns. Sound Thesis Capital does not guarantee any returns on investments.
    `,
  },
  {
    title: "Grievance Redressal",
    status: "active",
    content: `
We are committed to resolving investor grievances in a timely and fair manner.

Escalation:
If the grievance remains unresolved for more than 30 days, investors may approach:

AMFI: https://www.amfiindia.com/investor-corner/grievance-redressal
SEBI SCORES Portal: https://scores.sebi.gov.in (once SEBI registration is obtained)

We maintain a grievance register and will provide quarterly updates on complaint status as required.
    `,
  },
  {
    title: "Conflict of Interest",
    status: "active",
    content: `
Sound Thesis Capital maintains strict policies to manage conflicts of interest:

• We disclose all material associations with product providers, fund houses, and related parties
• Research recommendations are independent and not influenced by commercial relationships
• Employees are prohibited from trading in securities that are under active recommendation
• Gifts and entertainment from product providers are limited and disclosed
• Cross-selling of products is done only when it is in the client's best interest
• Associates and related parties are disclosed to clients at the time of onboarding

A detailed Conflict of Interest Policy is available upon request.
    `,
  },
];

function AccordionItem({
  title,
  content,
  status,
  index,
}: {
  title: string;
  content: string;
  status: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const isComingSoon = status === "coming-soon";

  return (
    <motion.div
      className="border-b border-border/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-4 pr-8">
          <span className={`text-subhead font-serif group-hover:text-accent transition-colors duration-500 ${isComingSoon ? "text-stone-light" : "text-charcoal"}`}>
            {title}
          </span>
          {isComingSoon && (
            <span className="flex items-center gap-1.5 text-caption tracking-[0.1em] text-accent-deep px-2.5 py-1 border border-accent-deep/20 rounded-full bg-accent-deep/5">
              <Clock size={11} />
              Coming Soon
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ChevronDown size={18} className="text-stone flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-8 pr-8">
          <div className={`text-body whitespace-pre-line leading-relaxed max-w-3xl ${isComingSoon ? "text-stone-light" : "text-stone"}`}>
            {content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DisclosuresPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="px-6 md:px-12 py-6 border-b border-border/30">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-caption tracking-[0.15em] text-stone hover:text-charcoal transition-colors duration-500"
          >
            <ArrowLeft size={16} />
            BACK
          </Link>
        </div>
      </header>

      <main className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caption tracking-[0.2em] text-stone block mb-4">
              Regulatory
            </span>
            <h1 className="text-headline text-charcoal mb-4 font-serif">
              Disclosures
            </h1>
            <p className="text-body-large text-stone mb-4 max-w-xl">
              Complete regulatory information, risk factors, and grievance
              redressal details for Sound Thesis Capital.
            </p>
            <p className="text-body text-stone-light mb-16 max-w-xl">
              We currently operate as an AMFI registered Mutual Fund Distributor.
              Additional SEBI registrations are under application.
            </p>
            <div className="mb-12 space-y-1">
              <p className="text-body text-stone">+91 88106 42436</p>
              <p className="text-body text-stone">hello@soundthesis.com</p>
              <p className="text-body text-stone mt-3">
                PL. NO. 67, OFFICE NO. 207, ASHOK SANKUL,<br />
                Gokhalenagar, Haveli, Pune, Maharashtra, India, 411016
              </p>
            </div>
          </motion.div>

          <div>
            {disclosureSections.map((section, index) => (
              <AccordionItem
                key={section.title}
                title={section.title}
                content={section.content}
                status={section.status}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="mt-20 pt-8 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-caption tracking-[0.1em] text-stone-light mb-4">
              LAST UPDATED
            </p>
            <p className="text-body text-stone">
              {new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-caption tracking-[0.2em] text-stone-light">
            SOUND THESIS
          </span>
          <span className="text-caption tracking-[0.1em] text-stone-light/60 text-center md:text-right">
            Applies to Sound Thesis Capital and Sound Thesis Rx · AMFI Registered Distributor · Pune, India
          </span>
        </div>
      </footer>
    </div>
  );
}
