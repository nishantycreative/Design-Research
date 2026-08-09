import { PRESS } from "@/lib/site";
import { Eyebrow, Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";

export default function Press() {
  return (
    <Section className="border-t border-line py-12 md:py-16">
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <Eyebrow className="justify-center">Recognition</Eyebrow>
          <p className="font-display text-xl font-light italic text-ink md:text-2xl">
            As featured in leading publications
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70 transition-opacity hover:opacity-100">
            {PRESS.map((item, index) => (
              <span
                key={item}
                className="flex items-center gap-12 font-display text-sm uppercase tracking-[0.25em] text-muted md:text-base"
              >
                {item}
                {index < PRESS.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-brass" aria-hidden />
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
