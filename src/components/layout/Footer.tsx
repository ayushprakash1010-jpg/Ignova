import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F0E8] border-t border-[#E8E2D5] text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand & Mandate */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-4" aria-label="IGNOVA Homepage">
              <div className="relative h-9 sm:h-10 w-32 sm:w-36">
                <Image
                  src="/images/ignova-logo.png"
                  alt="IGNOVA Logo"
                  fill
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Talent acquisition &middot; Talent development &middot; Growth &amp; transformation
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Connecting people to business execution from shop floor to boardroom.
            </p>
          </div>

          {/* Column 2: Firm */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2038] mb-4 font-accent">
              Firm
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-[#C86A28] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-slate-600 hover:text-[#C86A28] transition-colors">
                  Our approach
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#C86A28] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2038] mb-4 font-accent">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/services/triage" className="text-slate-600 hover:text-[#C86A28] transition-colors">
                  IGNOVA Triage
                </Link>
              </li>
              <li>
                <Link href="/services/edge" className="text-slate-600 hover:text-[#C86A28] transition-colors">
                  IGNOVA Edge
                </Link>
              </li>
              <li>
                <Link href="/services/project-execution" className="text-slate-600 hover:text-[#C86A28] transition-colors">
                  Project Execution
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2038] mb-4 font-accent">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-[#C86A28] transition-colors font-medium"
                >
                  Get in touch
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} IGNOVA Consulting &amp; Academy. All rights reserved.</p>
          <p className="font-accent tracking-wide text-slate-500">
            Enabling execution &amp; impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
