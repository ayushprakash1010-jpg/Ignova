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
  Factory,
  Layers,
  Cpu,
  GitMerge,
  CheckCircle2,
  Activity,
  Zap,
  Sliders,
  Gauge,
  BarChart2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import PracticeHeroVisual from "@/components/ui/PracticeHeroVisual";

/* ─── data ─── */

const deliverColumns = [
  {
    icon: Wrench,
    title: "Technical Excellence",
    items: [
      "Six Sigma Green/Black Belt, VSM & SMED",
      "SPC, Root cause analysis & DOE",
    ],
  },
  {
    icon: GraduationCap,
    title: "Leadership Effectiveness",
    items: [
      "High-Stakes Conversations & Negotiation Workshops",
      "Decision-making & Team Collaboration",
    ],
  },
  {
    icon: Factory,
    title: "Domain Insight",
    items: [
      "Quality, Digital & Lean shop-floor transformation",
      "Workplace application & practical assignments",
    ],
  },
];

const journeySteps = [
  { icon: Target, verb: "Assess", desc: "Role-based learning journeys" },
  { icon: Hammer, verb: "Build", desc: "Workshops + coaching" },
  { icon: ClipboardCheck, verb: "Apply", desc: "Real work challenges" },
  { icon: Eye, verb: "Verify", desc: "Observable progress" },
];

const domainCards = [
  {
    icon: Factory,
    title: "Understand Operations",
    desc: "Processes, roles & business priorities",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Quality",
    desc: "Standards & customer requirements",
  },
  {
    icon: GitMerge,
    title: "Improve Production Flow",
    desc: "Bottlenecks, waste & material flow",
  },
  {
    icon: Gauge,
    title: "Understand Reliability",
    desc: "Equipment losses & maintenance",
  },
  {
    icon: Cpu,
    title: "Enable Digital Adoption",
    desc: "Shop-floor data & process controls",
  },
  {
    icon: Layers,
    title: "Connect the Value Chain",
    desc: "Production, quality & supply chain",
  },
];

const leadershipCards = [
  {
    icon: Compass,
    title: "Set Direction",
    desc: "Objectives & expectations",
  },
  {
    icon: Settings,
    title: "Transform Workplace",
    desc: "Daily management & discipline",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Quality",
    desc: "Capability & root cause analysis",
  },
  {
    icon: Users,
    title: "Lead Teams",
    desc: "Coaching & collaboration",
  },
  {
    icon: BrainCircuit,
    title: "Improve Decisions",
    desc: "Judgment in complex situations",
  },
  {
    icon: Link2,
    title: "Connect Functions",
    desc: "Coordination & shared ownership",
  },
];

const technicalMethods = [
  {
    icon: ShieldCheck,
    tag: "Structure Improvement",
    title: "Six Sigma Project Discipline",
    desc: "Rigor to eliminate variability & institutionalize data-led problem solving across teams.",
  },
  {
    icon: GitMerge,
    tag: "Improve Flow",
    title: "Waste & Bottlenecks via VSM",
    desc: "Value Stream Mapping to eliminate non-value-added waste and improve production flow.",
  },
  {
    icon: Zap,
    tag: "Reduce Changeover Time",
    title: "Faster Setups with SMED",
    desc: "Single-Minute Exchange of Die to streamline equipment setups and maximize uptime.",
  },
  {
    icon: Activity,
    tag: "Control Variation",
    title: "Process Stability through SPC",
    desc: "Statistical Process Control charts and capability indices to lock in process repeatability.",
  },
  {
    icon: Target,
    tag: "Solve Root Causes",
    title: "Root Causes & Corrective Actions",
    desc: "Disciplined problem investigations preventing defect recurrence at the operating source.",
  },
  {
    icon: Sliders,
    tag: "Optimize Processes",
    title: "Process Settings through DOE",
    desc: "Design of Experiments to isolate critical parameters and optimize performance windows.",
  },
];

const scorecardMetrics = [
  {
    domain: "Domain",
    metric: "Kaizen Implementation & Sustainability Rate · Workplace Application Rate",
    detail:
      "Observable adoption of shop-floor improvements and active participant application of learning to live operational challenges over 90-day cycles.",
    category: "Shop Floor",
  },
  {
    domain: "Leadership",
    metric: "Team Production Target Achievement · Team Goal Attainment",
    detail:
      "Measurable progress against shift production schedules and cross-functional team performance goals.",
    category: "Operational",
  },
  {
    domain: "Technical",
    metric: "First Pass Yield (FPY %) · Project Quality & Productivity Gain (%)",
    detail:
      "Verified reduction in scrap and rework alongside tangible line productivity improvements.",
    category: "P&L Impact",
  },
];

/* ─── page ─── */

export default function TriagePage() {
  return (
    <div className="overflow-hidden">
      {/* ── 1. Hero ── */}
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
            src="/images/services/triage-engineers.jpg"
            alt="Industrial engineering blueprints, precision calipers, and mechanical tooling on a shop-floor workbench"
            objectPosition="object-[15%_center]"
          />

          <div
            className="relative z-10 w-full lg:w-[49%] xl:w-[48%] px-4 sm:px-6 lg:pr-6 hero-content-pad pt-12 pb-8 sm:pt-14 sm:pb-10 lg:py-20 lg:min-h-[540px] xl:min-h-[560px] flex flex-col justify-center"
          >
            {/* Pillar tag */}
            <div>
              <span
                className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-orange bg-orange/10 px-4 py-1.5 rounded-full mb-5"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Architect
              </span>
            </div>

            <p
              className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-3"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              IGNOVA Triage
            </p>

            <h1
              className="text-4xl sm:text-[42px] lg:text-[44px] xl:text-[48px] font-bold text-navy leading-[1.12] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Build Role-Specific Competencies &amp; Drive Performance
            </h1>

            <p className="mt-6 text-lg md:text-xl text-charcoal-light max-w-lg leading-relaxed">
              Customize the intervention around the role and the performance
              gap.
            </p>

            <div className="mt-8">
              <Button href="/contact?service=triage" variant="primary" size="lg">
                Discuss Your Capability Needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What We Deliver ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Deliver"
            title="Targeted Capability Building"
            subtitle="Technical skills, leadership effectiveness, and real workplace application — designed together."
            centered
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {deliverColumns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                    <Icon className="w-6 h-6 text-orange" />
                  </div>
                  <h3
                    className="text-xl font-bold text-navy mb-3.5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {col.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] sm:text-base text-charcoal-light"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
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
            className="mt-10 md:mt-12 bg-navy rounded-2xl p-7 md:p-10 text-center"
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
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Learning Journey"
            title="From Assessment to Workplace Performance"
            centered
          />

          {/* Horizontal stepper */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 mt-2">
            {/* Scroll-drawn connector line (desktop) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-orange/30 via-orange to-orange/30 origin-left"
            />

            {journeySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.verb}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.14 }}
                  className="group relative flex flex-col items-center text-center md:flex-1"
                >
                  <div className="z-10 w-20 h-20 rounded-full bg-white border-2 border-orange flex items-center justify-center shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 text-orange" />
                  </div>
                  <h4
                    className="mt-4 text-lg sm:text-xl font-bold text-navy"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.verb}
                  </h4>
                  <p className="mt-1 text-[15px] text-charcoal-light max-w-[180px]">
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
            className="mt-10 md:mt-12 max-w-3xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-sm">
              <p
                className="text-sm font-bold uppercase tracking-[0.15em] text-orange mb-2.5"
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

      {/* ── 4. Domain Development (Slide 7) ── */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Domain Development"
            title="Build Domain Expertise, Strengthen Business Execution"
            subtitle="Connect shop-floor realities with cross-functional execution rigor."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {domainCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className="text-xl font-bold text-navy"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-charcoal-light leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Domain outcome + design principles */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy rounded-2xl p-6 sm:p-7 text-center md:text-left"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Domain Outcome
              </p>
              <p
                className="text-xl text-white font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Translate domain knowledge into better operational decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Context-Led Development
              </p>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Map industry, functional &amp; role requirements to focus development on the knowledge needed for daily execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                A Journey Tailored to the Role
              </p>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Combine workshops, process observations &amp; workplace assignments around the operating context of each role.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Leadership Development ── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership Development"
            title="Develop Leaders Across Six Connected Disciplines"
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {leadershipCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className="text-xl font-bold text-navy"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-charcoal-light leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Leadership outcome + notes */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy rounded-2xl p-6 sm:p-7 text-center md:text-left"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Leadership Outcome
              </p>
              <p
                className="text-xl text-white font-semibold"
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
              className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Assessment
              </p>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Leadership and behavioral assessments, including MBTI, build
                self-awareness and inform individual development priorities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Journey
              </p>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Combine workshops, coaching and workplace application around the
                demands of each leadership role.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Technical Development (Slide 9) ── */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technical Development"
            title="Build Practical Skills, Improve Quality & Productivity"
            subtitle="Convert technical competence into measurable quality and throughput gains."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {technicalMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-md hover:shadow-xl hover:border-orange/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 text-orange group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full font-accent">
                        {method.tag}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-navy mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-charcoal-light text-[15px] leading-relaxed">
                      {method.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technical outcome + pedagogical pillars */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-5 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy rounded-2xl p-6 sm:p-7 text-center md:text-left"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange-light mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Technical Outcome
              </p>
              <p
                className="text-xl text-white font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Convert technical competence into quality &amp; productivity gains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Practical Skill Assessment
              </p>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Assess tool knowledge &amp; practical proficiency before &amp; after capability interventions to identify gaps &amp; verify progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-cream-dark"
            >
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] text-orange mb-2"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Applied Real Projects
              </p>
              <p className="text-charcoal-light text-[15px] leading-relaxed">
                Combine hands-on exercises &amp; workplace improvement projects to turn technical methods into repeatable execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. IGNOVA Triage Advantage & Learning Impact Scorecard (Slide 6) ── */}
      <section className="bg-cream py-16 md:py-20 border-y border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="IGNOVA Triage Advantage"
            title="Make Learning Visible in Workplace Impact"
            subtitle="Connect learning journeys directly to observable operational metrics and sustained shop-floor yield."
            centered
          />

          {/* Learning Impact Scorecard Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mt-2"
          >
            <div className="bg-navy px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-light font-accent block">
                  Evidence-Based Validation
                </span>
                <h3 className="text-2xl font-bold text-white font-heading mt-0.5">
                  Learning Impact Scorecard
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider bg-white/10 text-emerald-400 border border-emerald-400/30 font-accent w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Measurable Workplace ROI
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {scorecardMetrics.map((item, idx) => (
                <div
                  key={item.domain}
                  className="px-6 sm:px-8 py-5 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="md:w-1/3">
                    <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 font-accent mb-1.5">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#0B2038] font-heading">
                      {item.domain}
                    </h4>
                  </div>

                  <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-base font-bold text-orange font-accent">
                        {item.metric}
                      </p>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 8. CTA Banner ── */}
      <CTABanner
        variant="navy"
        title="Ready to Build Workforce Capability?"
        subtitle="Start with a role-based assessment and design targeted interventions."
        buttonText="Discuss Your Capability Needs"
        buttonHref="/contact"
        secondaryButtonText="Explore IGNOVA Edge"
        secondaryButtonHref="/services/edge"
      />
    </div>
  );
}
