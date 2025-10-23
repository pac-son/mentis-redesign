import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Take the first step towards understanding yourself better. Our compassionate team is ready to support you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book-appointment">
            <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Phone className="mr-2 h-4 w-4" />
            +92 300 8552215
          </Button>
        </div>

        <p className="text-sm mt-8 opacity-75">Available Monday to Friday, 9 AM - 6 PM (Pakistan Standard Time)</p>
      </div>
    </section>
  )
}
