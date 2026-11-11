"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import StepperTimeline from "@/components/ui/StepperTimeline";
import CTABanner from "@/components/ui/CTABanner";
import { SERVICES, EXCELLENCE_AGENDA, CLIENTS, SECTORS } from "@/lib/constants";

const serviceEntries = Object.values(SERVICES);
const numbers = ["01", "02", "03"];

const performanceAmbitions = [
  "Unlock capacity",
  "Improve yield",
  "Accelerate delivery",
  "Strengthen margins",
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* ───────── 1. Hero ───────── */}
      <section className="relative bg-cream pt-32 pb-20 md:pb-28">
        {/* Decorative background element */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange/5" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-navy/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-4"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Service Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Three Capabilities.{" "}
            <span className="text-orange">One Partner.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto"
          >
            We architect workforce capability, activate talent pipelines, and
            accelerate operational performance.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 h-1 w-24 rounded-full bg-orange mx-auto origin-left"
          />
        </div>
      </section>

      {/* ───────── 2. Three Pillars ───────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Capabilities"
            title="Integrated Services for Business Impact"
            subtitle="Each pillar addresses a distinct performance priority — together, they connect people to business execution."
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. The Excellence Agenda ───────── */}
      <section className="py-24 md:py-32 bg-white">
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
                {["Priority", "IGNOVA Capability", "Intended Outcome"].map(
                  (header) => (
                    <div
                      key={header}
                      className="px-8 py-5 text-sm font-bold uppercase tracking-wider"
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
                  className="group grid grid-cols-3 border-t border-cream-dark hover:bg-cream/50 transition-colors duration-300"
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
                    className="text-xs font-bold uppercase tracking-wider text-orange mb-2"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {row.capability}
                  </p>
                  <p className="text-charcoal font-medium mb-2">
                    {row.priority}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-charcoal-light">
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
            <p className="text-sm md:text-base italic">
              <span className="font-semibold text-navy not-italic">
                Starting point:
              </span>{" "}
              Align the mandate, capability gaps and measures of success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───────── 4. Delivery Approach ───────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="One Delivery Approach"
            title="From Assessment to Sustained Performance"
            centered
          />

          <StepperTimeline />

          {/* Performance Ambition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-navy rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-5 h-5 text-orange" />
              <p
                className="text-sm font-bold uppercase tracking-wider text-orange-light"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Performance Ambition
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {performanceAmbitions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                >
                  <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                  <span className="text-white text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── 5. Selected Client Experience ───────── */}
      <section className="py-24 md:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Apply Experience Across Sectors & Business Functions"
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Industrial Consulting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-orange-light mb-6"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Industrial Consulting
              </p>
              <ul className="space-y-3">
                {CLIENTS.industrial.map((client, index) => (
                  <motion.li
                    key={client}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span className="text-sm font-medium">{client}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Recruitment Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-orange-light mb-6"
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
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span className="text-sm font-medium">{client}</span>
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
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-orange/50 hover:text-orange-light transition-colors duration-300"
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
        title="Start With Your Business Priority"
        subtitle="Capability gaps, critical hiring, or operational improvement — we align the expertise."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
