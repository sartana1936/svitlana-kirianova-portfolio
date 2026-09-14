import { notFound } from "next/navigation";
import { AboutSnippet } from "@/components/AboutSnippet";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
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
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <AboutSnippet dict={dict} />
        <PortfolioTeaser locale={locale} dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
