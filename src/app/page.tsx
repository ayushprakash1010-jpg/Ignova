import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import ClientLogos from "@/components/ui/ClientLogos";

export default function HomePage() {
  return (
    <div className="bg-white text-[#1E293B]">
      
      {/* =========================================================================
          1. HERO SECTION: Full-Width Edge-to-Edge Split Screen (High-Impact Consulting Style)
          ========================================================================= */}
      <section className="relative pt-16 sm:pt-20 bg-[#0B2038] overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
          
          {/* Left Column: Full-Height Deep Navy Card flush to left margin */}
          <div className="lg:col-span-6 xl:col-span-5 bg-[#0B2038] text-white flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-12 xl:pl-24 xl:pr-12 py-16 lg:py-24 z-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DF7C36] font-accent mb-6 block">
                IGNOVA CONSULTING &amp; ACADEMY
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-white font-serif leading-[1.12] mb-6 tracking-tight">
                Enabling<br />
                execution<br />
                <span className="italic font-normal">&amp; impact.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-md">
                Talent acquisition, talent development, and growth &amp; transformation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-md bg-[#DF7C36] hover:bg-[#C86A28] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
              >
                Explore services
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-md text-white hover:text-orange-200 text-xs sm:text-sm font-semibold transition-colors border border-white/20 hover:border-white/40"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Full-Bleed Manufacturing Plant Floor Photography */}
          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full">
            <Image
              src="/images/hero/hero-factory-floor.jpg"
              alt="Modern precision manufacturing facility with engineers"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. STATS BAR: Full-Width Warm Sand / Beige (#F4F0E8) with Institutional Dividers
          ========================================================================= */}
      <section className="bg-[#F4F0E8] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            
            {/* Stat 1: 50+ Years */}
            <div className="md:border-r md:border-[#E8E2D5] md:pr-6 md:pl-2 first:pl-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                50+
              </div>
              <p className="text-xs sm:text-[13px] text-slate-800 font-semibold mt-1 font-accent">
                Years of industrial expertise
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                Shop-floor realities to boardroom strategy
              </p>
            </div>

            {/* Stat 2: 1,000+ Candidates */}
            <div className="md:border-r md:border-[#E8E2D5] md:px-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                1,000+
              </div>
              <p className="text-xs sm:text-[13px] text-slate-800 font-semibold mt-1 font-accent">
                Candidates hired
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                Specialist &amp; executive placements
              </p>
            </div>

            {/* Stat 3: 8+ Years */}
            <div className="md:border-r md:border-[#E8E2D5] md:px-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                8+
              </div>
              <p className="text-xs sm:text-[13px] text-slate-800 font-semibold mt-1 font-accent">
                Years in recruitment
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                Evidence-backed search rigor
              </p>
            </div>

            {/* Stat 4: 12+ Clients */}
            <div className="md:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                12+
              </div>
              <p className="text-xs sm:text-[13px] text-slate-800 font-semibold mt-1 font-accent">
                Major recruitment clients
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                Long-term enterprise partnerships
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SERVICE PORTFOLIO: Pure White Background, 3 Photographic Feature Cards
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
              SERVICE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#0B2038] tracking-tight">
              Three capabilities. One partner.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: IGNOVA Triage */}
            <div className="group border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/services/triage-engineers.jpg"
                    alt="Engineers reviewing blueprints on factory floor"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-1">
                    APPLIED LEARNING
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                    IGNOVA Triage
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Capability transformation through technical excellence, leadership development and domain insight.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services/triage"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2038] group-hover:text-[#C86A28] font-accent transition-colors"
                >
                  Explore Triage
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: IGNOVA Edge */}
            <div className="group border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/services/edge-boardroom.jpg"
                    alt="Corporate executives in strategic talent discussion"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-1">
                    CREDIBLE TALENT
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                    IGNOVA Edge
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Strategic talent advisory, leadership and specialist search, onboarding and performance.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services/edge"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2038] group-hover:text-[#C86A28] font-accent transition-colors"
                >
                  Explore Edge
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Project Execution */}
            <div className="group border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg transition-all duration-300 bg-white">
              <div>
                <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/services/execution-robotics.jpg"
                    alt="Industrial robotics and automated manufacturing cell"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-1">
                    OPERATIONAL EXCELLENCE
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                    Project Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Industrial performance consulting across quality, reliability, performance management and cross-functional productivity.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/services/project-execution"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2038] group-hover:text-[#C86A28] font-accent transition-colors"
                >
                  Explore Project Execution
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          EXECUTIVE PHILOSOPHY: Pull-Quote from Presentation Deck (Slides 2, 6, 12)
          ========================================================================= */}
      <section className="bg-[#FAF9F6] py-14 sm:py-16 border-y border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C86A28] font-accent block mb-4">
            The IGNOVA Operating Philosophy
          </span>
          <blockquote className="text-xl sm:text-2xl md:text-[26px] font-normal font-serif text-[#0B2038] leading-snug tracking-tight">
            &ldquo;Connect workforce readiness to operational performance &mdash; bridging shop-floor realities to executive strategy through capability transformation, evidence-backed search, and industrial rigor.&rdquo;
          </blockquote>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500 font-accent uppercase tracking-wider">
            <span>Shop Floor to Boardroom</span>
            <span className="opacity-40">&middot;</span>
            <span>Evidence-Backed Rigor</span>
            <span className="opacity-40">&middot;</span>
            <span>Measurable Workplace Yield</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PERFORMANCE AMBITION: Warm Sand / Beige (#F4F0E8) with Visual Progression
          ========================================================================= */}
      <section className="bg-[#F4F0E8] py-16 sm:py-20 md:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
              PERFORMANCE AMBITION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif text-[#0B2038] tracking-tight max-w-4xl leading-snug">
              Close talent gaps, build capability, accelerate R&amp;D and improve P&amp;L
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 01 */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 font-accent">
                  01
                </span>
                <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
              </div>
              <h3 className="text-lg font-bold font-serif text-[#0B2038] mb-2">
                Diagnose
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Assess talent gaps, competency needs and operating constraints. Establish the performance baseline.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 font-accent">
                  02
                </span>
                <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
              </div>
              <h3 className="text-lg font-bold font-serif text-[#0B2038] mb-2">
                Prioritize
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Distinguish essential roles and capabilities from those that can wait. Agree focused priorities.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 font-accent">
                  03
                </span>
                <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
              </div>
              <h3 className="text-lg font-bold font-serif text-[#0B2038] mb-2">
                Execute
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Target the industry search and deliver talent and learning interventions.
              </p>
            </div>

            {/* Step 04 */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 font-accent">
                  04
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif text-[#0B2038] mb-2">
                Impact
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Put performance controls in place and track R&amp;D progress and P&amp;L impact.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. SECTOR REACH & CREDENTIALS: India's Industrial & Enterprise Leaders
          ========================================================================= */}
      <section className="bg-[#FAF9F6] py-16 sm:py-20 md:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
              SECTOR REACH &amp; CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#0B2038] tracking-tight mb-4">
              Trusted by India&apos;s Industrial &amp; Enterprise Leaders
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
              Applying cross-industry operating depth, structured candidate assessment, and disciplined shop-floor execution across Manufacturing, Automotive, BFSI, and Technology.
            </p>

            {/* GPWD Culture Pill from Slide 17 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[11px] font-semibold text-slate-700 font-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
              Supporting Organizations Towards GPWD Certification &amp; Culture Strengthening
            </div>
          </div>

          {/* Client Logos: Grayscale-to-Color Visual Cards */}
          <ClientLogos />

          {/* Industry Sectors Footer */}
          <div className="mt-12 pt-6 border-t border-slate-200/80 text-xs text-slate-500 font-normal">
            Manufacturing &middot; Automotive &middot; Financial services &middot; Technology &middot; Healthcare
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CALL TO ACTION BANNER: Deep Navy (#0B2038), Strictly NO "your priority"
          ========================================================================= */}
      <section className="bg-[#0B2038] py-14 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal font-serif text-white tracking-tight leading-snug mb-2">
              Align the mandate. Mobilize expertise. Deliver performance.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Start with mandate calibration and performance goals.
            </p>
            <p className="text-[11px] text-slate-400 mt-2">
              Confidential executive consultation &middot; Response within 1 business day &middot; Gurugram &amp; Pan-India
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-md bg-[#DF7C36] hover:bg-[#C86A28] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
