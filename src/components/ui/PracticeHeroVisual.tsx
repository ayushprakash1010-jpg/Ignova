"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PracticeHeroVisualProps {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
  objectPosition?: string;
}

export default function PracticeHeroVisual({
  src,
  alt,
  eyebrow,
  caption,
  objectPosition = "object-center",
}: PracticeHeroVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.2 }}
      className="relative"
    >
      {/* Subtle layered accent backing */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute -inset-3 rounded-3xl bg-gradient-to-br from-orange/15 via-transparent to-navy/10 -z-10"
      />

      <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8E2D5] bg-navy">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className={`object-cover ${objectPosition}`}
        />

        {/* Subtle editorial caption gradient */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B2038]/90 via-[#0B2038]/45 to-transparent pt-14 pb-5 px-6">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#DF7C36] font-accent mb-1">
            {eyebrow}
          </span>
          <p className="text-sm sm:text-[15px] font-medium text-white leading-snug">
            {caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
