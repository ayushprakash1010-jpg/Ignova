import Link from "next/link";
import { ArrowLeft, Compass, Target, Users, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const quickLinks = [
    {
      label: "IGNOVA Triage",
      href: "/services/triage",
      desc: "Workforce Capability Transformation",
      icon: Target,
    },
    {
      label: "IGNOVA Edge",
      href: "/services/edge",
      desc: "Strategic Talent Advisory & Search",
      icon: Users,
    },
    {
      label: "Project Execution",
      href: "/services/project-execution",
      desc: "Industrial Performance Consulting",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-bold uppercase tracking-widest mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 — Page Not Found</span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The strategy exists. <br />
          <span className="text-orange">This path doesn&apos;t.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto mb-10 leading-relaxed">
          The page you are looking for may have been relocated or is no longer available.
          Let&apos;s guide you back to our core capabilities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Button href="/" variant="primary" size="md">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </span>
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Team
          </Button>
        </div>

        {/* Quick Capabilities */}
        <div className="border-t border-slate-200/80 pt-10">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 font-accent">
            Explore Core Capabilities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-orange/40 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange/10 text-orange flex items-center justify-center mb-2.5 group-hover:bg-orange group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold text-navy group-hover:text-orange transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
