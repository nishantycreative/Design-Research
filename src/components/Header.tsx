"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,color] duration-500",
          overHero
            ? "border-b border-transparent bg-transparent text-paper"
            : "border-b border-line bg-paper/85 text-ink backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10 lg:px-16">
          <a
            href="#top"
            className="link-underline text-[13px] uppercase tracking-[0.32em]"
            aria-label="Design Research — back to top"
          >
            Design Research
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[11px] uppercase tracking-[0.28em] opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 items-center gap-3 px-1 text-[11px] uppercase tracking-[0.28em] md:hidden"
            aria-label="Open menu"
          >
            Menu
            <span className="flex flex-col gap-1" aria-hidden>
              <span className="h-px w-6 bg-current" />
              <span className="h-px w-6 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-paper text-ink"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="text-[13px] uppercase tracking-[0.32em]">{SITE.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center text-[11px] uppercase tracking-[0.28em]"
                aria-label="Close menu"
              >
                Close
                <span className="ml-3 text-base leading-none" aria-hidden>
                  ×
                </span>
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col justify-center gap-2 px-6"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-4xl font-light tracking-[-0.02em] text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-line px-6 py-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">{SITE.city}</p>
              <a href={`mailto:${SITE.email}`} className="link-underline mt-2 inline-block text-sm text-ink">
                {SITE.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
