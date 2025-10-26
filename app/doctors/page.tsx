"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import DoctorCard from "@/components/doctor-card"
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

export default function DoctorsPage() {
  const { t } = useLanguage()

  const allDoctors: Doctor[] = [
    {
      id: "1",
      name: "Dr. Faisal Shaikh",
      role: "Founder & Clinical Director",
      bio: "Leading neurodiversity specialist with 30+ years of experience in ADHD and autism spectrum disorder assessment and management.",
      image: "/professional-male-doctor.png",
      qualifications: [
        "M.B.B.S., University of Karachi",
        "M.Phil Clinical Psychology",
        "Certified ADHD Specialist",
        "Autism Spectrum Disorder Certification",
      ],
      languages: ["English", "Urdu", "Sindhi"],
    },
    {
      id: "2",
      name: "Dr. Sarah Ahmed",
      role: "Senior Clinical Psychologist",
      bio: "Specialised in neurodivergent assessment and cognitive behavioural therapy with expertise in family counselling.",
      image: "/professional-female-psychologist.png",
      qualifications: [
        "M.A. Clinical Psychology",
        "Diploma in Cognitive Behavioural Therapy",
        "Certified Psychological Assessor",
      ],
      languages: ["English", "Urdu", "Arabic"],
    },
    {
      id: "3",
      name: "Dr. Amina Khan",
      role: "Clinical Psychologist",
      bio: "Expert in family counselling and neurodiversity support for all ages with a focus on child and adolescent development.",
      image: "/professional-female-clinical-psychologist-portrait.jpg",
      qualifications: [
        "M.A. Clinical Psychology",
        "Specialisation in Child Psychology",
        "Family Therapy Certification",
      ],
      languages: ["English", "Urdu", "Punjabi"],
    },
    {
      id: "4",
      name: "Dr. Hassan Ali",
      role: "Behavioural Specialist",
      bio: "Focused on evidence-based interventions and therapeutic support for neurodivergent individuals.",
      image: "/professional-male-behavioral-specialist-portrait.jpg",
      qualifications: [
        "M.A. Behavioural Sciences",
        "Certified Behaviour Analyst",
        "Applied Behaviour Analysis Specialist",
      ],
      languages: ["English", "Urdu"],
    },
    {
      id: "5",
      name: "Dr. Zainab Malik",
      role: "Developmental Psychologist",
      bio: "Specialises in child and adolescent neurodevelopmental assessments with expertise in developmental disorders.",
      image: "/professional-female-developmental-psychologist-por.jpg",
      qualifications: [
        "M.A. Developmental Psychology",
        "Certified Developmental Assessor",
        "Paediatric Psychology Specialist",
      ],
      languages: ["English", "Urdu", "Arabic"],
    },
    {
      id: "6",
      name: "Dr. Ahmed Khan",
      role: "Neuropsychologist",
      bio: "Expert in cognitive assessment and neuropsychological testing with specialisation in neurodevelopmental disorders.",
      image: "/professional-male-neuropsychologist-portrait.jpg",
      qualifications: ["M.A. Neuropsychology", "Certified Neuropsychological Assessor", "Brain-Behaviour Specialist"],
      languages: ["English", "Urdu", "Punjabi"],
    },
    {
      id: "7",
      name: "Dr. Fatima Hassan",
      role: "Counsellor & Psychotherapist",
      bio: "Provides individual and group therapy for neurodivergent individuals with a compassionate, person-centred approach.",
      image: "/professional-female-counselor-therapist-portrait.jpg",
      qualifications: ["M.A. Counselling Psychology", "Certified Psychotherapist", "Group Therapy Specialist"],
      languages: ["English", "Urdu", "Arabic"],
    },
    {
      id: "8",
      name: "Dr. Muhammad Rizwan",
      role: "Clinical Associate",
      bio: "Assists in assessments and provides therapeutic support with a focus on patient care and wellbeing.",
      image: "/professional-male-clinical-associate-portrait.jpg",
      qualifications: [
        "M.A. Clinical Psychology",
        "Psychological Assessment Certification",
        "Therapeutic Support Specialist",
      ],
      languages: ["English", "Urdu"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("doctorsTitle")}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("doctorsDescription")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
