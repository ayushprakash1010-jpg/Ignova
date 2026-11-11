"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const serviceOptions = [
  "IGNOVA Triage — Capability Development",
  "IGNOVA Edge — Talent Acquisition",
  "Project Execution — Operational Improvement",
  "General Inquiry",
];

const capabilities = [
  { label: "IGNOVA TRIAGE", href: "/services/triage" },
  { label: "IGNOVA EDGE", href: "/services/edge" },
  { label: "PROJECT EXECUTION", href: "/services/project-execution" },
];

const inputStyles =
  "w-full px-4 py-3 bg-cream border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors text-charcoal";

export default function ContactPage() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionMessage("");
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !result.success) {
        setSubmissionError(result.error || "We couldn't send your message. Please try again.");
        return;
      }

      setSubmissionMessage("Thank you for reaching out. Your message has been sent.");
      reset();
    } catch {
      setSubmissionError("We couldn't send your message. Please try again or email us directly.");
    }
  };

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-cream overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#0B2038]/[0.02] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionHeading
              label="Contact Us"
              title="Start With Your Business Priority"
              subtitle="Capability gaps, critical hiring, or operational improvement — let's align the expertise."
            />
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Side — Contact Form (60%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submissionMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-xl"
                  role="status"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{submissionMessage}</p>
                </motion.div>
              )}

              {submissionError && (
                <p
                  className="mb-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-800"
                  role="alert"
                >
                  {submissionError} If you prefer, email us at{" "}
                  <a className="underline" href="mailto:contact@ignovaconsulting.com">
                    contact@ignovaconsulting.com
                  </a>.
                </p>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-cream/50 rounded-2xl p-8 border border-cream-dark shadow-sm"
                noValidate
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-navy mb-1.5 block"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Name <span className="text-orange">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-body)" }}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-navy mb-1.5 block"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Email <span className="text-orange">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-body)" }}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-semibold text-navy mb-1.5 block"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Company <span className="text-orange">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-body)" }}
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-navy mb-1.5 block"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Your phone number (optional)"
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-body)" }}
                      {...register("phone")}
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-navy mb-1.5 block"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className={`${inputStyles} appearance-none cursor-pointer`}
                    style={{ fontFamily: "var(--font-body)" }}
                    defaultValue=""
                    {...register("service")}
                  >
                    <option value="" disabled>
                      Select a service area
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-navy mb-1.5 block"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    Message <span className="text-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your business priority or challenge..."
                    className={`${inputStyles} resize-none`}
                    style={{ fontFamily: "var(--font-body)" }}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Right Side — Contact Info (40%) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Contact Details Card */}
              <div className="bg-cream rounded-2xl p-8 mb-8 shadow-sm border border-cream-dark">
                <h3
                  className="text-lg font-bold text-navy mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Get in Touch
                </h3>

                <div className="space-y-5">
                  {/* Company */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        Company
                      </p>
                      <p className="text-sm text-charcoal font-medium">
                        IGNOVA Consulting & Academy
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:contact@ignovaconsulting.com"
                        className="text-sm text-charcoal font-medium hover:text-orange transition-colors"
                      >
                        contact@ignovaconsulting.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Capabilities Links */}
              <div className="bg-navy rounded-2xl p-8">
                <h3
                  className="text-lg font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Capabilities
                </h3>

                <div className="space-y-3">
                  {capabilities.map((cap) => (
                    <Link
                      key={cap.href}
                      href={cap.href}
                      className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange/30 transition-all duration-300"
                    >
                      <span
                        className="text-sm font-bold text-white/90 group-hover:text-orange-light tracking-wide transition-colors"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {cap.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-orange group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
