import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "orange" | "navy";
}

export default function CTABanner({
  title = "Ready to connect talent to business execution?",
  subtitle = "Start with mandate calibration and performance goals. We align the industrial and talent expertise.",
  buttonText = "Schedule a Consultation",
  buttonHref = "/contact",
  secondaryButtonText = "Learn About Our Firm",
  secondaryButtonHref = "/about",
  variant = "navy",
}: CTABannerProps) {
  return (
    <section className="py-12 md:py-16 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-2xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl ${
            variant === "orange"
              ? "bg-[#C86A28]"
              : "bg-[#0B2038] border border-white/10"
          }`}
        >
          {/* Top copper hairline signature accent */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DF7C36] via-[#F59E56] to-[#DF7C36]"
          />

          {/* Subtle architectural blueprint texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* Subtle warm ambient corner */}
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#DF7C36]/10 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] text-[#F59E56] border border-white/15 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] mb-5 font-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF7C36]" />
                Executive Engagement
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.15] mb-4 tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#FFFFFF",
                }}
              >
                {title}
              </h2>

              {subtitle && (
                <p
                  className={`text-base sm:text-lg leading-relaxed max-w-xl ${
                    variant === "orange" ? "text-white/95" : "text-slate-300"
                  }`}
                >
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3.5 lg:flex-shrink-0">
              <Link
                href={buttonHref}
                className={`${
                  variant === "orange" ? "btn-white" : "btn-primary"
                } whitespace-nowrap`}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {secondaryButtonText && secondaryButtonHref && (
                <Link
                  href={secondaryButtonHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold rounded-xl text-white hover:text-white border border-white/25 hover:border-white/45 hover:bg-white/[0.08] transition-all font-accent whitespace-nowrap"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
