import { Card } from "@/components/ui/card"

export default function Team() {
  const team = [
    {
      name: "Dr. Faisal Shaikh",
      role: "Founder & Clinical Director",
      bio: "Leading neurodiversity expert with 30+ years of experience in ADHD and Autism care.",
      image: "/professional-male-doctor.png",
    },
    {
      name: "Dr. Sarah Ahmed",
      role: "Senior Psychologist",
      bio: "Specialized in neurodivergent assessment and cognitive behavioral therapy.",
      image: "/professional-female-psychologist.png",
    },
    {
      name: "Dr. Amina Khan",
      role: "Clinical Psychologist",
      bio: "Expert in family counseling and neurodiversity support for all ages.",
      image: "/professional-female-clinical-psychologist-portrait.jpg",
    },
    {
      name: "Dr. Hassan Ali",
      role: "Behavioral Specialist",
      bio: "Focused on evidence-based interventions and therapeutic support.",
      image: "/professional-male-behavioral-specialist-portrait.jpg",
    },
    {
      name: "Dr. Zainab Malik",
      role: "Developmental Psychologist",
      bio: "Specializes in child and adolescent neurodevelopmental assessments.",
      image: "/professional-female-developmental-psychologist-por.jpg",
    },
    {
      name: "Dr. Ahmed Khan",
      role: "Neuropsychologist",
      bio: "Expert in cognitive assessment and neuropsychological testing.",
      image: "/professional-male-neuropsychologist-portrait.jpg",
    },
    {
      name: "Dr. Fatima Hassan",
      role: "Counselor & Therapist",
      bio: "Provides individual and group therapy for neurodivergent individuals.",
      image: "/professional-female-counselor-therapist-portrait.jpg",
    },
    {
      name: "Dr. Muhammad Rizwan",
      role: "Clinical Associate",
      bio: "Assists in assessments and provides therapeutic support.",
      image: "/professional-male-clinical-associate-portrait.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to your mental health and wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
