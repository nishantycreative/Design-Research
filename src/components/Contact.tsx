"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Eyebrow, Section } from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import Magnetic from "@/components/motion/Magnetic";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="border-t border-line pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Col: Contact Info */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Consultations</Eyebrow>
            <SplitReveal
              as="h2"
              by="line"
              className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-light leading-[1.04] tracking-[-0.02em] text-ink"
              lines={["Begin a", "conversation."]}
            />
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              We collaborate on private residences, commercial spaces, and bespoke furniture commissions across Mumbai and internationally.
            </p>

            <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted block mb-1">Studio Location</span>
                <p className="text-ink font-medium">Worli / Bandra · Mumbai, Maharashtra</p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted block mb-1">Direct Contact</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline text-ink font-medium hover:text-brass"
                >
                  {SITE.email}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted block mb-1">Social</span>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink font-medium hover:text-brass"
                >
                  Instagram @designresearch.studio
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Col: Form */}
        <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15} scale>
            <div className="border border-line bg-paper-2 p-6 sm:p-8">
              <h3 className="font-display text-2xl font-light text-ink">
                Project & Acquisition Inquiry
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                Consultations are by private appointment
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 border-t border-line pt-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brass/10 text-brass">
                    ✓
                  </div>
                  <h4 className="font-display text-xl font-light text-ink">
                    Message Sent
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Thank you, {name}. Simran Chana and the studio team will review your inquiry and respond to <span className="text-ink">{email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-6 text-[11px] uppercase tracking-[0.28em] text-brass link-underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none transition-colors focus:border-brass"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. vikram@domain.com"
                      className="w-full border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none transition-colors focus:border-brass"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-2">
                      Project Details or Inquiry *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your space, timeline, or the furniture piece you'd like to acquire..."
                      className="w-full resize-none border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none transition-colors focus:border-brass"
                    />
                  </div>

                  <Magnetic className="inline-block">
                    <button
                      type="submit"
                      className="mt-4 inline-flex h-13 items-center justify-center bg-ink px-10 text-[11px] uppercase tracking-[0.28em] text-paper transition-all hover:bg-brass"
                    >
                      Submit Enquiry
                    </button>
                  </Magnetic>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
