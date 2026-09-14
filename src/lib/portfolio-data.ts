export type PortfolioCategoryId =
  | "portret-kobiecy"
  | "portret-meski"
  | "couples"
  | "family";

export type PortfolioFilter = "all" | PortfolioCategoryId;

export type PortfolioItem = {
  id: string;
  category: PortfolioCategoryId;
  src: string;
  placeholder?: boolean;
};

/** Must match exact case-sensitive filenames in public/images/portfolio/ */
const IMAGE_EXT = ".JPG";

/** pary/4.JPG is not present in the repo — list only existing files */
const PARY_IMAGE_NUMBERS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const RODZINNE_IMAGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7] as const;

function buildGalleryItems(
  category: PortfolioCategoryId,
  folder: string,
  numbers: readonly number[],
): PortfolioItem[] {
  return numbers.map((number) => ({
    id: `${folder}-${number}`,
    category,
    src: `/images/portfolio/${folder}/${number}${IMAGE_EXT}`,
  }));
}

function buildPlaceholderItems(
  category: "portret-kobiecy" | "portret-meski",
  folder: string,
): PortfolioItem[] {
  return [1, 2, 3].map((number) => ({
    id: `${folder}-placeholder-${number}`,
    category,
    src: `/images/portfolio/${folder}/${number}${IMAGE_EXT}`,
    placeholder: true,
  }));
}

export const couplesItems = buildGalleryItems("couples", "pary", PARY_IMAGE_NUMBERS);
export const familyItems = buildGalleryItems(
  "family",
  "rodzinne",
  RODZINNE_IMAGE_NUMBERS,
);
export const portretKobiecyPlaceholders = buildPlaceholderItems(
  "portret-kobiecy",
  "portret-kobiecy",
);
export const portretMeskiPlaceholders = buildPlaceholderItems(
  "portret-meski",
  "portret-meski",
);

/** Aggregated gallery for the "Wszystkie" tab — all available pary & rodzinne photos. */
export const portfolioItems: PortfolioItem[] = [
  ...couplesItems,
  ...familyItems,
];

export const portfolioFilters: PortfolioFilter[] = [
  "all",
  "portret-kobiecy",
  "portret-meski",
  "couples",
  "family",
];

export type PortfolioTeaserLabelKey =
  | "portretKobiecy"
  | "portretMeski"
  | "couples"
  | "family";

export type PortfolioTeaserItem = {
  id: string;
  category: PortfolioCategoryId;
  labelKey: PortfolioTeaserLabelKey;
  src?: string;
  placeholder?: boolean;
};

export const portfolioTeaserItems: PortfolioTeaserItem[] = [
  {
    id: "teaser-portret-kobiecy",
    category: "portret-kobiecy",
    labelKey: "portretKobiecy",
    placeholder: true,
  },
  {
    id: "teaser-portret-meski",
    category: "portret-meski",
    labelKey: "portretMeski",
    placeholder: true,
  },
  {
    id: "teaser-pary",
    category: "couples",
    labelKey: "couples",
    src: `/images/portfolio/pary/1${IMAGE_EXT}`,
  },
  {
    id: "teaser-rodzinne",
    category: "family",
    labelKey: "family",
    src: `/images/portfolio/rodzinne/1${IMAGE_EXT}`,
  },
];

export function getItemsForFilter(filter: PortfolioFilter): PortfolioItem[] {
  switch (filter) {
    case "all":
      return portfolioItems;
    case "couples":
      return couplesItems;
    case "family":
      return familyItems;
    case "portret-kobiecy":
      return portretKobiecyPlaceholders;
    case "portret-meski":
      return portretMeskiPlaceholders;
    default:
      return portfolioItems;
  }
}
