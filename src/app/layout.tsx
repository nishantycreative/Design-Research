import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import ScrollProgress from "@/components/motion/ScrollProgress";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Research — Interior Design Studio & Curated Collection",
  description:
    "Design Research is a Mumbai-based interior design studio led by Simran Chana. Focused on modern, quiet luxury, crafted materials, and slow, atmospheric spaces.",
  keywords: ["interior design mumbai", "luxury furniture india", "modern minimalist interior", "quiet luxury interior designer"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-paper text-ink-soft selection:bg-brass selection:text-paper">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
