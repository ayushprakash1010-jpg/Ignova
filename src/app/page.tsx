import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Factory, Truck } from "lucide-react";
import ClientLogos from "@/components/ui/ClientLogos";
import { Reveal, AnimatedNumber } from "@/components/ui/MotionPrimitives";

export default function HomePage() {
  return (
    <div className="bg-white text-[#1E293B]">
      
      {/* =========================================================================
          1. HERO SECTION: Full-Width Real Documentary Industrial Photography
          ========================================================================= */}
      <section className="relative pt-16 sm:pt-20 bg-[#0B2038] overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[580px]">
          
          {/* Left Column: Balanced 50% Deep Navy Card flush to left margin */}
          <div className="lg:col-span-6 bg-[#0B2038] text-white flex flex-col justify-center px-4 sm:px-6 lg:pr-10 xl:pr-12 hero-content-pad py-14 lg:py-20 z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-[0.18em] text-[#DF7C36] font-accent mb-6 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF7C36]" />
                Connecting Shop Floor to Boardroom
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-normal text-white font-serif leading-[1.1] mb-6 tracking-tight">
                Enabling execution<br />
                <span className="italic font-normal">&amp; impact.</span>
              </h1>

              <p className="text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
                Talent acquisition, talent development, and growth &amp; transformation under one trusted partner.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-md bg-[#DF7C36] hover:bg-[#C86A28] text-white text-sm sm:text-[15px] font-semibold transition-all shadow-xs hover:shadow-md"
              >
                Explore services
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-md text-white hover:text-orange-200 text-sm sm:text-[15px] font-semibold transition-colors border border-white/20 hover:border-white/40"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="pt-8 sm:pt-10 hidden lg:flex items-center gap-3 text-slate-400 text-xs font-accent tracking-[0.18em] uppercase">
              <span className="w-6 h-px bg-white/20" />
              <span>Scroll to explore</span>
              <span className="text-[#DF7C36] animate-bounce">&darr;</span>
            </div>
          </div>

          {/* Right Column: Balanced 50% Precision Industrial Operations */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-[#0B2038]">
            <Image
              src="/images/hero/hero-precision-plant.jpg"
              alt="State-of-the-art precision manufacturing plant with automated robotic systems and structural steel architecture"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center animate-hero-settle"
            />
            {/* Subtle desktop seam feather softening the split into deep navy */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute inset-y-0 left-0 w-28 xl:w-36 bg-gradient-to-r from-[#0B2038] via-[#0B2038]/65 via-40% to-transparent pointer-events-none"
            />
            {/* Subtle mobile vertical seam feather */}
            <div
              aria-hidden="true"
              className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B2038] via-[#0B2038]/55 to-transparent pointer-events-none"
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
                <AnimatedNumber value={50} suffix="+" />
              </div>
              <p className="text-sm sm:text-[15px] text-slate-800 font-semibold mt-1.5 font-accent">
                Years of industrial expertise
              </p>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 hidden sm:block">
                Shop-floor realities to boardroom strategy
              </p>
            </div>

            {/* Stat 2: 1,000+ Candidates */}
            <div className="md:border-r md:border-[#E8E2D5] md:px-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                <AnimatedNumber value={1000} suffix="+" />
              </div>
              <p className="text-sm sm:text-[15px] text-slate-800 font-semibold mt-1.5 font-accent">
                Candidates hired
              </p>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 hidden sm:block">
                Specialist &amp; executive placements
              </p>
            </div>

            {/* Stat 3: 8+ Years */}
            <div className="md:border-r md:border-[#E8E2D5] md:px-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                <AnimatedNumber value={8} suffix="+" />
              </div>
              <p className="text-sm sm:text-[15px] text-slate-800 font-semibold mt-1.5 font-accent">
                Years in recruitment
              </p>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 hidden sm:block">
                Evidence-backed search rigor
              </p>
            </div>

            {/* Stat 4: 12+ Clients */}
            <div className="md:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-[#0B2038]">
                <AnimatedNumber value={12} suffix="+" />
              </div>
              <p className="text-sm sm:text-[15px] text-slate-800 font-semibold mt-1.5 font-accent">
                Major recruitment clients
              </p>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 hidden sm:block">
                Long-term enterprise partnerships
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EDITORIAL PULL QUOTE: Humanized Executive Operating Ethos
          ========================================================================= */}
      <div className="bg-white border-b border-[#E8E2D5] py-9 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl md:text-[22px] font-normal font-serif text-[#0B2038] italic leading-relaxed">
            &ldquo;Industrial performance is not won in boardroom presentations alone. It is achieved when plant leadership, quality engineers, and operators share common baselines and relentless execution discipline.&rdquo;
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#C86A28] font-accent">
            <span className="w-8 h-px bg-[#C86A28]" />
            IGNOVA Operating Ethos
            <span className="w-8 h-px bg-[#C86A28]" />
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. SERVICE PORTFOLIO: Pure White Background, 3 Photographic Feature Cards
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
                SERVICE PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#0B2038] tracking-tight">
                Three capabilities. One partner.
              </h2>
            </div>
            
            {/* Operational Triad Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 font-accent">
              <span className="font-bold text-[#C86A28]">Focus:</span> People + Processes + Technology
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: IGNOVA Triage */}
            <Reveal delay={0} className="h-full">
              <div className="group border border-slate-200 rounded-lg overflow-hidden h-full flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/services/triage-engineers.jpg"
                      alt="Industrial engineering blueprints, mechanical tooling schematics, and precision digital calipers on plant workstation"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-1.5">
                      APPLIED LEARNING
                    </span>
                    <h3 className="text-xl sm:text-[22px] font-bold font-serif text-[#0B2038] mb-2">
                      IGNOVA Triage
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                      Capability transformation through technical excellence, leadership development and domain insight.
                    </p>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-500 font-accent">
                      Six Sigma &middot; VSM &amp; SMED &middot; Root Cause Analysis
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/services/triage"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B2038] group-hover:text-[#C86A28] font-accent transition-colors"
                  >
                    Explore Triage
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 2: IGNOVA Edge */}
            <Reveal delay={0.1} className="h-full">
              <div className="group border border-slate-200 rounded-lg overflow-hidden h-full flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/services/edge-boardroom.jpg"
                      alt="Prestigious executive boardroom suite with floor-to-ceiling glass windows and conference table for leadership search"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-1.5">
                      CREDIBLE TALENT
                    </span>
                    <h3 className="text-xl sm:text-[22px] font-bold font-serif text-[#0B2038] mb-2">
                      IGNOVA Edge
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                      Strategic talent advisory, leadership and specialist search, onboarding and performance.
                    </p>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-500 font-accent">
                      Executive Search &middot; Plant Leadership &middot; Specialist Roles
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/services/edge"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B2038] group-hover:text-[#C86A28] font-accent transition-colors"
                  >
                    Explore Edge
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Project Execution */}
            <Reveal delay={0.2} className="h-full">
              <div className="group border border-slate-200 rounded-lg overflow-hidden h-full flex flex-col justify-between hover:border-[#C86A28]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/services/execution-robotics.jpg"
                      alt="Orange multi-axis industrial robotic arm performing precision automated manufacturing welding"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent block mb-1.5">
                      OPERATIONAL EXCELLENCE
                    </span>
                    <h3 className="text-xl sm:text-[22px] font-bold font-serif text-[#0B2038] mb-2">
                      Project Execution
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                      Industrial performance consulting across quality, reliability, performance management and cross-functional productivity.
                    </p>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-500 font-accent">
                      Yield Enhancement &middot; OEE Improvement &middot; Industry 4.0
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/services/project-execution"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B2038] group-hover:text-[#C86A28] font-accent transition-colors"
                  >
                    Explore Project Execution
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. ON-SITE EXECUTION: Make change tangible where work happens
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 md:py-24 border-t border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Narrative & Philosophy */}
            <div className="lg:col-span-5">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
                ON-SITE EXECUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#0B2038] tracking-tight mb-4">
                Make change tangible where work happens.
              </h2>
              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal mb-6">
                Real operational improvement doesn&apos;t happen in abstract presentations. It happens directly on the shop floor—where operators, supervisors, and plant leadership address daily constraints in real time.
              </p>
              
              {/* Core Advisory Principle */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#FAF9F6] border-l-4 border-[#C86A28] border-y border-r border-[#E8E2D5] mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent mb-1">
                  Core Advisory Principle
                </p>
                <p className="text-sm sm:text-[15px] text-slate-800 font-medium italic leading-relaxed">
                  &ldquo;Customize the intervention around the role and the performance gap—not off-the-shelf packages.&rdquo;
                </p>
              </div>

              {/* Cross-Functional Triad */}
              <div className="pt-2">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-500 font-accent block mb-2.5">
                  Shared Execution Across Functions:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-md bg-[#FAF9F6] border border-slate-200 text-slate-800 text-sm font-semibold font-accent">
                    Production
                  </span>
                  <span className="text-slate-400 text-sm font-bold">&harr;</span>
                  <span className="px-3.5 py-1.5 rounded-md bg-[#FAF9F6] border border-slate-200 text-slate-800 text-sm font-semibold font-accent">
                    Quality
                  </span>
                  <span className="text-slate-400 text-sm font-bold">&harr;</span>
                  <span className="px-3.5 py-1.5 rounded-md bg-[#FAF9F6] border border-slate-200 text-slate-800 text-sm font-semibold font-accent">
                    Plant Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 3 On-Site Stages */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Step 1: Diagnose at Source */}
              <Reveal delay={0}>
                <div className="group p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 hover:border-[#C86A28]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#0B2038] group-hover:bg-[#C86A28] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 font-accent mt-0.5 transition-colors duration-300">
                      01
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2038] mb-1.5">
                        Diagnose at Source
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        Observe operating conditions, line bottlenecks, material flow, and equipment losses directly in the active plant environment.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Step 2: Build Through Practice */}
              <Reveal delay={0.1}>
                <div className="group p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 hover:border-[#C86A28]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#0B2038] group-hover:bg-[#C86A28] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 font-accent mt-0.5 transition-colors duration-300">
                      02
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2038] mb-1.5">
                        Build Through Practice
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        Apply structured workshops and coaching directly to live shop-floor challenges—validating real work solutions rather than textbook theory.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Step 3: Execute Across Functions */}
              <Reveal delay={0.2}>
                <div className="group p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 hover:border-[#C86A28]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#0B2038] group-hover:bg-[#C86A28] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 font-accent mt-0.5 transition-colors duration-300">
                      03
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2038] mb-1.5">
                        Execute Across Functions
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        Cross-functional teams take full ownership of root-cause corrective actions, standard process controls, and sustainable yield metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHERE IMPACT BECOMES VISIBLE: Real Industrial Metrics
          ========================================================================= */}
      <section className="bg-[#FAF9F6] py-16 sm:py-20 border-y border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#C86A28] font-accent block mb-2">
              Performance Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#0B2038] tracking-tight mb-4">
              Where Impact Becomes Visible
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We connect workforce readiness to operational performance. Measured at defined hiring, capability, and shop-floor yield milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Domain 1: Plant Leadership */}
            <Reveal delay={0} className="h-full">
              <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#C86A28]/45 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold uppercase tracking-wider text-[#0B2038] font-accent mb-3">
                  Plant Leadership
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C86A28] flex-shrink-0" />
                    <span><strong>OEE (%)</strong> &middot; Overall Equipment Effectiveness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C86A28] flex-shrink-0" />
                    <span><strong>Productivity</strong> &middot; Line output &amp; efficiency</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Domain 2: Quality Leadership */}
            <Reveal delay={0.1} className="h-full">
              <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#C86A28]/45 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold uppercase tracking-wider text-[#0B2038] font-accent mb-3">
                  Quality Leadership
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C86A28] flex-shrink-0" />
                    <span><strong>Defect PPM</strong> reduction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C86A28] flex-shrink-0" />
                    <span><strong>Cost of Poor Quality (COPQ)</strong></span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Domain 3: Supply Chain Leadership */}
            <Reveal delay={0.2} className="h-full">
              <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#C86A28]/45 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold uppercase tracking-wider text-[#0B2038] font-accent mb-3">
                  Supply Chain Leadership
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C86A28] flex-shrink-0" />
                    <span><strong>On-Time Delivery (%)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C86A28] flex-shrink-0" />
                    <span><strong>Inventory Turns</strong> &amp; working capital</span>
                  </li>
                </ul>
              </div>
            </Reveal>

          </div>

          {/* Governance Footer Note */}
          <div className="mt-10 pt-6 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
            <span className="font-accent">
              <strong>Governance Model:</strong> Establish Baselines &rarr; Set Measurable Targets &rarr; Assign Ownership &rarr; Review Results
            </span>
            <Link href="/approach" className="font-bold text-[#C86A28] hover:text-[#B05819] flex items-center gap-1 font-accent">
              View Measurement Architecture &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. PERFORMANCE AMBITION: Warm Sand / Beige (#F4F0E8) with Visual Progression
          ========================================================================= */}
      <section className="bg-[#F4F0E8] py-16 sm:py-20 md:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
              PERFORMANCE AMBITION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif text-[#0B2038] tracking-tight max-w-4xl leading-snug">
              Unlock capacity, improve yield, accelerate delivery, and strengthen margins
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 01 */}
            <Reveal delay={0}>
              <div className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-400 group-hover:text-[#C86A28] transition-colors font-accent">
                    01
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C86A28]" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                  Diagnose
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-2.5">
                  Assess talent, capability and operating gaps to establish a clear performance baseline.
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                  Output: Performance Baseline
                </span>
              </div>
            </Reveal>

            {/* Step 02 */}
            <Reveal delay={0.08}>
              <div className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-400 group-hover:text-[#C86A28] transition-colors font-accent">
                    02
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C86A28]" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                  Prioritize
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-2.5">
                  Align objectives and critical resources around high-impact operational mandates.
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                  Output: Focused Priorities
                </span>
              </div>
            </Reveal>

            {/* Step 03 */}
            <Reveal delay={0.16}>
              <div className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-400 group-hover:text-[#C86A28] transition-colors font-accent">
                    03
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C86A28]" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                  Execute
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-2.5">
                  Deploy specialist expertise with disciplined progress reviews on site.
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                  Output: Targeted Interventions
                </span>
              </div>
            </Reveal>

            {/* Step 04 */}
            <Reveal delay={0.24}>
              <div className="group relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-400 group-hover:text-[#C86A28] transition-colors font-accent">
                    04
                  </span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B2038] mb-2">
                  Sustain
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-2.5">
                  Embed standard operating practices, clear ownership, and continuous improvement.
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C86A28] font-accent">
                  Output: Performance Controls
                </span>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. SECTOR REACH & CREDENTIALS: India's Industrial & Enterprise Leaders
          ========================================================================= */}
      <section className="bg-[#FAF9F6] py-16 sm:py-20 md:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#C86A28] font-accent block mb-2">
              SECTOR REACH &amp; CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-serif text-[#0B2038] tracking-tight mb-4">
              Trusted by India&apos;s Industrial &amp; Enterprise Leaders
            </h2>
            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal mb-5">
              Applying cross-industry operating depth, structured candidate assessment, and disciplined shop-floor execution across Manufacturing, Automotive, BFSI, and Technology.
            </p>

            {/* GPWD Culture Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs sm:text-[13px] font-semibold text-slate-700 font-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86A28]" />
              Supporting Organizations Towards GPWD Certification &amp; Culture Strengthening
            </div>
          </div>

          {/* Client Logos: Grayscale-to-Color Visual Cards */}
          <ClientLogos />

          {/* Industry Sectors Footer */}
          <div className="mt-12 pt-6 border-t border-slate-200/80 text-sm text-slate-500 font-normal">
            Manufacturing &middot; Automotive &middot; Financial services &middot; Technology &middot; Healthcare
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. CALL TO ACTION BANNER: Deep Navy (#0B2038), Strictly NO "your priority"
          ========================================================================= */}
      <section className="bg-[#0B2038] py-14 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#F59E56] font-accent mb-2">
              Build capability &middot; Secure talent &middot; Engineer performance
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal font-serif text-white tracking-tight leading-snug mb-2">
              Align the mandate. Mobilize expertise. Deliver performance.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Start with mandate calibration and performance goals.
            </p>
            <p className="text-xs sm:text-[13px] text-slate-400 mt-2">
              Confidential executive consultation &middot; Response within 1 business day &middot; Gurugram &amp; Pan-India
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-6 py-3.5 rounded-md bg-[#DF7C36] hover:bg-[#C86A28] text-white text-sm sm:text-[15px] font-semibold transition-all shadow-xs hover:shadow-md"
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
