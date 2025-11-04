"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Newsletter signup:", email)
    setSubmitted(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
    setLoading(false)
  }

  return (
    <section className="py-20 md:py-32 bg-linear-to-r from-primary/10 to-accent/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Informed</h2>
          <p className="text-lg text-muted-foreground">
            Subscribe to our newsletter for mental health tips, neurodiversity insights, and clinic updates
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <CheckCircle className="w-12 h-12 text-accent" />
            <p className="text-lg font-semibold text-foreground">Thank you for subscribing!</p>
            <p className="text-muted-foreground">Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
