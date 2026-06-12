import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Sound Thesis Capital",
  description: "Thank you for getting in touch with Sound Thesis Capital.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-dark text-linen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-caption tracking-[0.25em] text-accent block mb-6">
        Message Received
      </span>
      <h1 className="text-display-sm text-linen mb-6">Thank you.</h1>
      <p className="text-body-large text-stone-light max-w-md mb-10">
        We have received your message and will be in touch within one business day.
      </p>
      <a
        href="/"
        className="group relative px-8 py-4 border border-linen/15 text-linen text-caption tracking-[0.15em] hover:bg-linen/5 transition-all duration-500"
      >
        <span className="relative z-10">Back to Home</span>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      </a>
    </div>
  );
}
