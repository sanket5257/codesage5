'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  MapPin, 
  Clock, 
  DollarSign,
  ArrowRight
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'

gsap.registerPlugin(ScrollTrigger)

export default function CareersPage() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  const handleMouseEnter = (text: string) => {
    setCursorText(text)
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    setCursorText('')
  }

  useEffect(() => {
    // Animate sections on scroll
    gsap.fromTo('.animate-on-scroll', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.animate-on-scroll',
          start: 'top 80%',
        }
      }
    )
  }, [])

  const jobOpenings = [
    {
      title: "Webflow Developer",
      company: "CodeSage - Remote & Bangalore",
      description: "Build high-performance Webflow websites at CodeSage. Seeking Webflow Developers with HTML/CSS/JS, CMS & animation skills. Remote-friendly, competitive pay. Apply with portfolio.",
      location: "On Site",
      type: "Full-Time",
      salary: "₹60000 - ₹90000",
      badge: "Webflow"
    },
    {
      title: "UI/UX Designer Jobs",
      company: "Design Agency | CodeSage Careers",
      description: "Design conversion-focused interfaces and prototypes for Webflow clients. Looking for UI/UX Designers fluent in Figma, prototyping, user testing & interaction design. Portfolio required — apply now.",
      location: "On Site",
      type: "Full-Time",
      salary: "₹50000 - ₹80000",
      badge: "UI/UX Design"
    },
    {
      title: "Digital Marketing Specialist",
      company: "CodeSage - Growth & Marketing",
      description: "Drive growth through strategic digital marketing campaigns. Experience in SEO, PPC, content marketing, and analytics required. Remote-friendly position.",
      location: "Remote",
      type: "Full-Time",
      salary: "₹45000 - ₹70000",
      badge: "Marketing"
    }
  ]

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section - Dark Background */}
        <section className="bg-black text-white py-20 pt-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Careers at CodeSage
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                At CodeSage, we&apos;re building the future of digital experiences. As a premium design and Webflow agency in India, we&apos;re looking for passionate individuals who want to create impactful and scalable digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="animate-on-scroll bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <span className="text-black px-3 py-1 rounded-full text-sm font-medium">
                          {job.badge}
                        </span>
                        <button 
                          className="text-balck text-sm font-medium flex items-center ml-auto lg:ml-0"
                          onMouseEnter={() => handleMouseEnter('View Job')}
                          onMouseLeave={handleMouseLeave}
                        >
                          View Job
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      
                      <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}