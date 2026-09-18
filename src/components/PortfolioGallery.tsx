"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  slubne: "slubne",
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-5 w-5"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function PortfolioGallery({ dict }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredItems = useMemo(
    () => getItemsForFilter(activeFilter),
    [activeFilter],
  );

  const isPlaceholderView = filteredItems.every((item) => item.placeholder);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({ left: 0, behavior: "instant" });
    updateScrollButtons();

    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [filteredItems, updateScrollButtons]);

  const scrollByOneCard = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-gallery-card]");
    const gap =
      parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) ||
      16;
    const amount = (card?.offsetWidth ?? 380) + gap;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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

      <div className="relative">
        <button
          type="button"
          aria-label="Previous photos"
          onClick={() => scrollByOneCard("left")}
          disabled={!canScrollLeft}
          className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-charcoal shadow-md backdrop-blur-sm transition-all hover:bg-background disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <ChevronIcon direction="left" />
        </button>

        <button
          type="button"
          aria-label="Next photos"
          onClick={() => scrollByOneCard("right")}
          disabled={!canScrollRight}
          className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-charcoal shadow-md backdrop-blur-sm transition-all hover:bg-background disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <ChevronIcon direction="right" />
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-none -mx-4 flex snap-x snap-mandatory scroll-smooth flex-row gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:gap-6 sm:px-6 md:gap-6 lg:mx-0 lg:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                data-gallery-card
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.25 },
                }}
                className="group h-[420px] w-[85vw] max-w-[340px] shrink-0 snap-center sm:h-[480px] md:h-[520px] md:w-[380px] md:max-w-none"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl ring-1 ring-border transition-shadow duration-300 group-hover:shadow-md">
                  {item.placeholder ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-beige-light via-beige-medium to-beige-deep p-6">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-stone/50">
                        {
                          dict.portfolio.categories[
                            categoryLabels[item.category]
                          ]
                        }
                      </span>
                      <span className="text-center text-xs text-stone/60">
                        {item.category === "slubne"
                          ? dict.portfolio.categories.slubneDescription
                          : dict.portfolio.comingSoon}
                      </span>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={item.src}
                        alt={
                          dict.portfolio.categories[
                            categoryLabels[item.category]
                          ]
                        }
                        fill
                        sizes="(max-width: 768px) 85vw, 380px"
                        className="object-cover object-center"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

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
