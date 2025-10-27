"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function PrivacyPolicy() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Mentis Clinic Asia ("we", "us", "our", or "Company") operates the mentisclinic.org website (the
              "Service"). This page informs you of our policies regarding the collection, use, and disclosure of
              personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground mb-4">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Types of Data Collected:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>
                <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain
                personally identifiable information that can be used to contact or identify you ("Personal Data"). This
                may include, but is not limited to:
                <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used
                ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages you visit, the time and date of your visit, the time
                spent on those pages, and other diagnostic data.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground mb-4">
              Mentis Clinic Asia uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground mb-4">
              The security of your data is important to us, but remember that no method of transmission over the
              Internet or method of electronic storage is 100% secure. Whilst we strive to use commercially acceptable
              means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground">
                <strong>Mentis Clinic Asia</strong>
                <br />
                Shop 21, Tower H, Bahria Heights
                <br />
                Bahria Town, Karachi, Sindh, Pakistan
                <br />
                Phone: +92 300 8552215
                <br />
                Email: info@mentisclinic.org
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. GDPR Compliance</h2>
            <p className="text-muted-foreground mb-4">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Mentis
              Clinic Asia aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
              Personal Data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Medical Information Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Any medical or health-related information you provide is treated with the utmost confidentiality and is
              protected in accordance with applicable healthcare privacy laws and regulations. We do not share your
              medical information with third parties without your explicit consent, except as required by law.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
