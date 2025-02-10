"use client";
import dynamic from "next/dynamic"

const HeroComp = dynamic(() => import('./components/Hero'), { ssr: false })
const ServicesComp = dynamic(() => import('./components/Services'), { ssr: false })
const ContactFormComp = dynamic(() => import('./components/ContactForm'), { ssr: false })

export default function Home() {
  return (
    <>
      <HeroComp />
      <ServicesComp />
      <ContactFormComp />
    </>
  )
}

