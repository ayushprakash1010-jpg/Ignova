import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "21 years connecting shop floor realities to boardroom strategy. IGNOVA brings industrial depth to talent and capability decisions across manufacturing, automotive, financial services, technology, and healthcare.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

