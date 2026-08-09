"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: boolean;
};

export default function Reveal({ children, className, delay = 0, y = 26, scale = false }: RevealProps) {
  const reduce = useReducedMotion();

  const hidden = scale
    ? { opacity: 0, scale: reduce ? 1 : 0.96 }
    : { opacity: 0, y: reduce ? 0 : y };

  const show = scale
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={show}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: scale ? 1 : 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
