import { Card } from "@/components/ui/card"

export default function Values() {
  const values = [
    {
      title: "Valuing",
      description:
        "The antidote to humiliation. We start by seeing and honoring each person for who they truly are. No labels, no shame—just recognition and respect.",
      icon: "👁️",
    },
    {
      title: "Giving",
      description:
        "Whether it's time, guidance, or access to care—we give generously. You are not alone, and you are not forgotten.",
      icon: "🤝",
    },
    {
      title: "Enabling",
      description:
        "We empower individuals to reach their full potential through personalized support, evidence-based care, and genuine understanding.",
      icon: "✨",
    },
    {
      title: "Our Mission",
      description:
        "Transforming how ADHD and Autism are understood, diagnosed, and supported across Pakistan, Asia, and beyond.",
      icon: "🎯",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded on compassion, driven by expertise, dedicated to transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 bg-background border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
