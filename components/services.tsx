import { Card } from "@/components/ui/card"
import { Brain, Users, Lightbulb, Heart } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "ADHD Assessment & Treatment",
      description: "Comprehensive evaluation and personalized treatment plans for ADHD across all ages.",
    },
    {
      icon: Users,
      title: "Autism Spectrum Support",
      description: "Expert diagnosis and ongoing support for individuals on the autism spectrum.",
    },
    {
      icon: Lightbulb,
      title: "Neurodiversity Counseling",
      description: "Specialized counseling for neurodivergent individuals and their families.",
    },
    {
      icon: Heart,
      title: "Mental Health Services",
      description: "Compassionate care for anxiety, depression, and other mental health conditions.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mental health and neurodiversity care tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
