"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  Cog,
  Building2,
  Monitor,
  Heart,
  ArrowRight,
  GraduationCap,
  Briefcase,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import { STATS, SERVICES } from "@/lib/constants";

const sectors = [
  {
    name: "Manufacturing",
    icon: Factory,
    focus: "Process optimization, lean flow & smart plant systems",
  },
  {
    name: "Automotive & Mobility",
    icon: Cog,
    focus: "Tier-1 component engineering, precision tooling & assembly",
  },
  {
    name: "Financial Services",
    icon: Building2,
    focus: "Banking operations, risk governance & digital transformation",
  },
  {
    name: "Technology",
    icon: Monitor,
    focus: "Enterprise platforms, product leadership & scale operations",
  },
  {
    name: "Healthcare",
    icon: Heart,
    focus: "Life sciences, diagnostics & rigorous compliance standards",
  },
];

const capabilityPillars = [
  {
    ...SERVICES.architect,
    subheading: "Architect the Foundation",
    icon: GraduationCap,
  },
  {
    ...SERVICES.activate,
    subheading: "Activate the Vanguard",
    icon: Briefcase,
  },
  {
    ...SERVICES.accelerate,
    subheading: "Accelerate Value Realization",
    icon: TrendingUp,
  },
];

const howWeWork = [
  {
    trigger: "Capability gaps",
    solution: "IGNOVA TRIAGE",
    href: "/services/triage",
  },
  {
    trigger: "Critical hiring",
    solution: "IGNOVA EDGE",
    href: "/services/edge",
  },
  {
    trigger: "Operational improvement",
    solution: "PROJECT EXECUTION",
    href: "/services/project-execution",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-cream overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#0B2038]/[0.02] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-[0.25em] text-orange mb-6 inline-block px-4 py-1.5 rounded-full bg-orange/5"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Bring Industrial Depth to{" "}
              <span className="text-orange">Talent</span> and{" "}
              <span className="text-orange">Capability</span> Decisions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-charcoal-light max-w-2xl mx-auto leading-relaxed"
            >
              50 years connecting shop floor realities to boardroom strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Button href="#who-we-are" variant="primary" size="lg">
                Explore Our Story
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Discuss Strategic Mandates
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ WHO WE ARE ============ */}
      <section id="who-we-are" className="py-24 md:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Who We Are"
            title="Three Capabilities. One Partner."
            subtitle="IGNOVA Consulting & Academy operates at the intersection of capability transformation, strategic search, and operational execution — connecting shopfloor realities directly to boardroom strategy."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
            {capabilityPillars.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.brand}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="group relative bg-[#FAF8F5] rounded-2xl p-8 border border-[#EBE4DA] shadow-xs hover:shadow-xl hover:bg-white hover:border-orange/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange via-orange-light to-orange opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-orange font-accent block">
                      {cap.subheading}
                    </span>

                    <h3
                      className="text-2xl font-bold text-navy mt-1.5 mb-5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cap.brand}
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {cap.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[15px] sm:text-base text-charcoal-light leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={cap.href}
                    className="pt-4 border-t border-[#EBE4DA] flex items-center justify-between text-[15px] font-bold text-navy group-hover:text-orange transition-colors font-accent"
                  >
                    <span>Explore {cap.brand}</span>
                    <ArrowRight className="w-4 h-4 text-orange group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CREDIBILITY STATS ============ */}
      <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-52 h-52 border border-white/[0.04] rounded-full" />
          <div className="absolute bottom-10 left-10 w-72 h-72 border border-white/[0.04] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Experience & Credibility"
            title="Experience at a Glance"
            subtitle="Shop floor and boardroom"
            centered
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} light />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            Experience figures are based on the IGNOVA-provided corporate profile.
          </p>
        </div>
      </section>

      {/* ============ SECTORS SERVED ============ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Sectors We Serve"
            title="Apply Experience Across Sectors & Business Functions"
            subtitle="Deep cross-functional capability honed across demanding industrial and enterprise operating environments."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-cream rounded-2xl p-6 text-left shadow-xs hover:shadow-lg hover:bg-white border border-cream-dark hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-orange/10 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-navy group-hover:text-orange transition-colors duration-300" />
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-navy mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {sector.name}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-charcoal-light leading-relaxed">
                      {sector.focus}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ HOW WE WORK ============ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How We Work"
            title="Calibrate Mandates to Execution"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeWork.map((item, index) => (
              <motion.div
                key={item.solution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-cream-dark hover:-translate-y-1 overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange via-orange-light to-orange" />

                <p
                  className="text-sm font-bold uppercase tracking-wider text-orange mb-2"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Strategic Mandate
                </p>
                <h3
                  className="text-2xl font-bold text-navy mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.trigger}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <ArrowRight className="w-5 h-5 text-orange flex-shrink-0" />
                  <span
                    className="text-lg font-bold text-navy"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {item.solution}
                  </span>
                </div>

                <Button href={item.href} variant="ghost" size="sm">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <CTABanner
        variant="navy"
        title="Align the Mandate. Mobilize Expertise. Deliver Performance."
        buttonText="Explore Our Services"
        buttonHref="/services"
        secondaryButtonText="Explore Our Approach"
        secondaryButtonHref="/approach"
      />
    </>
  );
}
