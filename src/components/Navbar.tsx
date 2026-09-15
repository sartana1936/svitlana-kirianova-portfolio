"use client";

import Link from "next/link";
import { ContactButton } from "@/components/ContactProvider";
import { InstagramNavLink } from "@/components/InstagramNavLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Navbar({ locale, dict }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full overflow-x-hidden border-b border-border bg-beige/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-6 md:py-4 lg:px-8">
        <Link
          href={`/${locale}`}
          className="shrink-0 whitespace-nowrap font-heading text-sm tracking-tight text-charcoal transition-opacity hover:opacity-80 sm:text-base md:text-lg lg:text-xl"
        >
          {dict.nav.logo}
        </Link>

        <div className="flex shrink-0 items-center gap-3 md:gap-5">
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href={`/${locale}/portfolio`}
              className="text-sm font-medium text-stone transition-colors hover:text-accent"
            >
              {dict.nav.portfolio}
            </Link>
            <InstagramNavLink label={dict.nav.instagram} />
          </div>

          <LanguageSwitcher locale={locale} />

          <ContactButton className="whitespace-nowrap rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover sm:px-5 sm:py-2.5 sm:text-sm">
            {dict.nav.cta}
          </ContactButton>
        </div>
      </nav>
    </header>
  );
}
