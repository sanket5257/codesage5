export interface ProjectData {
  id: string
  title: string
  subtitle: string
  category: string
  year: string
  client: string
  website: string
  services: string[]
  hero: {
    image: string
    video: string
  }
  overview: {
    description: string
    stats: Array<{
      number: string
      label: string
    }>
  }
  challenge: {
    title: string
    description: string
    keyPoints: Array<{
      title: string
      description: string
    }>
  }
  solution: {
    title: string
    description: string
    approaches: Array<{
      title: string
      description: string
    }>
  }
  results: {
    title: string
    subtitle: string
    metrics: Array<{
      metric: string
      before: string
      after: string
      improvement: string
    }>
  }
  gallery: string[]
  testimonial: {
    quote: string
    author: string
    position: string
  }
}

export const projectsData: Record<string, ProjectData> = {
  'futurense-technologies': {
    id: 'futurense-technologies',
    title: 'Futurense Technologies',
    subtitle: 'AI-Powered EdTech Platform Transformation',
    category: 'EdTech | AI Skilling',
    year: '2025',
    client: 'Futurense Technologies Pvt. Ltd.',
    website: 'futurense.com',
    services: ['Webflow Development', 'Landing Pages', 'Ongoing Maintenance & Support'],
    hero: {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      video: '/videos/Futurense case study.webm'
    },
    overview: {
      description: 'Futurense Technologies stands as India\'s fastest-growing AI skilling company, founded in March 2020 by Raghav Gupta (Founder & CEO). Futurense\'s mission centers on building "AI-ready talent" through upskilling programs, strategic partnerships with educational institutions including IITs and IIMs, and robust employment support systems.',
      stats: [
        { number: '25k+', label: 'Careers transformed' },
        { number: '120k', label: 'Monthly Website Traffic' },
        { number: '400+', label: 'Team Size' }
      ]
    },
    challenge: {
      title: 'Challenge',
      description: 'When Futurense approached Webyansh, they were experiencing rapid business growth but their digital presence wasn\'t keeping pace. As India\'s leading AI skilling platform with partnerships across IITs, IIMs, and Fortune 500 companies, they needed a website that could match their ambitious vision of transforming India\'s tech talent landscape.',
      keyPoints: [
        {
          title: 'Performance Issues',
          description: 'The existing website suffered from slow load times (4.2 seconds) and poor mobile optimization, creating friction in the user journey for prospective students and enterprise clients.'
        },
        {
          title: 'Outdated User Experience',
          description: 'Navigation was complex, making it difficult for users to find relevant programs among their diverse offerings - from IIT certifications to US pathway programs.'
        },
        {
          title: 'Limited Conversion Optimization',
          description: 'Despite significant traffic, the website wasn\'t effectively converting visitors into course enrollments or partnership inquiries.'
        },
        {
          title: 'Brand Inconsistency',
          description: 'The visual design didn\'t reflect Futurense\'s position as a premium AI education provider working with top-tier institutions.'
        },
        {
          title: 'Scalability Concerns',
          description: 'The previous platform couldn\'t handle their growing content needs or support their expansion into new markets and programs.'
        }
      ]
    },
    solution: {
      title: 'Solution',
      description: 'We approached this project with a comprehensive strategy focused on performance, user experience, and conversion optimization. Our team conducted extensive research into the EdTech landscape and analyzed successful patterns from leading educational platforms.',
      approaches: [
        {
          title: 'User-Centric Information Architecture',
          description: 'We restructured the entire site navigation around user personas - prospective students, enterprise clients, and university partners - making it intuitive to find relevant programs and information.'
        },
        {
          title: 'Modern, Trust-Building Design',
          description: 'Created a sophisticated visual identity that communicates credibility and innovation, essential for an AI education platform working with prestigious institutions like IIT Roorkee and IIM Indore.'
        },
        {
          title: 'Advanced Webflow Development',
          description: 'Leveraged Webflow\'s powerful CMS and interaction capabilities to create dynamic, engaging experiences while maintaining optimal performance across all devices.'
        },
        {
          title: 'Mobile-First Responsive Design',
          description: 'Prioritized mobile experience, considering that a significant portion of their target audience accesses content via mobile devices.'
        },
        {
          title: 'SEO-Optimized Structure',
          description: 'Implemented comprehensive on-page SEO strategies to improve organic visibility.'
        }
      ]
    },
    results: {
      title: 'Before & After: Transformation Results',
      subtitle: 'Website Performance Metrics',
      metrics: [
        { metric: 'Page Load Speed', before: '33/100', after: '71/100', improvement: '+81%' },
        { metric: 'Mobile Performance Score', before: '41/100', after: '94/100', improvement: '+124%' },
        { metric: 'SEO Score', before: '68/100', after: '92/100', improvement: '+35%' },
        { metric: 'Accessibility Score', before: '74/100', after: '98/100', improvement: '+32%' },
        { metric: 'Best Practices Score', before: '79/100', after: '99/100', improvement: '+30%' },
        { metric: 'Core Web Vitals - LCP', before: '12.1 seconds', after: '1.8 seconds', improvement: '572% improvement' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
    ],
    testimonial: {
      quote: 'The transformation has been remarkable. Our new website not only looks professional but performs exceptionally well. We\'ve seen a significant increase in course inquiries and partnership requests.',
      author: 'Raghav Gupta',
      position: 'Founder & CEO, Futurense Technologies'
    }
  },
  'hopstack': {
    id: 'hopstack',
    title: 'Hopstack',
    subtitle: 'B2B SaaS Platform for Logistics & Fulfillment',
    category: 'B2B SaaS | Logistics',
    year: '2024',
    client: 'Hopstack Technologies',
    website: 'hopstack.io',
    services: ['UI/UX Design', 'Webflow Development', 'SEO Optimization'],
    hero: {
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      video: '/videos/Hopstack Showreel.webm'
    },
    overview: {
      description: 'Hopstack is a cutting-edge B2B SaaS platform revolutionizing logistics and fulfillment operations. With $2.7M in funding, they needed a website that could effectively communicate their value proposition to enterprise clients and support their rapid growth in the competitive logistics technology space.',
      stats: [
        { number: '266.4%', label: 'Organic Traffic Increase' },
        { number: '37', label: 'Domain Authority (from 24)' },
        { number: '$2.7M', label: 'Funding Raised' }
      ]
    },
    challenge: {
      title: 'Challenge',
      description: 'Hopstack approached us during a critical growth phase. Despite having a solid product and significant funding, their digital presence wasn\'t effectively converting visitors or establishing them as a leader in the logistics technology space.',
      keyPoints: [
        {
          title: 'Low Organic Visibility',
          description: 'The existing website had poor SEO performance with a domain authority of only 24, limiting their organic reach in a competitive market.'
        },
        {
          title: 'Complex Value Proposition',
          description: 'Their sophisticated logistics platform needed to be explained clearly to both technical and business decision-makers.'
        },
        {
          title: 'Enterprise Trust Building',
          description: 'As a B2B SaaS company, they needed to establish credibility with enterprise clients and showcase their technical capabilities.'
        },
        {
          title: 'Competitive Differentiation',
          description: 'The logistics tech space is crowded, and they needed to clearly communicate their unique advantages and innovations.'
        }
      ]
    },
    solution: {
      title: 'Solution',
      description: 'We developed a comprehensive digital strategy focused on establishing Hopstack as a thought leader in logistics technology while driving qualified leads and improving search visibility.',
      approaches: [
        {
          title: 'Strategic UI/UX Design',
          description: 'Created a sophisticated interface that communicates technical capabilities while remaining accessible to business stakeholders.'
        },
        {
          title: 'SEO-First Development',
          description: 'Built the entire site with SEO optimization in mind, implementing technical SEO best practices and content architecture for maximum visibility.'
        },
        {
          title: 'Enterprise-Focused Messaging',
          description: 'Developed clear value propositions and case studies that resonate with enterprise decision-makers in the logistics industry.'
        },
        {
          title: 'Performance Optimization',
          description: 'Ensured fast loading times and optimal user experience across all devices to support conversion goals.'
        }
      ]
    },
    results: {
      title: 'Remarkable Growth Results',
      subtitle: 'Digital Performance Metrics',
      metrics: [
        { metric: 'Organic Traffic', before: 'Baseline', after: '+266.4%', improvement: '266.4% increase' },
        { metric: 'Domain Authority', before: '24', after: '37', improvement: '+54% increase' },
        { metric: 'Page Load Speed', before: '4.1s', after: '1.2s', improvement: '71% faster' },
        { metric: 'Conversion Rate', before: '2.1%', after: '4.8%', improvement: '+128% increase' },
        { metric: 'Enterprise Leads', before: '12/month', after: '47/month', improvement: '+292% increase' },
        { metric: 'Time on Site', before: '1:23', after: '3:47', improvement: '+172% increase' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    testimonial: {
      quote: 'The new website has been instrumental in our growth. We\'ve seen a dramatic increase in qualified leads and our organic visibility has improved significantly.',
      author: 'Kush Sharma',
      position: 'Co-founder & CEO, Hopstack'
    }
  }
}