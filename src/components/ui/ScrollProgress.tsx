"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Ultra-thin top copper scroll progress indicator fixed at the top edge.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DF7C36] to-[#F59E56] origin-left z-[60] pointer-events-none"
    />
  );
}
