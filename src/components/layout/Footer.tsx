import Link from "next/link";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2038] text-white relative">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <span className="text-2xl font-black tracking-tight text-white font-heading">
                IGNOV<span className="text-[#DF7C36]">A</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              Three capabilities. One partner. Connecting people to business
              execution across talent acquisition, capability development, and operational improvement.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-orange-200 border border-white/10 font-accent">
              {COMPANY.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DF7C36] mb-5 font-accent">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => !l.children).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors flex items-center gap-1 group font-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#DF7C36]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DF7C36] mb-5 font-accent">
              Capabilities
            </h4>
            <ul className="space-y-3">
              {Object.values(SERVICES).map((service) => (
                <li key={service.brand}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors flex items-center gap-1 group font-accent"
                  >
                    {service.brand}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#DF7C36]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DF7C36] mb-5 font-accent">
              Connect
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#DF7C36] flex-shrink-0" />
                  <span className="min-w-0 break-all">{COMPANY.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {year} {COMPANY.fullName}. All rights reserved.</p>
          <p className="font-accent tracking-wider uppercase text-slate-400">
            {COMPANY.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
