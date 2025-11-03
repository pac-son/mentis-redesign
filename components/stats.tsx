"use client"

import CountUp from 'react-countup'

export default function Stats() {
  const stats = [
    { number: 30, suffix: "+", label: "Years of Experience" },
    { number: 10, suffix: "+", label: "Specialist Psychologists" },
    { number: 96, suffix: "%", label: "Patient Satisfaction" },
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} duration={2} />
              </p>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
