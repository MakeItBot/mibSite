"use client"

import { useI18n, type Locale } from "@/i18n"

const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
}

export function LanguageSelector() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1 rounded-full glass px-1 py-0.5">
      {(Object.keys(localeLabels) as Locale[]).map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${loc === "en" ? "English" : "Portugues"}`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  )
}
