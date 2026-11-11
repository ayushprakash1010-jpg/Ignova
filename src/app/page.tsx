"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ClientLogos from "@/components/ui/ClientLogos";
import {
  DELIVERY_STEPS,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="bg-[#FDFCFB] text-[#1E293B]">
      
      {/* =========================================================================
          1. HERO SECTION: Perfectly Balanced 12-Column Grid (Zero Empty Space)
          ========================================================================= */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 12-Column Split: Left Mandate + Right Operating Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center mb-16">
            
            {/* Left 7 Columns: Editorial Core Message */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#C86A28] border border-[#C86A28]/20 text-xs font-bold uppercase tracking-[0.15em] mb-6 font-accent"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
                IGNOVA Consulting & Academy
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B2038] tracking-tight leading-[1.1] mb-6 font-heading"
              >
                Architect. <span className="text-[#C86A28]">Activate.</span> Accelerate.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed font-normal max-w-2xl"
              >
                Three capabilities under one trusted partner. Connecting people to business execution through industrial depth, strategic search, and workforce transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
              >
                <Link href="/services" className="btn-primary text-base">
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline text-base">
                  Schedule Consultation
                </Link>
              </motion.div>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-accent pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C86A28]" />
                  <span className="font-semibold text-slate-800">21 Years Industrial Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C86A28]" />
                  <span className="font-semibold text-slate-800">1,000+ Candidates Hired</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C86A28]" />
                  <span className="font-semibold text-slate-800">Shop Floor to Boardroom</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Executive Operating Architecture Dossier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative">
                
                {/* Dossier Header */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-200/80">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 font-accent block">
                      Operating Architecture
                    </span>
                    <h3 className="text-base font-bold text-[#0B2038] font-heading mt-0.5">
                      Three Capabilities · One Partner
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Evidence-Backed
                  </span>
                </div>

                {/* 3 Pillars Structured Breakdown */}
                <div className="space-y-3.5 mb-6">
                  
                  {/* Pillar 1: Triage */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs hover:border-[#C86A28]/40 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                        01 / ARCHITECT
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-accent">
                        IGNOVA TRIAGE
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0B2038] font-heading mb-1">
                      Workforce Capability Transformation
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Role-specific competency transformation, technical rigor & leadership development.
                    </p>
                  </div>

                  {/* Pillar 2: Edge */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs hover:border-[#C86A28]/40 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                        02 / ACTIVATE
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-accent">
                        IGNOVA EDGE
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0B2038] font-heading mb-1">
                      Strategic Talent Advisory & Search
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Calibrated mandates turned into evidence-backed hiring decisions & credible shortlists.
                    </p>
                  </div>

                  {/* Pillar 3: Execution */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs hover:border-[#C86A28]/40 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                        03 / ACCELERATE
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-accent">
                        PROJECT EXECUTION
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0B2038] font-heading mb-1">
                      Industrial Performance Consulting
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Quality, yield, productivity & operational ownership with disciplined shop-floor handover.
                    </p>
                  </div>

                </div>

                {/* Dossier Footer */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold font-accent">From Shop Floor to Boardroom</span>
                  <Link href="/approach" className="font-bold text-[#C86A28] hover:text-[#B05819] flex items-center gap-1 font-accent">
                    View Methodology <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Full-Width 3-Pillar Anchor Bar (From Slide 1 of Executive Deck) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-full rounded-2xl bg-[#0B2038] text-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-white/10 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-xl bg-white/10 text-[#DF7C36] flex items-center justify-center flex-shrink-0 font-bold font-accent text-xs">
                01
              </span>
              <div>
                <h3 className="text-sm font-bold text-white font-accent">Talent Acquisition</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Strategic search, mandate calibration & credible shortlists for critical leadership roles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:pl-8">
              <span className="w-9 h-9 rounded-xl bg-white/10 text-[#DF7C36] flex items-center justify-center flex-shrink-0 font-bold font-accent text-xs">
                02
              </span>
              <div>
                <h3 className="text-sm font-bold text-white font-accent">Talent Development</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Role-specific competency transformation, technical rigor & leadership effectiveness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:pl-8">
              <span className="w-9 h-9 rounded-xl bg-white/10 text-[#DF7C36] flex items-center justify-center flex-shrink-0 font-bold font-accent text-xs">
                03
              </span>
              <div>
                <h3 className="text-sm font-bold text-white font-accent">Growth & Transformation</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Industrial consulting, productivity, defect reduction & sustainable shop-floor ownership.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          2. SERVICE PORTFOLIO: Clean Editorial 3-Column Framework (Matches Slide 3)
          ========================================================================= */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F8F7F4] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="Service Portfolio"
            title="Three Capabilities. One Partner."
            subtitle="Tailored capability interventions connecting people readiness to business execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            {/* Column 1: Architect / IGNOVA TRIAGE */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                    01 / Architect
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center font-bold text-xs font-accent">
                    01
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#0B2038] mb-1 font-heading">
                  IGNOVA TRIAGE
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-4 font-accent">
                  Capability Transformation
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Customize the intervention around the role and the measurable performance gap.
                </p>

                <div className="pt-6 border-t border-slate-100 space-y-3 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-accent mb-2">
                    Key Deliverables
                  </p>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Role-specific competency transformation</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Technical and leadership development</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Applied learning & behavioral change</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
                  Applied Learning
                </span>
                <Link
                  href="/services/triage"
                  className="text-xs font-bold text-[#0B2038] hover:text-[#C86A28] flex items-center gap-1 font-accent"
                >
                  Explore Triage <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Column 2: Activate / IGNOVA EDGE */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                    02 / Activate
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center font-bold text-xs font-accent">
                    02
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#0B2038] mb-1 font-heading">
                  IGNOVA EDGE
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-4 font-accent">
                  Strategic Talent Advisory
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Turn critical mandates into evidence-backed hiring decisions with rigorous market mapping.
                </p>

                <div className="pt-6 border-t border-slate-100 space-y-3 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-accent mb-2">
                    Key Deliverables
                  </p>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Strategic talent advisory & planning</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Executive search & specialist recruitment</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Benchmarked, credible candidate shortlists</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
                  Credible Shortlists
                </span>
                <Link
                  href="/services/edge"
                  className="text-xs font-bold text-[#0B2038] hover:text-[#C86A28] flex items-center gap-1 font-accent"
                >
                  Explore Edge <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Column 3: Accelerate / PROJECT EXECUTION */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                    03 / Accelerate
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center font-bold text-xs font-accent">
                    03
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#0B2038] mb-1 font-heading">
                  PROJECT EXECUTION
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-4 font-accent">
                  Industrial Performance Consulting
                </p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Connect workforce readiness to operational performance and sustainable floor-level ownership.
                </p>

                <div className="pt-6 border-t border-slate-100 space-y-3 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-accent mb-2">
                    Key Deliverables
                  </p>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Industrial performance & operations consulting</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Quality, productivity, OEE and defect reduction</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#C86A28] mt-0.5 flex-shrink-0" />
                    <span>Operational ownership & disciplined handover</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-accent">
                  Operational Improvement
                </span>
                <Link
                  href="/services/project-execution"
                  className="text-xs font-bold text-[#0B2038] hover:text-[#C86A28] flex items-center gap-1 font-accent"
                >
                  Explore Execution <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. EXPERIENCE & CREDIBILITY: Deep Navy Executive Showcase (Matches Slide 17)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#0B2038] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 max-w-3xl">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-orange-200 border border-white/10 mb-4 font-accent">
              Experience & Credibility
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Bring Industrial Depth to Talent and Capability Decisions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Bridging practical realities from the manufacturing shop floor to the executive boardroom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Primary Anchor Metric: 21 Years */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-7xl sm:text-8xl font-black text-white tracking-tight font-heading mb-2">
                  21
                </div>
                <p className="text-xl sm:text-2xl font-bold text-[#DF7C36] font-accent mb-2">
                  Years of Industrial Expertise
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Decades of hands-on operational leadership across manufacturing plants, engineering centers, and corporate boardrooms.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-8 flex items-center gap-2 text-xs text-slate-300 font-accent">
                <CheckCircle2 className="w-4 h-4 text-[#DF7C36]" />
                <span>Shop-Floor Realities to Executive Strategy</span>
              </div>
            </div>

            {/* Supporting 3 Metrics Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#DF7C36] font-heading mb-2">
                    1,000+
                  </div>
                  <p className="text-sm font-bold text-white font-accent">
                    Candidates Hired
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Placed across manufacturing, automotive, and technology enterprises.
                  </p>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-4 border-t border-white/10 mt-6 font-accent">
                  Structured Assessment
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#DF7C36] font-heading mb-2">
                    8+
                  </div>
                  <p className="text-sm font-bold text-white font-accent">
                    Years Recruitment Expertise
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Calibrated search methodology for specialist and leadership roles.
                  </p>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-4 border-t border-white/10 mt-6 font-accent">
                  Calibrated Search
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#DF7C36] font-heading mb-2">
                    12+
                  </div>
                  <p className="text-sm font-bold text-white font-accent">
                    Major Recruitment Clients
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Long-term partnerships spanning industrial consulting and talent mandates.
                  </p>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-4 border-t border-white/10 mt-6 font-accent">
                  Enterprise Reach
                </p>
              </div>

            </div>

          </div>

          <p className="mt-6 text-xs text-slate-400">
            Experience figures are based on the IGNOVA-provided corporate profile. Client names shown represent selected experience.
          </p>

        </div>
      </section>

      {/* =========================================================================
          4. THE EXCELLENCE AGENDA & DELIVERY APPROACH: Structured Matrix (Matches Slide 4 & 5)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="The Excellence Agenda"
            title="Connect People to Business Execution"
            subtitle="Align the mandate, capability gaps and concrete measures of success."
          />

          {/* Transformation Table (From Slide 4 of Executive Presentation) */}
          <div className="mb-20">
            <div className="w-full rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-slate-100 text-slate-700 px-6 sm:px-8 py-4 text-xs font-bold uppercase tracking-wider font-accent border-b border-slate-200/80">
                <div className="col-span-12 sm:col-span-4">Business Priority</div>
                <div className="hidden sm:block sm:col-span-4 text-center">IGNOVA Capability</div>
                <div className="hidden sm:block sm:col-span-4 text-right">Intended Outcome</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-100">
                
                {/* Row 1: Triage */}
                <div className="grid grid-cols-12 items-center px-6 sm:px-8 py-5 hover:bg-slate-50/80 transition-colors">
                  <div className="col-span-12 sm:col-span-4 font-bold text-[#0B2038] text-sm sm:text-base font-accent">
                    Build workforce capability
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:text-center text-xs font-bold text-[#C86A28] font-accent my-1.5 sm:my-0">
                    <span className="inline-block sm:hidden text-slate-400 mr-1.5 font-normal">Capability:</span>
                    → IGNOVA TRIAGE
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:text-right text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="inline-block sm:hidden text-slate-400 mr-1.5 font-normal">Outcome:</span>
                    Workplace application & behavioral change
                  </div>
                </div>

                {/* Row 2: Edge */}
                <div className="grid grid-cols-12 items-center px-6 sm:px-8 py-5 hover:bg-slate-50/80 transition-colors">
                  <div className="col-span-12 sm:col-span-4 font-bold text-[#0B2038] text-sm sm:text-base font-accent">
                    Fill business-critical roles
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:text-center text-xs font-bold text-[#C86A28] font-accent my-1.5 sm:my-0">
                    <span className="inline-block sm:hidden text-slate-400 mr-1.5 font-normal">Capability:</span>
                    → IGNOVA EDGE
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:text-right text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="inline-block sm:hidden text-slate-400 mr-1.5 font-normal">Outcome:</span>
                    Credible shortlists & leadership placement
                  </div>
                </div>

                {/* Row 3: Execution */}
                <div className="grid grid-cols-12 items-center px-6 sm:px-8 py-5 hover:bg-slate-50/80 transition-colors">
                  <div className="col-span-12 sm:col-span-4 font-bold text-[#0B2038] text-sm sm:text-base font-accent">
                    Support operational change
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:text-center text-xs font-bold text-[#C86A28] font-accent my-1.5 sm:my-0">
                    <span className="inline-block sm:hidden text-slate-400 mr-1.5 font-normal">Capability:</span>
                    → PROJECT EXECUTION
                  </div>
                  <div className="col-span-12 sm:col-span-4 sm:text-right text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="inline-block sm:hidden text-slate-400 mr-1.5 font-normal">Outcome:</span>
                    Operating performance & sustainable yield
                  </div>
                </div>

              </div>

              {/* Table Footer Banner */}
              <div className="bg-[#FAF9F6] px-6 sm:px-8 py-4 border-t border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-[#0B2038] uppercase tracking-wider font-accent mr-2">
                    Starting Point:
                  </span>
                  Align the mandate, capability gaps and concrete measures of success before deployment.
                </div>
                <Link href="/contact" className="font-bold text-[#C86A28] hover:text-[#B05819] font-accent flex items-center gap-1">
                  Initiate Mandate <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* Delivery Stepper: 01 Assess -> 02 Align -> 03 Execute -> 04 Sustain (From Slide 5) */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-2">
                Execution Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2038] font-heading">
                One Delivery Approach: Assess → Align → Execute → Sustain
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-2xl">
                A disciplined, four-phase execution model connecting mandate alignment to lasting workplace outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {DELIVERY_STEPS.map((step, idx) => (
                <div key={step.step} className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:border-[#C86A28]/40 hover:bg-white transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#C86A28] flex items-center justify-center font-accent shadow-2xs">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-accent">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#0B2038] mb-2 font-accent">
                      {step.step}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Ambition Callout Bar (Slide 5 Bottom) */}
            <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent mb-1">
                  Performance Ambition
                </p>
                <h4 className="text-base sm:text-lg font-bold text-[#0B2038] font-heading">
                  Unlock Capacity · Improve Yield · Accelerate Delivery · Strengthen Margins
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Every mandate starts by aligning the mandate, capability gaps, and concrete measures of success.
                </p>
              </div>
              <Link href="/approach" className="btn-outline text-xs whitespace-nowrap">
                Learn More About Our Methodology
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. SECTOR REACH & CLIENT CREDENTIALS (Matches Slide 16)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F8F7F4] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-[#C86A28] border border-[#C86A28]/20 mb-4 font-accent">
              Sector Reach & Credentials
            </span>
            <h3
              className="text-3xl sm:text-4xl font-extrabold text-[#0B2038] tracking-tight mb-4 font-heading"
            >
              Trusted by India&apos;s Industrial &amp; Enterprise Leaders
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Applying cross-industry operating depth, structured candidate assessment, and disciplined shop-floor execution across Manufacturing, Automotive, BFSI, and Technology.
            </p>
          </div>

          <ClientLogos />

        </div>
      </section>

      {/* =========================================================================
          6. CALL TO ACTION SECTION (Light, Clean, Elegant)
          ========================================================================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-[#C86A28] border border-[#C86A28]/20 mb-6 font-accent">
              Next Step
            </span>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B2038] tracking-tight mb-6 leading-tight font-heading"
            >
              Ready to connect talent to business execution?
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-normal">
              Start with your business priority. We will align the industrial depth, executive search rigor, and capability transformation frameworks.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-outline text-base">
                About Our Firm
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
