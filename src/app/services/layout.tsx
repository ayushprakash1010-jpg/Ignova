import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three capabilities, one partner. IGNOVA Triage for capability development, IGNOVA Edge for talent acquisition, and Project Execution for operational improvement.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

