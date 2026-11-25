"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Shield,
  Cog,
  Wrench,
  Monitor,
  Factory,
  TrendingUp,
  Layers,
  RefreshCw,
  Eye,
  Hammer,
  Users,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStep from "@/components/ui/ProcessStep";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";

/* ──────────────────────── DATA ──────────────────────── */

const FOCUS_AREAS = [
  {
    number: "01",
    title: "Quality Engineering",
    description: "Prevent defects and strengthen yield",
    icon: Shield,
  },
  {
    number: "02",
    title: "Production Systems",
    description: "Improve flow, throughput and bottlenecks",
    icon: Cog,
  },
  {
    number: "03",
    title: "Equipment Reliability",
    description: "Reduce downtime and improve availability",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Industrial Digitalization",
    description: "Increase shop floor visibility and process control",
    icon: Monitor,
  },
  {
    number: "05",
    title: "Plant & Process Readiness",
    description: "Strengthen greenfield and brownfield readiness",
    icon: Factory,
  },
];

const AMBITION_COLUMNS = [
  {
    title: "Industry 4.0 & Smart Factory",
    icon: Cpu,
    items: [
      "Connected operations & real-time visibility",
      "Automation, IoT & digital performance systems",
      "Data-led decisions for quality, productivity & control",
    ],
  },
  {
    title: "Brownfield & Greenfield",
    icon: Layers,
    items: [
      "Greenfield project planning, setup & commissioning",
      "Operating model, structure & governance design",
      "Support from the initial planning to mass production",
    ],
  },
  {
    title: "Business Transformation",
    icon: RefreshCw,
    items: [
      "Operational excellence across quality, cost & delivery",
      "Making Organization GPWD certified & strengthen culture",
      "Leadership capability, change adoption & execution discipline",
    ],
  },
];

const METHODOLOGY_STAGES = [
  {
    number: "01",
    title: "Establish baseline",
    description: "Measure losses, quality and flow",
    output: "Diagnostic baseline",
  },
  {
    number: "02",
    title: "Engineer actions",
    description: "Validate causes; design actions",
    output: "Improvement roadmap",
  },
  {
    number: "03",
    title: "Implement on site",
    description: "Run trials; build operator capability",
    output: "Action tracking",
  },
  {
    number: "04",
    title: "Validate & sustain",
    description: "Track KPIs; transfer ownership",
    output: "KPI validation + standard controls",
  },
];

const ON_SITE_STEPS = [
  {
    number: "01",
    title: "Diagnose at source",
    description: "Observe operating conditions and constraints",
    icon: Eye,
  },
  {
    number: "02",
    title: "Build through practice",
    description: "Apply workshops to real operating challenges",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Execute across functions",
    description: "Own corrective actions and review progress",
    icon: Users,
  },
];

/* ──────────────────────── PAGE ──────────────────────── */

export default function ProjectExecutionPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[85vh] flex items-center bg-cream overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0F2B4C 1px, transparent 1px), linear-gradient(90deg, #0F2B4C 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pb-28">
          <div className="max-w-4xl">
            {/* Pillar tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span
                className="inline-block px-4 py-2 bg-orange/10 text-orange text-sm font-bold uppercase tracking-[0.2em] rounded-full border border-orange/20"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Accelerate
              </span>
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-bold uppercase tracking-[0.25em] text-orange mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Project Execution
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Connect Workforce
              <br />
              Readiness to{" "}
              <span className="text-orange">Operational Performance</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-charcoal-light max-w-2xl mb-8 leading-relaxed"
            >
              People + Processes + Technology: Develop operating capability alongside the
              systems that sustain it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Operational Challenges
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-navy/30" />
        </motion.div>
      </section>

      {/* ============ OPERATIONAL CAPABILITIES ============ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Operational Capability"
            title="Five Focus Areas for Improvement"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {FOCUS_AREAS.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    {/* Number */}
                    <span
                      className="absolute top-5 right-5 text-4xl font-bold text-navy/10"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {area.number}
                    </span>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3
                      className="text-xl font-bold text-navy mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-charcoal-light text-sm sm:text-[15px] leading-relaxed mt-2 pt-3 border-t border-navy/5">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ BUSINESS AMBITION SCOPE ============ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Project Execution"
            title="Business Ambition Sets the Agenda"
            subtitle="Action across market opportunity, the operating model and the people needed to deliver."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AMBITION_COLUMNS.map((col, index) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white mb-6 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-xl font-bold text-navy mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {col.title}
                  </h3>

                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] sm:text-base text-charcoal-light"
                      >
                        <ArrowRight className="w-4 h-4 text-orange mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p
              className="inline-block px-6 py-3 bg-navy/5 text-navy text-[15px] font-medium rounded-full border border-navy/10"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              The scope aligns with your strategic mandates — from Industry 4.0 and
              capacity expansion to operational performance transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Project Execution Methodology"
            title="Impact Through Capability, Controls & Ownership"
            subtitle="Establishing baseline rigor, engineered countermeasures, and standard controls."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {METHODOLOGY_STAGES.map((stage, index) => (
              <ProcessStep
                key={stage.title}
                number={stage.number}
                title={stage.title}
                description={stage.description}
                output={stage.output}
                index={index}
              />
            ))}
          </div>

          {/* Methodology KPI Banner (Slide 15) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 rounded-2xl bg-navy p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-light font-accent block mb-1">
                Execution Scorecard &amp; Controls
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                Operational KPIs Monitored
              </h4>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-sm font-accent">
              {[
                "OEE (%)",
                "First-pass yield (%)",
                "Downtime (%)",
                "Throughput",
                "On-time delivery (%)",
              ].map((kpi) => (
                <span
                  key={kpi}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 font-semibold"
                >
                  {kpi}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sustainability note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-cream rounded-xl border border-cream-dark">
              <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
              <p
                className="text-[15px] sm:text-base font-semibold text-navy"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Build ownership into implementation and handover.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ ON-SITE EXECUTION ============ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="On-Site Execution"
            title="Make Change Tangible Where Work Happens"
            centered
          />

          {/* Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ON_SITE_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative bg-white rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
                >
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange text-white text-lg font-bold mb-6">
                    {step.number}
                  </div>

                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cream text-navy group-hover:bg-orange/10 group-hover:text-orange transition-colors duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-navy mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-charcoal-light">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Functions Covered - Cross-Functional Alignment (Slide 14) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-navy rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl"
          >
            {/* Decorative circles */}
            <div className="absolute top-6 right-6 w-32 h-32 border border-white/5 rounded-full" />
            <div className="absolute bottom-6 left-6 w-48 h-48 border border-white/5 rounded-full" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <p
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-2"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Cross-Functional Ownership
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white font-heading"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Shared Execution Across Plant Functions
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2">
                  Sustainable change happens when operating functions collaborate on root-cause solutions rather than working in departmental silos.
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 rounded-2xl p-6 text-center transition-colors shadow-sm">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 font-accent shadow-xs">
                    Production
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                    Line pacing, bottleneck resolution, and active shift-level ownership.
                  </p>
                </div>

                <div className="bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 rounded-2xl p-6 text-center transition-colors shadow-sm">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 font-accent shadow-xs">
                    Quality
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                    Defect containment, root-cause investigation, and First Pass Yield (FPY).
                  </p>
                </div>

                <div className="bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 rounded-2xl p-6 text-center transition-colors shadow-sm">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-orange text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 font-accent shadow-xs">
                    Plant Support
                  </span>
                  <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                    Equipment reliability, loss recovery, and maintenance scheduling.
                  </p>
                </div>
              </div>

              {/* Outcome Banner */}
              <div className="pt-6 border-t border-white/10 text-center">
                <span
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange text-white text-sm sm:text-[15px] font-bold rounded-full shadow-md"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  <span>&rarr;</span>
                  <span>Shared Execution: Tangible Change Where Work Happens</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <CTABanner
        variant="navy"
        title="Ready to Engineer Operational Performance?"
        subtitle="From quality engineering to plant readiness — we execute on site."
        buttonText="Discuss Your Operational Challenges"
        buttonHref="/contact"
        secondaryButtonText="Explore IGNOVA Triage"
        secondaryButtonHref="/services/triage"
      />
    </>
  );
}
