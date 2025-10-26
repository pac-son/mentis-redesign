"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ahmed Hassan",
      role: "ADHD Patient",
      content:
        "Getting diagnosed at Mentis Clinic was life-changing. The team was incredibly professional and compassionate. I finally understand myself better and have the support I need.",
      rating: 5,
      image: "/male-patient-portrait.jpg",
    },
    {
      id: "2",
      name: "Fatima Khan",
      role: "Parent of Autistic Child",
      content:
        "The doctors at Mentis Clinic provided excellent support for my son. They explained everything clearly and gave us practical strategies to help him thrive at school and home.",
      rating: 5,
      image: "/female-patient-portrait.jpg",
    },
    {
      id: "3",
      name: "Muhammad Ali",
      role: "Mental Health Support Seeker",
      content:
        "I was struggling with anxiety and depression. The counselling sessions at Mentis Clinic have been transformative. The team truly cares about their patients' wellbeing.",
      rating: 5,
      image: "/male-patient-smiling.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Patient Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our patients about their experiences at Mentis Clinic
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
