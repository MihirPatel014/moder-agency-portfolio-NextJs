"use client";
import dynamic from "next/dynamic"

const HeroComp = dynamic(() => import('./components/Hero'), { ssr: false })
const ServicesComp = dynamic(() => import('./components/Services'), { ssr: false })
const ServicesComp1 = dynamic(() => import('./components/Services1'), { ssr: false })
const ContactFormComp = dynamic(() => import('./components/ContactForm'), { ssr: false })
const TestimonialsComp = dynamic(() => import('./components/Testimonials'), { ssr: false })
const TestimonialsComp3d = dynamic(() => import('./components/Testimonials3d'), { ssr: false })
const ProjectsComp = dynamic(() => import('./components/Projects'), { ssr: false })
const PurposeComp = dynamic(() => import('./components/Purpose'), { ssr: false })

export default function Home() {
  return (
    <>
      <HeroComp />
      <ServicesComp />
      <ServicesComp1 />
      <ProjectsComp/>
      <TestimonialsComp/>
      <TestimonialsComp3d/>
      <PurposeComp/>
      <ContactFormComp />
    </>
  )
}

