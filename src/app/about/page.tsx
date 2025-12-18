'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Users, Award, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import CursorFollower from '@/components/CursorFollower'
import Testimonials from '@/components/Testimonials'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [expandedAward, setExpandedAward] = useState<number | null>(null)

  useEffect(() => {
    gsap.fromTo('.hero-content', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    )

    gsap.fromTo('.about-section', 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.about-sections',
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
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="hero-content text-center max-w-4xl mx-auto">
           
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We take pride in delivering<br />
              <span className="">Exceptional results</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We are a team of passionate designers and developers who believe great design starts with empathy and ends with impact. 
              Our approach is simple, taken clearly, done creatively, and built with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <div className="about-sections bg-gray-50">
        {/* Team Video Grid */}
        <section className="about-section py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Large Video - Futurense Case Study */}
              <div 
                className="aspect-square bg-black rounded-3xl overflow-hidden group cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter('View Case Study')}
                onMouseLeave={handleMouseLeave}
              >
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/videos/Futurense case study.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-semibold text-lg mb-1">Futurense Technologies</h3>
                  <p className="text-sm text-gray-200">EdTech Platform Design</p>
                </div>
              </div>

              {/* Small Videos Grid */}
              <div className="grid grid-rows-2 gap-6">
                {/* Hopstack Showreel */}
                <div 
                  className="bg-black rounded-3xl overflow-hidden group cursor-pointer relative"
                  onMouseEnter={() => handleMouseEnter('View Project')}
                  onMouseLeave={handleMouseLeave}
                >
                  <video 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/Hopstack Showreel.webm" type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">Hopstack</h3>
                    <p className="text-xs text-gray-200">SaaS Platform</p>
                  </div>
                </div>

                {/* Logo Animation */}
                <div 
                  className="bg-black rounded-3xl overflow-hidden group cursor-pointer relative"
                  onMouseEnter={() => handleMouseEnter('View Animation')}
                  onMouseLeave={handleMouseLeave}
                >
                  <video 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/logo2.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">Brand Identity</h3>
                    <p className="text-xs text-gray-200">Logo Animation</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </section>
        {/* Quote Section */}
        <section className="about-section py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-12 shadow-lg">
                <div className="text-primary text-4xl mb-4">&ldquo;</div>
                <p className="text-xl md:text-2xl font-medium mb-8 text-gray-900">
                  We believe great design starts with empathy and ends with impact. 
                  Our approach is simple, taken clearly, done creatively, and built with purpose.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex Johnson</p>
                    <p className="text-gray-600 text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="about-section py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              {/* <div className="text-sm text-gray-500 mb-2">// TEAM</div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our talented team of designers and developers who bring your vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Alexei Elder', role: 'Founder & CEO', img: 'photo-1500648767791-00dcc994a43e' },
                { name: 'Marcus Blue', role: 'Creative Director', img: 'photo-1472099645785-5658abf4ff4e' },
                { name: 'Olivia Anderson', role: 'Senior Designer', img: 'photo-1438761681033-6461ffad8d80' },
                { name: 'Amelia Grant', role: 'Lead Developer', img: 'photo-1494790108377-be9c29b29330' }
              ].map((member, idx) => (
                <div 
                  key={idx} 
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter('View Profile')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-gray-200 rounded-3xl overflow-hidden mb-4 aspect-square group-hover:shadow-lg transition-all duration-300">
                    <Image 
                      src={`https://images.unsplash.com/${member.img}?w=400&h=400&fit=crop`} 
                      alt={member.name} 
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="about-section py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              {/* <div className="text-sm text-gray-500 mb-2">// ACHIEVEMENTS</div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders worldwide.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { 
                  year: '2024', 
                  award: 'Best Design Agency Medalist', 
                  desc: 'Recognized for innovative design and creative problem-solving', 
                  icon: Award,
                  details: {
                    organization: 'International Design Awards',
                    category: 'Digital Agency Excellence',
                    achievement: 'Gold Medal Winner',
                    description: 'CodeSage was recognized among the top 1% of design agencies worldwide for our innovative approach to user experience design and creative problem-solving methodologies. This award highlights our commitment to pushing the boundaries of digital design.',
                    criteria: ['Innovation in Design Process', 'Client Satisfaction Scores', 'Creative Problem Solving', 'Technical Excellence']
                  }
                },
                { 
                  year: '2023', 
                  award: 'Quality UX Support Award', 
                  desc: 'Honored for delivering best in class experiences that prioritize user satisfaction', 
                  icon: Users,
                  details: {
                    organization: 'UX Design Institute',
                    category: 'Customer Experience Excellence',
                    achievement: 'Platinum Award',
                    description: 'This prestigious award recognizes our dedication to creating user-centered designs that consistently exceed client expectations. Our support team\'s commitment to ongoing client success has set new industry standards.',
                    criteria: ['User Satisfaction Metrics', '24/7 Support Quality', 'Response Time Excellence', 'Client Retention Rate']
                  }
                },
                { 
                  year: '2023', 
                  award: 'Motion Award Excellence in Animation', 
                  desc: 'Winning for most clean design work that elevated brand storytelling', 
                  icon: Zap,
                  details: {
                    organization: 'Motion Graphics Society',
                    category: 'Brand Animation & Storytelling',
                    achievement: 'Excellence Award',
                    description: 'Our motion design team was honored for creating compelling brand narratives through clean, purposeful animation. This award celebrates our ability to transform complex brand messages into engaging visual stories.',
                    criteria: ['Animation Quality', 'Brand Storytelling Impact', 'Technical Innovation', 'Creative Direction']
                  }
                },
                { 
                  year: '2021', 
                  award: 'Studio of the Year - Uaerfy Awards', 
                  desc: 'Recognized team service in creativity, strategy, thinking and award-winning', 
                  icon: Target,
                  details: {
                    organization: 'Uaerfy Creative Awards',
                    category: 'Overall Studio Excellence',
                    achievement: 'Studio of the Year',
                    description: 'The highest honor in creative excellence, recognizing CodeSage as the leading creative studio. This award encompasses our holistic approach to design, strategy, and client partnership across all service areas.',
                    criteria: ['Creative Excellence', 'Strategic Thinking', 'Team Collaboration', 'Industry Impact']
                  }
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div 
                    className="p-8 cursor-pointer group"
                    onClick={() => setExpandedAward(expandedAward === idx ? null : idx)}
                    onMouseEnter={() => handleMouseEnter('Click for Details')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.award}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl font-bold text-gray-300 group-hover:text-primary transition-colors">{item.year}</div>
                        <div className={`transform transition-transform duration-300 ${expandedAward === idx ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dropdown Content */}
                  {expandedAward === idx && (
                    <div className="px-8 pb-8 border-t border-gray-100 bg-gray-50">
                      <div className="pt-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Award Details</h4>
                            <div className="space-y-2 text-sm">
                              <p><span className="font-medium text-gray-700">Organization:</span> {item.details.organization}</p>
                              <p><span className="font-medium text-gray-700">Category:</span> {item.details.category}</p>
                              <p><span className="font-medium text-gray-700">Achievement:</span> {item.details.achievement}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Evaluation Criteria</h4>
                            <ul className="space-y-1 text-sm">
                              {item.details.criteria.map((criterion, criterionIdx) => (
                                <li key={criterionIdx} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {criterion}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">About This Award</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.details.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

      
      </div>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </>
  )
}