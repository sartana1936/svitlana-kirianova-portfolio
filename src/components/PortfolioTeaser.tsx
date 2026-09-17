"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/FadeUp";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { portfolioTeaserItems } from "@/lib/portfolio-data";

type PortfolioTeaserProps = {
  locale: Locale;
  dict: Dictionary;
};

export function PortfolioTeaser({ locale, dict }: PortfolioTeaserProps) {
  return (
    <section className="w-full max-w-full overflow-x-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <FadeUp className="mb-12 max-w-2xl">
          <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">
            {dict.portfolio.teaserTitle}
          </h2>
          <p className="mt-4 text-lg text-stone">{dict.portfolio.teaserSubtitle}</p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {portfolioTeaserItems.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.05}>
              <div className="group overflow-hidden rounded-xl ring-1 ring-border transition-shadow duration-300 hover:shadow-md">
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={dict.portfolio.categories[item.labelKey]}
                    width={600}
                    height={800}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="block h-auto max-w-full w-full"
                    style={{ height: "auto" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/50 to-transparent px-3 py-4">
                    <span className="text-xs font-medium text-beige-light">
                      {dict.portfolio.categories[item.labelKey]}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent-hover hover:shadow-xl"
          >
            {dict.portfolio.teaserCta}
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
