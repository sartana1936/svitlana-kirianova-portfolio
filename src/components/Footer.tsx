import { SocialContactLinks } from "@/components/SocialContactLinks";
import type { Dictionary } from "@/i18n/types";
import { siteConfig } from "@/lib/constants";

type FooterProps = {
  dict: Dictionary;
};

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();
  const copyright = dict.footer.copyright.replace("{year}", String(year));

  return (
    <footer className="border-t border-border bg-surface-muted px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="max-w-sm">
            <p className="font-heading text-lg text-charcoal">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
              {dict.footer.contact}
            </p>
            <SocialContactLinks variant="footer" />
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-stone/70">{copyright}</p>
      </div>
    </footer>
  );
}
