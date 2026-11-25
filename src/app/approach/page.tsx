"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, Cog, BarChart3, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PracticeHeroVisual from "@/components/ui/PracticeHeroVisual";
import ProcessStep from "@/components/ui/ProcessStep";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import {
  IGNOVA_FACTOR,
  PERFORMANCE_DOMAINS,
} from "@/lib/constants";

const AMBITION_PHRASES = [
  "Unlock capacity",
  "Improve yield",
  "Accelerate delivery",
  "Strengthen margins",
];

const GOVERNANCE_STEPS = [
  "Establish baselines",
  "Set targets",
  "Assign ownership",
  "Review results",
];

const STARTING_PATHS = [
  {
    mandate: "Build Workforce Capability",
    solution: "IGNOVA TRIAGE",
    href: "/services/triage",
    desc: "Customized diagnostic and role-specific competency building translated into observable shop-floor behavior.",
    outcome: "Workplace Application",
    action: "Explore IGNOVA Triage",
    icon: Target,
  },
  {
    mandate: "Fill Business-Critical Roles",
    solution: "IGNOVA EDGE",
    href: "/services/edge",
    desc: "Evidence-backed search and structured competency evaluation delivering credible, calibrated shortlists.",
    outcome: "Credible Shortlists",
    action: "Explore IGNOVA Edge",
    icon: Users,
  },
  {
    mandate: "Support Operational Change",
    solution: "PROJECT EXECUTION",
    href: "/services/project-execution",
    desc: "Ground-level performance consulting connecting people, processes, and operating controls to P&L results.",
    outcome: "Operating Performance",
    action: "Explore Project Execution",
    icon: Cog,
  },
];

const domainIcons = [Target, Users, Cog, BarChart3];

export default function ApproachPage() {
  return (
    <div>
      {/* ─── 1. Hero ─── */}
      <section className="relative pt-16 sm:pt-20 bg-cream border-b border-[#E8E2D5] overflow-hidden">
        {/* Subtle blueprint grid & warm glow beneath integrated photography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0F2B4C 1px, transparent 1px), linear-gradient(90deg, #0F2B4C 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-16 left-0 w-[420px] h-[420px] rounded-full bg-orange/[0.04] blur-[100px]" />
        </div>

        <div className="relative flex flex-col lg:block lg:min-h-[540px] xl:min-h-[560px]">
          <PracticeHeroVisual
            src="/images/hero/hero-executive-shopfloor.jpg"
            alt="Plant boardroom overlooking automated manufacturing bays with industrial process blueprints"
            objectPosition="object-[65%_center]"
          />

          <div className="relative z-10 w-full lg:w-[50%] xl:w-[49%] px-4 sm:px-6 lg:pr-2 hero-content-pad pt-12 pb-8 sm:pt-14 sm:pb-10 lg:py-20 lg:min-h-[540px] xl:min-h-[560px] flex flex-col justify-center">
            <div>
              <span
                className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-orange bg-orange/10 px-4 py-1.5 rounded-full border border-orange/20 mb-5"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                OUR APPROACH
              </span>
            </div>

            <h1
              className="text-4xl sm:text-[42px] lg:text-[44px] xl:text-[48px] font-bold text-navy leading-[1.12] mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              From Performance Ambition to{" "}
              <span className="text-orange">Accountable Execution</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-light max-w-lg leading-relaxed mb-8">
              A structured methodology that connects diagnosis to sustained P&amp;L
              results.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#framework" variant="primary" size="lg">
                Explore 4-Stage Methodology
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Calibrate Your Mandate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. IGNOVA Factor (PPT Slide 04) ─── */}
      <section id="framework" className="bg-white py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="THE IGNOVA FACTOR"
            title="Assess Performance Gaps. Accountable Execution."
            subtitle="From diagnostic baseline to standard performance controls — diagnose, prioritize, execute, and sustain."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IGNOVA_FACTOR.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                output={step.output}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Performance Ambition Banner (PPT Slide 04) ─── */}
      <section className="relative bg-[#0B2038] py-16 md:py-20 border-y border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#F59E56] mb-2 font-accent">
              Performance Ambition
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}
            >
              Four Measurable Outcomes Across Every Mandate
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {AMBITION_PHRASES.map((phrase, idx) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-xl px-6 py-6 transition-all text-left overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DF7C36] to-[#F59E56]"
                />
                <span className="block text-xs font-bold tracking-[0.2em] text-[#F59E56] font-accent mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-lg sm:text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {phrase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Performance Measurement & Governance (PPT Slide 16) ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PERFORMANCE MEASUREMENT"
            title="Integrated Performance View for Leadership"
            subtitle="Connect operating realities to agreed leadership baselines and standard governance."
            centered
          />

          {/* Performance Domains Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="overflow-x-auto rounded-2xl border border-cream-dark shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy">
                    <th
                      className="text-left py-4 px-6 text-[15px] font-bold uppercase tracking-wider text-white"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Performance Domain
                    </th>
                    <th
                      className="text-left py-4 px-6 text-[15px] font-bold uppercase tracking-wider text-white"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Measures to Agree
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PERFORMANCE_DOMAINS.map((domain, index) => {
                    const Icon = domainIcons[index];
                    return (
                      <tr
                        key={domain.domain}
                        className={`border-t border-cream-dark ${
                          index % 2 === 0 ? "bg-cream/50" : "bg-white"
                        } hover:bg-cream transition-colors text-base`}
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-orange" />
                            </div>
                            <span
                              className="font-bold text-navy text-base sm:text-lg"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {domain.domain}
                            </span>
                          </div>
                        </td>
                        <td className="py-5 px-6 text-charcoal-light text-[15px] sm:text-base">
                          {domain.measures}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Governance Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-cream-dark shadow-sm overflow-hidden"
          >
            <div className="bg-cream/60 border-b border-cream-dark px-6 py-3.5 flex items-center justify-between">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Governance Cycle
              </p>
              <span className="text-xs font-medium text-charcoal-light hidden sm:inline font-accent">
                Continuous accountability loop
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-cream-dark">
              {GOVERNANCE_STEPS.map((step, index) => (
                <div
                  key={step}
                  className="group px-6 py-5 sm:py-6 flex items-center justify-between gap-3 hover:bg-cream/35 transition-colors"
                >
                  <p
                    className="text-base sm:text-lg font-bold text-navy leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step}
                  </p>
                  {index < GOVERNANCE_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-orange/60 hidden lg:block flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-orange" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. Starting Point (PPT Slide 05) ─── */}
      <section className="bg-white py-16 md:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHERE TO START"
            title="Choose Your Starting Point"
            subtitle="Align the mandate, capability gaps and measures of success."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {STARTING_PATHS.map((path, index) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={path.solution}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Link
                    href={path.href}
                    className="group flex flex-col justify-between bg-cream rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/30 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div>
                      {/* Top badge & icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[13px] font-bold uppercase tracking-wider bg-orange/10 text-orange border border-orange/20 font-accent">
                          {path.mandate}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                          <Icon className="w-5 h-5 text-orange" />
                        </div>
                      </div>

                      {/* Brand Solution Heading */}
                      <h3
                        className="text-2xl font-extrabold text-navy mb-3 group-hover:text-orange transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {path.solution}
                      </h3>

                      {/* Intervention Description */}
                      <p className="text-[15px] sm:text-base text-charcoal-light mb-6 leading-relaxed">
                        {path.desc}
                      </p>

                      {/* Intended Outcome Pill */}
                      <div className="mb-6 pt-4 border-t border-cream-dark">
                        <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 font-accent block mb-1">
                          Intended Outcome
                        </span>
                        <p className="text-sm font-bold text-navy flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                          <span>{path.outcome}</span>
                        </p>
                      </div>
                    </div>

                    {/* Action link */}
                    <div className="pt-4 border-t border-cream-dark flex items-center justify-between text-[15px] font-bold text-navy group-hover:text-orange transition-colors font-accent">
                      <span>{path.action}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA Banner ─── */}
      <CTABanner
        variant="navy"
        title="Ready to Assess Your Performance Gaps?"
        subtitle="Start with a diagnostic baseline and build accountable execution across your plant and executive teams."
        buttonText="Schedule a Conversation"
        buttonHref="/contact"
        secondaryButtonText="Explore Our Capabilities"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
