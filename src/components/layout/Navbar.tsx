"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

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

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
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
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group py-0.5" aria-label="IGNOVA Homepage">
            <div className="relative h-10 sm:h-11 md:h-12 w-32 sm:w-40 md:w-44 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/ignova-logo.png"
                alt="IGNOVA Logo"
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              {NAV_LINKS.filter((link) => link.href !== "/contact").map((link) => {
                const active = isActiveLink(link.href);
                return link.children ? (
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
                      className={`relative flex items-center gap-1.5 px-3 py-1.5 text-sm xl:text-[15px] font-semibold transition-colors font-accent ${
                        active
                          ? "text-[#0B2038] font-bold"
                          : "text-slate-700 hover:text-[#A84D14]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180 text-[#A84D14]" : "text-slate-600"
                        }`}
                      />
                      {active && (
                        <motion.span
                          layoutId="navbar-active-indicator"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-[#A84D14] rounded-full"
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          id="desktop-services-menu"
                          className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 overflow-hidden"
                        >
                          <div className="px-3 py-2 border-b border-slate-100 mb-1">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-600 font-accent">
                              Capabilities
                            </p>
                          </div>
                          {link.children.map((child) => {
                            const IconComponent = serviceIcons[child.href] || Sparkles;
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                              >
                                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#A84D14] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#A84D14] group-hover/item:text-white transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="block text-sm font-bold text-slate-800 group-hover/item:text-[#A84D14] transition-colors font-accent">
                                    {child.label}
                                  </span>
                                  <span className="block text-xs text-slate-600 leading-snug mt-0.5">
                                    {serviceDescriptions[child.href]}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                          <div className="mt-1 pt-2 border-t border-slate-100">
                            <Link
                              href="/services"
                              className="block px-3 py-1.5 text-sm font-bold text-[#A84D14] hover:text-[#8C3F0F] font-accent transition-colors text-center"
                            >
                              Explore Full Portfolio →
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
                    className={`relative px-3 py-1.5 text-sm xl:text-[15px] font-semibold transition-colors font-accent ${
                      active
                        ? "text-[#0B2038] font-bold"
                        : "text-slate-700 hover:text-[#A84D14]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-[#A84D14] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Action: Editorial Outline Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 hover:border-[#0B2038] rounded-xl text-sm font-semibold text-[#0B2038] transition-all font-accent"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4 text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#A84D14]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
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
                    className="block px-3 py-2 text-base font-bold text-slate-800 hover:text-[#A84D14] rounded-lg transition-colors font-accent"
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
                          className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#A84D14] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-300 rounded-xl text-sm font-semibold text-[#0B2038] font-accent"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4 text-slate-600" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
