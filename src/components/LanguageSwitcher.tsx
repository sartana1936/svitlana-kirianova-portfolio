"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalizedPath(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  }

  return (
    <div
      className="flex items-center gap-1 text-sm font-medium tracking-wide"
      role="group"
      aria-label="Language"
    >
      {locales.map((lang, index) => (
        <span key={lang} className="flex items-center gap-1">
          {index > 0 && (
            <span className="text-stone/40 select-none" aria-hidden="true">
              |
            </span>
          )}
          <Link
            href={getLocalizedPath(lang)}
            className={`px-1.5 py-0.5 transition-colors ${
              locale === lang
                ? "text-accent"
                : "text-stone hover:text-accent"
            }`}
            aria-current={locale === lang ? "true" : undefined}
          >
            {lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
