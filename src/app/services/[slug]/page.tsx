'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { 
  ArrowLeft,
  ArrowRight,
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
import ColumnMarquee from '@/components/ColumnMarquee'
import { servicesData } from '@/data/servicesData'

gsap.registerPlugin(ScrollTrigger)




interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0)

  const serviceData = servicesData[params.slug as keyof typeof servicesData]

  if (!serviceData) {
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

  const portfolioItems = [
    {
      title: "Futurense Technologies",
      description: "Futurense // stands as a leading force in India's EdTech landscape, specifically focused on AI-skilling and talent development.",
      image: "/videos/Futurense case study.webm",
      tags: ["EdTech", "AI Skilling", "Talent Development"],
      isVideo: true
    },
    {
      title: "Hopstack",
      description: "Hopstack // B2B SaaS platform for warehouse management and operations.",
      image: "/videos/Hopstack Showreel.webm",
      tags: ["B2B SaaS", "Warehouse", "Operations"],
      isVideo: true
    }
  ]





  const nextPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
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


  }, [])

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <Header />
      
      <main className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <div className="mb-6">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {serviceData.badge}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {serviceData.subtitle}
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {serviceData.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors"
                    onMouseEnter={() => handleMouseEnter('Book Call')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Book an intro call
                  </button>
                  <button 
                    className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-gray-400 transition-colors"
                    onMouseEnter={() => handleMouseEnter('View Work')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Our work
                  </button>
                </div>
              </div>
              
              <div className="animate-on-scroll relative lg:hidden">
                <ColumnMarquee 
                  items={serviceData.marqueeItems}
                  height="h-96"
                  speed={25}
                  columns={2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Marquee Section */}
        <section className="py-0 bg-white hidden lg:block">
          <div className="animate-on-scroll">
            <ColumnMarquee 
              items={serviceData.marqueeItems}
              height="h-[600px]"
              speed={25}
              columns={3}
              fullWidth={true}
            />
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
                Why Choose us for {serviceData.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our data-driven strategies boost customer satisfaction and conversion rates by delivering user-focused, optimized solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.features.map((feature, index) => (
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

        {/* Portfolio Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Some of our recent work
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Explore our portfolio of exceptional {serviceData.title.toLowerCase()} projects that drive results for businesses worldwide.
                </p>
                <button 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors"
                  onMouseEnter={() => handleMouseEnter('View All')}
                  onMouseLeave={handleMouseLeave}
                >
                  Explore All Projects
                </button>
                
                <div className="flex space-x-4 mt-8">
                  <button 
                    onClick={prevPortfolio}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    onMouseEnter={() => handleMouseEnter('Previous')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextPortfolio}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    onMouseEnter={() => handleMouseEnter('Next')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="bg-gray-900 rounded-2xl p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{portfolioItems[currentPortfolioIndex].title}</h3>
                    <div className="flex space-x-2 mb-4">
                      {portfolioItems[currentPortfolioIndex].tags.map((tag, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg h-48 mb-6 overflow-hidden">
                    {portfolioItems[currentPortfolioIndex].isVideo ? (
                      <video
                        src={portfolioItems[currentPortfolioIndex].image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Image
                        src={portfolioItems[currentPortfolioIndex].image}
                        alt={portfolioItems[currentPortfolioIndex].title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <p className="text-gray-300 mb-6">
                    {portfolioItems[currentPortfolioIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-gray-500 mr-2">✦</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">{serviceData.title} Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our {serviceData.title} Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive {serviceData.title.toLowerCase()} solutions designed to help your business grow and succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.services.map((service, index) => (
                <div key={index} className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
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

        {/* Trusted Brands Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-xl text-gray-900 mb-8 leading-tight">
                Trusted by 20+ Startups and Enterprises for {serviceData.title} Services
              </h2>
            </div>

            {/* Client Logos Grid */}
            <div className="animate-on-scroll max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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
                  <div className="inline-flex items-center border-2 border-dashed border-primary px-3 py-2 rounded-lg">
                    <span className="text-primary font-bold text-sm mr-1">Your Logo</span>
                    <Plus className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

