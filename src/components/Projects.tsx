"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/site";
import { Eyebrow, Section } from "@/components/ui/Section";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import WipeReveal from "@/components/motion/WipeReveal";
import { cn } from "@/lib/cn";

const layout = [
  "md:col-span-5 md:col-start-1",
  "md:col-span-6 md:col-start-7 md:mt-20",
  "md:col-span-5 md:col-start-1 md:mt-8",
  "md:col-span-6 md:col-start-7 md:mt-16",
];

const aspect = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[4/3]", "aspect-[3/4]"];

// Wipe direction per project — chosen to avoid slicing the main subject.
const wipe = ["up", "right", "left", "down"] as const;

export default function Projects() {
  return (
    <Section id="projects" className="pb-16 pt-2 md:pb-20 md:pt-4">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <Eyebrow>Signature projects</Eyebrow>
            <SplitReveal
              as="h2"
              by="line"
              className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-light leading-[1.04] tracking-[-0.02em] text-ink"
              lines={["Residences,", "quietly in progress."]}
            />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm leading-relaxed text-muted md:pb-2 md:text-right">
            A selection of recent work — each room a study in light, material and restraint.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-12 md:mt-14 md:grid-cols-12 md:gap-x-8">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.name}
            className={cn("group", layout[i])}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Parallax amount={36} className="overflow-hidden">
              <WipeReveal direction={wipe[i]} className={cn("w-full overflow-hidden", aspect[i])}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </WipeReveal>
            </Parallax>

            <div className="mt-6 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-light tracking-[-0.01em] text-ink">
                {project.name}
              </h3>
              <p className="shrink-0 text-[11px] uppercase tracking-[0.28em] text-muted">
                {project.place} · {project.year}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
