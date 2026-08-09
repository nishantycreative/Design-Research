import { NAV_LINKS, SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-ink pb-10 pt-12 md:pt-16">
      <Reveal>
        <Section className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
        {/* Brand Col */}
        <div className="max-w-xs">
          <span className="font-display text-2xl font-light tracking-[-0.01em]">
            {SITE.name}
          </span>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Interior Design Studio & Curated Collection. Led by Simran Chana in {SITE.city}.
          </p>
        </div>

        {/* Navigation Col */}
        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-brass block mb-4">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-ink/80 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-brass block mb-4">
              Studio
            </span>
            <address className="not-italic text-xs text-muted leading-relaxed">
              Design Research
              <br />
              Worli / Bandra
              <br />
              {SITE.city}, India
            </address>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-brass block mb-4">
              Direct
            </span>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline text-ink/80 transition-colors hover:text-ink"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink/80 transition-colors hover:text-ink"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        </Section>
      </Reveal>

      <Reveal delay={0.1}>
        <Section className="mt-10 border-t border-line/60 pt-6 text-[11px] text-muted">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </Section>
      </Reveal>
    </footer>
  );
}
