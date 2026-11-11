import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IGNOVA Consulting & Academy | Architect. Activate. Accelerate.",
    template: "%s | IGNOVA",
  },
  description:
    "Three capabilities. One partner. Connecting people to business execution through talent acquisition, talent development, and growth & transformation.",
  keywords: [
    "IGNOVA",
    "consulting",
    "academy",
    "talent acquisition",
    "talent development",
    "industrial consulting",
    "leadership development",
    "executive search",
    "operational improvement",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
