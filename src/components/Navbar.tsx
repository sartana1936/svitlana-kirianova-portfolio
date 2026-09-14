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
    <header className="sticky top-0 z-40 border-b border-border bg-beige/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link
          href={`/${locale}`}
          className="font-heading text-lg tracking-tight text-charcoal transition-opacity hover:opacity-80 sm:text-xl"
        >
          {dict.nav.logo}
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href={`/${locale}/portfolio`}
            className="text-sm font-medium text-stone transition-colors hover:text-accent"
          >
            {dict.nav.portfolio}
          </Link>
          <InstagramNavLink label={dict.nav.instagram} />
          <LanguageSwitcher locale={locale} />
          <ContactButton className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover sm:px-5 sm:py-2.5">
            {dict.nav.cta}
          </ContactButton>
        </div>
      </nav>
    </header>
  );
}
