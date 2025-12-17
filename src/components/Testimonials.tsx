'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: "Kaim Kyell Seo",
    position: "Cofounder, Mahojin",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Mahojin's landing page work was completed with a sense of responsibility despite the tight timeline and demanding requirements. He successfully directed the design, 3D work, and development, and communicated responsively with us as the client, which allowed us to successfully launch the landing page on time."
  },
  {
    id: 2,
    name: "Helena Turpin",
    position: "Co-Founder, GoTiGR",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    text: "We recently engaged Divyansh to migrate our website to Webflow, he was responsive and worked hard to get everything over the line. The final result is a functional and visually clean site with improved responsiveness and SEO, and we appreciate the effort that went into making the transition as smooth as possible. Overall, we're happy to have made the move."
  },
  {
    id: 3,
    name: "Anurag Singh",
    position: "Senior Product Marketing Manager, Hopstack",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "I had the pleasure of working with Divyansh on our website revamp project at Hopstack, and I can confidently say that he is exceptional at what he does. His design thinking is top-notch, allowing us to achieve a clean, modern, and highly functional website."
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    position: "Marketing Director, TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Working with CodeSage was a game-changer for our business. Their attention to detail and innovative approach helped us create a website that truly represents our brand and converts visitors into customers. The team's expertise in Webflow development is outstanding, and they delivered beyond our expectations."
  },
  {
    id: 5,
    name: "Michael Chen",
    position: "CEO, InnovateHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "The team at CodeSage transformed our outdated website into a modern, high-performing platform. Their strategic approach to design and development resulted in a 40% increase in our conversion rates. Professional, reliable, and highly skilled - I couldn't recommend them more highly."
  }
]

// Extract avatars from testimonials
const avatars = testimonials.map(testimonial => testimonial.image)

export default function Testimonials() {
  const testimonialMarqueeRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!testimonialMarqueeRef.current) return

    const testimonialMarquee = testimonialMarqueeRef.current.querySelector('.testimonial-marquee') as HTMLElement
    
    if (!testimonialMarquee) return

    const cards = testimonialMarquee.querySelectorAll('div[class*="flex-shrink-0"]')
    
    // Function to update card styles based on position
    const updateCardStyles = () => {
      const containerRect = testimonialMarqueeRef.current!.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2
      
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distanceFromCenter = Math.abs(cardCenter - containerCenter)
        const maxDistance = containerRect.width / 2
        const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1)
        
        const isCenter = distanceFromCenter < 100 // Within 100px of center
        const opacity = isCenter ? 1 : Math.max(0.3, 1 - normalizedDistance)
        const scale = isCenter ? 1.05 : 0.95
        
        // Update styles
        gsap.set(card, {
          opacity: opacity,
          scale: scale
        })
        
        // Update border
        if (isCenter) {
          card.classList.remove('border-gray-200')
          card.classList.add('border-2', 'border-orange-400', 'shadow-lg')
        } else {
          card.classList.remove('border-2', 'border-orange-400', 'shadow-lg')
          card.classList.add('border', 'border-gray-200')
        }
      })
    }

    // Create infinite scroll animation for testimonials only
    const testimonialTl = gsap.timeline({ 
      repeat: -1,
      onUpdate: updateCardStyles
    })
    
    // Testimonial marquee animation - animate to show one full cycle
    testimonialTl.to(testimonialMarquee, {
      x: '-33.33%', // Move by 1/3 since we have 3 sets of testimonials (5 testimonials × 3 = 15 total)
      duration: 15, // Faster animation - reduced from 45 to 15 seconds
      ease: 'none'
    })

    // Initial update
    updateCardStyles()

    // Scroll-triggered speed changes
    let scrollTriggerInstance: ScrollTrigger | null = null

    if (containerRef.current) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity()
          const speedMultiplier = Math.abs(velocity) * 0.0002
          
          if (velocity > 0) {
            // Scrolling down - move left faster
            gsap.to(testimonialTl, { timeScale: 1 + speedMultiplier, duration: 0.3 })
          } else if (velocity < 0) {
            // Scrolling up - move right (reverse)
            gsap.to(testimonialTl, { timeScale: -1 - speedMultiplier, duration: 0.3 })
          } else {
            // No scroll - normal speed
            gsap.to(testimonialTl, { timeScale: 1, duration: 0.3 })
          }
        }
      })
    }

    return () => {
      testimonialTl.kill()
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill()
      }
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <span className="text-sm text-gray-500 mr-2">✦</span>
          <span className="text-sm text-gray-500 uppercase tracking-wider">Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our happy partners
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from clients who&apos;ve experienced remarkable transformations with Webyansh.
        </p>
      </div>

      {/* Static Avatar Display */}
      <div className="flex justify-center items-center space-x-3 mb-16 flex-wrap">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md"
          >
            <img
              src={avatar}
              alt={testimonials[index].name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Testimonial Cards Marquee */}
      <div ref={testimonialMarqueeRef} className="relative overflow-hidden">
        <div className="testimonial-marquee flex space-x-6 will-change-transform justify-center">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced fade edges for testimonials */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}