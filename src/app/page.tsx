'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import ExploreProjects from '@/components/ExploreProjects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <Testimonials />
      <ExploreProjects />
      <Contact />
      <Footer />
    </main>
  )
}