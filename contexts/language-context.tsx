"use client"

import React, { createContext, useContext, useMemo, useCallback } from "react"
import { getTranslations } from "@/lib/i18n"

type LanguageContextType = {
  language: "ar"
  t: (key: string) => string
  translations: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always use Arabic
  const language = "ar" as const
  const translations = useMemo(() => getTranslations(language), [])

  const t = useCallback((key: string): string => {
    const keys = key.split(".")
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k as keyof typeof value]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }, [translations])

  // Always provide the context, even during initial render
  const contextValue = useMemo(() => ({
    language,
    t,
    translations,
  }), [language, t, translations])

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

