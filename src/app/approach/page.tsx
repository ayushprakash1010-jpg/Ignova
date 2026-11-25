"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, Cog, BarChart3, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStep from "@/components/ui/ProcessStep";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import {
  IGNOVA_FACTOR,
  PERFORMANCE_DOMAINS,
} from "@/lib/constants";

const AMBITION_PHRASES = [
  "Close Talent Gaps",
  "Build Critical Capability",
  "Accelerate R&D",
  "Improve P&L",
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
      <section className="bg-cream pt-32 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              OUR APPROACH
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              From Performance Ambition to{" "}
              <span className="text-orange">Accountable Execution</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light max-w-3xl mb-8">
              A structured methodology that connects diagnosis to sustained P&L
              results.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button href="#framework" variant="primary" size="lg">
                Explore 4-Stage Methodology
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Calibrate Your Mandate
              </Button>
            </div>

            <div className="h-1 w-16 rounded-full bg-orange" />
          </motion.div>
        </div>
      </section>

      {/* ─── 2. IGNOVA Factor (PPT Slide 04) ─── */}
      <section id="framework" className="bg-white py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="THE IGNOVA FACTOR"
            title="Four Stages from Diagnostic to Measurable Impact"
            subtitle="How we structure capability, resources, and performance controls to deliver measurable results."
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
      <section className="bg-gradient-to-r from-orange to-orange-dark py-14 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-bold uppercase tracking-[0.25em] text-white/80 mb-6 font-accent"
          >
            Performance Ambition
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {AMBITION_PHRASES.map((phrase, idx) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-5 py-4 transition-colors"
              >
                <p
                  className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight"
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
      <section className="bg-cream py-20 md:py-28">
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
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-6 text-center"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              GOVERNANCE CYCLE
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GOVERNANCE_STEPS.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative bg-cream rounded-xl p-5 text-center border border-cream-dark group shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange text-white text-sm font-bold mb-3">
                    {index + 1}
                  </span>
                  <p
                    className="text-[15px] sm:text-base font-semibold text-navy"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {step}
                  </p>
                  {index < GOVERNANCE_STEPS.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange hidden md:block z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. Starting Point (PPT Slide 05) ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              WHERE TO START
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Choose Your Starting Point
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Align the mandate, capability gaps and measures of success.
            </p>
            <div className="mt-6 h-1 w-16 rounded-full bg-orange mx-auto" />
          </motion.div>

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
        variant="orange"
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
