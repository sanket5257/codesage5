'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { notFound } from 'next/navigation'
import { 
  Building2,
  Mountain,
  Layers,
  Shield,
  Activity,
  Box,
  ShoppingBag,
  Sparkles,
  Database,
  Globe,
  Cpu,
  Cloud,
  Truck,
  Plus,
  Zap,
  BarChart3,
  Target,
  Users
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'
import { industriesData } from '@/data/industriesData'
import ExploreProjects from '@/components/ExploreProjects'

gsap.registerPlugin(ScrollTrigger)

interface IndustryPageProps {
  params: {
    slug: string
  }
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLElement>(null)

  const industryData = industriesData[params.slug as keyof typeof industriesData]

  if (!industryData) {
    notFound()
  }

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

    // Animate client logos
    gsap.fromTo('.client-logo', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.client-logo',
          start: 'top 80%',
        }
      }
    )

    // Video scroll animation - grow to full screen from right position
    if (videoRef.current && heroSectionRef.current) {
      gsap.to(videoRef.current, {
        width: '100vw',
        height: '100vh',
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: false,
        }
      })
    }
  }, [])

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <Header />
      
      <main className="min-h-screen pt-10">
        {/* Hero Section with Text Left and Video Right */}
        <section ref={heroSectionRef} className="min-h-screen flex relative overflow-hidden">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 lg:px-12 relative z-10">
            <div className="max-w-2xl animate-on-scroll">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {industryData.badge}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We build {industryData.title} solutions
                <br />
                <span className="text-orange-500">that people can&apos;t ignore</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {industryData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors text-center"
                  onMouseEnter={() => handleMouseEnter('Book Call')}
                  onMouseLeave={handleMouseLeave}
                >
                  BOOK A CALL
                </a>
                <a 
                  href="/portfolio"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors text-center"
                  onMouseEnter={() => handleMouseEnter('Our Work')}
                  onMouseLeave={handleMouseLeave}
                >
                  Our Work
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Full Height Video with Scroll Animation */}
          <div ref={videoRef} className="hidden lg:block lg:w-1/2 relative">
            <video
              src={industryData.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="clients-section bg-gray-50 pt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-xl text-gray-900 mb-8 leading-tight">
                Trusted by 20+ Startups and Enterprises for UX Design and Webflow Development
              </h2>
            </div>

            {/* Client Logos Grid */}
            <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              {/* First Row */}
              <div className="grid grid-cols-6 border-b border-gray-200">
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span className="font-bold text-sm">Hopstack</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold text-sm">GoFIGR</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mountain className="w-4 h-4" />
                    <span className="font-bold text-sm">TERRA</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="font-bold text-sm">Futurense</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Layers className="w-4 h-4" />
                    <span className="font-bold text-sm">slicehm</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span className="font-bold text-sm">MAHOJIN</span>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-6 border-b border-gray-200">
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Activity className="w-4 h-4" />
                    <span className="font-bold text-sm">ACTION</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Box className="w-4 h-4" />
                    <span className="font-bold text-sm">buiy</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="font-bold text-sm">ShopBox</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <BarChart3 className="w-4 h-4" />
                    <span className="font-bold text-sm">monnai</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Target className="w-4 h-4" />
                    <span className="font-bold text-sm">PROPEL</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-bold text-sm">Project Serotonin</span>
                  </div>
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-6">
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Database className="w-4 h-4" />
                    <span className="font-bold text-sm">bondable</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span className="font-bold text-sm">AsiaDebtHub</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Cpu className="w-4 h-4" />
                    <span className="font-bold text-sm">AUREON</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Cloud className="w-4 h-4" />
                    <span className="font-bold text-sm">SORISE</span>
                  </div>
                </div>
                <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Truck className="w-4 h-4" />
                    <span className="font-bold text-sm">VROOMMEDIA</span>
                  </div>
                </div>
                {/* Your Logo Section */}
                <div className="client-logo flex items-center justify-center py-6">
                  <div className="inline-flex items-center border-2 border-dashed border-orange-500 px-3 py-2 rounded-lg">
                    <span className="text-orange-500 font-bold text-sm mr-1">Your Logo</span>
                    <Plus className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-gray-500 mr-2">✦</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Why US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose us for {industryData.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our industry-specific expertise and data-driven approach deliver solutions that transform {industryData.title.toLowerCase()} operations and drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryData.features.map((feature, index) => (
                <div key={index} className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
              <ExploreProjects/>
   

      

      
      </main>
      
      <Footer />
    </>
  )
}