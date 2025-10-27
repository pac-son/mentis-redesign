"use client"

import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
