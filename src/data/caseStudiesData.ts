export interface CaseStudy {
  id: string
  title: string
  company: string
  logo?: string
  description: string
  industry: string[]
  tags: string[]
  stats: {
    primary: {
      value: string
      label: string
    }
    secondary?: {
      value: string
      label: string
    }
  }
  video?: string
  image?: string
  link: string
  featured: boolean
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'futurense-technologies',
    title: 'Increase in Site Performance Score from 39 to 92. Landing pages conversions increased by 27%.',
    company: 'Futurense',
    description: 'Complete website redesign and development for AI-powered EdTech platform, resulting in significant performance improvements and conversion rate optimization.',
    industry: ['education', 'healthcare'],
    tags: ['EdTech', 'AI Upskilling', 'Talent Development'],
    stats: {
      primary: {
        value: '27%',
        label: 'increase in CVR'
      },
      secondary: {
        value: '39→92',
        label: 'performance score'
      }
    },
    video: '/videos/Futurense case study.webm',
    link: '/portfolio/futurense-technologies',
    featured: true
  },
  {
    id: 'hopstack',
    title: 'Increase In Organic Traffic by 266.4% with new revamped webflow website. DA increased from 24 to 37 in 6 months.',
    company: 'Hopstack',
    description: 'Complete B2B SaaS platform redesign focusing on logistics and fulfillment solutions, resulting in massive organic traffic growth and successful funding.',
    industry: ['logistics', 'ecommerce'],
    tags: ['B2B SaaS', 'Logistics', 'Fulfillment'],
    stats: {
      primary: {
        value: '$2.7M',
        label: 'in funding'
      },
      secondary: {
        value: '266.4%',
        label: 'traffic increase'
      }
    },
    video: '/videos/Hopstack Showreel.webm',
    link: '/portfolio/hopstack',
    featured: true
  },
  {
    id: 'aureon-solutions',
    title: 'Mobile-first fintech platform design that increased user engagement by 45% and reduced onboarding time by 60%.',
    company: 'Aureon Solutions',
    description: 'Comprehensive mobile app design for fintech platform focusing on user experience and conversion optimization.',
    industry: ['fintech'],
    tags: ['Fintech', 'Mobile App', 'UX Design'],
    stats: {
      primary: {
        value: '45%',
        label: 'user engagement'
      },
      secondary: {
        value: '60%',
        label: 'faster onboarding'
      }
    },
    image: '/images/67fe743567fd82b5831f84f2_Aureon Solutions Phone mockup.avif',
    link: '/portfolio/aureon-solutions',
    featured: false
  },
  {
    id: 'terra-studio',
    title: 'E-commerce platform redesign that boosted conversion rates by 35% and improved mobile experience.',
    company: 'Terra Studio',
    description: 'Complete e-commerce platform overhaul with focus on mobile optimization and user experience improvements.',
    industry: ['ecommerce'],
    tags: ['E-commerce', 'Mobile Optimization', 'Conversion Rate'],
    stats: {
      primary: {
        value: '35%',
        label: 'conversion boost'
      },
      secondary: {
        value: '85%',
        label: 'mobile score'
      }
    },
    image: '/images/6818d94ac152217e4e19ffb8_Terra Studio tab.avif',
    link: '/portfolio/terra-studio',
    featured: false
  },
  {
    id: 'healthcare-platform',
    title: 'HIPAA-compliant patient portal that improved patient engagement by 50% and reduced administrative workload.',
    company: 'MedConnect',
    description: 'Secure healthcare platform development with patient portal, telemedicine integration, and compliance features.',
    industry: ['healthcare'],
    tags: ['Healthcare', 'Patient Portal', 'HIPAA Compliance'],
    stats: {
      primary: {
        value: '50%',
        label: 'patient engagement'
      },
      secondary: {
        value: '40%',
        label: 'admin efficiency'
      }
    },
    link: '/portfolio/medconnect',
    featured: false
  }
]

// Helper function to get case studies by industry
export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudiesData.filter(caseStudy => 
    caseStudy.industry.includes(industry)
  )
}

// Helper function to get featured case studies
export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudiesData.filter(caseStudy => caseStudy.featured)
}