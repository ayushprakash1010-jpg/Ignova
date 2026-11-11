import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGNOVA Triage",
  description:
    "Role-specific capability development, technical learning, and leadership programs designed to improve workplace performance.",
};

export default function TriageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
