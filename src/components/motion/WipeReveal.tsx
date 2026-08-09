"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right";

const clips: Record<Direction, { hidden: string; show: string }> = {
  up: { hidden: "inset(100% 0% 0% 0%)", show: "inset(0% 0% 0% 0%)" },
  down: { hidden: "inset(0% 0% 100% 0%)", show: "inset(0% 0% 0% 0%)" },
  left: { hidden: "inset(0% 100% 0% 0%)", show: "inset(0% 0% 0% 0%)" },
  right: { hidden: "inset(0% 0% 0% 100%)", show: "inset(0% 0% 0% 0%)" },
};

type WipeRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
};

// Clip-path wipe reveal. Falls back to a plain opacity fade under reduced motion.
export default function WipeReveal({ children, className, direction = "left" }: WipeRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.div
        className={className}
        style={{ position: "relative" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {children}
      </motion.div>
    );
  }

  const c = clips[direction];

  return (
    <motion.div
      className={className}
      style={{ position: "relative", clipPath: c.hidden }}
      initial={{ clipPath: c.hidden }}
      animate={{ clipPath: c.show }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
