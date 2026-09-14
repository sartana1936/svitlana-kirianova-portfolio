import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Svitlana Kirianova — Fotografia naturalna",
  description:
    "Zdejmuję maski, pokazuję prawdziwe emocje. Naturalna fotografia w Katowicach i na Śląsku.",
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "pl";

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
