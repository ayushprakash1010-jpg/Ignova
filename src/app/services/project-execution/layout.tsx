import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Execution",
  description:
    "Industrial performance consulting focused on quality, productivity, operational ownership, and sustained improvement.",
};

export default function ProjectExecutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
