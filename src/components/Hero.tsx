"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HERO_IMAGE, SITE } from "@/lib/site";
import { EASE } from "@/lib/motion";
import Magnetic from "@/components/motion/Magnetic";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.4 } },
};

const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: EASE },
  },
};

const itemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yOut = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, opacity: 0 }}
        animate={reduce ? { scale: 1, opacity: 1 } : { scale: [1, 1.06, 1], opacity: 1 }}
        transition={
          reduce
            ? { duration: 0.4, ease: EASE }
            : {
                duration: 0.4,
                ease: EASE,
                opacity: { duration: 0.4 },
                scale: { duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
              }
        }
      >
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div aria-hidden className="absolute inset-0 bg-ink/25" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-ink/10"
      />

      <motion.div
        style={reduce ? undefined : { y: yOut, opacity: opacityOut }}
        className="absolute inset-x-0 bottom-0 z-10 px-6 pb-24 md:px-10 md:pb-28 lg:px-16"
      >
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[1440px] flex-col gap-6"
        >
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-paper/85"
          >
            <span aria-hidden className="h-px w-9 bg-brass" />
            Interior design studio — {SITE.city}
          </motion.p>

          <motion.h1
            variants={headlineContainer}
            className="max-w-5xl font-display text-[clamp(3.4rem,10vw,9.5rem)] font-light leading-[0.92] tracking-[-0.03em] text-paper"
          >
            {SITE.tagline.split(" ").map((word, i, arr) => (
              <motion.span
                key={i}
                variants={reduce ? itemReduced : item}
                className="inline-block"
              >
                {word}
                {i < arr.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="max-w-md text-base leading-relaxed text-paper/80 md:text-lg">
            Spaces built through architecture, completed by the stories they hold.
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-8">
            <Magnetic className="inline-block">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-paper"
              >
                View the work
                <span
                  aria-hidden
                  className="block h-px w-10 bg-paper/60 transition-all duration-500 group-hover:w-16 group-hover:bg-brass"
                />
              </a>
            </Magnetic>
            <Magnetic className="inline-block">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-paper"
              >
                The collection
                <span
                  aria-hidden
                  className="block h-px w-10 bg-paper/60 transition-all duration-500 group-hover:w-16 group-hover:bg-brass"
                />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 0 : 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-paper/50"
        />
      </motion.div>
    </section>
  );
}
