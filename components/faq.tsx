"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const { t } = useLanguage()

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "What is the process for getting an ADHD diagnosis?",
      answer:
        "Our comprehensive ADHD assessment includes clinical interviews, psychological testing, and review of medical history. The process typically takes 2-3 sessions. We provide a detailed report with recommendations for treatment and support strategies tailored to your needs.",
    },
    {
      id: "2",
      question: "Do you provide services for both children and adults?",
      answer:
        "Yes, we provide specialised services for both children and adults. Our team has expertise in developmental psychology and can assess and support individuals across all age groups. We also offer family counselling to help families understand and support neurodivergent members.",
    },
    {
      id: "3",
      question: "What languages do your doctors speak?",
      answer:
        "Our team is multilingual and speaks English, Urdu, Arabic, Sindhi, and Punjabi. You can request a doctor who speaks your preferred language when booking your appointment.",
    },
    {
      id: "4",
      question: "How long does a typical consultation take?",
      answer:
        "Initial consultations typically last 60-90 minutes, allowing time for thorough assessment and discussion. Follow-up sessions are usually 45-60 minutes. The duration may vary depending on your specific needs.",
    },
    {
      id: "5",
      question: "Do you offer online consultations?",
      answer:
        "Yes, we offer both in-person and online consultations via secure video conferencing. Online sessions are ideal for those with mobility issues or who prefer remote consultations. The quality of care remains the same regardless of format.",
    },
    {
      id: "6",
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid ID, any previous medical records or psychological assessments, a list of current medications, and information about your medical history. If you're a parent bringing a child, bring school reports and any previous evaluations.",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
