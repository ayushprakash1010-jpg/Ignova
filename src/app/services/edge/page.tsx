"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  ClipboardCheck,
  ListChecks,
  Briefcase,
  Wrench,
  UsersRound,
  BrainCircuit,
  HeadphonesIcon,
  CalendarCheck,
  Focus,
  Building2,
  BarChart3,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

/* ── Hiring Process Steps ── */
const hiringSteps = [
  {
    number: "01",
    title: "Calibrate Mandate",
    description: "Role outcomes + success criteria",
    icon: Target,
  },
  {
    number: "02",
    title: "Map Talent",
    description: "Relevant markets + qualified candidates",
    icon: Search,
  },
  {
    number: "03",
    title: "Assess Capability",
    description: "Functional expertise + organizational fit",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Deliver Shortlist",
    description: "Benchmarked recommendations",
    icon: ListChecks,
  },
];

/* ── Advisory Scope Cards ── */
const advisoryScope = [
  {
    title: "Executive Search",
    description: "CXO, business and functional leaders",
    icon: Briefcase,
  },
  {
    title: "Specialist Hiring",
    description: "Manufacturing, quality and supply chain",
    icon: Wrench,
  },
  {
    title: "Workforce Expansion",
    description: "Volume hiring and manpower ramp-up",
    icon: UsersRound,
  },
  {
    title: "Talent Advisory",
    description: "Planning, competencies and succession",
    icon: BrainCircuit,
  },
];

/* ── Scale Hiring Features ── */
const scaleFeatures = [
  {
    title: "Hiring capacity when you need it",
    description:
      "End-to-end support from sourcing to onboarding, aligned with your internal team.",
    icon: HeadphonesIcon,
  },
  {
    title: "Coordinated volume hiring",
    description:
      "Plan recruitment drives around ramp-up dates, locations and workforce requirements.",
    icon: CalendarCheck,
  },
  {
    title: "Hard-to-fill roles",
    description:
      "Focused pipelines for specialist and leadership vacancies that need dedicated attention.",
    icon: Focus,
  },
  {
    title: "HR foundations for growth",
    description:
      "Build recruitment processes, policies and talent pipelines for a new or expanding business.",
    icon: Building2,
  },
  {
    title: "Visibility for HR",
    description:
      "Agreed hiring priorities, structured assessments and clear recruitment reporting.",
    icon: BarChart3,
  },
];

export default function EdgePage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-cream overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange/[0.04] rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-navy/[0.04] rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0F2B4C 1px, transparent 1px), linear-gradient(90deg, #0F2B4C 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-4xl">
            {/* Pillar tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span
                className="inline-block px-4 py-2 bg-orange/10 text-orange text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-orange/20"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Activate
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
              IGNOVA Edge
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Critical Mandates into{" "}
              <span className="text-orange">Evidence-Backed</span> Hiring
              Decisions
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-charcoal-light max-w-2xl leading-relaxed"
            >
              Mandate precision. Structured assessment. Credible shortlists.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============ HIRING PROCESS ============ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Hiring Process"
            title="Four Steps to the Right Hire"
            subtitle="A structured, evidence-backed hiring process that delivers credible shortlists."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative bg-cream rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
                >
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange text-white text-lg font-bold mb-5">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy/40 group-hover:text-orange transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-navy mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-light text-sm">
                    {step.description}
                  </p>

                  {/* Connector line (except last) */}
                  {index < hiringSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-orange/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ADVISORY SCOPE ============ */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Advisory Scope"
            title="From Executive Search to Workforce Expansion"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryScope.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative bg-white rounded-2xl p-8 border-l-4 border-orange shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-lg font-bold text-navy mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>

                  <p className="text-charcoal-light text-sm">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SCALE HIRING ============ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="IGNOVA Edge"
            title="Scale Hiring with a Crafted Execution Model"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scaleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white mb-5 group-hover:bg-orange transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3
                    className="text-lg font-bold text-navy mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SEARCH OUTCOME SUMMARY ============ */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/5 rounded-full" />
        <div className="absolute bottom-10 left-10 w-60 h-60 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-6"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              The IGNOVA Edge Outcome
            </p>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Mandate Precision{" "}
              <span className="text-orange">|</span> Structured Assessment{" "}
              <span className="text-orange">|</span> Credible Shortlists
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Every search engagement is designed to deliver evidence-backed
              hiring decisions — moving from calibrated mandates through
              structured capability assessment to shortlists that your
              leadership team can act on with confidence.
            </p>
          </motion.div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
          >
            {[
              {
                label: "Mandate Precision",
                desc: "Clarity on the role, outcomes and success criteria before the search begins.",
              },
              {
                label: "Structured Assessment",
                desc: "Systematic evaluation of functional expertise and organizational fit.",
              },
              {
                label: "Credible Shortlists",
                desc: "Benchmarked recommendations backed by evidence, not assumptions.",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-1 bg-orange rounded-full mx-auto mb-4" />
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.label}
                  </h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <CTABanner
        variant="orange"
        title="Need to Fill Business-Critical Roles?"
        subtitle="From executive search to volume hiring — we deliver credible shortlists."
        buttonText="Discuss Your Hiring Needs"
        buttonHref="/contact"
      />
    </>
  );
}
