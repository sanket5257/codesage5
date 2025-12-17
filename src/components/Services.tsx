'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Palette, 
  Code, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  Headphones 
} from 'lucide-react'
import CursorFollower from './CursorFollower'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

 

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Our expert Webflow design team create stunning, user-centered websites that drive conversions through strategic UI/UX design, ensuring your brand stands out.',
      tags: ['Web design', 'UX Research', 'Figma Design'],
      cursorText: 'Design'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Webflow Development',
      description: 'Transform your vision into reality with our expert Webflow development services. Our certified developers create responsive, scalable websites that perform.',
      tags: ['Webflow Design', 'Webflow Experts'],
      cursorText: 'Develop'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Webflow SEO',
      description: 'Boost your online visibility with our comprehensive Webflow SEO services, ensuring your website ranks and performs. Rank higher and grow faster with our expert SEO services.',
      tags: ['Webflow SEO', 'Link Building', 'Global SEO'],
      cursorText: 'Optimize'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Growth Marketing',
      description: 'Turn your Webflow website into a lead generating engine. We combine UX with data to boost conversions, maximize ROI, & grow your brand.',
      tags: ['A/B & Multivariate Testing', 'Funnels', 'Heatmaps', 'Landing Page Optimization', 'CRO Audits', 'UX Flows'],
      cursorText: 'Grow'
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: 'Webflow Migration',
      description: 'Smooth transitions guaranteed. Migrations from WordPress to Webflow, Squarespace to Webflow, and Wix to Webflow are our specialties.',
      tags: ['Migrate to Webflow', 'Wix to Webflow', 'WordPress to Webflow', 'Figma to Webflow'],
      cursorText: 'Migrate'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Webflow Maintenance and Support',
      description: 'We provide post launch updates, performance checks, and troubleshooting to keep your Webflow site secure and optimized.',
      tags: ['Webflow Maintenance', 'Webflow Support', '24/7 Support', 'Ongoing Support'],
      cursorText: 'Support'
    }
  ]

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
      <section id="services" className="services-section py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ★ Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solutions for your Digital Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer expert Webflow design, development, SEO, and support services—
              tailored to boost your website&apos;s performance, user experience, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(service.cursorText)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-gray-700 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}