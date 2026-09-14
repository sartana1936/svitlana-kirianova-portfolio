"use client";

import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import type { Dictionary } from "@/i18n/types";
import { ContactButton } from "@/components/ContactProvider";

type HeroProps = {
  dict: Dictionary;
};

const heroSlots = [
  {
    className: "col-span-12 row-span-2 lg:col-span-7 lg:row-span-2",
    src: "/images/hero/1.JPG",
    alt: "Naturalna fotografia — kadry hero 1",
  },
  {
    className: "col-span-6 row-span-1 lg:col-span-5 lg:row-span-1",
    src: "/images/hero/2.JPG",
    alt: "Naturalna fotografia — kadry hero 2",
  },
  {
    className: "col-span-6 row-span-1 lg:col-span-5 lg:row-span-1",
    src: "/images/hero/3.JPG",
    alt: "Naturalna fotografia — kadry hero 3",
  },
];

export function Hero({ dict }: HeroProps) {
  return (
    <section id="hero" className="w-full max-w-full overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
          {heroSlots.map((slot, index) => (
            <div
              key={slot.src}
              className={`${slot.className} relative overflow-hidden rounded-2xl bg-beige-medium ring-1 ring-border`}
            >
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
