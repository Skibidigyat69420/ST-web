import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sound Thesis Capital | Wealth, reimagined with reason.",
  description:
    "A thesis-led wealth practice for professionals, practitioners, and families who believe that structure precedes returns. AMFI-registered. Pune.",
  keywords: [
    "wealth management",
    "financial advisory",
    "investment management",
    "India",
    "mutual funds",
    "PMS",
    "AIF",
    "family office",
    "thesis-led",
    "quiet luxury",
    "SEBI registered",
  ],
  openGraph: {
    title: "Sound Thesis Capital | Wealth, reimagined with reason.",
    description:
      "A thesis-led wealth practice for professionals, practitioners, and families who believe that structure precedes returns.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
