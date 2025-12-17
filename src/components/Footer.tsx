'use client'

import { useState } from 'react'
import { Linkedin, Twitter, Instagram, Dribbble, ChevronDown } from 'lucide-react'
import CursorFollower from './CursorFollower'

export default function Footer() {
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

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="text-2xl font-bold text-primary">
                CODESAGE
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('LinkedIn')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Twitter')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Instagram')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Dribbble')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Dribbble className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Behance')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-4 h-4 text-white text-xs font-bold flex items-center justify-center">Be</div>
                </a>
              </div>
              
              {/* Address */}
              <div className="text-sm text-gray-600 space-y-1">
                <p>India, Rajajinagar, Bangalore,</p>
                <p>Karnataka, 560021</p>
              </div>
              
              {/* Contact */}
              <div className="text-sm text-gray-600 space-y-2">
                <p>+91 6377588643</p>
                <p>divyansh@codesage.com</p>
              </div>
              
              {/* Language Selector */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-sm text-gray-600 border border-gray-300 rounded px-3 py-2 hover:border-gray-400 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Select Language')}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>Language</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Web Design (UI/UX)</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Webflow Development</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Webflow SEO</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Webflow Migration</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Webflow Integration</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Webflow Support</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Growth Marketing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Conversion Rate Optimization (CRO)</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Branding</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Learn More')} onMouseLeave={handleMouseLeave}>Webflow Agency India</a></li>
              </ul>
            </div>
            
            {/* Industry */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Industry</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>B2B SaaS</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Artificial Intelligence</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Web3</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Information Technology</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Financial Services</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Healthcare</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>E-commerce</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Hospitality</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Gaming</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Startups</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Projects')} onMouseLeave={handleMouseLeave}>Enterprises</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Portfolio')} onMouseLeave={handleMouseLeave}>Portfolio</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Pricing')} onMouseLeave={handleMouseLeave}>Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Contact Us')} onMouseLeave={handleMouseLeave}>Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Resources')} onMouseLeave={handleMouseLeave}>Resources</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Read Blogs')} onMouseLeave={handleMouseLeave}>Blogs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Integration')} onMouseLeave={handleMouseLeave}>Integration</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('View Migrations')} onMouseLeave={handleMouseLeave}>Migrations</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors" onMouseEnter={() => handleMouseEnter('Join Our Team')} onMouseLeave={handleMouseLeave}>Careers</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <p>© 2025 CodeSage. All Rights Reserved.</p>
                <a 
                  href="https://codesage.com/email" 
                  className="hover:text-gray-900 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Send Email')}
                  onMouseLeave={handleMouseLeave}
                >
                  https://codesage.com/email
                </a>
              </div>
              <div className="flex space-x-6 text-sm text-gray-600">
                <a 
                  href="#" 
                  className="hover:text-gray-900 transition-colors"
                  onMouseEnter={() => handleMouseEnter('View Policy')}
                  onMouseLeave={handleMouseLeave}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="hover:text-gray-900 transition-colors"
                  onMouseEnter={() => handleMouseEnter('View Terms')}
                  onMouseLeave={handleMouseLeave}
                >
                  Terms & Conditions
                </a>
                <a 
                  href="#" 
                  className="hover:text-gray-900 transition-colors"
                  onMouseEnter={() => handleMouseEnter('View Sitemap')}
                  onMouseLeave={handleMouseLeave}
                >
                  Site Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}