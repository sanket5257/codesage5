'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projectsData } from '@/data/projectsData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function ProjectDetails() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]
  


  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-orange-500 hover:text-orange-400">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white text-gray-900">
      <Header/>

      {/* Hero Section - Matching Reference Images */}
      <section className="pt-24 pb-0 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Content */}
          <div className="py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-5xl">
              {project.title} stands as India&apos;s fastest-growing AI skilling company, founded in March 2020 by{' '}
              <span className="underline">Raghav Gupta</span> (Founder & CEO).
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-4xl">
              {project.title}&apos;s mission centers on building &quot;AI-ready talent&quot; through upskilling programs, strategic partnerships with educational institutions including IITs and IIMs, and robust employment support systems. Their offer training programs, international higher education pathways, and strong placement outcomes.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mb-16">
              <div className="border border-gray-700 p-6 rounded">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25k+</div>
                <div className="text-gray-400">Careers transformed</div>
              </div>
              <div className="border border-gray-700 p-6 rounded">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">120k</div>
                <div className="text-gray-400">Monthly Website Traffic</div>
              </div>
              <div className="border border-gray-700 p-6 rounded">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">400+</div>
                <div className="text-gray-400">Team Size</div>
              </div>
            </div>
          </div>

          {/* 2-Column Vertical Scrolling Marquee */}
          <div className="relative h-[600px] overflow-hidden rounded-t-3xl">
            <div className="aspect-[16/9] bg-gray-800 rounded-t-3xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={project.gallery[0]}
              >
                <source src={project.hero.video} type="video/webm" />
                <source src={project.hero.video.replace('.webm', '.mp4')} type="video/mp4" />
                {/* Fallback image if video fails to load */}
                <Image 
                  src={project.gallery[0]} 
                  alt="Project showcase"
                  fill
                  className="object-cover"
                />
              </video>
            </div>
          </div>
        </div>

        {/* Bottom Project Details Section */}
        <div className="bg-black py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left - Company Title & Description */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {project.title} Technologies Pvt. Ltd. stands as a leading force in India&apos;s EdTech landscape, specifically focused on AI-skilling and talent development.
                </p>
                
                {/* Services Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded border border-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Project Details Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Pages Developed</div>
                  <div className="text-2xl font-bold text-white">100+</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Industry</div>
                  <div className="text-2xl font-bold text-white">{project.category}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Year</div>
                  <div className="text-2xl font-bold text-white">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Website</div>
                  <a 
                    href={`https://${project.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-orange-500 hover:text-orange-400"
                  >
                    {project.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-black">{project.challenge.title}</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            {project.challenge.description}
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-black">Key Challenges Identified:</h3>
          </div>
          
          <div className="space-y-6">
            {project.challenge.keyPoints.map((point, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-2 text-black">{point.title}:</h4>
                <p className="text-gray-800 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-screen max-w-4xl mx-auto rounded-2xl overflow-hidden bg-black">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/67fb46459daf80597440ed56_68e14daabac9120c0c49b51f_Futurense leadership council-transcode.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-black">{project.solution.title}</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            {project.solution.description}
          </p>
          
          <div className="space-y-8">
            {project.solution.approaches.map((approach, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-3 text-black">{approach.title}:</h4>
                <p className="text-gray-800 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Matching the table from reference */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">{project.results.title}</h2>
            <p className="text-xl text-gray-700">{project.results.subtitle}</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="text-left p-4 font-semibold text-black">Metric</th>
                  <th className="text-left p-4 font-semibold text-black">Before</th>
                  <th className="text-left p-4 font-semibold text-black">After</th>
                  <th className="text-left p-4 font-semibold text-black">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {project.results.metrics.map((metric, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-b-0">
                    <td className="p-4 font-medium text-black">{metric.metric}</td>
                    <td className="p-4 text-gray-700">{metric.before}</td>
                    <td className="p-4 text-black font-medium">{metric.after}</td>
                    <td className="p-4 text-black font-semibold">{metric.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

                <Footer/>
    </div>
  )
}