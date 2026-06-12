"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string || "").trim();
    const email = (data.get("email") as string || "").trim();
    const phone = (data.get("phone") as string || "").trim();
    const iAmA = (data.get("role") as string || "").trim();
    const message = (data.get("message") as string || "").trim();
    const website = (data.get("website") as string || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxHohmQ3AFAlq7Sl3rQHUsa83gYtGgB4PK7_qZxEY6mQqakQ4pXI2HJ7YNYoD48aNuMPA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify({ name, email, phone, iAmA, message, website }),
          mode: "no-cors",
        }
      );

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-transparent border border-linen/15 rounded-sm text-body text-linen placeholder:text-stone-light/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300";

  return (
    <div className="min-h-screen bg-dark text-linen overflow-hidden">
      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-[30%] -right-[15%] w-[70vw] h-[70vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,148,125,0.08) 0%, transparent 65%)",
          }}
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[20%] -left-[20%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,176,146,0.05) 0%, transparent 65%)",
          }}
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5">
          <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full px-6 py-3 bg-dark/75 backdrop-blur-xl border border-linen/10">
            <a
              href="/"
              className="text-caption tracking-[0.25em] text-linen hover:text-accent transition-colors duration-500"
            >
              SOUND THESIS
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-caption tracking-[0.15em] text-stone-light hover:text-linen transition-colors duration-500"
              >
                Main Site
              </a>
              <a
                href="/rx"
                className="text-caption tracking-[0.15em] text-stone-light hover:text-linen transition-colors duration-500"
              >
                Rx
              </a>
            </nav>
          </div>
        </header>

        <main className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="mb-16 md:mb-24">
              <span className="text-caption tracking-[0.25em] text-accent block mb-6">
                Get in Touch
              </span>
              <h1 className="text-display text-linen mb-6">Begin the conversation.</h1>
              <p className="text-body-large text-stone-light max-w-xl">
                Tell us a little about yourself and what you are looking for. We will
                respond within one business day.
              </p>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Details */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-headline text-linen mb-4">Sound Thesis Capital</h2>
                  <p className="text-body text-stone-light max-w-md">
                    A thesis-led wealth practice for professionals, practitioners, and
                    families who believe that structure precedes returns.
                  </p>
                </div>

                <div className="space-y-6">
                  <ContactDetail label="Email" value="ketan.srivastava@soundthesis.com" />
                  <ContactDetail label="Phone" value="+91 8810642436" />
                  <ContactDetail
                    label="Location"
                    value="PL. NO. 67, OFFICE NO. 207, ASHOK SANKUL, Gokhalenagar, Pune, Maharashtra, 411016"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="bg-dark-surface border border-linen/10 p-8 md:p-10 rounded-sm">
                {error && (
                  <div
                    className="mb-6 px-4 py-3 text-body bg-red-500/10 text-red-200 border border-red-500/20"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                {success && (
                  <div
                    className="mb-6 px-4 py-3 text-body bg-green-500/10 text-green-200 border border-green-500/20"
                    role="status"
                  >
                    Thank you. We have received your message and will respond within one business day.
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Honeypot */}
                  <div className="hidden">
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="text-caption tracking-[0.15em] text-stone-light block mb-2"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-caption tracking-[0.15em] text-stone-light block mb-2"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-caption tracking-[0.15em] text-stone-light block mb-2"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="+91 8810642436"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="text-caption tracking-[0.15em] text-stone-light block mb-2"
                    >
                      I am a
                    </label>
                    <select
                      id="role"
                      name="role"
                      className={`${inputClasses} text-stone-light/60`}
                      defaultValue=""
                    >
                      <option value="">Select one</option>
                      <option value="ca-cfa">CA / CFA / Advisor</option>
                      <option value="doctor">Medical Professional</option>
                      <option value="family">Family Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-caption tracking-[0.15em] text-stone-light block mb-2"
                    >
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full px-8 py-4 border border-linen/15 text-linen text-caption tracking-[0.15em] hover:bg-linen/5 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ContactDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-caption tracking-[0.2em] text-stone-light/70 mb-1">{label}</p>
      <p className="text-body-large text-linen">{value}</p>
    </div>
  );
}
