"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Car,
  Building2,
  Monitor,
  Heart,
  ArrowRight,
  Eye,
  Crosshair,
  BarChart3,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

const philosophyItems = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "See what the business needs before the gap becomes a crisis. We assess talent, capability and operating gaps to establish a performance baseline.",
  },
  {
    icon: Crosshair,
    title: "Rigor",
    description:
      "Apply structured methodology — not templates. Every intervention is customized around the role, the performance gap, and the business priority.",
  },
  {
    icon: BarChart3,
    title: "Results",
    description:
      "Measure what matters. From skill-gap closure to OEE improvement, we track performance domains with agreed baselines and clear ownership.",
  },
];

const sectors = [
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive", icon: Car },
  { name: "Financial Services", icon: Building2 },
  { name: "Technology", icon: Monitor },
  { name: "Healthcare", icon: Heart },
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
              21 years connecting shop floor realities to boardroom strategy.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ WHO WE ARE ============ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Who We Are"
                title="A Dual-Capability Firm That Connects People to Business Execution"
              />

              <div className="flex flex-wrap gap-3 mt-2">
                {["Vision. Rigor. Results.", "Foresight. Execution. Impact"].map(
                  (tagline) => (
                    <span
                      key={tagline}
                      className="px-4 py-2 bg-cream text-navy text-xs font-semibold rounded-full border border-navy/10"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      {tagline}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-cream/50 rounded-2xl p-8 border border-cream-dark shadow-sm"
            >
              <p className="text-lg text-charcoal leading-relaxed">
                IGNOVA Consulting & Academy is a dual-capability firm that
                connects people to business execution. We work across{" "}
                <span className="font-semibold text-navy">
                  talent acquisition
                </span>
                ,{" "}
                <span className="font-semibold text-navy">
                  talent development
                </span>
                , and{" "}
                <span className="font-semibold text-navy">
                  growth & transformation
                </span>{" "}
                — bringing industrial depth to every engagement.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                From building role-specific competencies to filling
                business-critical roles and supporting operational change,
                IGNOVA delivers measurable performance outcomes.
              </p>
              <div className="h-1.5 w-20 rounded-full bg-orange" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ OUR PHILOSOPHY ============ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Philosophy"
            title="Vision. Rigor. Results."
            subtitle="Three principles that define every engagement."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-8 border-t-4 border-t-orange border border-cream-dark shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-orange" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-navy mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">
                    {item.description}
                  </p>
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
          <p className="mt-8 text-center text-xs text-slate-400">
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
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-cream rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:bg-white border border-cream-dark hover:border-orange/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-navy/5 group-hover:bg-orange/10 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-navy group-hover:text-orange transition-colors duration-300" />
                  </div>
                  <h3
                    className="text-sm font-bold text-navy"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {sector.name}
                  </h3>
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
            title="Start With Your Business Priority"
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

                {/* Step number */}
                <div
                  className="text-6xl font-bold text-navy/[0.04] absolute top-4 right-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p
                  className="text-xs font-bold uppercase tracking-wider text-orange mb-2"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Your Priority
                </p>
                <h3
                  className="text-xl font-bold text-navy mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.trigger}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <ArrowRight className="w-5 h-5 text-orange flex-shrink-0" />
                  <span
                    className="text-base font-bold text-navy"
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
      />
    </>
  );
}
