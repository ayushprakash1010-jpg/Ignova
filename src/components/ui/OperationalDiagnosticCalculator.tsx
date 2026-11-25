"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, AlertTriangle, TrendingUp, Users, Factory } from "lucide-react";

export default function OperationalDiagnosticCalculator() {
  const rolesId = useId();
  const daysId = useId();
  const oeeId = useId();

  // Slider state
  const [openRoles, setOpenRoles] = useState<number>(3);
  const [daysToFill, setDaysToFill] = useState<number>(75);
  const [currentOee, setCurrentOee] = useState<number>(64);

  // Benchmarked Industrial Math:
  // 1. Vacancy Drag: (Roles * Days / 30 days) * Avg Specialist Monthly Comp (₹1.8L) * Industrial Productivity Multiplier (3.2x)
  const vacancyDragLakhs = (openRoles * (daysToFill / 30) * 1.8 * 3.2);

  // 2. OEE Leakage: Benchmark target is 80%. Every 1% gap on an industrial line = ~₹1.5 Lakhs quarterly throughput & scrap drag.
  const oeeGap = Math.max(0, 80 - currentOee);
  const oeeLeakageLakhs = oeeGap * 1.5;

  // 3. Total Estimated Quarterly Drag
  const totalDragLakhs = Math.round((vacancyDragLakhs + oeeLeakageLakhs) * 10) / 10;
  const lineDaysExposure = openRoles * daysToFill;

  // Recommended IGNOVA Capabilities mapping
  const recommendedServices: string[] = [];
  if (openRoles >= 2 || daysToFill >= 60) {
    recommendedServices.push("IGNOVA Edge (Search Rigor)");
  }
  if (oeeGap >= 8) {
    recommendedServices.push("IGNOVA Triage (Competency Interventions)");
  }
  if (oeeGap >= 12 || openRoles >= 4) {
    recommendedServices.push("Project Execution (Shop-Floor Turnaround)");
  }
  if (recommendedServices.length === 0) {
    recommendedServices.push("Performance Maintenance & Governance");
  }

  const queryParams = new URLSearchParams({
    roles: String(openRoles),
    days: String(daysToFill),
    oee: String(currentOee),
    drag: String(Math.round(totalDragLakhs)),
  }).toString();

  return (
    <section className="bg-[#0B2038] text-white py-20 md:py-28 relative overflow-hidden border-b border-navy/40">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DF7C36]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#DF7C36] font-accent mb-4 border border-white/10">
            <Calculator className="w-3.5 h-3.5 text-[#DF7C36]" />
            Interactive Industrial Diagnostic
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}
          >
            Estimate Your Shop-Floor <span className="text-[#DF7C36]">P&amp;L Drag</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            In manufacturing, open leadership roles and shop-floor capability deficits directly impact line OEE, scrap rates, and quarterly EBITDA. Adjust the parameters below to benchmark your plant&apos;s exposure.
          </p>
        </div>

        {/* Diagnostic Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Interactive Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-9 flex flex-col justify-between shadow-2xl backdrop-blur-xs">
            <div className="space-y-8">
              
              {/* Slider 1: Open Critical Roles */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={rolesId} className="flex items-center gap-2 text-sm sm:text-base font-bold text-white font-accent">
                    <Users className="w-4 h-4 text-[#DF7C36]" />
                    <span>Open Leadership &amp; Specialist Roles</span>
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-[#DF7C36] font-heading">
                    {openRoles} {openRoles === 1 ? "Role" : "Roles"}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  Plant Head, Quality Lead, Maintenance Head, Tooling, SCM
                </p>
                <input
                  id={rolesId}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={openRoles}
                  onChange={(e) => setOpenRoles(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#DF7C36]"
                />
                <div className="flex justify-between text-[11px] text-slate-300 font-accent mt-1">
                  <span>1 Role</span>
                  <span>5 Roles</span>
                  <span>10 Roles</span>
                </div>
              </div>

              {/* Slider 2: Average Days to Fill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={daysId} className="flex items-center gap-2 text-sm sm:text-base font-bold text-white font-accent">
                    <AlertTriangle className="w-4 h-4 text-[#DF7C36]" />
                    <span>Average Days to Qualified Placement</span>
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-[#DF7C36] font-heading">
                    {daysToFill} Days
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  Indian industrial benchmark for critical technical roles: 60–90 days
                </p>
                <input
                  id={daysId}
                  type="range"
                  min="30"
                  max="120"
                  step="5"
                  value={daysToFill}
                  onChange={(e) => setDaysToFill(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#DF7C36]"
                />
                <div className="flex justify-between text-[11px] text-slate-300 font-accent mt-1">
                  <span>30 Days (Fast)</span>
                  <span>75 Days (Avg)</span>
                  <span>120 Days (Critical Lag)</span>
                </div>
              </div>

              {/* Slider 3: Current Plant OEE */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={oeeId} className="flex items-center gap-2 text-sm sm:text-base font-bold text-white font-accent">
                    <Factory className="w-4 h-4 text-[#DF7C36]" />
                    <span>Current Shop-Floor OEE Level</span>
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-[#DF7C36] font-heading">
                    {currentOee}%
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-3">
                  Overall Equipment Effectiveness (World-class target: 80%+)
                </p>
                <input
                  id={oeeId}
                  type="range"
                  min="50"
                  max="85"
                  step="1"
                  value={currentOee}
                  onChange={(e) => setCurrentOee(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#DF7C36]"
                />
                <div className="flex justify-between text-[11px] text-slate-300 font-accent mt-1">
                  <span>50% (High Drag)</span>
                  <span>65% (Typical)</span>
                  <span>85% (World Class)</span>
                </div>
              </div>

            </div>

            {/* Model Assumptions Note */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Benchmark: Tier-1 Indian Industrial &amp; Manufacturing Operations</span>
              <span className="text-[#DF7C36] font-bold">Standard 3.2× Productivity Multiplier</span>
            </div>
          </div>

          {/* Right Column: Live Dynamic Executive Scorecard (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Ambient card glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#DF7C36]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 font-accent block mb-2">
                Estimated Quarterly Impact
              </span>
              
              {/* Primary P&L Loss Figure */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight">
                  ₹{totalDragLakhs} <span className="text-xl sm:text-2xl font-bold text-[#DF7C36]">Lakhs</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Estimated quarterly revenue and operating margin drag
                </p>
              </div>

              {/* Secondary Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3.5 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-accent block mb-1">
                    Line Exposure
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">
                    {lineDaysExposure} <span className="text-xs font-normal text-slate-400">Days</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    Unsupervised shift execution
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-accent block mb-1">
                    Recovery Potential
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-[#DF7C36] font-heading flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+{oeeGap}% OEE</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    Target gap to 80% benchmark
                  </p>
                </div>
              </div>

              {/* Recommended IGNOVA Countermeasures */}
              <div className="pt-4 border-t border-white/10 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 font-accent block mb-2.5">
                  Calibrated Countermeasure Suite
                </span>
                <div className="space-y-2">
                  {recommendedServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DF7C36] flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Consultation Action Button */}
            <Link
              href={`/contact?${queryParams}`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#A84D14] hover:bg-[#8C3F0F] text-white text-sm font-bold transition-all shadow-lg hover:shadow-xl font-accent group"
            >
              <span>Calibrate Mandate Countermeasures</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
