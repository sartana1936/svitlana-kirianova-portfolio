import { InstagramIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/constants";

type InstagramNavLinkProps = {
  label: string;
};

export function InstagramNavLink({ label }: InstagramNavLinkProps) {
  return (
    <a
      href={siteConfig.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center gap-1 text-xs font-medium text-stone transition-colors hover:text-accent sm:gap-1.5 sm:text-sm"
      aria-label={label}
    >
      <InstagramIcon className="h-4 w-4 shrink-0" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
