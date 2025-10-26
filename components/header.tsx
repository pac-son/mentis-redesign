"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import LanguageSelector from "@/components/language-selector"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Mentis Clinic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors">
              {t("services")}
            </Link>
            <Link href="/doctors" className="text-foreground hover:text-primary transition-colors">
              {t("doctors")}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t("contact")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Link href="/book-appointment">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">{t("bookAppointment")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link href="/#services" className="text-foreground hover:text-primary transition-colors">
              {t("services")}
            </Link>
            <Link href="/doctors" className="text-foreground hover:text-primary transition-colors">
              {t("doctors")}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t("contact")}
            </Link>
            <div className="py-2">
              <LanguageSelector />
            </div>
            <Link href="/book-appointment" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("bookAppointment")}
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
