import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { PortfolioHeader } from "@/components/PortfolioHeader";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return {
    title: dict.portfolio.metaTitle,
    description: dict.portfolio.metaDescription,
  };
}

export default async function PortfolioPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PortfolioHeader locale={locale} dict={dict} />
      <main className="flex-1 w-full max-w-full overflow-x-hidden bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <PortfolioGallery dict={dict} />
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
