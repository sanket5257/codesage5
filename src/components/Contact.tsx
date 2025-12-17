'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import CursorFollower from './CursorFollower'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const handleMouseEnter = (text: string) => {
    setCursorText(text)
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    setCursorText('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  useEffect(() => {
    gsap.fromTo('.contact-animate', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <section className="contact-section py-20 bg-black m-10 rounded-3xl text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="contact-animate flex items-center justify-center mb-4">
                <span className="text-sm text-gray-400 mr-2">✦</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Contact Us</span>
              </div>
              <h2 className="contact-animate text-4xl md:text-6xl font-bold mb-6">
                Let&apos;s start a project together
              </h2>
              <p className="contact-animate text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to transform your digital presence? Get in touch with our team and let&apos;s discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="contact-animate">
                <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">hello@codesage.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">+91 6377588643</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Rajajinagar, Bangalore, Karnataka, 560021</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                    <div className="text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-animate">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web-design">Web Design (UI/UX)</option>
                        <option value="webflow-development">Webflow Development</option>
                        <option value="webflow-seo">Webflow SEO</option>
                        <option value="webflow-migration">Webflow Migration</option>
                        <option value="growth-marketing">Growth Marketing</option>
                        <option value="branding">Branding</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                      onMouseEnter={() => handleMouseEnter('Send Message')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                    
                    <button
                      type="button"
                      className="flex-1 border border-gray-700 text-white px-8 py-4 rounded-lg font-medium hover:border-orange-500 hover:text-orange-500 transition-colors flex items-center justify-center space-x-2"
                      onMouseEnter={() => handleMouseEnter('Book Call')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ArrowRight className="w-5 h-5" />
                      <span>Book a Call</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}