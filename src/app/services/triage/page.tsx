"use client";

import { motion } from "framer-motion";
import {
  Target,
  Hammer,
  ClipboardCheck,
  Eye,
  ArrowRight,
  Compass,
  Settings,
  ShieldCheck,
  Users,
  BrainCircuit,
  Link2,
  GraduationCap,
  Wrench,
  Briefcase,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";

/* ─── data ─── */

const deliverColumns = [
  {
    icon: Wrench,
    title: "Technical Excellence",
    items: ["Lean, Six Sigma and quality", "Structured problem solving"],
  },
  {
    icon: GraduationCap,
    title: "Leadership Effectiveness",
    items: [
      "Judgment, coaching and teams",
      "Cross-functional collaboration",
    ],
  },
  {
    icon: Briefcase,
    title: "Workplace Application",
    items: [
      "Workshops + practical assignments",
      "Observable workplace behavior change",
    ],
  },
];

const journeySteps = [
  { icon: Target, verb: "Assess", desc: "Role and behavioural gaps" },
  { icon: Hammer, verb: "Build", desc: "Workshops + coaching" },
  { icon: ClipboardCheck, verb: "Apply", desc: "Real work challenges" },
  { icon: Eye, verb: "Verify", desc: "Observable progress" },
];

const leadershipCards = [
  {
    icon: Compass,
    title: "Set Direction",
    desc: "Objectives and expectations",
  },
  {
    icon: Settings,
    title: "Transform Workplace",
    desc: "Daily management and discipline",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Quality",
    desc: "Capability and root cause analysis",
  },
  {
    icon: Users,
    title: "Lead Teams",
    desc: "Coaching and collaboration",
  },
  {
    icon: BrainCircuit,
    title: "Improve Decisions",
    desc: "Judgment in complex situations",
  },
  {
    icon: Link2,
    title: "Connect Functions",
    desc: "Coordination and shared ownership",
  },
];

/* ─── page ─── */

export default function TriagePage() {
  return (
    <div className="overflow-hidden">
      {/* ── 1. Hero ── */}
      <section className="relative bg-cream pt-32 pb-20 md:pb-28">
        {/* subtle decorative circle */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pillar tag */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-6"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Architect
            </span>

            <p
              className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-3"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              IGNOVA Triage
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Build Role-Specific Competencies & Drive Performance
            </h1>

            <p className="mt-6 text-lg md:text-xl text-charcoal-light max-w-2xl">
              Customize the intervention around the role and the performance
              gap.
            </p>

            <div className="mt-10">
              <Button href="/contact" variant="primary" size="lg">
                Discuss Your Training Needs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. What We Deliver ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Deliver"
            title="Targeted Capability Building"
            subtitle="Technical skills, leadership effectiveness, and real workplace application — designed together."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {deliverColumns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-cream rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                    <Icon className="w-7 h-7 text-orange" />
                  </div>
                  <h3
                    className="text-xl font-bold text-navy mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {col.title}
                  </h3>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-charcoal-light"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Design principle callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-navy rounded-2xl p-8 md:p-12 text-center"
          >
            <p
              className="text-xl md:text-2xl text-white font-semibold italic"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              &ldquo;Customize the intervention around the role and the
              performance gap.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Learning Journey ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Learning Journey"
            title="From Assessment to Workplace Performance"
            centered
          />

          {/* Horizontal stepper */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0 mt-4">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-orange/30 via-orange to-orange/30" />

            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.verb}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center md:flex-1"
                >
                  <div className="z-10 w-20 h-20 rounded-full bg-white border-2 border-orange flex items-center justify-center shadow-md">
                    <Icon className="w-8 h-8 text-orange" />
                  </div>
                  <h4
                    className="mt-4 text-lg font-bold text-navy"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.verb}
                  </h4>
                  <p className="mt-1 text-sm text-charcoal-light max-w-[160px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}

            {/* Final destination */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative flex flex-col items-center text-center md:flex-1"
            >
              <div className="z-10 w-20 h-20 rounded-full bg-orange flex items-center justify-center shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h4
                className="mt-4 text-lg font-bold text-navy"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Workplace Performance
              </h4>
            </motion.div>
          </div>

          {/* Question prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 border border-cream-dark shadow-sm">
              <p
                className="text-sm font-bold uppercase tracking-[0.15em] text-orange mb-3"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                The Right Question
              </p>
              <p
                className="text-lg md:text-xl text-navy font-semibold italic"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;How will we know learning is working? Look for
                application in decisions, teamwork and daily execution.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Leadership Development ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership Development"
            title="Develop Leaders Across Six Connected Disciplines"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leadershipCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-cream rounded-2xl p-8 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className="text-xl font-bold text-navy"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-charcoal-light">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Leadership outcome + notes */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy rounded-2xl p-8 text-center md:text-left"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-orange-light mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Leadership Outcome
              </p>
              <p
                className="text-lg text-white font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Translate leadership decisions into operational action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cream rounded-2xl p-8 border border-cream-dark"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Assessment
              </p>
              <p className="text-charcoal-light">
                Leadership and behavioral assessments, including MBTI, build
                self-awareness and inform individual development priorities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-cream rounded-2xl p-8 border border-cream-dark"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Journey
              </p>
              <p className="text-charcoal-light">
                Combine workshops, coaching and workplace application around the
                demands of each leadership role.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. IGNOVA Triage Advantage ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="IGNOVA Triage Advantage"
            title="Make Learning Visible in Workplace Behavior"
            centered
          />

          {/* Flow visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-cream-dark"
          >
            {/* Source */}
            <div className="text-center mb-10">
              <div className="inline-block bg-navy rounded-xl px-8 py-4">
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Role-Based Learning Journeys
                </p>
              </div>
            </div>

            {/* Flow arrows */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              {journeySteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={`adv-${step.verb}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="flex items-center gap-2 md:gap-2"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange" />
                      </div>
                      <span
                        className="mt-2 text-sm font-bold text-navy"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {step.verb}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-orange/50 hidden md:block" />
                  </motion.div>
                );
              })}

              {/* Final destination */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <span
                  className="mt-2 text-sm font-bold text-navy text-center"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Workplace
                  <br />
                  Performance
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA Banner ── */}
      <CTABanner
        variant="orange"
        title="Ready to Build Workforce Capability?"
        subtitle="Start with a role-based assessment and design targeted interventions."
        buttonText="Discuss Your Training Needs"
        buttonHref="/contact"
      />
    </div>
  );
}
