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
      className="flex items-center gap-1.5 text-sm font-medium text-stone transition-colors hover:text-accent"
    >
      <InstagramIcon className="h-4 w-4" />
      {label}
    </a>
  );
}
