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
      <nav className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href={`/${locale}`}
          className="min-w-0 max-w-[45%] shrink truncate font-heading text-base tracking-tight text-charcoal transition-opacity hover:opacity-80 sm:max-w-none sm:text-lg md:text-xl"
        >
          {dict.nav.logo}
        </Link>

        <div className="flex min-w-0 shrink-0 flex-wrap items-center justify-end gap-1.5 sm:gap-3">
          <Link
            href={`/${locale}/portfolio`}
            className="text-xs font-medium text-stone transition-colors hover:text-accent sm:text-sm"
          >
            {dict.nav.portfolio}
          </Link>
          <InstagramNavLink label={dict.nav.instagram} />
          <LanguageSwitcher locale={locale} />
          <ContactButton className="whitespace-nowrap rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-hover sm:px-5 sm:py-2.5 sm:text-sm">
            {dict.nav.cta}
          </ContactButton>
        </div>
      </nav>
    </header>
  );
}
