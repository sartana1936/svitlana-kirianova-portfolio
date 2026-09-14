import { InstagramIcon, TelegramIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/constants";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

type SocialContactLinksProps = {
  variant?: "inline" | "footer";
};

export function SocialContactLinks({
  variant = "inline",
}: SocialContactLinksProps) {
  if (variant === "footer") {
    return (
      <ul className="mt-4 space-y-3">
        <li>
          <a
            href={siteConfig.telegram}
            {...externalLinkProps}
            className="group inline-flex items-center gap-2.5 text-sm text-stone transition-colors hover:text-accent"
          >
            <TelegramIcon className="h-4 w-4 shrink-0 text-stone/70 transition-colors group-hover:text-accent" />
            <span>
              Telegram:{" "}
              <span className="text-charcoal/90 group-hover:text-accent">
                {siteConfig.telegramHandle}
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href={siteConfig.instagram}
            {...externalLinkProps}
            className="group inline-flex items-center gap-2.5 text-sm text-stone transition-colors hover:text-accent"
          >
            <InstagramIcon className="h-4 w-4 shrink-0 text-stone/70 transition-colors group-hover:text-accent" />
            <span>
              Instagram:{" "}
              <span className="text-charcoal/90 group-hover:text-accent">
                {siteConfig.instagramHandle}
              </span>
            </span>
          </a>
        </li>
      </ul>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
      <a
        href={siteConfig.telegram}
        {...externalLinkProps}
        className="group inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-sm text-stone transition-all hover:border-border hover:bg-surface hover:text-accent"
      >
        <TelegramIcon className="h-4 w-4 shrink-0 text-stone/60 transition-colors group-hover:text-accent" />
        <span className="font-medium">{siteConfig.telegramHandle}</span>
      </a>
      <a
        href={siteConfig.instagram}
        {...externalLinkProps}
        className="group inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-sm text-stone transition-all hover:border-border hover:bg-surface hover:text-accent"
      >
        <InstagramIcon className="h-4 w-4 shrink-0 text-stone/60 transition-colors group-hover:text-accent" />
        <span className="font-medium">{siteConfig.instagramHandle}</span>
      </a>
    </div>
  );
}
