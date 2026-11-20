"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CLIENT_LOGOS, type ClientLogo } from "@/lib/constants";

function LogoCard({ client, index }: { client: ClientLogo; index: number }) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative flex items-center justify-center h-20 sm:h-24 px-4 py-3 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-[#C86A28]/50 hover:shadow-md transition-all duration-300 text-center overflow-hidden"
      title={client.name}
      aria-label={client.name}
    >
      {!hasError ? (
        <img
          src={client.logo}
          alt={client.alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className={`w-auto ${client.maxHeight || "max-h-8 sm:max-h-9"} max-w-[125px] sm:max-w-[145px] object-contain transition-all duration-300 group-hover:scale-105 filter group-hover:contrast-105`}
        />
      ) : (
        <span className="text-xs sm:text-sm font-bold text-slate-700 font-accent tracking-tight">
          {client.name}
        </span>
      )}
    </motion.div>
  );
}

export default function ClientLogos() {
  return (
    <div className="space-y-10 w-full">
      {/* Industrial Clients Row */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
            Industrial &amp; Operational Excellence Mandates
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {CLIENT_LOGOS.industrial.map((client, index) => (
            <LogoCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </div>

      {/* Recruitment Clients Row */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
            Strategic Search &amp; Recruitment Mandates
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {CLIENT_LOGOS.recruitment.map((client, index) => (
            <LogoCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
