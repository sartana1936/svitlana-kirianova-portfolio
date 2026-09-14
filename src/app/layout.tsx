import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "pl";

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full w-full max-w-full flex-col overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
