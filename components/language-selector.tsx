"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1">
        {(["en", "ar", "ur"] as const).map((lang) => (
          <Button
            key={lang}
            variant={language === lang ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage(lang)}
            className="w-10 h-10 p-0"
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  )
}
