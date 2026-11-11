import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start with your business priority. Whether it's capability gaps, critical hiring, or operational improvement — let IGNOVA align the expertise to deliver results.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

