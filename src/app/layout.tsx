"use client"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React
import dynamic from "next/dynamic"

const HeaderComp = dynamic(() => import('./components/Header'), { ssr: false })
const FooterComp = dynamic(() => import('./components/Footer'), { ssr: false })
const inter = Inter({ subsets: ["latin"] })

 const metadata = {
  title: "Modern Agency",
  description: "Showcasing our core services: Development, Marketing, Consulting, and Content Creation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComp />
        <main>{children}</main>
        <FooterComp />
      </body>
    </html>
  )
}

