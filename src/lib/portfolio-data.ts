export type PortfolioCategoryId =
  | "portret-kobiecy"
  | "portret-meski"
  | "couples"
  | "family"
  | "slubne";

export type PortfolioFilter = "all" | PortfolioCategoryId;

export type PortfolioItem = {
  id: string;
  category: PortfolioCategoryId;
  src: string;
  placeholder?: boolean;
};

/** Must match exact case-sensitive filenames in public/images/portfolio/ */
const IMAGE_EXT = ".JPG";

export type PortfolioTeaserLabelKey =
  | "portretKobiecy"
  | "portretMeski"
  | "couples"
  | "family";

export const ABOUT_PHOTO_SRC = `/images/about/svitlana${IMAGE_EXT}`;

export type HeroFeaturedCard = {
  id: string;
  src: string;
  labelKey: PortfolioTeaserLabelKey;
  className: string;
};

/** Three portfolio preview cards in the home page hero. */
export const heroFeaturedCards: HeroFeaturedCard[] = [
  {
    id: "hero-rodzinne",
    src: `/images/portfolio/rodzinne/1${IMAGE_EXT}`,
    labelKey: "family",
    className: "col-span-12 row-span-2 lg:col-span-7 lg:row-span-2",
  },
  {
    id: "hero-portret-meski",
    src: `/images/portfolio/portret-meski/1${IMAGE_EXT}`,
    labelKey: "portretMeski",
    className: "col-span-6 row-span-1 lg:col-span-5 lg:row-span-1",
  },
  {
    id: "hero-portret-kobiecy",
    src: `/images/portfolio/portret-kobiecy/1${IMAGE_EXT}`,
    labelKey: "portretKobiecy",
    className: "col-span-6 row-span-1 lg:col-span-5 lg:row-span-1",
  },
];

const CATEGORY_COUNTS = {
  rodzinne: 13,
  pary: 21,
  "portret-meski": 15,
  "portret-kobiecy": 22,
  slubne: 10,
} as const;

function buildSequentialItems(
  category: PortfolioCategoryId,
  folder: string,
  count: number,
): PortfolioItem[] {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      id: `${folder}-${number}`,
      category,
      src: `/images/portfolio/${folder}/${number}${IMAGE_EXT}`,
    };
  });
}

export const familyItems = buildSequentialItems(
  "family",
  "rodzinne",
  CATEGORY_COUNTS.rodzinne,
);
export const couplesItems = buildSequentialItems(
  "couples",
  "pary",
  CATEGORY_COUNTS.pary,
);
export const portretMeskiItems = buildSequentialItems(
  "portret-meski",
  "portret-meski",
  CATEGORY_COUNTS["portret-meski"],
);
export const portretKobiecyItems = buildSequentialItems(
  "portret-kobiecy",
  "portret-kobiecy",
  CATEGORY_COUNTS["portret-kobiecy"],
);
export const slubneItems = buildSequentialItems(
  "slubne",
  "slubne",
  CATEGORY_COUNTS.slubne,
);

/** Aggregated gallery for the "Wszystkie" tab. */
export const portfolioItems: PortfolioItem[] = [
  ...portretKobiecyItems,
  ...portretMeskiItems,
  ...couplesItems,
  ...familyItems,
  ...slubneItems,
];

export const portfolioFilters: PortfolioFilter[] = [
  "all",
  "portret-kobiecy",
  "portret-meski",
  "couples",
  "family",
  "slubne",
];

export type PortfolioTeaserItem = {
  id: string;
  category: PortfolioCategoryId;
  labelKey: PortfolioTeaserLabelKey;
  src: string;
};

/** Featured preview cards in the portfolio teaser section. */
export const portfolioTeaserItems: PortfolioTeaserItem[] = [
  {
    id: "teaser-rodzinne",
    category: "family",
    labelKey: "family",
    src: `/images/portfolio/rodzinne/1${IMAGE_EXT}`,
  },
  {
    id: "teaser-portret-meski",
    category: "portret-meski",
    labelKey: "portretMeski",
    src: `/images/portfolio/portret-meski/1${IMAGE_EXT}`,
  },
  {
    id: "teaser-portret-kobiecy",
    category: "portret-kobiecy",
    labelKey: "portretKobiecy",
    src: `/images/portfolio/portret-kobiecy/1${IMAGE_EXT}`,
  },
];

export function getItemsForFilter(filter: PortfolioFilter): PortfolioItem[] {
  switch (filter) {
    case "all":
      return portfolioItems;
    case "portret-kobiecy":
      return portretKobiecyItems;
    case "portret-meski":
      return portretMeskiItems;
    case "couples":
      return couplesItems;
    case "family":
      return familyItems;
    case "slubne":
      return slubneItems;
    default:
      return portfolioItems;
  }
}
