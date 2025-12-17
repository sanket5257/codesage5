'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { notFound } from 'next/navigation'
import { 
  BarChart3, 
  Puzzle, 
  TrendingUp, 
  Smartphone, 
  Smile, 
  Grid3X3,
  Palette,
  Monitor,
  Zap,
  Search,
  Target,
  Users,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code,
  RefreshCw,
  Headphones,
  Building2,
  Mountain,
  Layers,
  Shield,
  Activity,
  Box,
  ShoppingBag,
  Sparkles,
  Database,
  Globe,
  Cpu,
  Cloud,
  Truck,
  Plus
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'

gsap.registerPlugin(ScrollTrigger)

// Service data configuration
const servicesData = {
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Stunning UI/UX Design That Drives Results',
    description: 'At CodeSage, we create seamless and captivating UI/UX designs that enhance user interaction and elevate your brand. As a top-rated design agency, our custom, responsive designs are built to engage your audience and boost conversions across all devices.',
    heroVideo: '/videos/logo.mp4',
    badge: 'Hopstack raise $12.5M View Case →',
    features: [
      {
        icon: BarChart3,
        title: "Data-Driven Design Decisions",
        description: "Every design choice is backed by user research and analytics, ensuring your digital product meets real user needs and business objectives.",
        tags: ["User Research", "Information Architecture"]
      },
      {
        icon: Puzzle,
        title: "End-to-End Excellence",
        description: "From initial concept to final implementation, we handle every aspect of the UI/UX design process with meticulous attention to detail.",
        tags: ["User Flow", "Responsive UI Design"]
      },
      {
        icon: TrendingUp,
        title: "Industry-Leading Expertise",
        description: "Our team brings years of experience in creating award-winning designs for diverse industries and complex challenges.",
        tags: ["Interactive Design", "Usability Testing"]
      },
      {
        icon: Smartphone,
        title: "Mobile-Friendly & Responsive",
        description: "Ensure your website looks stunning on all devices, from smartphones to desktops.",
        tags: ["Responsive Design", "Cross-platform Consistency"]
      },
      {
        icon: Smile,
        title: "Enhanced User Experience",
        description: "By focusing on intuitive navigation & seamless UI, we help you deliver a frictionless user journey that keeps customers coming back.",
        tags: ["UX design", "Micro-interactions"]
      },
      {
        icon: Grid3X3,
        title: "Pixel-Perfect UI design",
        description: "We make sure your website reflects the story of your brand by designing a pixel-perfect responsive web design.",
        tags: ["UI design", "Visual design"]
      }
    ],
    services: [
      {
        icon: Palette,
        title: "Custom UI/UX Design",
        description: "Our expert web designers craft unique, user-friendly interfaces that ensure seamless navigation and engaging UX.",
        tags: ["UI design", "UX design", "Web accessibility"]
      },
      {
        icon: Monitor,
        title: "Responsive Web Design",
        description: "We prioritize mobile-first, fully responsive designs, ensuring your website performs flawlessly on every device.",
        tags: ["Responsive website", "Mobile-first design"]
      },
      {
        icon: Zap,
        title: "High-Converting Landing Pages",
        description: "We design high-converting landing pages to convert visitors to paying customers. Increase your conversion rates now!",
        tags: ["A/B Testing", "Landing Page Optimization"]
      }
    ]
  },
  'webflow-development': {
    title: 'Webflow Development',
    subtitle: 'Professional Webflow Development Services',
    description: 'Transform your designs into powerful, responsive websites with our expert Webflow development services. We create custom, scalable solutions that are easy to manage and optimized for performance.',
    heroVideo: '/videos/Futurense case study.webm',
    badge: 'Custom Webflow Solutions',
    features: [
      {
        icon: Code,
        title: "Custom Webflow Development",
        description: "We build custom Webflow websites tailored to your specific business needs and brand requirements.",
        tags: ["Custom Development", "Webflow CMS"]
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Our Webflow sites are optimized for speed, SEO, and user experience to ensure maximum performance.",
        tags: ["Speed Optimization", "SEO Ready"]
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Every Webflow site we build is fully responsive and works perfectly across all devices and screen sizes.",
        tags: ["Mobile Responsive", "Cross-browser Compatible"]
      },
      {
        icon: Target,
        title: "CMS Integration",
        description: "We set up powerful content management systems that make it easy for you to update and manage your website.",
        tags: ["Webflow CMS", "Content Management"]
      },
      {
        icon: Search,
        title: "SEO Optimization",
        description: "Built-in SEO best practices ensure your Webflow site ranks well in search engines from day one.",
        tags: ["Technical SEO", "On-page SEO"]
      },
      {
        icon: Users,
        title: "Third-party Integrations",
        description: "Seamlessly integrate your Webflow site with marketing tools, analytics, and business applications.",
        tags: ["API Integration", "Marketing Tools"]
      }
    ],
    services: [
      {
        icon: Code,
        title: "Custom Webflow Sites",
        description: "Build unique, custom Webflow websites that perfectly match your brand and business requirements.",
        tags: ["Custom Development", "Brand Alignment"]
      },
      {
        icon: RefreshCw,
        title: "Webflow Migrations",
        description: "Migrate your existing website to Webflow with zero downtime and improved performance.",
        tags: ["Platform Migration", "Data Transfer"]
      },
      {
        icon: Headphones,
        title: "Ongoing Support",
        description: "Get continuous support and maintenance to keep your Webflow site running smoothly.",
        tags: ["24/7 Support", "Regular Updates"]
      }
    ]
  },
  'webflow-seo': {
    title: 'Webflow SEO',
    subtitle: 'Webflow SEO Services That Drive Traffic',
    description: 'Boost your Webflow website\'s search engine rankings with our comprehensive SEO services. We optimize every aspect of your site to increase visibility and drive organic traffic.',
    heroVideo: '/videos/Hopstack Showreel.webm',
    badge: 'Rank Higher on Google',
    features: [
      {
        icon: Search,
        title: "Technical SEO Optimization",
        description: "We optimize your Webflow site's technical foundation for better search engine crawling and indexing.",
        tags: ["Site Speed", "Core Web Vitals"]
      },
      {
        icon: BarChart3,
        title: "Keyword Research & Strategy",
        description: "Comprehensive keyword research to target the right terms that your audience is searching for.",
        tags: ["Keyword Analysis", "Competitor Research"]
      },
      {
        icon: Target,
        title: "On-Page SEO",
        description: "Optimize every page element including meta tags, headers, and content structure for maximum SEO impact.",
        tags: ["Meta Optimization", "Content Structure"]
      },
      {
        icon: TrendingUp,
        title: "Performance Monitoring",
        description: "Track your SEO progress with detailed analytics and regular performance reports.",
        tags: ["Analytics Setup", "Performance Reports"]
      },
      {
        icon: Puzzle,
        title: "Content Optimization",
        description: "Optimize your content for both users and search engines to improve rankings and engagement.",
        tags: ["Content Strategy", "User Intent"]
      },
      {
        icon: Zap,
        title: "Local SEO",
        description: "Dominate local search results with targeted local SEO strategies for your business.",
        tags: ["Google My Business", "Local Citations"]
      }
    ],
    services: [
      {
        icon: Search,
        title: "SEO Audit & Strategy",
        description: "Comprehensive SEO audit and custom strategy development for your Webflow website.",
        tags: ["SEO Audit", "Strategy Planning"]
      },
      {
        icon: BarChart3,
        title: "Ongoing SEO Management",
        description: "Monthly SEO management including content optimization, link building, and performance monitoring.",
        tags: ["Monthly Reports", "Continuous Optimization"]
      },
      {
        icon: Target,
        title: "Local SEO Services",
        description: "Specialized local SEO services to help your business dominate local search results.",
        tags: ["Local Rankings", "Google My Business"]
      }
    ]
  },
  'growth-marketing': {
    title: 'Growth Marketing',
    subtitle: 'Data-Driven Growth Marketing That Scales',
    description: 'Accelerate your business growth with our comprehensive growth marketing strategies. We use data-driven approaches to optimize every aspect of your marketing funnel and drive sustainable growth.',
    heroVideo: '/videos/logo.mp4',
    badge: 'Scale Your Business',
    features: [
      {
        icon: TrendingUp,
        title: "Growth Strategy Development",
        description: "Develop comprehensive growth strategies based on data analysis and market research.",
        tags: ["Growth Planning", "Market Analysis"]
      },
      {
        icon: BarChart3,
        title: "Conversion Rate Optimization",
        description: "Optimize your conversion funnel to maximize the value of every visitor and lead.",
        tags: ["A/B Testing", "Funnel Optimization"]
      },
      {
        icon: Target,
        title: "Performance Marketing",
        description: "Run high-performing paid campaigns across multiple channels to drive qualified traffic.",
        tags: ["PPC Management", "Social Media Ads"]
      },
      {
        icon: Users,
        title: "Customer Acquisition",
        description: "Implement proven strategies to acquire high-quality customers at scale.",
        tags: ["Lead Generation", "Customer Journey"]
      },
      {
        icon: Zap,
        title: "Marketing Automation",
        description: "Set up automated marketing systems that nurture leads and drive conversions 24/7.",
        tags: ["Email Automation", "Lead Nurturing"]
      },
      {
        icon: Search,
        title: "Analytics & Reporting",
        description: "Track and measure every aspect of your growth marketing efforts with detailed analytics.",
        tags: ["Performance Tracking", "ROI Analysis"]
      }
    ],
    services: [
      {
        icon: TrendingUp,
        title: "Growth Strategy Consulting",
        description: "Strategic consulting to identify growth opportunities and develop actionable plans.",
        tags: ["Strategy Development", "Growth Planning"]
      },
      {
        icon: Target,
        title: "Paid Advertising Management",
        description: "Full-service management of your paid advertising campaigns across all major platforms.",
        tags: ["Google Ads", "Facebook Ads", "LinkedIn Ads"]
      },
      {
        icon: BarChart3,
        title: "Conversion Optimization",
        description: "Systematic optimization of your website and landing pages to maximize conversions.",
        tags: ["CRO", "Landing Page Testing"]
      }
    ]
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Build a Brand That Stands Out',
    description: 'Create a memorable brand identity that resonates with your audience and drives business growth. Our comprehensive branding services cover everything from logo design to brand strategy.',
    heroVideo: '/videos/Futurense case study.webm',
    badge: 'Brand Identity Design',
    features: [
      {
        icon: Palette,
        title: "Brand Identity Design",
        description: "Create a cohesive visual identity that reflects your brand values and appeals to your target audience.",
        tags: ["Logo Design", "Visual Identity"]
      },
      {
        icon: Target,
        title: "Brand Strategy",
        description: "Develop a comprehensive brand strategy that positions your business for success in the market.",
        tags: ["Brand Positioning", "Market Research"]
      },
      {
        icon: Grid3X3,
        title: "Brand Guidelines",
        description: "Establish clear brand guidelines to ensure consistency across all touchpoints and communications.",
        tags: ["Style Guide", "Brand Standards"]
      },
      {
        icon: Users,
        title: "Brand Messaging",
        description: "Craft compelling brand messaging that communicates your value proposition effectively.",
        tags: ["Messaging Framework", "Tone of Voice"]
      },
      {
        icon: Monitor,
        title: "Digital Brand Assets",
        description: "Create digital brand assets optimized for web, social media, and digital marketing.",
        tags: ["Digital Assets", "Social Media Kit"]
      },
      {
        icon: TrendingUp,
        title: "Brand Evolution",
        description: "Evolve and refresh your existing brand to stay relevant and competitive in the market.",
        tags: ["Brand Refresh", "Rebranding"]
      }
    ],
    services: [
      {
        icon: Palette,
        title: "Complete Brand Identity",
        description: "Full brand identity package including logo, colors, typography, and visual elements.",
        tags: ["Logo Design", "Brand Kit"]
      },
      {
        icon: Target,
        title: "Brand Strategy & Positioning",
        description: "Strategic brand development to position your business effectively in the market.",
        tags: ["Brand Strategy", "Competitive Analysis"]
      },
      {
        icon: Grid3X3,
        title: "Brand Guidelines & Assets",
        description: "Comprehensive brand guidelines and asset library for consistent brand application.",
        tags: ["Brand Bible", "Asset Library"]
      }
    ]
  },
  'webflow-migration': {
    title: 'Webflow Migration',
    subtitle: 'Seamless Webflow Migration Services',
    description: 'Migrate your existing website to Webflow with zero downtime and improved performance. Our expert team ensures a smooth transition while preserving your SEO rankings and user experience.',
    heroVideo: '/videos/Hopstack Showreel.webm',
    badge: 'Zero Downtime Migration',
    features: [
      {
        icon: RefreshCw,
        title: "Platform Migration Expertise",
        description: "Expert migration from any platform to Webflow with careful attention to preserving your existing content and structure.",
        tags: ["WordPress Migration", "Shopify Migration"]
      },
      {
        icon: Shield,
        title: "SEO Preservation",
        description: "Maintain your search engine rankings with proper redirects and SEO-friendly migration practices.",
        tags: ["301 Redirects", "SEO Maintenance"]
      },
      {
        icon: Zap,
        title: "Performance Improvement",
        description: "Experience faster loading times and better performance after migrating to Webflow's optimized platform.",
        tags: ["Speed Optimization", "Performance Boost"]
      },
      {
        icon: Database,
        title: "Content Migration",
        description: "Safely transfer all your content, images, and data to Webflow with complete accuracy.",
        tags: ["Content Transfer", "Data Integrity"]
      },
      {
        icon: Target,
        title: "Design Enhancement",
        description: "Improve your website's design and user experience during the migration process.",
        tags: ["Design Upgrade", "UX Improvement"]
      },
      {
        icon: Users,
        title: "Training & Support",
        description: "Get comprehensive training on managing your new Webflow site with ongoing support.",
        tags: ["User Training", "Documentation"]
      }
    ],
    services: [
      {
        icon: RefreshCw,
        title: "Complete Website Migration",
        description: "Full-service migration of your entire website to Webflow with zero data loss.",
        tags: ["Full Migration", "Data Preservation"]
      },
      {
        icon: Search,
        title: "SEO-Safe Migration",
        description: "Migration process that preserves your search engine rankings and organic traffic.",
        tags: ["SEO Preservation", "Ranking Protection"]
      },
      {
        icon: Headphones,
        title: "Post-Migration Support",
        description: "Ongoing support and optimization after your migration is complete.",
        tags: ["Ongoing Support", "Performance Monitoring"]
      }
    ]
  },
  'webflow-support': {
    title: 'Webflow Support',
    subtitle: '24/7 Webflow Maintenance & Support',
    description: 'Keep your Webflow website running smoothly with our comprehensive maintenance and support services. From regular updates to emergency fixes, we\'ve got you covered.',
    heroVideo: '/videos/logo.mp4',
    badge: '24/7 Support Available',
    features: [
      {
        icon: Headphones,
        title: "24/7 Technical Support",
        description: "Round-the-clock technical support to resolve any issues with your Webflow website quickly.",
        tags: ["24/7 Support", "Emergency Response"]
      },
      {
        icon: Shield,
        title: "Regular Maintenance",
        description: "Proactive maintenance to keep your website secure, updated, and performing at its best.",
        tags: ["Security Updates", "Performance Monitoring"]
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Continuous optimization to ensure your website loads fast and provides excellent user experience.",
        tags: ["Speed Optimization", "Core Web Vitals"]
      },
      {
        icon: Database,
        title: "Content Management",
        description: "Help with content updates, additions, and management of your Webflow CMS.",
        tags: ["Content Updates", "CMS Management"]
      },
      {
        icon: Search,
        title: "SEO Monitoring",
        description: "Regular SEO health checks and optimizations to maintain your search engine rankings.",
        tags: ["SEO Monitoring", "Ranking Maintenance"]
      },
      {
        icon: Target,
        title: "Bug Fixes & Updates",
        description: "Quick resolution of any bugs or issues, plus regular updates to keep your site current.",
        tags: ["Bug Fixes", "Regular Updates"]
      }
    ],
    services: [
      {
        icon: Headphones,
        title: "Monthly Maintenance Plans",
        description: "Comprehensive monthly maintenance packages to keep your Webflow site in perfect condition.",
        tags: ["Monthly Plans", "Proactive Care"]
      },
      {
        icon: Zap,
        title: "Emergency Support",
        description: "Immediate response for critical issues that need urgent attention.",
        tags: ["Emergency Response", "Critical Support"]
      },
      {
        icon: Users,
        title: "Training & Consultation",
        description: "Training sessions and consultation to help you get the most out of your Webflow website.",
        tags: ["User Training", "Best Practices"]
      }
    ]
  },
  'webflow-integration': {
    title: 'Webflow Integration',
    subtitle: 'Powerful Webflow Integrations',
    description: 'Connect your Webflow website with your favorite tools and services. From marketing automation to analytics, we integrate everything you need for business success.',
    heroVideo: '/videos/Futurense case study.webm',
    badge: 'Seamless Integrations',
    features: [
      {
        icon: Target,
        title: "Marketing Tool Integration",
        description: "Connect your Webflow site with marketing tools like HubSpot, Mailchimp, and Salesforce.",
        tags: ["CRM Integration", "Email Marketing"]
      },
      {
        icon: BarChart3,
        title: "Analytics Integration",
        description: "Set up comprehensive analytics with Google Analytics, Hotjar, and other tracking tools.",
        tags: ["Google Analytics", "Conversion Tracking"]
      },
      {
        icon: Zap,
        title: "E-commerce Integration",
        description: "Integrate payment gateways, inventory management, and e-commerce tools with your Webflow site.",
        tags: ["Payment Gateways", "E-commerce Tools"]
      },
      {
        icon: Users,
        title: "Social Media Integration",
        description: "Connect your social media accounts and enable social sharing across your website.",
        tags: ["Social Sharing", "Social Login"]
      },
      {
        icon: Database,
        title: "API Integrations",
        description: "Custom API integrations to connect Webflow with any third-party service or internal system.",
        tags: ["Custom APIs", "Data Sync"]
      },
      {
        icon: Search,
        title: "SEO Tool Integration",
        description: "Integrate SEO tools like SEMrush, Ahrefs, and Google Search Console for better optimization.",
        tags: ["SEO Tools", "Search Console"]
      }
    ],
    services: [
      {
        icon: Target,
        title: "Marketing Automation Setup",
        description: "Complete setup of marketing automation tools and workflows for your Webflow site.",
        tags: ["Automation Setup", "Workflow Creation"]
      },
      {
        icon: BarChart3,
        title: "Analytics & Tracking",
        description: "Comprehensive analytics setup with conversion tracking and performance monitoring.",
        tags: ["Analytics Setup", "Performance Tracking"]
      },
      {
        icon: Database,
        title: "Custom API Development",
        description: "Custom API development and integration for unique business requirements.",
        tags: ["Custom Development", "API Creation"]
      }
    ]
  },
  'conversion-optimization': {
    title: 'Conversion Rate Optimization',
    subtitle: 'Boost Your Conversion Rates',
    description: 'Maximize your website\'s potential with data-driven conversion rate optimization. We use advanced testing and analytics to turn more visitors into customers.',
    heroVideo: '/videos/Hopstack Showreel.webm',
    badge: 'Increase Conversions',
    features: [
      {
        icon: Zap,
        title: "A/B Testing",
        description: "Systematic A/B testing to identify the highest-converting elements on your website.",
        tags: ["Split Testing", "Statistical Analysis"]
      },
      {
        icon: BarChart3,
        title: "Analytics & Data Analysis",
        description: "Deep dive into your website analytics to identify conversion bottlenecks and opportunities.",
        tags: ["Data Analysis", "User Behavior"]
      },
      {
        icon: Target,
        title: "Landing Page Optimization",
        description: "Optimize your landing pages for maximum conversion rates and better user experience.",
        tags: ["Landing Pages", "Conversion Funnels"]
      },
      {
        icon: Users,
        title: "User Experience Testing",
        description: "Comprehensive UX testing to identify and fix usability issues that hurt conversions.",
        tags: ["UX Testing", "Usability Analysis"]
      },
      {
        icon: Search,
        title: "Conversion Funnel Analysis",
        description: "Analyze your entire conversion funnel to identify drop-off points and optimization opportunities.",
        tags: ["Funnel Analysis", "Drop-off Points"]
      },
      {
        icon: TrendingUp,
        title: "Performance Monitoring",
        description: "Continuous monitoring and optimization to maintain and improve conversion rates over time.",
        tags: ["Performance Tracking", "Continuous Improvement"]
      }
    ],
    services: [
      {
        icon: Zap,
        title: "CRO Audit & Strategy",
        description: "Comprehensive conversion rate optimization audit and strategic improvement plan.",
        tags: ["CRO Audit", "Strategy Development"]
      },
      {
        icon: Target,
        title: "Landing Page Testing",
        description: "Systematic testing and optimization of your landing pages for maximum conversions.",
        tags: ["Page Testing", "Conversion Optimization"]
      },
      {
        icon: BarChart3,
        title: "Ongoing CRO Management",
        description: "Monthly CRO management with continuous testing and optimization.",
        tags: ["Monthly Management", "Continuous Testing"]
      }
    ]
  }
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const [cursorText, setCursorText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0)

  const serviceData = servicesData[params.slug as keyof typeof servicesData]

  if (!serviceData) {
    notFound()
  }

  const handleMouseEnter = (text: string) => {
    setCursorText(text)
    setShowCursor(true)
  }

  const handleMouseLeave = () => {
    setShowCursor(false)
    setCursorText('')
  }

  const portfolioItems = [
    {
      title: "Futurense Technologies",
      description: "Futurense // stands as a leading force in India's EdTech landscape, specifically focused on AI-skilling and talent development.",
      image: "/videos/Futurense case study.webm",
      tags: ["EdTech", "AI Skilling", "Talent Development"],
      isVideo: true
    },
    {
      title: "Hopstack",
      description: "Hopstack // B2B SaaS platform for warehouse management and operations.",
      image: "/videos/Hopstack Showreel.webm",
      tags: ["B2B SaaS", "Warehouse", "Operations"],
      isVideo: true
    }
  ]



  const nextPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  useEffect(() => {
    // Animate sections on scroll
    gsap.fromTo('.animate-on-scroll', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.animate-on-scroll',
          start: 'top 80%',
        }
      }
    )

    // Animate client logos
    gsap.fromTo('.client-logo', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.client-logo',
          start: 'top 80%',
        }
      }
    )


  }, [])

  return (
    <>
      <CursorFollower text={cursorText} isVisible={showCursor} />
      <Header />
      
      <main className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <div className="mb-6">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {serviceData.badge}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {serviceData.subtitle}
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {serviceData.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="bg-orange-500 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors"
                    onMouseEnter={() => handleMouseEnter('Book Call')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Book an intro call
                  </button>
                  <button 
                    className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-gray-400 transition-colors"
                    onMouseEnter={() => handleMouseEnter('View Work')}
                    onMouseLeave={handleMouseLeave}
                  >
                    Our work
                  </button>
                </div>
              </div>
              
              <div className="animate-on-scroll relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <video
                    src={serviceData.heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-gray-500 mr-2">✦</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Why US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose us for {serviceData.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our data-driven strategies boost customer satisfaction and conversion rates by delivering user-focused, optimized solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.features.map((feature, index) => (
                <div key={index} className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Some of our recent work
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Explore our portfolio of exceptional {serviceData.title.toLowerCase()} projects that drive results for businesses worldwide.
                </p>
                <button 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors"
                  onMouseEnter={() => handleMouseEnter('View All')}
                  onMouseLeave={handleMouseLeave}
                >
                  Explore All Projects
                </button>
                
                <div className="flex space-x-4 mt-8">
                  <button 
                    onClick={prevPortfolio}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    onMouseEnter={() => handleMouseEnter('Previous')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextPortfolio}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    onMouseEnter={() => handleMouseEnter('Next')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="bg-gray-900 rounded-2xl p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{portfolioItems[currentPortfolioIndex].title}</h3>
                    <div className="flex space-x-2 mb-4">
                      {portfolioItems[currentPortfolioIndex].tags.map((tag, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg h-48 mb-6 overflow-hidden">
                    {portfolioItems[currentPortfolioIndex].isVideo ? (
                      <video
                        src={portfolioItems[currentPortfolioIndex].image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src={portfolioItems[currentPortfolioIndex].image}
                        alt={portfolioItems[currentPortfolioIndex].title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <p className="text-gray-300 mb-6">
                    {portfolioItems[currentPortfolioIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm text-gray-500 mr-2">✦</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">{serviceData.title} Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our {serviceData.title} Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive {serviceData.title.toLowerCase()} solutions designed to help your business grow and succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.services.map((service, index) => (
                <div key={index} className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Brands Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-xl text-gray-900 mb-8 leading-tight">
                Trusted by 20+ Startups and Enterprises for {serviceData.title} Services
              </h2>
            </div>

            {/* Client Logos Grid */}
            <div className="animate-on-scroll max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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
      </main>
      
      <Footer />
    </>
  )
}

