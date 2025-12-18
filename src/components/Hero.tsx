'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll-triggered marquee direction animation
    if (marqueeRef.current) {
      // Base infinite animation - continuous left movement
      const baseAnimation = gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 30,
        ease: 'none',
        repeat: -1,
      })

      let scrollDirection = 0
      let lastScrollY = window.scrollY
      let scrollTimeout: NodeJS.Timeout

      // Track scroll direction
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        scrollDirection = currentScrollY > lastScrollY ? 1 : -1
        lastScrollY = currentScrollY

        // Clear existing timeout
        clearTimeout(scrollTimeout)
        
        // Reset to normal speed after scroll stops
        scrollTimeout = setTimeout(() => {
          gsap.to(baseAnimation, {
            timeScale: 1,
            duration: 1,
            ease: 'power2.out'
          })
        }, 150)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      // Direction change based on scroll
      ScrollTrigger.create({
        trigger: marqueeRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity())
          
          if (velocity > 50) {
            if (scrollDirection === -1) {
              // Scrolling up - reverse and speed up
              gsap.to(baseAnimation, {
                timeScale: -4,
                duration: 0.2,
                ease: 'power2.out'
              })
            } else if (scrollDirection === 1) {
              // Scrolling down - speed up more
              gsap.to(baseAnimation, {
                timeScale: 5,
                duration: 0.2,
                ease: 'power2.out'
              })
            }
          }
        }
      })

      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(scrollTimeout)
        baseAnimation.kill()
      }
    }
  }, [])

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-7xl mx-auto">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            New Revamped Site helped Hopstack raise $2.8M
            <span className="ml-2">View Case →</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Stunning Design &</span>
            <span className="block">Webflow Development</span>
            <span className="block">for Startups</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-600 mb-2">
              Expert Web design and Webflow development agency to help you achieve your digital goals.
            </p>
            <p className="text-xl text-gray-600">
              We help startups and enterprises to scale and raise more. Your success is our code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="/contact" 
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors text-center"
            >
              Book an intro call
            </a>
            <a 
              href="/portfolio" 
              className="text-gray-700 px-8 py-4 rounded-full text-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors text-center"
            >
              Our Work
            </a>
          </div>

          {/* Marquee Section */}
          <div className="mb-16">
            <div className="marquee-container">
              <div ref={marqueeRef} className="marquee-content flex space-x-8">
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/67fe72ebcc4ce3e2b6de98bb_Hopstack websitye.avif"
                    alt="Hopstack - B2B SaaS Warehouse Management Platform"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/67fe743567fd82b5831f84f2_Aureon Solutions Phone mockup.avif"
                    alt="Aureon Solutions - Mobile App Design"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/68172d9abca6ab3fb2e84f8f_Mockup 1.avif"
                    alt="Web Development Project - Modern Design"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/6818d94ac152217e4e19ffb8_Terra Studio tab.avif"
                    alt="Terra Studio - Tablet Design Interface"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/67fe72ebcc4ce3e2b6de98bb_Hopstack websitye.avif"
                    alt="Hopstack - B2B SaaS Warehouse Management Platform"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/67fe743567fd82b5831f84f2_Aureon Solutions Phone mockup.avif"
                    alt="Aureon Solutions - Mobile App Design"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/68172d9abca6ab3fb2e84f8f_Mockup 1.avif"
                    alt="Web Development Project - Modern Design"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="flex-shrink-0 w-96 h-64">
                  <Image
                    src="/images/6818d94ac152217e4e19ffb8_Terra Studio tab.avif"
                    alt="Terra Studio - Tablet Design Interface"
                    width={400}
                    height={300}
                    className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}