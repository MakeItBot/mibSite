"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Locale, Translations } from "./types"
import { en } from "./locales/en"
import { pt } from "./locales/pt"

const translations: Record<Locale, Translations> = { en, pt }

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Locale) || "en"
    }
    return "en"
  })

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
  }, [])

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

const fallback: I18nContextType = {
  locale: "en",
  t: translations.en,
  setLocale: () => {},
}

export function useI18n() {
  const context = useContext(I18nContext)
  return context ?? fallback
}
