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

function buildGalleryItems(
  category: PortfolioCategoryId,
  folder: string,
  count: number,
): PortfolioItem[] {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;

    return {
      id: `${folder}-${number}`,
      category,
      src: `/images/portfolio/${folder}/${number}.jpg`,
    };
  });
}

function buildPlaceholderItems(
  category: "portret-kobiecy" | "portret-meski",
  folder: string,
): PortfolioItem[] {
  return [1, 2, 3].map((number) => ({
    id: `${folder}-placeholder-${number}`,
    category,
    src: `/images/portfolio/${folder}/${number}.jpg`,
    placeholder: true,
  }));
}

export const couplesItems = buildGalleryItems("couples", "pary", 12);
export const familyItems = buildGalleryItems("family", "rodzinne", 7);
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
    src: "/images/portfolio/pary/1.jpg",
  },
  {
    id: "teaser-rodzinne",
    category: "family",
    labelKey: "family",
    src: "/images/portfolio/rodzinne/1.jpg",
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
