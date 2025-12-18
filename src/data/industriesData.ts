import { 
  Building2, 
  Heart, 
  GraduationCap, 
  ShoppingBag, 
  Truck, 
  Banknote,
  Stethoscope,
  BookOpen,
  Store,
  Package,
  CreditCard,
  Users,
  Target,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Smartphone,
  BarChart3,
  Database,
  LucideIcon
} from 'lucide-react'

export interface IndustryFeature {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface IndustryService {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface IndustryMarqueeItem {
  id: number
  image: string
  title: string
  category: string
  size: 'small' | 'medium' | 'large'
}

export interface IndustryData {
  title: string
  subtitle: string
  description: string
  heroVideo: string
  badge: string
  features: IndustryFeature[]
  services: IndustryService[]
  marqueeItems: IndustryMarqueeItem[]
}

export const industriesData: Record<string, IndustryData> = {
  'healthcare': {
    title: 'Healthcare',
    subtitle: 'B2B Healthcare SaaS Solutions That Drive Results',
    description: 'Transform healthcare operations with powerful B2B SaaS platforms. We create scalable healthcare management systems, patient engagement platforms, and clinical workflow solutions that drive growth and improve outcomes.',
    heroVideo: '/videos/67fb46459daf80597440ed56_68e14daabac9120c0c49b51f_Futurense leadership council-transcode.mp4',
    badge: 'Healthcare SaaS Innovation Leader',
    features: [
      {
        icon: Stethoscope,
        title: "Patient-Centered Design",
        description: "Create intuitive healthcare platforms that prioritize patient experience and accessibility for all users.",
        tags: ["Patient Portal", "Accessibility", "User Experience"]
      },
      {
        icon: Shield,
        title: "HIPAA Compliance",
        description: "Ensure complete data security and privacy compliance with healthcare regulations and standards.",
        tags: ["Data Security", "Privacy", "Compliance"]
      },
      {
        icon: Smartphone,
        title: "Telemedicine Solutions",
        description: "Build robust telemedicine platforms that connect patients with healthcare providers seamlessly.",
        tags: ["Telehealth", "Remote Care", "Video Consultation"]
      },
      {
        icon: Database,
        title: "Healthcare Analytics",
        description: "Implement advanced analytics to track patient outcomes and optimize healthcare delivery.",
        tags: ["Health Analytics", "Outcome Tracking", "Performance Metrics"]
      },
      {
        icon: Globe,
        title: "Interoperability",
        description: "Create systems that integrate seamlessly with existing healthcare infrastructure and EHR systems.",
        tags: ["EHR Integration", "System Integration", "Data Exchange"]
      },
      {
        icon: Users,
        title: "Multi-Stakeholder Platforms",
        description: "Design platforms that serve patients, providers, and administrators with role-based access.",
        tags: ["Role Management", "Multi-User", "Workflow Optimization"]
      }
    ],
    services: [
      {
        icon: Stethoscope,
        title: "Healthcare Web Development",
        description: "Custom healthcare websites and patient portals designed for optimal user experience and compliance.",
        tags: ["Patient Portals", "Healthcare Websites", "Compliance"]
      },
      {
        icon: Smartphone,
        title: "Telemedicine App Development",
        description: "Full-featured telemedicine applications with video consultation, appointment scheduling, and patient management.",
        tags: ["Telehealth Apps", "Video Consultation", "Appointment System"]
      },
      {
        icon: Database,
        title: "Healthcare Data Analytics",
        description: "Advanced analytics platforms for tracking patient outcomes, operational efficiency, and clinical insights.",
        tags: ["Health Analytics", "Clinical Insights", "Operational Metrics"]
      }
    ],
    marqueeItems: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        title: "Telemedicine Platform",
        category: "Healthcare",
        size: "large"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        title: "Patient Portal Design",
        category: "Healthcare",
        size: "medium"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
        title: "Healthcare Analytics Dashboard",
        category: "Healthcare",
        size: "small"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
        title: "Medical Records System",
        category: "Healthcare",
        size: "medium"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        title: "Healthcare Mobile App",
        category: "Healthcare",
        size: "large"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1559757175-8a5c3c6c4e8e?w=400&h=300&fit=crop",
        title: "Clinical Management System",
        category: "Healthcare",
        size: "small"
      }
    ]
  },
  'education': {
    title: 'Education',
    subtitle: 'B2B EdTech SaaS Platforms That Scale',
    description: 'Build powerful B2B EdTech SaaS solutions that transform educational institutions. We create scalable learning management systems, institutional analytics platforms, and educational workflow tools that drive growth.',
    heroVideo: '/videos/Futurense case study.webm',
    badge: 'EdTech SaaS Innovation Partner',
    features: [
      {
        icon: BookOpen,
        title: "Interactive Learning Platforms",
        description: "Create engaging e-learning platforms with interactive content, quizzes, and multimedia resources.",
        tags: ["E-Learning", "Interactive Content", "Multimedia"]
      },
      {
        icon: Users,
        title: "Student Management Systems",
        description: "Comprehensive systems for managing student data, progress tracking, and academic records.",
        tags: ["Student Management", "Progress Tracking", "Academic Records"]
      },
      {
        icon: Smartphone,
        title: "Mobile Learning Apps",
        description: "Native mobile applications that enable learning on-the-go with offline capabilities.",
        tags: ["Mobile Learning", "Offline Access", "Cross-Platform"]
      },
      {
        icon: BarChart3,
        title: "Learning Analytics",
        description: "Advanced analytics to track learning progress, identify gaps, and optimize educational outcomes.",
        tags: ["Learning Analytics", "Performance Tracking", "Data Insights"]
      },
      {
        icon: Globe,
        title: "Virtual Classrooms",
        description: "Build virtual classroom environments with live streaming, collaboration tools, and interactive features.",
        tags: ["Virtual Classrooms", "Live Streaming", "Collaboration"]
      },
      {
        icon: Target,
        title: "Personalized Learning",
        description: "AI-powered personalization that adapts content and pace to individual learning styles and needs.",
        tags: ["Personalization", "Adaptive Learning", "AI-Powered"]
      }
    ],
    services: [
      {
        icon: BookOpen,
        title: "E-Learning Platform Development",
        description: "Custom e-learning platforms with course management, student tracking, and interactive content delivery.",
        tags: ["LMS Development", "Course Management", "Content Delivery"]
      },
      {
        icon: Smartphone,
        title: "Educational Mobile Apps",
        description: "Native mobile applications for iOS and Android with engaging learning experiences and offline capabilities.",
        tags: ["Mobile Apps", "iOS Development", "Android Development"]
      },
      {
        icon: BarChart3,
        title: "Educational Analytics",
        description: "Comprehensive analytics platforms for tracking student performance and institutional effectiveness.",
        tags: ["Student Analytics", "Performance Metrics", "Institutional Insights"]
      }
    ],
    marqueeItems: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        title: "E-Learning Platform",
        category: "Education",
        size: "large"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
        title: "Virtual Classroom",
        category: "Education",
        size: "medium"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        title: "Student Management System",
        category: "Education",
        size: "small"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        title: "Learning Analytics Dashboard",
        category: "Education",
        size: "medium"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        title: "Mobile Learning App",
        category: "Education",
        size: "large"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
        title: "Online Course Platform",
        category: "Education",
        size: "small"
      }
    ]
  },
  'ecommerce': {
    title: 'E-commerce',
    subtitle: 'B2B E-commerce SaaS Solutions That Convert',
    description: 'Build scalable B2B e-commerce SaaS platforms that drive revenue growth. We create powerful marketplace solutions, vendor management systems, and B2B commerce platforms that scale with your business.',
    heroVideo: '/videos/Hopstack Showreel.webm',
    badge: 'B2B E-commerce SaaS Partner',
    features: [
      {
        icon: Store,
        title: "Custom E-commerce Development",
        description: "Build tailored e-commerce solutions that match your brand and business requirements perfectly.",
        tags: ["Custom Development", "Brand Alignment", "Scalable Architecture"]
      },
      {
        icon: CreditCard,
        title: "Payment Gateway Integration",
        description: "Seamless integration with multiple payment gateways for secure and convenient transactions.",
        tags: ["Payment Processing", "Security", "Multiple Gateways"]
      },
      {
        icon: Smartphone,
        title: "Mobile Commerce",
        description: "Responsive mobile-first design and native mobile apps for shopping on any device.",
        tags: ["Mobile Optimization", "Responsive Design", "Mobile Apps"]
      },
      {
        icon: BarChart3,
        title: "Sales Analytics",
        description: "Comprehensive analytics to track sales performance, customer behavior, and inventory management.",
        tags: ["Sales Analytics", "Customer Insights", "Inventory Management"]
      },
      {
        icon: TrendingUp,
        title: "Conversion Optimization",
        description: "Data-driven optimization strategies to increase conversion rates and average order value.",
        tags: ["CRO", "A/B Testing", "Performance Optimization"]
      },
      {
        icon: Users,
        title: "Customer Experience",
        description: "Create exceptional shopping experiences with personalized recommendations and smooth checkout.",
        tags: ["Personalization", "User Experience", "Customer Journey"]
      }
    ],
    services: [
      {
        icon: Store,
        title: "E-commerce Website Development",
        description: "Custom e-commerce websites built for performance, scalability, and exceptional user experience.",
        tags: ["Custom Development", "Performance", "Scalability"]
      },
      {
        icon: Smartphone,
        title: "Mobile Commerce Apps",
        description: "Native mobile applications for iOS and Android with seamless shopping experiences.",
        tags: ["Mobile Apps", "Native Development", "Shopping Experience"]
      },
      {
        icon: TrendingUp,
        title: "E-commerce Optimization",
        description: "Comprehensive optimization services to improve conversion rates and increase revenue.",
        tags: ["Conversion Optimization", "Revenue Growth", "Performance Improvement"]
      }
    ],
    marqueeItems: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        title: "E-commerce Platform",
        category: "E-commerce",
        size: "large"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        title: "Mobile Shopping App",
        category: "E-commerce",
        size: "medium"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=300&fit=crop",
        title: "Product Management System",
        category: "E-commerce",
        size: "small"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        title: "Payment Integration",
        category: "E-commerce",
        size: "medium"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop",
        title: "Analytics Dashboard",
        category: "E-commerce",
        size: "large"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        title: "Inventory Management",
        category: "E-commerce",
        size: "small"
      }
    ]
  },
  'logistics': {
    title: 'Logistics',
    subtitle: 'B2B Logistics SaaS Platforms That Optimize Operations',
    description: 'Transform supply chain operations with powerful B2B logistics SaaS solutions. We build scalable warehouse management systems, fleet optimization platforms, and supply chain analytics tools that drive efficiency.',
    heroVideo: '/videos/logo.mp4',
    badge: 'Logistics SaaS Innovation Leader',
    features: [
      {
        icon: Package,
        title: "Warehouse Management Systems",
        description: "Comprehensive WMS solutions for inventory tracking, order fulfillment, and warehouse optimization.",
        tags: ["Warehouse Management", "Inventory Tracking", "Order Fulfillment"]
      },
      {
        icon: Truck,
        title: "Fleet Management",
        description: "Real-time fleet tracking, route optimization, and driver management for efficient logistics operations.",
        tags: ["Fleet Tracking", "Route Optimization", "Driver Management"]
      },
      {
        icon: BarChart3,
        title: "Supply Chain Analytics",
        description: "Advanced analytics for supply chain visibility, performance monitoring, and predictive insights.",
        tags: ["Supply Chain Analytics", "Performance Monitoring", "Predictive Analytics"]
      },
      {
        icon: Globe,
        title: "Real-time Tracking",
        description: "End-to-end shipment tracking with real-time updates and customer notifications.",
        tags: ["Shipment Tracking", "Real-time Updates", "Customer Notifications"]
      },
      {
        icon: Target,
        title: "Logistics Optimization",
        description: "AI-powered optimization for route planning, load balancing, and cost reduction.",
        tags: ["Route Planning", "Load Optimization", "Cost Reduction"]
      },
      {
        icon: Smartphone,
        title: "Mobile Logistics Apps",
        description: "Mobile applications for drivers, warehouse staff, and customers with offline capabilities.",
        tags: ["Mobile Apps", "Driver Apps", "Offline Capabilities"]
      }
    ],
    services: [
      {
        icon: Package,
        title: "Warehouse Management Development",
        description: "Custom warehouse management systems with inventory control, order processing, and analytics.",
        tags: ["WMS Development", "Inventory Control", "Order Processing"]
      },
      {
        icon: Truck,
        title: "Fleet Management Solutions",
        description: "Comprehensive fleet management platforms with GPS tracking, maintenance scheduling, and analytics.",
        tags: ["Fleet Management", "GPS Tracking", "Maintenance Scheduling"]
      },
      {
        icon: BarChart3,
        title: "Logistics Analytics Platform",
        description: "Advanced analytics platforms for supply chain optimization and performance monitoring.",
        tags: ["Logistics Analytics", "Supply Chain Optimization", "Performance Metrics"]
      }
    ],
    marqueeItems: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
        title: "Warehouse Management System",
        category: "Logistics",
        size: "large"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        title: "Fleet Tracking Platform",
        category: "Logistics",
        size: "medium"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        title: "Supply Chain Analytics",
        category: "Logistics",
        size: "small"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
        title: "Inventory Management",
        category: "Logistics",
        size: "medium"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        title: "Route Optimization",
        category: "Logistics",
        size: "large"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
        title: "Delivery Tracking App",
        category: "Logistics",
        size: "small"
      }
    ]
  },
  'fintech': {
    title: 'Fintech',
    subtitle: 'B2B Fintech SaaS Solutions That Scale',
    description: 'Build powerful B2B fintech SaaS platforms that transform financial operations. We create scalable payment processing systems, financial analytics platforms, and compliance management tools that drive growth.',
    heroVideo: '/videos/logo2.mp4',
    badge: 'B2B Fintech SaaS Leader',
    features: [
      {
        icon: CreditCard,
        title: "Payment Processing Solutions",
        description: "Secure and scalable payment processing platforms with multi-currency support and fraud detection.",
        tags: ["Payment Processing", "Multi-currency", "Fraud Detection"]
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description: "Bank-level security with PCI DSS compliance, encryption, and regulatory adherence.",
        tags: ["PCI Compliance", "Encryption", "Regulatory Compliance"]
      },
      {
        icon: Smartphone,
        title: "Digital Banking Apps",
        description: "Feature-rich mobile banking applications with biometric authentication and real-time transactions.",
        tags: ["Mobile Banking", "Biometric Auth", "Real-time Transactions"]
      },
      {
        icon: BarChart3,
        title: "Financial Analytics",
        description: "Advanced analytics for risk assessment, fraud detection, and financial insights.",
        tags: ["Risk Assessment", "Fraud Detection", "Financial Insights"]
      },
      {
        icon: Globe,
        title: "Cross-border Payments",
        description: "International payment solutions with competitive exchange rates and fast settlement.",
        tags: ["International Payments", "Exchange Rates", "Fast Settlement"]
      },
      {
        icon: Users,
        title: "Customer Onboarding",
        description: "Streamlined KYC/AML processes with digital identity verification and compliance automation.",
        tags: ["KYC/AML", "Identity Verification", "Compliance Automation"]
      }
    ],
    services: [
      {
        icon: CreditCard,
        title: "Payment Platform Development",
        description: "Custom payment platforms with advanced security, multi-gateway support, and real-time processing.",
        tags: ["Payment Platforms", "Multi-gateway", "Real-time Processing"]
      },
      {
        icon: Smartphone,
        title: "Digital Banking Solutions",
        description: "Comprehensive digital banking platforms with mobile apps, web portals, and API integrations.",
        tags: ["Digital Banking", "Mobile Apps", "API Integration"]
      },
      {
        icon: BarChart3,
        title: "Financial Analytics & Risk Management",
        description: "Advanced analytics platforms for risk assessment, compliance monitoring, and financial reporting.",
        tags: ["Risk Management", "Compliance Monitoring", "Financial Reporting"]
      }
    ],
    marqueeItems: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        title: "Digital Banking Platform",
        category: "Fintech",
        size: "large"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        title: "Payment Processing System",
        category: "Fintech",
        size: "medium"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        title: "Financial Analytics Dashboard",
        category: "Fintech",
        size: "small"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        title: "Mobile Banking App",
        category: "Fintech",
        size: "medium"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        title: "Risk Management System",
        category: "Fintech",
        size: "large"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        title: "Compliance Platform",
        category: "Fintech",
        size: "small"
      }
    ]
  }
}