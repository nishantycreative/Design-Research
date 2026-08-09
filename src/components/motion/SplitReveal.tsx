"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE } from "@/lib/motion";

type SplitRevealProps = {
  lines: string[];
  by?: "line" | "word";
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
};

export default function SplitReveal({
  lines,
  by = "line",
  as = "h2",
  className,
  delay = 0,
}: SplitRevealProps) {
  const reduce = useReducedMotion();
  const Tag = (as ?? "h2") as React.ElementType;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: by === "word" ? 0.04 : 0.05, delayChildren: delay } },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  // Reduced motion: fade the full heading in once, no line/word splitting.
  if (reduce) {
    return (
      <Tag className={className}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="block"
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  if (by === "word") {
    const wordsByLine = lines.map((l) => l.split(" "));
    return (
      <Tag className={className}>
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="block"
        >
          {wordsByLine.flatMap((words, li) => [
            ...words.map((w, wi) => (
              <motion.span key={`${li}-${wi}`} variants={child} className="inline-block">
                {w}
                {wi < words.length - 1 ? " " : ""}
              </motion.span>
            )),
            li < wordsByLine.length - 1 ? <br key={`br-${li}`} /> : null,
          ])}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="block"
      >
        {lines.map((line, i) => (
          <motion.span key={i} variants={child} className="block">
            {line}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
