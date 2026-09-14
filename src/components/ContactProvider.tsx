"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { InstagramIcon, TelegramIcon } from "@/components/icons/SocialIcons";
import type { Dictionary } from "@/i18n/types";
import { siteConfig } from "@/lib/constants";

type ContactContextValue = {
  openContact: () => void;
  closeContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}

type ContactProviderProps = {
  dict: Dictionary;
  children: ReactNode;
};

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function ContactProvider({ dict, children }: ContactProviderProps) {
  const [open, setOpen] = useState(false);

  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeContact();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeContact]);

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={dict.contact.title}
          >
            <button
              type="button"
              aria-label={dict.contact.close}
              className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
              onClick={closeContact}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-xl"
            >
              <button
                type="button"
                onClick={closeContact}
                aria-label={dict.contact.close}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-stone transition-colors hover:bg-background hover:text-charcoal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <p className="mb-6 pr-8 font-heading text-xl text-charcoal">
                {dict.contact.title}
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.telegram}
                  {...externalLinkProps}
                  onClick={closeContact}
                  className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  <TelegramIcon className="h-5 w-5 shrink-0" />
                  {dict.contact.telegram}
                </a>
                <a
                  href={siteConfig.instagram}
                  {...externalLinkProps}
                  onClick={closeContact}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-accent/40 hover:bg-beige-light"
                >
                  <InstagramIcon className="h-5 w-5 shrink-0 text-stone" />
                  {dict.contact.instagram}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}

type ContactButtonProps = {
  children: ReactNode;
  className?: string;
};

export function ContactButton({ children, className }: ContactButtonProps) {
  const { openContact } = useContact();

  return (
    <button type="button" onClick={openContact} className={className}>
      {children}
    </button>
  );
}
