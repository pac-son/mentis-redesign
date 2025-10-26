"use client"

import { useLanguage } from "@/lib/language-context"
import { Calendar, CheckCircle, FileText, Video } from "lucide-react"

export default function Process() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Calendar,
      title: t("step1"),
      description: t("step1Desc"),
    },
    {
      icon: CheckCircle,
      title: t("step2"),
      description: t("step2Desc"),
    },
    {
      icon: FileText,
      title: t("step3"),
      description: t("step3Desc"),
    },
    {
      icon: Video,
      title: t("step4"),
      description: t("step4Desc"),
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("processTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("processDescription")}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Step number and connector line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Connector line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-primary to-accent transform translate-y-0 -z-10"></div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
