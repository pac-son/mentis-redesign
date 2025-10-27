"use client"

import { Heart, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-lg">Mentis Clinic</span>
            </div>
            <p className="text-sm opacity-75 mb-4">Compassionate mental health and neurodiversity care for all.</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/mentisclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-75 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/mentisclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-75 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/mentisclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-75 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/mentisclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-75 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923008552215"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 opacity-75 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:opacity-100 transition-opacity">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:opacity-100 transition-opacity">
                  {t("doctors")}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:opacity-100 transition-opacity">
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("services")}</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t("adhd")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t("autism")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t("counselling")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t("therapy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("contactInfo")}</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>{t("address")}</li>
              <li>
                {t("phone")}:{" "}
                <a href="tel:+923008552215" className="hover:opacity-100 transition-opacity">
                  +92 300 8552215
                </a>
              </li>
              <li>
                {t("email")}:{" "}
                <a href="mailto:info@mentisclinic.org" className="hover:opacity-100 transition-opacity">
                  info@mentisclinic.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>© 2025 Mentis Clinic Asia. {t("copyright")}</p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms-and-conditions" className="hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </div>
            <div className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent" /> for mental health
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
