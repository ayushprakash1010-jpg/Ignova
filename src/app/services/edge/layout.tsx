import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGNOVA Edge",
  description:
    "Strategic talent advisory and executive search for critical leadership and specialist roles.",
};

export default function EdgeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
