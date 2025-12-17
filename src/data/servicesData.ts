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
  Code,
  RefreshCw,
  Headphones,
  Database,
  LucideIcon
} from 'lucide-react'

export interface ServiceFeature {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface ServiceData {
  title: string
  subtitle: string
  description: string
  heroVideo: string
  badge: string
  features: ServiceFeature[]
  services: ServiceItem[]
}

export const servicesData: Record<string, ServiceData> = {
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
    description: 'Boost your Webflow website&apos;s search engine rankings with our comprehensive SEO services. We optimize every aspect of your site to increase visibility and drive organic traffic.',
    heroVideo: '/videos/Hopstack Showreel.webm',
    badge: 'Rank Higher on Google',
    features: [
      {
        icon: Search,
        title: "Technical SEO Optimization",
        description: "We optimize your Webflow site&apos;s technical foundation for better search engine crawling and indexing.",
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
        icon: Search,
        title: "SEO Preservation",
        description: "Maintain your search engine rankings with proper redirects and SEO-friendly migration practices.",
        tags: ["301 Redirects", "SEO Maintenance"]
      },
      {
        icon: Zap,
        title: "Performance Improvement",
        description: "Experience faster loading times and better performance after migrating to Webflow&apos;s optimized platform.",
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
        description: "Improve your website&apos;s design and user experience during the migration process.",
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
    description: 'Keep your Webflow website running smoothly with our comprehensive maintenance and support services. From regular updates to emergency fixes, we&apos;ve got you covered.',
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
        icon: Search,
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
    description: 'Maximize your website&apos;s potential with data-driven conversion rate optimization. We use advanced testing and analytics to turn more visitors into customers.',
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