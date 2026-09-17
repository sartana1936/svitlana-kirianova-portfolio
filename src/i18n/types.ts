export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    portfolio: string;
    instagram: string;
    backHome: string;
    cta: string;
  };
  contact: {
    title: string;
    telegram: string;
    instagram: string;
    close: string;
  };
  hero: {
    tagline: string;
    headline: string;
    subheadline: string;
    cta: string;
    location: string;
  };
  about: {
    title: string;
    body: string;
  };
  portfolio: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    teaserTitle: string;
    teaserSubtitle: string;
    teaserCta: string;
    categories: {
      all: string;
      portretKobiecy: string;
      portretMeski: string;
      couples: string;
      family: string;
      slubne: string;
      slubneDescription: string;
    };
    bookingBanner: string;
    bookCta: string;
    comingSoon: string;
  };
  footer: {
    tagline: string;
    contact: string;
    copyright: string;
  };
};
