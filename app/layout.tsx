import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mentis Clinic Asia - Mental Health & Neurodiversity Care",
  description:
    "Compassionate mental health and neurodiversity care for ADHD, Autism, and more. Expert psychologists and clinical specialists in Pakistan and Asia.",
  keywords: [
    "ADHD assessment",
    "Autism spectrum disorder",
    "Mental health care",
    "Neurodiversity",
    "Psychologist",
    "Counselling",
    "Karachi",
    "Pakistan",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Mentis Clinic Asia - Mental Health & Neurodiversity Care",
    description: "Compassionate mental health and neurodiversity care for ADHD, Autism, and more.",
    url: "https://mentisclinic.org",
    siteName: "Mentis Clinic Asia",
    images: [
      {
        url: "/healthcare-professional-consulting-with-patient-in.jpg",
        width: 1200,
        height: 630,
        alt: "Mentis Clinic",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentis Clinic Asia - Mental Health & Neurodiversity Care",
    description: "Compassionate mental health and neurodiversity care for ADHD, Autism, and more.",
    images: ["/healthcare-professional-consulting-with-patient-in.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Mentis Clinic Asia",
              description: "Mental health and neurodiversity care clinic",
              url: "https://mentisclinic.org",
              telephone: "+923008552215",
              email: "info@mentisclinic.org",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              sameAs: [
                "https://facebook.com/mentisclinic",
                "https://twitter.com/mentisclinic",
                "https://instagram.com/mentisclinic",
                "https://linkedin.com/company/mentisclinic",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
