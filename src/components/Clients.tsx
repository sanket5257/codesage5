'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Building2, 
  Zap, 
  Mountain, 
  Users, 
  Layers, 
  Shield,
  Activity,
  Box,
  ShoppingBag,
  BarChart3,
  Target,
  Sparkles,
  Database,
  Globe,
  Cpu,
  Cloud,
  Truck,
  Plus
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Clients() {
  useEffect(() => {
    gsap.fromTo('.client-logo', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.clients-section',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section className="clients-section bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl text-gray-900 mb-8 leading-tight">
            Trusted by 20+ Startups and Enterprises for UX Design and Webflow Development
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          {/* First Row */}
          <div className="grid grid-cols-6 border-b border-gray-200">
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Building2 className="w-4 h-4" />
                <span className="font-bold text-sm">Hopstack</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Zap className="w-4 h-4" />
                <span className="font-bold text-sm">GoFIGR</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mountain className="w-4 h-4" />
                <span className="font-bold text-sm">TERRA</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span className="font-bold text-sm">Futurense</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Layers className="w-4 h-4" />
                <span className="font-bold text-sm">slicehm</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-4 h-4" />
                <span className="font-bold text-sm">MAHOJIN</span>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-6 border-b border-gray-200">
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Activity className="w-4 h-4" />
                <span className="font-bold text-sm">ACTION</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Box className="w-4 h-4" />
                <span className="font-bold text-sm">buiy</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <ShoppingBag className="w-4 h-4" />
                <span className="font-bold text-sm">ShopBox</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <BarChart3 className="w-4 h-4" />
                <span className="font-bold text-sm">monnai</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Target className="w-4 h-4" />
                <span className="font-bold text-sm">PROPEL</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold text-sm">Project Serotonin</span>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-6">
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Database className="w-4 h-4" />
                <span className="font-bold text-sm">bondable</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span className="font-bold text-sm">AsiaDebtHub</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Cpu className="w-4 h-4" />
                <span className="font-bold text-sm">AUREON</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Cloud className="w-4 h-4" />
                <span className="font-bold text-sm">SORISE</span>
              </div>
            </div>
            <div className="client-logo flex items-center justify-center py-6 border-r border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <Truck className="w-4 h-4" />
                <span className="font-bold text-sm">VROOMMEDIA</span>
              </div>
            </div>
            {/* Your Logo Section */}
            <div className="client-logo flex items-center justify-center py-6">
              <div className="inline-flex items-center border-2 border-dashed border-primary px-3 py-2 rounded-lg">
                <span className="text-primary font-bold text-sm mr-1">Your Logo</span>
                <Plus className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}