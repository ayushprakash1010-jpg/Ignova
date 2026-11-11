"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  light = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center sm:text-left px-4">
      <div
        className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 ${
          light ? "text-[#DF7C36]" : "text-[#C86A28]"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <p
        className={`text-sm sm:text-base font-medium leading-snug ${
          light ? "text-slate-300" : "text-slate-600"
        }`}
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {label}
      </p>
    </div>
  );
}
