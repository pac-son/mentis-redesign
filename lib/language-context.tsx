"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { type Language, translations } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage on mount
    const saved = localStorage.getItem("language") as Language | null
    if (saved && saved in translations) {
      setLanguageState(saved)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Set HTML direction for RTL languages
    document.documentElement.dir = lang === "ar" || lang === "ur" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
