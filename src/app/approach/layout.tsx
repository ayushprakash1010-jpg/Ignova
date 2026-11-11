import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "The IGNOVA Factor: a four-step methodology — Diagnose, Prioritize, Execute, Sustain — that connects performance gaps to accountable execution and measurable outcomes.",
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

