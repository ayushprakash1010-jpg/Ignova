import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "orange" | "navy";
}

export default function CTABanner({
  title = "Ready to connect talent to business execution?",
  subtitle = "Start with your business priority. We will align the industrial and talent expertise.",
  buttonText = "Schedule a Consultation",
  buttonHref = "/contact",
  variant = "navy",
}: CTABannerProps) {
  return (
    <section className="py-20 md:py-28 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-3xl p-10 sm:p-14 md:p-16 overflow-hidden shadow-2xl ${
            variant === "orange" ? "bg-[#C86A28]" : "bg-[#0B2038]"
          }`}
        >
          {/* Subtle ambient light */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
              variant === "orange" ? "bg-white/10" : "bg-[#C86A28]/15"
            }`}
          />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-orange-200 border border-white/15 text-xs font-bold uppercase tracking-wider mb-6 font-accent">
              <span className="w-2 h-2 rounded-full bg-[#DF7C36]" />
              Executive Engagement
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#FFFFFF",
              }}
            >
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={buttonHref}
                className={variant === "orange" ? "btn-white" : "btn-primary"}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white/90 hover:text-white border border-white/20 hover:bg-white/10 transition-all font-accent"
              >
                Learn About Our Firm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
