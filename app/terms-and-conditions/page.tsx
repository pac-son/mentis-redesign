"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function TermsAndConditions() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-r from-primary to-primary/80 text-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg opacity-90">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use Licence</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Mentis Clinic Asia's website for personal, non-commercial transitory viewing only. This is the grant of a
              licence, not a transfer of title, and under this licence you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The materials on Mentis Clinic Asia's website are provided on an 'as is' basis. Mentis Clinic Asia makes
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Mentis Clinic Asia or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Mentis Clinic Asia's website, even if Mentis Clinic Asia or an
              authorised representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground mb-4">
              The materials appearing on Mentis Clinic Asia's website could include technical, typographical, or
              photographic errors. Mentis Clinic Asia does not warrant that any of the materials on its website are
              accurate, complete, or current. Mentis Clinic Asia may make changes to the materials contained on its
              website at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
            <p className="text-muted-foreground mb-4">
              Mentis Clinic Asia has not reviewed all of the sites linked to its website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by Mentis Clinic
              Asia of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
            <p className="text-muted-foreground mb-4">
              Mentis Clinic Asia may revise these terms of service for its website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Medical Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The information provided on this website is for educational and informational purposes only and should not
              be considered as medical advice. Always consult with a qualified healthcare professional before making any
              decisions regarding your health or treatment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
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
