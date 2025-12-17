'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CursorFollower from '../../components/CursorFollower'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Contact from '@/components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioPage() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    gsap.fromTo('.portfolio-item', 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo('.hero-content', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    )
  }, [])

  const handleMouseEnter = () => {
    setCursorText('View Case')
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    setCursorText('')
  }

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              ★ Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              All case studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our portfolio of exceptional web design and custom Webflow websites that drive results for businesses worldwide.
            </p>
           
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent UX Design and Webflow projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform their digital presence with innovative design and development solutions.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Futurense Case Study */}
            <Link href="/portfolio/futurense-technologies">
              <div 
                className="portfolio-item bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Left Content Panel */}
                <div className="p-12 flex flex-col justify-between bg-gray-50">
                  {/* Company Logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <Users className="w-6 h-6 text-gray-700" />
                    <span className="text-xl font-bold text-gray-900">Futurense Technologies</span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                      Futurense Technologies stands as India&apos;s fastest-growing AI skilling and talent development company in EdTech landscape.
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        EdTech
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        AI Skilling
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Talent Development
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      We redesigned their entire digital presence, focusing on user experience and conversion optimization. The result was a significant improvement in site performance and user engagement.
                    </p>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-4xl font-bold text-gray-900">27%</span>
                      <span className="text-sm text-gray-600">increase in CVR</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Webflow
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Landing Pages
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Ongoing Support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Video Panel */}
                <div className="relative bg-black">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/Futurense case study.webm" type="video/webm" />
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                  
                 
                </div>
              </div>
              </div>
            </Link>

            {/* Hopstack Case Study */}
            <Link href="/portfolio/hopstack">
              <div 
                className="portfolio-item bg-white rounded-3xl mt-10 verflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Left Video Panel */}
                <div className="relative bg-black">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/Hopstack Showreel.webm" type="video/webm" />
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                  
                  
                </div>

                {/* Right Content Panel */}
                <div className="p-12 flex flex-col justify-between bg-gray-50">
                  {/* Company Logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">H</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Hopstack</span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                      B2B SaaS platform for warehouse management to streamline and digitize warehouse operations and fulfillment.
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        B2B SaaS
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Logistics
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Fulfillment
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      We created a comprehensive digital solution that increased organic traffic by 266.4% and improved domain authority from 24 to 37 in just 6 months.
                    </p>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-4xl font-bold text-gray-900">266.4%</span>
                      <span className="text-sm text-gray-600">traffic increase</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        UI/UX Design
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Webflow
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Link>

            {/* Logo Animation Case Study */}
            <div 
              className="portfolio-item bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Left Content Panel */}
                <div className="p-12 flex flex-col justify-between bg-gray-50">
                  {/* Company Logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">CodeSage</span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                      Brand identity and logo animation for modern web development agency focused on innovation and creativity.
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Branding
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Animation
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Motion Graphics
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      Created a dynamic logo animation that captures the essence of modern web development with smooth transitions and engaging visual effects.
                    </p>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-4xl font-bold text-gray-900">100%</span>
                      <span className="text-sm text-gray-600">brand recognition</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Logo Design
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Animation
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Branding
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Video Panel */}
                <div className="relative bg-black">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/logo.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                  
                
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
        <Contact/>

      <Footer />
    </>
  )
}