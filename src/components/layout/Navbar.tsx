"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceIcons: Record<string, LucideIcon> = {
    "/services/triage": Target,
    "/services/edge": Users,
    "/services/project-execution": TrendingUp,
  };

  const serviceDescriptions: Record<string, string> = {
    "/services/triage": "Role-specific competencies & workforce capability",
    "/services/edge": "Strategic talent advisory & leadership search",
    "/services/project-execution": "Shop-floor operational improvement & consulting",
  };

  return (
    <nav
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setServicesOpen(false);
          setIsOpen(false);
        }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-28 sm:w-32">
              <Image
                src="/images/ignova-logo.png"
                alt="IGNOVA Logo"
                fill
                sizes="(max-width: 768px) 112px, 128px"
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 font-accent">
                Consulting & Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((link) => link.href !== "/contact").map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen(true)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls="desktop-services-menu"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#C86A28] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C86A28] transition-colors rounded-lg font-accent"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180 text-[#C86A28]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        id="desktop-services-menu"
                        className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 overflow-hidden"
                      >
                        <div className="px-3 py-2 border-b border-slate-100 mb-1">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-accent">
                            Capabilities
                          </p>
                        </div>
                        {link.children.map((child) => {
                          const IconComponent = serviceIcons[child.href] || Sparkles;
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#C86A28] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#C86A28] group-hover/item:text-white transition-colors">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="block text-sm font-bold text-slate-800 group-hover/item:text-[#C86A28] transition-colors font-accent">
                                  {child.label}
                                </span>
                                <span className="block text-xs text-slate-500 leading-snug mt-0.5">
                                  {serviceDescriptions[child.href]}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                        <div className="mt-1 pt-2 border-t border-slate-100">
                          <Link
                            href="/services"
                            className="block px-3 py-2 text-xs font-bold text-[#C86A28] hover:text-[#B05819] font-accent transition-colors text-center"
                          >
                            Explore Full Service Portfolio →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#C86A28] transition-colors rounded-lg font-accent"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="nav-cta">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-2">
              {NAV_LINKS.filter((link) => link.href !== "/contact").map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-base font-bold text-slate-800 hover:text-[#C86A28] rounded-lg transition-colors font-accent"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 pl-3 border-l-2 border-slate-100 space-y-1 my-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-[#C86A28] transition-colors font-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3.5 text-sm font-bold text-white bg-[#C86A28] rounded-xl shadow-md transition-all font-accent"
                >
                  Schedule a Conversation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
