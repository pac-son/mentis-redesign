"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

interface Doctor {
  id: string
  name: string
  role: string
  bio: string
  image: string
  qualifications: string[]
  languages: string[]
}

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer h-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {!isExpanded ? (
        // Collapsed view - just image and name
        <div className="p-6 text-center">
          <div className="w-32 h-32 bg-linear-to-br from-primary to-accent rounded-full mx-auto mb-4 overflow-hidden">
            <img src={doctor.image || "/placeholder.svg"} alt={doctor.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
          <p className="text-sm text-accent font-medium mb-3">{doctor.role}</p>
          <p className="text-xs text-muted-foreground">Click to view details</p>
        </div>
      ) : (
        // Expanded view - image on top, details below
        <div className="p-6">
          <div className="flex flex-col">
            {/* Image */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-40 h-40 bg-linear-to-br from-primary to-accent rounded-lg overflow-hidden">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-sm text-accent font-medium">{doctor.role}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Qualifications */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{t("qualifications")}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {doctor.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{t("languagesSpoken")}</h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground pt-2">Click to close</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
