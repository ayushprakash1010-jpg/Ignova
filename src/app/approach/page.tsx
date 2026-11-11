"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, Cog, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStep from "@/components/ui/ProcessStep";
import StepperTimeline from "@/components/ui/StepperTimeline";
import CTABanner from "@/components/ui/CTABanner";
import {
  IGNOVA_FACTOR,
  DELIVERY_STEPS,
  PERFORMANCE_DOMAINS,
} from "@/lib/constants";

const AMBITION_PHRASES = [
  "Unlock Capacity",
  "Improve Yield",
  "Accelerate Delivery",
  "Strengthen Margins",
];

const GOVERNANCE_STEPS = [
  "Establish baselines",
  "Set targets",
  "Assign ownership",
  "Review results",
];

const STARTING_PATHS = [
  {
    need: "Capability gaps",
    solution: "IGNOVA TRIAGE",
    href: "/services/triage",
    icon: Target,
  },
  {
    need: "Critical hiring",
    solution: "IGNOVA EDGE",
    href: "/services/edge",
    icon: Users,
  },
  {
    need: "Operational improvement",
    solution: "PROJECT EXECUTION",
    href: "/services/project-execution",
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
              Assess Performance Gaps |{" "}
              <span className="text-orange">Accountable Execution</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light max-w-3xl">
              A structured methodology that connects diagnosis to sustained
              results.
            </p>
            <div className="mt-6 h-1 w-16 rounded-full bg-orange" />
          </motion.div>
        </div>
      </section>

      {/* ─── 2. IGNOVA Factor ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="IGNOVA FACTOR"
            title="Four Steps to Accountable Performance"
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

      {/* ─── 3. Performance Ambition Banner ─── */}
      <section className="bg-gradient-to-r from-orange to-orange-dark py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-6"
          >
            {AMBITION_PHRASES.map((phrase, index) => (
              <span key={phrase} className="flex items-center gap-4 md:gap-6">
                <span
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {phrase}
                </span>
                {index < AMBITION_PHRASES.length - 1 && (
                  <span className="text-white/40 text-3xl md:text-4xl font-light hidden sm:inline">
                    |
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. Delivery Approach ─── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="ONE DELIVERY APPROACH"
            title="From Assessment to Sustained Performance"
            centered
          />
          <StepperTimeline steps={DELIVERY_STEPS} />
        </div>
      </section>

      {/* ─── 5. Performance Measurement ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PERFORMANCE MEASUREMENT"
            title="Integrated Performance View for Leadership"
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
                      className="text-left py-4 px-6 text-sm font-bold uppercase tracking-wider text-white"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Performance Domain
                    </th>
                    <th
                      className="text-left py-4 px-6 text-sm font-bold uppercase tracking-wider text-white"
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
                        } hover:bg-cream transition-colors`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-orange" />
                            </div>
                            <span
                              className="font-bold text-navy"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {domain.domain}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-charcoal-light">
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
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange text-white text-xs font-bold mb-3">
                    {index + 1}
                  </span>
                  <p
                    className="text-sm font-semibold text-navy"
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

      {/* ─── 6. Starting Point ─── */}
      <section className="bg-cream py-20 md:py-28">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    className="group block bg-white rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/30 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange" />
                    </div>

                    <p className="text-sm text-charcoal-light mb-2">
                      {path.need}
                    </p>

                    <h3
                      className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {path.solution}
                    </h3>

                    <div className="flex items-center gap-2 text-orange font-semibold text-sm">
                      <span style={{ fontFamily: "var(--font-accent)" }}>
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. CTA Banner ─── */}
      <CTABanner
        variant="orange"
        title="Ready to Assess Your Performance Gaps?"
        subtitle="Start with a diagnostic baseline and build accountable execution."
        buttonText="Schedule a Conversation"
        buttonHref="/contact"
      />
    </div>
  );
}
