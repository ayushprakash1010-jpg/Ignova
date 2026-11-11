"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  number: string;
  pillar: string;
  brand: string;
  items: string[];
  description: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  number,
  pillar,
  brand,
  items,
  description,
  href,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="h-full"
    >
      <Link href={href} className="group block h-full">
        <div className="executive-card p-8 sm:p-9 h-full flex flex-col justify-between">
          <div>
            {/* Pillar Badge & Index */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-[#C86A28] border border-[#C86A28]/20 font-accent">
                {pillar}
              </span>
              <span className="text-2xl font-black text-slate-200 group-hover:text-[#C86A28]/40 transition-colors font-heading">
                {number}
              </span>
            </div>

            {/* Brand Title */}
            <h3
              className="text-2xl font-extrabold text-[#0B2038] mb-3 group-hover:text-[#C86A28] transition-colors tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {brand}
            </h3>

            {/* Description / Mandate */}
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Core Capability Deliverables */}
            <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-accent">
                Key Deliverables
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-orange-500/10 text-[#C86A28] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#0B2038] group-hover:text-[#C86A28] transition-colors font-accent">
            <span>Explore Capability</span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#C86A28] group-hover:text-white transition-all duration-200">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
