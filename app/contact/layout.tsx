import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sound Thesis Capital",
  description:
    "Get in touch with Sound Thesis Capital. Practice-building for advisors, specialist wealth management for medical professionals.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
