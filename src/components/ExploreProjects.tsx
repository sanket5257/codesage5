'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CursorFollower from './CursorFollower'

gsap.registerPlugin(ScrollTrigger)

export default function ExploreProjects() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    gsap.fromTo('.explore-content', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: '.explore-section',
          start: 'top 80%',
        }
      }
    )
  }, [])

  const handleMouseEnter = (text: string) => {
    setCursorText(text)
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    setCursorText('')
  }

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <section className="explore-section py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-black min-h-[500px]">
              {/* Background Video */}
              <video 
                className="absolute inset-0 w-full h-full object-cover "
                autoPlay 
                muted 
                loop 
                playsInline
                onError={(e) => {
                  console.log('Background video failed to load')
                  // Hide video on error, show gradient fallback
                  e.currentTarget.style.display = 'none'
                }}
              >
                <source src="/videos/logo2.mp4" type="video/mp4" />
              </video>
              
              {/* Gradient Overlay */}
              
              {/* Fallback Background */}
              
              {/* Content */}
              <div className="relative z-10 flex items-center min-h-[300px] p-12">
                <div className="explore-content max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Explore all projects
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Join over 20+ startups already growing with us with premium UI/UX design and web development
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
                      onMouseEnter={() => handleMouseEnter('View Portfolio')}
                      onMouseLeave={handleMouseLeave}
                    >
                      Explore all projects
                    </button>
                    <button 
                      className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
                      onMouseEnter={() => handleMouseEnter('Get Started')}
                      onMouseLeave={handleMouseLeave}
                    >
                      Book a call
                    </button>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}