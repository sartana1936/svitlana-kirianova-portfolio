import { notFound } from "next/navigation";
import { ContactProvider } from "@/components/ContactProvider";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return <ContactProvider dict={dict}>{children}</ContactProvider>;
}

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}
