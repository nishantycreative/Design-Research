"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "@/lib/site";
import { EASE } from "@/lib/motion";
import Magnetic from "@/components/motion/Magnetic";

type BuyModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function BuyModal({ product, onClose }: BuyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto border border-line bg-paper p-6 text-ink shadow-2xl sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-stone/30 hover:text-ink"
              aria-label="Close modal"
            >
              <span className="text-xl font-light leading-none">×</span>
            </button>

            <div className="mb-8 pr-8">
              <span className="text-[11px] uppercase tracking-[0.3em] text-brass font-sans">
                Acquisition Enquiry · {product.index}
              </span>
              <h2
                id="modal-title"
                className="mt-2 font-display text-2xl font-light tracking-[-0.01em] text-ink sm:text-3xl"
              >
                {product.name}
              </h2>
              <p className="mt-2 text-sm tracking-wide text-brass font-sans">
                {product.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {product.description}
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="border-t border-line pt-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brass/10 text-brass">
                  ✓
                </div>
                <h3 className="font-display text-xl font-light text-ink">
                  Enquiry Received
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Thank you, {name || "there"}. Our studio team will reach out to{" "}
                  <span className="text-ink">{email}</span> within 24 hours to assist
                  with acquisition and delivery details.
                </p>
                <Magnetic className="inline-block">
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 inline-flex h-11 items-center justify-center border border-ink bg-ink px-8 text-[11px] uppercase tracking-[0.28em] text-paper transition-all hover:bg-brass hover:border-brass"
                  >
                    Close Window
                  </button>
                </Magnetic>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="border-t border-line pt-6 flex flex-col gap-5">
                <p className="text-xs text-muted leading-relaxed">
                  Direct purchase integration is available upon private consultation. Submit your details below to reserve or inquire about this piece.
                </p>

                <div>
                  <label htmlFor="modal-name" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brass"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. ananya@domain.com"
                    className="w-full border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brass"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98200 00000"
                    className="w-full border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brass"
                  />
                </div>

                <div>
                  <label htmlFor="modal-note" className="block text-[11px] uppercase tracking-[0.25em] text-muted mb-1.5">
                    Notes or Specific Customisation Request
                  </label>
                  <textarea
                    id="modal-note"
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Delivery location, timeline, or studio consultation notes..."
                    className="w-full resize-none border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brass"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-[11px] text-muted">
                    Studio direct · Mumbai
                  </p>
                  <Magnetic className="inline-block">
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[11px] uppercase tracking-[0.28em] text-paper transition-all hover:bg-brass"
                    >
                      Send Purchase Enquiry
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
