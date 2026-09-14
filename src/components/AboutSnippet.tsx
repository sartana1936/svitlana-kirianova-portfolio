"use client";

import { FadeUp } from "@/components/FadeUp";
import type { Dictionary } from "@/i18n/types";

type AboutSnippetProps = {
  dict: Dictionary;
};

export function AboutSnippet({ dict }: AboutSnippetProps) {
  return (
    <section id="about" className="bg-surface px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp>
          <div className="aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-beige-light via-beige-medium to-beige-deep ring-1 ring-border">
            <div className="flex h-full items-center justify-center">
              <span className="text-xs font-medium uppercase tracking-widest text-stone/50">
                Portrait
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="space-y-6">
          <h2 className="font-heading text-3xl text-charcoal sm:text-4xl">
            {dict.about.title}
          </h2>
          <p className="text-lg leading-relaxed text-stone">{dict.about.body}</p>
        </FadeUp>
      </div>
    </section>
  );
}
