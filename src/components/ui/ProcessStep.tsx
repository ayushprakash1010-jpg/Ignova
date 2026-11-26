"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
  number?: string;
  title: string;
  description: string;
  output: string;
  index: number;
}

export default function ProcessStep({
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
      className="relative bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full flex flex-col justify-between"
    >
      <div>
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange/70 via-orange-light to-orange/70 group-hover:from-orange group-hover:via-orange group-hover:to-orange transition-colors duration-300" />

        {/* Title */}
        <h3
          className="text-xl xl:text-2xl font-bold text-navy mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-charcoal-light text-[15px] mb-5 leading-relaxed">{description}</p>
      </div>

      {/* Output */}
      <div className="pt-4 border-t border-cream-dark">
        <span
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-orange bg-orange/5 px-3.5 py-1.5 rounded-full whitespace-nowrap"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          → {output}
        </span>
      </div>
    </motion.div>
  );
}
