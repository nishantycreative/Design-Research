"use client";

import Image from "next/image";
import { PHILOSOPHY_IMAGES, SITE } from "@/lib/site";
import { Eyebrow, Section } from "@/components/ui/Section";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import WipeReveal from "@/components/motion/WipeReveal";

export default function Philosophy() {
  return (
    <Section id="studio" className="pb-16 pt-16 md:pb-20 md:pt-24">
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>The studio</Eyebrow>
            <SplitReveal
              as="h2"
              by="line"
              className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-light leading-[1.04] tracking-[-0.02em] text-ink"
              lines={["Quiet architecture,", "made to be lived in."]}
            />
            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted">{SITE.foundedBy}</p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end gap-7 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <p className="text-base leading-[1.9] text-ink-soft md:text-lg">
              Design Research is a {SITE.city} studio working across residences for those who prefer
              their luxury unspoken. Each project begins with light and material, and is built
              outward from there.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-[1.9] text-ink-soft md:text-lg">
              Palettes stay calm, lines stay deliberate. Timber warms, stone steadies, and brass
              catches the eye at the moment it should. Nothing is added for decoration, and nothing
              is left that does not earn its place.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="border-l border-brass pl-6 font-display text-xl font-light italic leading-relaxed text-ink md:text-2xl">
              A space is built through architecture, but it is completed by the stories it holds.
            </blockquote>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 items-start gap-x-4 gap-y-6 md:mt-16">
        <Parallax amount={40} className="col-span-12 md:col-span-7">
          <WipeReveal direction="up" className="aspect-[4/5] w-full overflow-hidden">
            <Image
              src={PHILOSOPHY_IMAGES[0].src}
              alt={PHILOSOPHY_IMAGES[0].alt}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </WipeReveal>
        </Parallax>

        <Parallax amount={28} className="col-span-8 col-start-3 md:col-span-4 md:col-start-9 md:mt-20">
          <WipeReveal direction="left" className="aspect-square w-full overflow-hidden">
            <Image
              src={PHILOSOPHY_IMAGES[1].src}
              alt={PHILOSOPHY_IMAGES[1].alt}
              fill
              sizes="(min-width: 768px) 32vw, 80vw"
              className="object-cover"
            />
          </WipeReveal>
        </Parallax>
      </div>
    </Section>
  );
}
