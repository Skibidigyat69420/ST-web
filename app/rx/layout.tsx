import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sound Thesis Rx | Wealth, reimagined for medical professionals.",
  description:
    "A thesis-led wealth practice built for medical professionals in India. AMFI-registered. Pune.",
  keywords: [
    "wealth management",
    "financial planning",
    "investment management",
    "India",
    "mutual funds",
    "medical professionals",
    "physicians",
    "surgeons",
    "Sound Thesis Rx",
    "AMFI registered",
    "Pune",
  ],
  openGraph: {
    title: "Sound Thesis Rx | Wealth, reimagined for medical professionals.",
    description:
      "A thesis-led wealth practice built for medical professionals in India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="rx min-h-screen bg-ivory text-charcoal font-sans">
      {children}
    </div>
  );
}
