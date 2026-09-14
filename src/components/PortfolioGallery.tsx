"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FadeUp } from "@/components/FadeUp";
import type { Dictionary } from "@/i18n/types";
import { ContactButton } from "@/components/ContactProvider";
import {
  getItemsForFilter,
  portfolioFilters,
  type PortfolioFilter,
} from "@/lib/portfolio-data";

type PortfolioGalleryProps = {
  dict: Dictionary;
};

const categoryLabels: Record<
  PortfolioFilter,
  keyof Dictionary["portfolio"]["categories"]
> = {
  all: "all",
  "portret-kobiecy": "portretKobiecy",
  "portret-meski": "portretMeski",
  couples: "couples",
  family: "family",
};

export function PortfolioGallery({ dict }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");

  const filteredItems = useMemo(
    () => getItemsForFilter(activeFilter),
    [activeFilter],
  );

  const isPlaceholderView = filteredItems.every((item) => item.placeholder);

  return (
    <>
      <FadeUp className="mb-10 max-w-2xl">
        <h1 className="font-heading text-3xl text-charcoal sm:text-4xl">
          {dict.portfolio.title}
        </h1>
        <p className="mt-4 text-lg text-stone">{dict.portfolio.subtitle}</p>
      </FadeUp>

      <FadeUp delay={0.05} className="mb-10">
        <div
          className="flex flex-wrap items-center gap-2 sm:gap-3"
          role="tablist"
          aria-label={dict.portfolio.title}
        >
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-2.5 ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "border border-border bg-background text-stone hover:border-accent/40 hover:text-charcoal"
                }`}
              >
                {dict.portfolio.categories[categoryLabels[filter]]}
              </button>
            );
          })}
        </div>
      </FadeUp>

      {isPlaceholderView && (
        <FadeUp className="mb-6">
          <p className="text-sm text-stone">{dict.portfolio.comingSoon}</p>
        </FadeUp>
      )}

      <motion.div
        layout
        className="columns-1 gap-6 sm:columns-2 lg:columns-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{
                layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3 },
                y: { duration: 0.3 },
              }}
              className="group mb-6 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-xl ring-1 ring-border transition-shadow duration-300 group-hover:shadow-md">
                {item.placeholder ? (
                  <div className="flex min-h-[240px] flex-col items-center justify-center gap-2 bg-gradient-to-br from-beige-light via-beige-medium to-beige-deep p-6">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-stone/50">
                      {dict.portfolio.categories[categoryLabels[item.category]]}
                    </span>
                    <span className="text-center text-xs text-stone/60">
                      {dict.portfolio.comingSoon}
                    </span>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.src}
                      alt={
                        dict.portfolio.categories[categoryLabels[item.category]]
                      }
                      width={1200}
                      height={1600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="block h-auto w-full"
                      style={{ height: "auto" }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <FadeUp delay={0.1} className="mt-14 mb-16 lg:mb-24">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-background px-6 py-12 text-center sm:px-10 sm:py-14">
          <p className="max-w-xl font-heading text-xl leading-snug text-charcoal sm:text-2xl">
            {dict.portfolio.bookingBanner}
          </p>
          <ContactButton className="inline-flex rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-colors hover:bg-accent-hover hover:shadow-xl">
            {dict.portfolio.bookCta}
          </ContactButton>
        </div>
      </FadeUp>
    </>
  );
}
