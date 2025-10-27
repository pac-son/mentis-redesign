import Hero from "@/components/hero"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Team from "@/components/team"
import Process from "@/components/process"
import Blog from "@/components/blog"
import Values from "@/components/values"
import CTA from "@/components/cta"
import AIChat from "@/components/ai-chat"
import Maps from "@/components/maps"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <Blog />
      <Values />
      <FAQ />
      <CTA />
      <Newsletter />
      <Maps />
      <AIChat />
    </main>
  )
}
