"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Zap, TrendingUp, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import { SERVICES, EXCELLENCE_AGENDA, CLIENTS, SECTORS } from "@/lib/constants";

const serviceEntries = Object.values(SERVICES);
const numbers = ["01", "02", "03"];
const serviceCardActions = [
  "Explore IGNOVA Triage",
  "Explore IGNOVA Edge",
  "Explore Project Execution",
];

const performanceOutcomes = [
  {
    num: "01",
    tag: "TALENT RIGOR",
    title: "Close Critical Talent Gaps",
    desc: "High-precision search for business-critical plant leadership and specialist roles where traditional search firms lack technical depth.",
    metric: "Credible shortlists • Reduced time-to-productivity • 90-day retention rigor",
    icon: Target,
  },
  {
    num: "02",
    tag: "WORKFORCE DEPTH",
    title: "Build Critical Capability",
    desc: "Role-specific behavioral and technical interventions designed around operational deficits, verified through shop-floor application.",
    metric: "Kaizen sustainability • Workplace application • First Pass Yield (FPY %)",
    icon: Zap,
  },
  {
    num: "03",
    tag: "ACCELERATE DELIVERY",
    title: "Accelerate Delivery & Ramp-Up",
    desc: "Standardizing engineering handovers and aligning specialist talent to compress launch cycles and eliminate ramp-up bottlenecks.",
    metric: "Cycle time reduction • Launch schedule adherence • First-time-right engineering",
    icon: TrendingUp,
  },
  {
    num: "04",
    tag: "STRENGTHEN MARGINS",
    title: "Unlock Capacity & Improve Yield",
    desc: "Ground-level consulting and shop-floor coaching that directly expand plant throughput, reduce scrap, lift OEE, and strengthen margins.",
    metric: "OEE improvement • COPQ & scrap reduction • Direct labor productivity",
    icon: BarChart3,
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* ───────── 1. Hero ───────── */}
      <section className="relative bg-cream pt-32 pb-24 md:pb-28 border-b border-[#E8E2D5] overflow-hidden">
        {/* Subtle blueprint grid & warm radial accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0F2B4C 1px, transparent 1px), linear-gradient(90deg, #0F2B4C 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[320px] rounded-full bg-orange/[0.04] blur-[90px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-4 inline-block px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Service Portfolio
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-navy leading-[1.12] mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Three Capabilities.{" "}
            <span className="text-orange">One Partner.</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto mb-8 leading-relaxed">
            We architect workforce capability, activate talent pipelines, and
            accelerate operational performance.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#capabilities" variant="primary" size="lg">
              Explore Capabilities
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Calibrate Your Mandate
            </Button>
          </div>
        </div>
      </section>

      {/* ───────── 2. Three Pillars ───────── */}
      <section id="capabilities" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Capabilities"
            title="Integrated Services for Business Impact"
            subtitle="Each pillar addresses a distinct operational mandate — together, they connect people to business execution."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceEntries.map((service, index) => (
              <ServiceCard
                key={service.brand}
                number={numbers[index]}
                pillar={service.pillar}
                brand={service.brand}
                items={service.items}
                description={service.description}
                href={service.href}
                index={index}
                actionText={serviceCardActions[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. The Excellence Agenda (PPT Slide 05) ───────── */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-y border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Excellence Agenda"
            title="Connect People to Business Execution"
            centered
          />

          {/* Table for md+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="bg-white rounded-2xl border border-cream-dark overflow-hidden shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-3 bg-navy text-white">
                {["Strategic Mandate", "IGNOVA Capability", "Intended Outcome"].map(
                  (header) => (
                    <div
                      key={header}
                      className="px-8 py-5 text-[15px] font-bold uppercase tracking-wider text-white"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      {header}
                    </div>
                  )
                )}
              </div>

              {/* Rows */}
              {EXCELLENCE_AGENDA.map((row) => (
                <Link
                  key={row.capability}
                  href={row.href}
                  className="group grid grid-cols-3 border-t border-cream-dark hover:bg-cream/50 transition-colors duration-300 text-base"
                >
                  <div className="px-8 py-6 text-charcoal font-medium">
                    {row.priority}
                  </div>
                  <div className="px-8 py-6">
                    <span
                      className="text-orange font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {row.capability}
                    </span>
                  </div>
                  <div className="px-8 py-6 flex items-center justify-between text-charcoal-light">
                    <span>{row.outcome}</span>
                    <ArrowRight className="w-4 h-4 text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Cards for mobile */}
          <div className="md:hidden space-y-4">
            {EXCELLENCE_AGENDA.map((row, index) => (
              <motion.div
                key={row.capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={row.href}
                  className="block bg-white rounded-xl border border-cream-dark p-6 hover:border-orange/30 transition-all"
                >
                  <p
                    className="text-sm font-bold uppercase tracking-wider text-orange mb-2"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {row.capability}
                  </p>
                  <p className="text-base text-charcoal font-medium mb-2">
                    {row.priority}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] text-charcoal-light">
                      → {row.outcome}
                    </p>
                    <ArrowRight className="w-4 h-4 text-orange" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Starting Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-3 text-charcoal-light"
          >
            <Target className="w-5 h-5 text-orange flex-shrink-0" />
            <p className="text-base md:text-lg italic">
              <span className="font-semibold text-navy not-italic">
                Starting point:
              </span>{" "}
              Align the mandate, capability gaps and measures of success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───────── 4. Enterprise Value Realization (PPT Slides 03, 04, 16) ───────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Enterprise Value Realization"
            title="Translating Capabilities into Measurable P&L Impact"
            subtitle="Whether deployed individually or as an integrated intervention, our three capabilities converge on four board-level outcomes."
            centered
          />

          {/* 4 Outcome Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {performanceOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-cream rounded-2xl p-7 border border-cream-dark shadow-sm hover:shadow-md hover:border-orange/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange font-accent">
                        {outcome.tag}
                      </span>
                      <span className="text-xl font-black text-slate-300 font-heading">
                        {outcome.num}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4 text-orange">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3
                      className="text-xl font-bold text-navy mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {outcome.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-charcoal-light leading-relaxed mb-6">
                      {outcome.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-cream-dark">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 font-accent block mb-1">
                      Target Deliverable
                    </span>
                    <p className="text-sm font-semibold text-navy">
                      {outcome.metric}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Methodology Bridge Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-navy text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
          >
            <div className="max-w-2xl">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-orange-light font-accent block mb-2">
                Unified Methodology & Governance
              </span>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}
              >
                Governed by Four Stages: Diagnose, Prioritize, Execute, Sustain
              </h3>
              <p className="text-[15px] sm:text-base text-slate-300">
                Every capability deployment follows our evidence-based execution architecture with dual-track leadership governance to guarantee accountability from day one.
              </p>
            </div>

            <Link
              href="/approach"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange hover:bg-orange-dark text-white text-[15px] font-bold transition-all shadow-md flex-shrink-0 font-accent"
            >
              <span>Explore Our Approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───────── 5. Selected Client Experience (PPT Slide 17) ───────── */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Track Record & Credibility"
            title="Apply Experience Across Sectors & Business Functions"
            subtitle="Demonstrated impact across Tier-1 industrial manufacturing and premier enterprise institutions."
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Industrial Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-6"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Industrial Consulting
              </p>
              <ul className="space-y-3">
                {CLIENTS.industrial.map((client, index) => (
                  <motion.li
                    key={client}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                    <span className="text-base font-medium">{client}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Recruitment Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-6"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Recruitment Experience
              </p>
              <ul className="space-y-3">
                {CLIENTS.recruitment.map((client, index) => (
                  <motion.li
                    key={client}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                    <span className="text-base font-medium">{client}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sector Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {SECTORS.map((sector) => (
              <span
                key={sector}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-[15px] font-medium hover:border-orange/50 hover:text-orange-light transition-colors duration-300"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                {sector}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── 6. CTA Banner ───────── */}
      <CTABanner
        title="Calibrate Mandates to Execution"
        subtitle="Capability gaps, critical hiring, or operational improvement — we align the industrial and talent expertise."
        buttonText="Calibrate Your Mandate"
        buttonHref="/contact"
        secondaryButtonText="Explore Our Approach"
        secondaryButtonHref="/approach"
      />
    </div>
  );
}
