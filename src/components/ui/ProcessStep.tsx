"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  output: string;
  index: number;
}

export default function ProcessStep({
  number,
  title,
  description,
  output,
  index,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative bg-white rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange via-orange-light to-orange" />

      {/* Number Badge */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange text-white text-xl font-bold mb-6 shadow-md">
        {number}
      </div>

      {/* Title */}
      <h3
        className="text-2xl font-bold text-navy mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-charcoal-light mb-5 leading-relaxed">{description}</p>

      {/* Output */}
      <div className="pt-4 border-t border-cream-dark">
        <span
          className="inline-flex items-center gap-2 text-sm font-bold text-orange bg-orange/5 px-4 py-2 rounded-full"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          → {output}
        </span>
      </div>
    </motion.div>
  );
}
