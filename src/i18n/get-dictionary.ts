import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { pl } from "./dictionaries/pl";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  pl,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
