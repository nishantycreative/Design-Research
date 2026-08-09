"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
};

// Fade + slight scale-in so images settle into place as they enter the viewport.
export default function ImageReveal({ children, className }: ImageRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ position: "relative" }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
