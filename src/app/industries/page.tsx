'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { 
  Heart, 
  GraduationCap, 
  ShoppingBag, 
  Truck, 
  Banknote,
  ArrowRight
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'

gsap.registerPlugin(ScrollTrigger)

export default function IndustriesPage() {
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

  const industries = [
    {
      slug: 'healthcare',
      title: 'Healthcare',
      description: 'Digital healthcare solutions that improve patient outcomes and streamline medical operations.',
      icon: Heart,
      color: 'bg-red-50 text-red-600',
      borderColor: 'border-red-200',
      hoverColor: 'hover:bg-red-100',
      features: ['Telemedicine Platforms', 'Patient Portals', 'Healthcare Analytics', 'HIPAA Compliance']
    },
    {
      slug: 'education',
      title: 'Education',
      description: 'EdTech solutions that transform learning experiences and educational management.',
      icon: GraduationCap,
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:bg-blue-100',
      features: ['E-Learning Platforms', 'Student Management', 'Virtual Classrooms', 'Learning Analytics']
    },
    {
      slug: 'ecommerce',
      title: 'E-commerce',
      description: 'Powerful e-commerce solutions that drive sales and enhance customer experiences.',
      icon: ShoppingBag,
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200',
      hoverColor: 'hover:bg-green-100',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Mobile Commerce']
    },
    {
      slug: 'logistics',
      title: 'Logistics',
      description: 'Smart logistics solutions that optimize supply chains and streamline operations.',
      icon: Truck,
      color: 'bg-orange-50 text-orange-600',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:bg-orange-100',
      features: ['Warehouse Management', 'Fleet Tracking', 'Supply Chain Analytics', 'Route Optimization']
    },
    {
      slug: 'fintech',
      title: 'Fintech',
      description: 'Revolutionary fintech solutions that transform financial services and payments.',
      icon: Banknote,
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:bg-purple-100',
      features: ['Digital Banking', 'Payment Processing', 'Financial Analytics', 'Security & Compliance']
    }
  ]

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

    // Animate industry cards
    gsap.fromTo('.industry-card', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.industry-card',
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
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-7xl mx-auto animate-on-scroll">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Industry-Specific B2B SaaS Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">We build B2B SaaS websites</span>
                <span className="block">that people can&apos;t ignore</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Expert Web design and Webflow development agency to help you achieve your digital goals.
                We help startups and enterprises to scale and raise more. Your success is our code.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a 
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors text-center"
                  onMouseEnter={() => handleMouseEnter('Book Call')}
                  onMouseLeave={handleMouseLeave}
                >
                  Book an intro call
                </a>
                <a 
                  href="/portfolio"
                  className="text-gray-700 px-8 py-4 rounded-full text-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors text-center"
                  onMouseEnter={() => handleMouseEnter('View Work')}
                  onMouseLeave={handleMouseLeave}
                >
                  Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-gray-500 mr-2">✦</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Industries We Serve</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expertise Across Industries
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our deep industry knowledge and technical expertise enable us to deliver solutions 
                that drive real business value and competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <Link 
                  key={industry.slug} 
                  href={`/industries/${industry.slug}`}
                  className="industry-card group"
                  onMouseEnter={() => handleMouseEnter('Explore')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-sm border ${industry.borderColor} ${industry.hoverColor} transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 h-full`}>
                    <div className={`w-16 h-16 ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Proven Results Across Industries
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our industry-focused approach delivers measurable results that drive business growth and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Industry Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let&apos;s discuss how our industry-specific expertise can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Get Started')}
                  onMouseLeave={handleMouseLeave}
                >
                  Start Your Project
                </button>
                <button 
                  className="text-gray-700 px-8 py-4 rounded-full text-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Contact Us')}
                  onMouseLeave={handleMouseLeave}
                >
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}