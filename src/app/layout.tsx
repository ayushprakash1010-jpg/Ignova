import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "IGNOVA Consulting & Academy | Architect. Activate. Accelerate.",
    description:
      "Three capabilities. One partner. Connecting people to business execution.",
    url: "https://ignova-ek2m.vercel.app",
    siteName: "IGNOVA Consulting & Academy",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "IGNOVA Consulting & Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGNOVA Consulting & Academy",
    description:
      "Three capabilities. One partner. Connecting people to business execution.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ignova-ek2m.vercel.app/#organization",
      "name": "IGNOVA Consulting & Academy",
      "url": "https://ignova-ek2m.vercel.app",
      "logo": "https://ignova-ek2m.vercel.app/images/ignova-logo.png",
      "email": "ignovacobsulting26@gmail.com",
      "telephone": "+91 99715 24733",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "L14C, Orchard Smartworld, Sector 61",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      },
      "description":
        "Three capabilities under one trusted partner. Connecting people to business execution through industrial depth, strategic search, and workforce transformation.",
      "knowsAbout": [
        "Workforce Capability Transformation",
        "Strategic Talent Advisory & Search",
        "Industrial Performance Consulting",
        "Lean Manufacturing & Six Sigma",
        "Quality Engineering"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ignova-ek2m.vercel.app/#website",
      "url": "https://ignova-ek2m.vercel.app",
      "name": "IGNOVA Consulting & Academy",
      "publisher": {
        "@id": "https://ignova-ek2m.vercel.app/#organization"
      }
    }
  ]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
