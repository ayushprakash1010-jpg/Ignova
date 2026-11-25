"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, ArrowRight, CheckCircle, Clock, Globe, Phone } from "lucide-react";
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
  {
    label: "IGNOVA TRIAGE",
    href: "/services/triage",
    desc: "Role Competency & Learning Delivery",
  },
  {
    label: "IGNOVA EDGE",
    href: "/services/edge",
    desc: "Executive & Critical Specialist Search",
  },
  {
    label: "PROJECT EXECUTION",
    href: "/services/project-execution",
    desc: "Plant Productivity & Operating Change",
  },
];

const inputStyles =
  "w-full px-4 py-3 bg-cream border border-cream-dark rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors text-charcoal text-[15px]";

function ContactForm() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [prefilledMailto, setPrefilledMailto] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const roles = searchParams.get("roles");
  const days = searchParams.get("days");
  const oee = searchParams.get("oee");
  const drag = searchParams.get("drag");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (roles && days && drag) {
      setValue(
        "message",
        `Mandate Calibration Inquiry (Operational Diagnostic Benchmark):\n` +
          `• Open Critical Leadership / Specialist Roles: ${roles}\n` +
          `• Average Days to Qualified Placement: ${days} days\n` +
          `• Current Shop-Floor OEE Level: ${oee}%\n` +
          `• Estimated Quarterly P&L Exposure: ₹${drag} Lakhs\n\n` +
          `We would like to calibrate targeted countermeasures and operating interventions with IGNOVA.`
      );
      setValue("service", "Project Execution — Operational Improvement");
    }
  }, [roles, days, oee, drag, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionMessage("");
    setSubmissionError("");
    setPrefilledMailto(null);

    const fallbackMailto = `mailto:ignovacobsulting26@gmail.com?subject=${encodeURIComponent(
      `Inquiry from ${data.name} (${data.company})`
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone || "Not provided"}\nService: ${data.service || "General Inquiry"}\n\nMessage:\n${data.message}`
    )}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { success?: boolean; error?: string } = await response.json();

      if (!response.ok || !result.success) {
        setPrefilledMailto(fallbackMailto);
        setSubmissionError(result.error || "We couldn't deliver the message automatically.");
        return;
      }

      setSubmissionMessage("Thank you for reaching out. Your message has been sent.");
      reset();
    } catch {
      setPrefilledMailto(fallbackMailto);
      setSubmissionError("We couldn't deliver the message automatically. Please click below to send via your email client.");
    }
  };

  return (
    <>
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
        <div
          className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-slate-800"
          role="alert"
        >
          <p className="font-semibold text-amber-900 mb-1">{submissionError}</p>
          {prefilledMailto ? (
            <div className="mt-3">
              <p className="text-sm text-slate-600 mb-2">
                Your message is saved. Click below to open your email app and send it directly to our team:
              </p>
              <a
                href={prefilledMailto}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C87533] text-white rounded-lg text-sm font-semibold hover:bg-[#B05819] transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                Send Pre-filled Email to ignovacobsulting26@gmail.com
              </a>
            </div>
          ) : (
            <p className="mt-1">
              If you prefer, email us at{" "}
              <a className="underline font-semibold text-[#C87533]" href="mailto:ignovacobsulting26@gmail.com">
                ignovacobsulting26@gmail.com
              </a>.
            </p>
          )}
        </div>
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
              className="text-[15px] font-semibold text-navy mb-1.5 block"
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
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[15px] font-semibold text-navy mb-1.5 block"
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
              <p className="text-red-500 text-sm mt-1">
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
              className="text-[15px] font-semibold text-navy mb-1.5 block"
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
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-[15px] font-semibold text-navy mb-1.5 block"
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
            className="text-[15px] font-semibold text-navy mb-1.5 block"
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
            className="text-[15px] font-semibold text-navy mb-1.5 block"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Message <span className="text-orange">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your organizational mandate or challenge..."
            className={`${inputStyles} resize-none`}
            style={{ fontFamily: "var(--font-body)" }}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
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
    </>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative bg-cream overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#0B2038]/[0.02] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionHeading
              label="Contact Us"
              title="Start With Mandate Calibration"
              subtitle="Capability gaps, critical hiring, or operational improvement — let's align the expertise."
            />
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="bg-white pt-6 md:pt-10 pb-20 md:pb-28">
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
              <Suspense
                fallback={
                  <div className="w-full h-96 bg-cream/50 rounded-2xl border border-cream-dark animate-pulse flex items-center justify-center text-sm text-slate-400">
                    Loading Mandate Calibration Form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
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
                  className="text-xl font-bold text-navy mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Get in Touch
                </h3>

                <div className="space-y-5">
                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p
                        className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-charcoal-light mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        Corporate Office
                      </p>
                      <p className="text-[15px] text-charcoal font-medium leading-snug">
                        L14C, Orchard Smartworld, Sector 61, Gurugram, Haryana
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p
                        className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-charcoal-light mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        Direct Phone
                      </p>
                      <a
                        href="tel:+919971524733"
                        className="text-[15px] text-charcoal font-medium hover:text-orange transition-colors"
                      >
                        +91 99715 24733
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p
                        className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-charcoal-light mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        Corporate Inquiries
                      </p>
                      <a
                        href="mailto:ignovacobsulting26@gmail.com"
                        className="text-[15px] text-charcoal font-medium hover:text-orange transition-colors break-all"
                      >
                        ignovacobsulting26@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Response SLA */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p
                        className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-charcoal-light mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        Direct Response SLA
                      </p>
                      <p className="text-[15px] text-charcoal font-medium">
                        Within 1 business day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Services Panel */}
              <div className="bg-[#0B2038] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DF7C36]/10 rounded-full blur-2xl pointer-events-none" />

                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] text-[#DF7C36] font-accent block mb-2"
                >
                  Integrated Services
                </span>
                <h3
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}
                >
                  Our Capabilities
                </h3>

                <div className="space-y-3">
                  {capabilities.map((cap) => (
                    <Link
                      key={cap.href}
                      href={cap.href}
                      className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange/30 transition-all duration-300"
                    >
                      <div>
                        <span
                          className="text-[15px] font-bold text-white group-hover:text-orange-light tracking-wide transition-colors block"
                          style={{ fontFamily: "var(--font-accent)" }}
                        >
                          {cap.label}
                        </span>
                        <span className="text-sm text-slate-300">
                          {cap.desc}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-orange group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
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
