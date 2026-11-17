import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
} from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/constants";

type InstagramNavLinkProps = {
  label: string;
};

const buttonClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-charcoal shadow-sm transition-colors hover:border-accent hover:text-accent sm:h-10 sm:w-10";

/** Visible round icon buttons: Instagram, Facebook, phone. */
export function InstagramNavLink({ label }: InstagramNavLinkProps) {
  return (
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label={label}
        title={label}
      >
        <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
      <a
        href={siteConfig.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label={siteConfig.facebookLabel}
        title={siteConfig.facebookLabel}
      >
        <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        className={buttonClass}
        aria-label={siteConfig.phoneDisplay}
        title={siteConfig.phoneDisplay}
      >
        <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
    </div>
  );
}
