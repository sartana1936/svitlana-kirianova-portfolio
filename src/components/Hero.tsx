"use client";

import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import type { Dictionary } from "@/i18n/types";
import { ContactButton } from "@/components/ContactProvider";
import { heroFeaturedCards } from "@/lib/portfolio-data";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  return (
    <section
      id="hero"
      className="w-full max-w-full overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp className="min-w-0 space-y-6">
          <p className="break-words text-sm font-medium uppercase tracking-[0.15em] text-accent sm:tracking-[0.2em]">
            {dict.hero.tagline}
          </p>
          <h1 className="break-words font-heading text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {dict.hero.headline}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-stone">
            {dict.hero.subheadline}
          </p>
          <p className="text-sm text-stone/80">{dict.hero.location}</p>
          <ContactButton className="inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:bg-accent-hover hover:shadow-lg">
            {dict.hero.cta}
          </ContactButton>
        </FadeUp>

        <FadeUp
          delay={0.15}
          className="grid min-w-0 grid-cols-12 auto-rows-[120px] gap-3 sm:auto-rows-[140px] lg:auto-rows-[160px]"
        >
          {heroFeaturedCards.map((card, index) => (
            <div
              key={card.id}
              className={`${card.className} relative overflow-hidden rounded-2xl bg-beige-medium ring-1 ring-border`}
            >
              <Image
                src={card.src}
                alt={dict.portfolio.categories[card.labelKey]}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover ${card.objectPosition ?? "object-center"}`}
              />
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
