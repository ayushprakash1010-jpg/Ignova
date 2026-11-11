"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/constants";

export default function ClientLogos() {
  return (
    <div className="space-y-10 w-full">
      {/* Industrial Clients Row */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
            Industrial & Operational Excellence Mandates
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {CLIENTS.industrial.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center p-5 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#C86A28]/40 hover:shadow-sm transition-all duration-200 text-center"
            >
              <span className="text-sm font-bold text-slate-700 font-accent tracking-tight">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recruitment Clients Row */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
            Strategic Search & Recruitment Mandates
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {CLIENTS.recruitment.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex items-center justify-center p-5 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#C86A28]/40 hover:shadow-sm transition-all duration-200 text-center"
            >
              <span className="text-sm font-bold text-slate-700 font-accent tracking-tight">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
