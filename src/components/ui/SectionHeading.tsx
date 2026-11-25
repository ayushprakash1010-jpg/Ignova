interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {label && (
        <div className="mb-3.5">
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider ${
              light
                ? "bg-white/10 text-orange-200 border border-white/15"
                : "bg-orange-500/10 text-[#C86A28] border border-[#C86A28]/20"
            }`}
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {label}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight leading-tight`}
        style={{
          fontFamily: "var(--font-heading)",
          color: light ? "#FFFFFF" : "#0B2038",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg md:text-[19px] leading-relaxed`}
          style={{
            color: light ? "#CBD5E1" : "#475569",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
