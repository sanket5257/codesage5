'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users } from 'lucide-react'
import Link from 'next/link'
import CursorFollower from './CursorFollower'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

 

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
      <section className="portfolio-section py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ★ Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Selected Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of exceptional web design and custom Webflow websites that drive results for businesses worldwide.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="max-w-7xl mx-auto space-y-16">
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
                    <span className="text-xl font-bold text-gray-900">Futurense</span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                      Increase in Site Performance Score from 39 to 92. Landing pages conversions increased by 27%.
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        EdTech
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        AI Upskilling
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Talent Development
                      </span>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-4xl font-bold text-gray-900">27%</span>
                      <span className="text-sm text-gray-600">increase in CVR</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Webflow Development
                      </span>
                      <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                        Landing Pages
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Video Panel */}
                <div className="relative bg-black">
                  {/* Actual Video */}
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onError={(e) => {
                      console.log('Video failed to load, showing fallback')
                      // Show fallback if video fails
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement
                      if (fallback) {
                        e.currentTarget.style.display = 'none'
                        fallback.style.display = 'flex'
                      }
                    }}
                  >
                    <source src="/videos/Futurense case study.webm" type="video/webm" />
                    <source src="/videos/futurense-case-study.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Fallback - Hidden by default, shown if video fails */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 items-center justify-center" style={{ display: 'none' }}>
                    <div className="w-full max-w-lg space-y-4">
                      {/* Top Website Preview */}
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-medium">Futurense Platform</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Row - Mobile and Dashboard */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Mobile View */}
                        <div className="bg-white rounded-lg p-3 shadow-lg">
                          <div className="space-y-2">
                            <div className="h-1 bg-purple-200 rounded w-full"></div>
                            <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-6 bg-purple-500 rounded"></div>
                            <div className="grid grid-cols-3 gap-1">
                              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Dashboard View */}
                        <div className="bg-gray-900 rounded-lg p-3 shadow-lg">
                          <div className="space-y-2">
                            <div className="h-1 bg-purple-400 rounded w-full"></div>
                            <div className="h-1 bg-blue-400 rounded w-3/4"></div>
                            <div className="h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded"></div>
                            <div className="flex justify-between text-xs">
                              <div className="text-purple-300">39</div>
                              <div className="text-blue-300">→</div>
                              <div className="text-green-300">92</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Video Overlay */}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>
              </div>
              </div>
            </Link>

            {/* Hopstack Case Study */}
            <Link href="/portfolio/hopstack">
              <div 
                className="portfolio-item bg-white rounded-3xl mt-10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Left Video Panel */}
                <div className="relative bg-black">
                  {/* Hopstack Video */}
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onError={(e) => {
                      console.log('Hopstack video failed to load, showing fallback')
                      // Show fallback if video fails
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement
                      if (fallback) {
                        e.currentTarget.style.display = 'none'
                        fallback.style.display = 'flex'
                      }
                    }}
                  >
                    <source src="/videos/Hopstack Showreel.webm" type="video/webm" />
                    <source src="/videos/hopstack-showreel.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Fallback - Hidden by default */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 items-center justify-center" style={{ display: 'none' }}>
                    <div className="w-full max-w-lg space-y-4">
                      {/* Hopstack Interface Mockup */}
                      <div className="bg-white rounded-lg p-4 shadow-xl">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-blue-200 rounded w-2/3"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-medium">Hopstack Platform</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Display */}
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold mb-1">266.4%</div>
                          <div className="text-sm opacity-75">Traffic Increase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Video Overlay */}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
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
                      Increase In Organic Traffic by 266.4% with new revamped webflow website. DA increased from 24 to 37 in 6 months.
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
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-3">
                      <span className="text-4xl font-bold text-gray-900">$2.7M</span>
                      <span className="text-sm text-gray-600">in funding</span>
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
          </div>
        </div>
      </section>
    </>
  )
}