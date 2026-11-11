"use client";

import { motion } from "framer-motion";
import { DELIVERY_STEPS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

interface StepperTimelineProps {
  steps?: typeof DELIVERY_STEPS;
  compact?: boolean;
}

export default function StepperTimeline({
  steps = DELIVERY_STEPS,
  compact = false,
}: StepperTimelineProps) {
  return (
    <div className="relative">
      <div
        className={`grid gap-4 sm:gap-6 ${
          compact
            ? "grid-cols-2 md:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        }`}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="executive-card p-6 flex flex-col justify-between group"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#C86A28] border border-[#C86A28]/20 flex items-center justify-center text-xs font-bold font-accent group-hover:bg-[#C86A28] group-hover:text-white transition-colors duration-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden md:block group-hover:text-[#C86A28] transition-colors" />
                )}
              </div>

              <h4
                className="text-lg font-bold text-[#0B2038] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.step}
              </h4>

              {!compact && (
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-[#C86A28] transition-colors font-accent">
              <span>Phase {index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
