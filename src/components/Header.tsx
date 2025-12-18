'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { 
  ChevronDown, 
  Palette, 
  Code, 
  Search, 
  TrendingUp, 
  RefreshCw, 
  Headphones,
  Target,
  Zap,
  BarChart3,
  Menu,
  X,
  Heart,
  GraduationCap,
  ShoppingBag,
  Truck,
  Banknote
} from 'lucide-react'
import CursorFollower from './CursorFollower'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    gsap.fromTo('.header-animate', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])



  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMouseEnter = (dropdown: string, text: string) => {
    setActiveDropdown(dropdown)
    setCursorText(text)
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    // Don't close immediately, let the dropdown area handle it
    setShowCursor(false)
    setCursorText('')
  }

  const handleDropdownAreaMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Set a new timeout to close the dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setShowCursor(false)
      setCursorText('')
    }, 500)
  }

  const handleDropdownAreaMouseEnter = (dropdown: string, text: string) => {
    // Clear any pending timeout when re-entering
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    
    setActiveDropdown(dropdown)
    setCursorText(text)
    setShowCursor(true)
  }

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-animate">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/codesage.png"
                alt="CodeSage"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </a>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 header-animate">
            {/* Services Dropdown */}
            <div 
              className="relative dropdown-container py-2"
              onMouseEnter={() => handleDropdownAreaMouseEnter('services', 'What we do')}
              onMouseLeave={handleDropdownAreaMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors ${
                  activeDropdown === 'services' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[900px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      <a 
                        href="/services/ui-ux-design" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <Palette className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Web Design (UI/UX)</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Intuitive UI/UX for seamless user experience
                          </p>
                        </div>
                      </a>
                      
                      <a 
                        href="/services/webflow-development" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <Code className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Webflow Development</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Custom Webflow solutions tailored for your business needs
                          </p>
                        </div>
                      </a>
                      
                      <a 
                        href="/services/webflow-migration" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <RefreshCw className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Webflow Migration</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Smooth migration to Webflow from any platform
                          </p>
                        </div>
                      </a>
                    </div>
                      
                    {/* Column 2 */}
                    <div className="space-y-1">
                      <a 
                        href="/services/webflow-seo" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <Search className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Webflow SEO</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Rank high with effective Search engine optimization
                          </p>
                        </div>
                      </a>
                      
                      <a 
                        href="/services/webflow-support" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <Headphones className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Webflow Maintenance and Support</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            24×7 and reliable Webflow support + maintenance
                          </p>
                        </div>
                      </a>
                      
                      <a 
                        href="/services/webflow-integration" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <Target className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Webflow Integration</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Integrate Webflow with your existing marketing tools
                          </p>
                        </div>
                      </a>
                    </div>
                      
                    {/* Column 3 */}
                    <div className="space-y-1">
                      <a 
                        href="/services/growth-marketing" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Growth Marketing</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Skyrocket website performance, conversions, and ROI
                          </p>
                        </div>
                      </a>
                      
                      <a 
                        href="/services/conversion-optimization" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <Zap className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Conversion Rate Optimization</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Drastic CVR increase with conversion-focused landing pages
                          </p>
                        </div>
                      </a>
                      
                      <a 
                        href="/services/branding" 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                          <BarChart3 className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">Branding</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Memorable branding which includes logo, color, typography and more
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative dropdown-container py-2"
              onMouseEnter={() => handleDropdownAreaMouseEnter('industries', 'For who')}
              onMouseLeave={handleDropdownAreaMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors ${
                  activeDropdown === 'industries' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => handleDropdownToggle('industries')}
              >
                Industries
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'industries' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[400px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                  <div className="space-y-1">
                    <a 
                      href="/industries/healthcare" 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Healthcare</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Transform healthcare operations with powerful SaaS platforms
                        </p>
                      </div>
                    </a>
                    <a 
                      href="/industries/education" 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                        <GraduationCap className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Education</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Build powerful EdTech SaaS solutions that scale
                        </p>
                      </div>
                    </a>
                    <a 
                      href="/industries/ecommerce" 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                        <ShoppingBag className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">E-commerce</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Scalable e-commerce SaaS solutions that convert
                        </p>
                      </div>
                    </a>
                    <a 
                      href="/industries/logistics" 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                        <Truck className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Logistics</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Logistics SaaS platforms that optimize operations
                        </p>
                      </div>
                    </a>
                    <a 
                      href="/industries/fintech" 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mt-0.5">
                        <Banknote className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Fintech</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Fintech SaaS solutions that scale and secure
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/portfolio" 
              className="text-gray-700 hover:text-primary transition-colors"
              onMouseEnter={() => {
                setCursorText('Our work')
                setShowCursor(true)
              }}
              onMouseLeave={() => {
                setShowCursor(false)
                setCursorText('')
              }}
            >
              Portfolio
            </a>

            <a 
              href="/about" 
              className="text-gray-700 hover:text-primary transition-colors"
              onMouseEnter={() => {
                setCursorText('About us')
                setShowCursor(true)
              }}
              onMouseLeave={() => {
                setShowCursor(false)
                setCursorText('')
              }}
            >
              About
            </a>
          </nav>

          {/* Right side - Language and CTA */}
          <div className="hidden lg:flex items-center space-x-4 header-animate">
            <div 
              className="relative dropdown-container py-2"
              onMouseEnter={() => handleDropdownAreaMouseEnter('language', 'Language')}
              onMouseLeave={handleDropdownAreaMouseLeave}
            >
              <button 
                className={`flex items-center transition-colors ${
                  activeDropdown === 'language' ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => handleDropdownToggle('language')}
              >
                EN
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'language' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'language' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50">
                  <div className="space-y-1">
                    <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                      EN
                    </button>
                    <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                      ES
                    </button>
                    <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">
                      FR
                    </button>
                  </div>
                </div>
              )}
            </div>
            <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium inline-block">
              Book a call
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="/industries" className="text-gray-700 hover:text-primary transition-colors">Industries</a>
              <a href="/portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
              <a href="/about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium w-fit inline-block">
                Book a call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  )
}