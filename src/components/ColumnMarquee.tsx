'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface MarqueeItem {
  id: number
  image: string
  title: string
  category: string
  size?: 'small' | 'medium' | 'large'
}

interface ColumnMarqueeProps {
  items?: MarqueeItem[]
  height?: string
  speed?: number
  columns?: number
  fullWidth?: boolean
}

const defaultItems: MarqueeItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    title: "Strategic Investment Advisory",
    category: "Mobile App Design",
    size: "large"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    title: "100% Premium Mobile Games",
    category: "Digital Marketing",
    size: "medium"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    title: "GoFIGR Talent Platform",
    category: "Web Development",
    size: "small"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "Hopstack Operations",
    category: "B2B SaaS",
    size: "medium"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    title: "Health & Nutrition App",
    category: "Mobile Design",
    size: "large"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    title: "Fulfillment Operations",
    category: "Enterprise Software",
    size: "small"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    title: "Code Editor Interface",
    category: "UI/UX Design",
    size: "medium"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=300&fit=crop",
    title: "E-commerce Platform",
    category: "Web Development",
    size: "large"
  }
]

export default function ColumnMarquee({ 
  items = defaultItems, 
  height = "h-96", 
  speed = 30,
  columns = 2,
  fullWidth = false
}: ColumnMarqueeProps) {
  const marqueeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    marqueeRefs.current.forEach((marqueeElement, index) => {
      if (!marqueeElement) return

      // Set CSS custom property for animation duration with slight offset for each column
      const columnSpeed = speed + (index * 2) // Slight speed variation between columns
      marqueeElement.style.setProperty('--scroll-duration', `${columnSpeed}s`)
    })
  }, [speed])

  // Split items into columns
  const splitItemsIntoColumns = (items: MarqueeItem[], numColumns: number) => {
    const columns: MarqueeItem[][] = Array.from({ length: numColumns }, () => [])
    
    items.forEach((item, index) => {
      columns[index % numColumns].push(item)
    })
    
    return columns
  }

  // Triple the items for seamless infinite scroll and split into columns
  const tripleItems = [...items, ...items, ...items]
  const columnItems = splitItemsIntoColumns(tripleItems, columns)

  const getSizeClasses = (size: string = 'medium') => {
    switch (size) {
      case 'small':
        return 'h-32'
      case 'large':
        return 'h-64'
      default:
        return 'h-48'
    }
  }

  return (
    <div className={`relative ${height} overflow-hidden ${fullWidth ? '' : 'rounded-2xl shadow-2xl'} bg-white`}>
      {/* Fade masks */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      {/* Grid columns */}
      <div className={`flex gap-6 ${fullWidth ? 'px-8' : 'px-4'} py-8 h-full`}>
        {columnItems.map((columnData, columnIndex) => (
          <div key={columnIndex} className="flex-1">
            <div 
              ref={(el) => { marqueeRefs.current[columnIndex] = el }}
              className="flex flex-col animate-scroll-up hover:pause-animation"
              style={{
                animation: `scrollUp var(--scroll-duration, 30s) linear infinite`
              }}
            >
              {columnData.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex-shrink-0 mb-4">
                  <div className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={240}
                        className={`w-full ${getSizeClasses(item.size)} object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-xs font-medium text-orange-300 mb-1 uppercase tracking-wide">{item.category}</p>
                        <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl border-2 border-orange-400/0 group-hover:border-orange-400/30 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}