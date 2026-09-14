"use client";

import Link from "next/link";
import { ContactButton } from "@/components/ContactProvider";
import { InstagramNavLink } from "@/components/InstagramNavLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type PortfolioHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function PortfolioHeader({ locale, dict }: PortfolioHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full overflow-x-hidden border-b border-border bg-beige/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href={`/${locale}`}
          className="min-w-0 max-w-[45%] shrink truncate text-xs font-medium text-stone transition-colors hover:text-accent sm:max-w-none sm:text-sm"
        >
          ← {dict.nav.backHome}
        </Link>

        <div className="flex min-w-0 shrink-0 flex-wrap items-center justify-end gap-1.5 sm:gap-3">
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
