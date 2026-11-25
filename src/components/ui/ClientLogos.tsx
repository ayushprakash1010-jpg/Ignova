"use client";

import { useState } from "react";
import { CLIENT_LOGOS, type ClientLogo } from "@/lib/constants";

function LogoCard({ client }: { client: ClientLogo }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative flex items-center justify-center h-20 sm:h-24 px-4 py-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-[#C86A28]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center overflow-hidden"
      title={client.name}
      aria-label={client.name}
    >
      {!hasError ? (
        <img
          src={client.logo}
          alt={client.alt}
          loading="eager"
          decoding="async"
          onError={() => setHasError(true)}
          className={`w-auto ${client.maxHeight || "max-h-8 sm:max-h-9"} max-w-[125px] sm:max-w-[145px] object-contain transition-transform duration-300 opacity-100 group-hover:scale-105`}
        />
      ) : (
        <span className="text-xs sm:text-sm font-bold text-slate-700 font-accent tracking-tight">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div className="space-y-3.5 sm:space-y-4 w-full">
      {/* Industrial Clients Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {CLIENT_LOGOS.industrial.map((client) => (
          <LogoCard key={client.name} client={client} />
        ))}
      </div>

      {/* Recruitment Clients Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {CLIENT_LOGOS.recruitment.map((client) => (
          <LogoCard key={client.name} client={client} />
        ))}
      </div>
    </div>
  );
}
