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
  TrendingUp,
  Clock,
  Award,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/ui/CTABanner";

/* ── Hiring Process Steps (Slide 10) ── */
const hiringSteps = [
  {
    number: "01",
    title: "Source & Shortlist",
    description: "Calibrate the role, map talent & screen candidates",
    icon: Search,
  },
  {
    number: "02",
    title: "Assess & Select",
    description: "Validate expertise, behavior & organizational fit",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Onboard & Integrate",
    description: "Support joining, role clarity & team integration",
    icon: Target,
  },
  {
    number: "04",
    title: "Enable Performance",
    description: "Set goals, build capability & review progress",
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
              Source Talent <span className="text-orange">|</span> Assess Capability{" "}
              <span className="text-orange">|</span> Fastrack Onboarding{" "}
              <span className="text-orange">|</span> Drive Performance
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Every search engagement is designed to deliver evidence-backed hiring decisions — moving from calibrated mandates through structured capability assessment to onboarding and active performance enablement.
            </p>
          </motion.div>

          {/* Four lifecycle pillars (Slide 10) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left"
          >
            {[
              {
                number: "01",
                label: "Source Talent",
                desc: "Calibrate the role, map talent markets & screen candidates against benchmarks.",
              },
              {
                number: "02",
                label: "Assess Capability",
                desc: "Validate expertise, behavioral competencies & organizational fit systematically.",
              },
              {
                number: "03",
                label: "Fastrack Onboarding",
                desc: "Support joining, establish role clarity & accelerate cross-functional integration.",
              },
              {
                number: "04",
                label: "Drive Performance",
                desc: "Set 90-day milestones, build capability & review observable business progress.",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-orange font-accent">
                      {item.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.label}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ IGNOVA IMPACT: BEYOND PLACEMENT (Slide 11) ============ */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="IGNOVA Impact"
            title="Beyond Placement. Measurable Performance in the Role."
            subtitle="Hiring success measured at defined operational and milestone horizons."
            centered
          />

          {/* 4 Measured Hiring Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Clock,
                title: "Reduction in Critical-Role Closure",
                desc: "Reduce vacancy exposure through targeted talent access & faster shortlisting.",
                measureLabel: "Measure",
                measureValue: "Time to qualified shortlist · Time to fill",
              },
              {
                icon: Target,
                title: "Improved Hiring Precision",
                desc: "Match candidates to role-critical expertise, leadership capability & organizational fit.",
                measureLabel: "Measure",
                measureValue: "6-month quality-of-hire score",
              },
              {
                icon: Award,
                title: "Faster Time to Contribution",
                desc: "Accelerate role readiness through priorities, stakeholder alignment & 90-day milestones.",
                measureLabel: "Measure",
                measureValue: "90-day milestone achievement (%)",
              },
              {
                icon: TrendingUp,
                title: "Sustained Business Impact",
                desc: "Evaluate hiring success through retention & role-specific business performance.",
                measureLabel: "Measure",
                measureValue: "12-month retention (%) · KPI improvement",
              },
            ].map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-xs flex flex-col justify-between hover:border-orange/40 hover:-translate-y-1 transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-orange" />
                    </div>
                    <h3
                      className="text-lg font-bold text-navy mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {outcome.title}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed mb-6">
                      {outcome.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange font-accent block mb-1">
                      {outcome.measureLabel}
                    </span>
                    <p className="text-xs font-bold text-navy font-accent">
                      {outcome.measureValue}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Where Impact Becomes Visible (Dashboard Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-navy text-white p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="relative z-10 max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-light font-accent block mb-2">
                Operational Validation
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold font-heading"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Where Impact Becomes Visible
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Hiring precision verified where production and supply chain economics happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-orange-light" />
                  </div>
                  <h4 className="text-base font-bold font-accent">Plant Leadership</h4>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                    <span>Overall Equipment Effectiveness (OEE)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                    <span>Line Output &amp; Labor Productivity</span>
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-orange-light" />
                  </div>
                  <h4 className="text-base font-bold font-accent">Quality Leadership</h4>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                    <span>Defect PPM Reduction</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                    <span>Cost of Poor Quality (COPQ)</span>
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-orange-light" />
                  </div>
                  <h4 className="text-base font-bold font-accent">Supply Chain Leadership</h4>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                    <span>On-Time Delivery (OTD %)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                    <span>Inventory Turns &amp; Working Capital</span>
                  </p>
                </div>
              </div>
            </div>
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
