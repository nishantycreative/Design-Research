"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, Product, TEASER_IMAGE } from "@/lib/site";
import { Eyebrow, Section } from "@/components/ui/Section";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import WipeReveal from "@/components/motion/WipeReveal";
import Tilt from "@/components/motion/Tilt";
import Magnetic from "@/components/motion/Magnetic";
import BuyModal from "@/components/modal/BuyModal";

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {/* Collection Teaser / Transition Section */}
      <section className="border-t border-line bg-paper-2 py-14 md:py-20">
        <Section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>The Collection</Eyebrow>
              <SplitReveal
                as="h2"
                by="line"
                className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink"
                lines={["Four pieces.", "Crafted for quiet spaces."]}
              />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Furniture designed not as mass inventory, but as individual architectural gestures.
                Each piece uses rich natural timber, brass, or Italian stone, developed in limited studio runs.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <Parallax amount={32} className="overflow-hidden">
                <WipeReveal direction="up" className="aspect-[4/3] w-full overflow-hidden border border-line">
                  <Image
                    src={TEASER_IMAGE.src}
                    alt={TEASER_IMAGE.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </WipeReveal>
              </Parallax>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* Main Collection Gallery Showcase */}
      <Section id="collection" className="pb-16 pt-16 md:pb-24 md:pt-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-line pb-5 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.32em] text-brass">
              Curated Gallery · Studio Editions
            </span>
            <h3 className="mt-2 font-display text-3xl font-light tracking-[-0.01em] text-ink md:text-4xl">
              Featured Furniture
            </h3>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-muted md:text-right">
            Price includes GST & studio delivery across India
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={product.id}
                className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal delay={0.1}>
                    <Tilt className="w-full">
                      <Parallax amount={28} className="overflow-hidden border border-line bg-stone/20">
                        <WipeReveal direction="left" className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.alt}
                            fill
                            sizes="(min-width: 1024px) 55vw, 100vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                        </WipeReveal>
                      </Parallax>
                    </Tilt>
                  </Reveal>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <Reveal delay={0}>
                      <div className="flex items-center justify-between border-b border-line pb-4">
                        <span className="font-display text-2xl font-light text-brass">
                          {product.index}
                        </span>
                        <span className="text-sm font-medium tracking-widest text-ink">
                          {product.price}
                        </span>
                      </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                      <h4 className="font-display text-2xl font-light leading-snug tracking-[-0.01em] text-ink sm:text-3xl md:text-4xl">
                        {product.name}
                      </h4>
                    </Reveal>

                    <Reveal delay={0.2}>
                      <p className="text-base leading-relaxed text-ink-soft">
                        {product.description}
                      </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                      <div className="mt-4 flex items-center gap-6 pt-2">
                        <Magnetic className="inline-block">
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(product)}
                            className="inline-flex h-12 items-center justify-center border border-ink bg-ink px-8 text-[11px] uppercase tracking-[0.28em] text-paper transition-all duration-300 hover:border-brass hover:bg-brass"
                          >
                            Buy Now
                          </button>
                        </Magnetic>
                        <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
                          Studio Enquiry
                        </span>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Interactive Purchase Enquiry Modal */}
      <BuyModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
