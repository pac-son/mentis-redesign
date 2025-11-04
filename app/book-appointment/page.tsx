"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "adhd-assessment",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: "adhd-assessment", label: "ADHD Assessment" },
    { id: "autism-evaluation", label: "Autism Evaluation" },
    { id: "therapy", label: "Therapy Session" },
    { id: "counseling", label: "Counseling" },
    { id: "consultation", label: "Initial Consultation" },
  ]

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "adhd-assessment",
          message: "",
        })
        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error booking appointment:", error)
    }
  }

  return (
    <main className="min-h-screen bg-background">

      <section className="py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <Card className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Book an Appointment</h1>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation with our expert team. We'll get back to you within 24 hours to confirm your
              appointment.
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">✓ Appointment request submitted successfully!</p>
                <p className="text-green-700 text-sm">We'll contact you shortly to confirm your booking.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <User className="inline mr-2 h-4 w-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Mail className="inline mr-2 h-4 w-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Phone className="inline mr-2 h-4 w-4" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="+92 300 XXXXXXX"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Calendar className="inline mr-2 h-4 w-4" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Clock className="inline mr-2 h-4 w-4" />
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                  placeholder="Tell us about your concerns or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Confirm Appointment Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Operating Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday to Friday: 9 AM - 6 PM
                <br />
                Saturday: 10 AM - 4 PM
                <br />
                Sunday: Closed
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                Phone: +92 300 8552215
                <br />
                Email: info@mentisclinic.org
                <br />
                Location: Shop 21, Tower H, Bahria Heights, Bahria Town, Karachi, Sindh, Pakistan
              </p>
            </Card>
          </div>
        </div>
      </section>

    </main>
  )
}
