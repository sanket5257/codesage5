'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Mascot() {
  const mascotRef = useRef<HTMLDivElement>(null)
  const faceRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mascotRef.current && faceRef.current) {
        const mascotRect = mascotRef.current.getBoundingClientRect()
        const mascotCenterX = mascotRect.left + mascotRect.width / 2
        const mascotCenterY = mascotRect.top + mascotRect.height / 2
        
        const deltaX = e.clientX - mascotCenterX
        const deltaY = e.clientY - mascotCenterY
        
        // Calculate face movement (limit the range)
        const moveX = Math.max(-15, Math.min(15, deltaX * 0.03))
        const moveY = Math.max(-15, Math.min(15, deltaY * 0.03))
        
        // Apply smooth animation to face
        gsap.to(faceRef.current, {
          x: moveX,
          y: moveY,
          duration: 0.4,
          ease: 'power2.out'
        })
      }
    }

    // Add floating animation
    if (mascotRef.current) {
      gsap.to(mascotRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      <div 
        className={`absolute -top-16 -left-40 bg-white rounded-2xl px-4 py-3 shadow-lg border transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="text-sm font-medium text-gray-800 whitespace-nowrap">
          👋 Say Hi to CodeSage!
        </div>
        <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b"></div>
      </div>

      {/* Mascot Container */}
      <a
        href="/contact"
        className="mascot w-inline-block block"
        aria-label="Say Hi to CodeSage!"
        data-cursor="Say Hi to CodeSage!"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={mascotRef}
          className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer transform hover:scale-110 transition-all duration-300"
        >
          {/* Main Body - Orange Circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-600 rounded-full shadow-lg">
            {/* Shine Effect */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
          </div>

          {/* Face Container */}
          <div 
            ref={faceRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100%" 
              viewBox="0 0 112 100" 
              fill="none" 
              className="w-16 h-16 md:w-18 md:h-18"
            >
              {/* Original Smile/Mouth - exactly as provided */}
              <path 
                d="M110.607 66.9406C109.939 67.604 108.269 67.6899 107.39 67.2938C105.835 66.5922 105.849 63.705 104.045 63.7193C95.8176 89.0602 70.7679 102.356 44.7542 98.9293C31.6447 97.2017 21.5322 92.0285 12.0783 82.9755C11.2623 82.1928 8.75202 78.6948 7.94073 78.5134C6.93855 78.2891 6.11773 80.9282 5.32553 81.5677C3.60273 82.9612 0.581875 82.5365 0.118963 80.1503C-1.15524 73.5502 8.08391 65.8716 14.5551 67.1649C17.9291 67.8378 16.6645 72.9442 13.4575 73.4834C27.2733 91.4559 54.4515 96.8819 74.6621 87.0176C84.0587 82.4315 93.9183 72.5099 97.3877 62.5406C97.5834 61.9727 98.4328 59.1045 98.3231 58.9566C97.8124 58.2646 92.3959 58.5462 94.2809 54.1891C95.8892 50.4667 102.623 51.5261 105.443 53.4971C108.264 55.468 113.628 63.9245 110.607 66.9406Z" 
                fill="#ffffff"
              />
              {/* Original Left Eye - exactly as provided */}
              <path 
                d="M22.7287 51.8005C21.7695 51.4474 18.2405 49.7744 17.2044 49.0549C7.72121 42.4689 5.64903 24.9578 10.6033 15.3305C14.0961 8.5503 21.3533 5.69431 28.1716 10.1306C39.5641 17.5464 42.2335 42.4954 29.8456 49.9819C28.0856 51.0457 24.733 52.5377 22.7287 51.805V51.8005Z" 
                fill="#ffffff"
              />
              {/* Original Right Eye - exactly as provided */}
              <path 
                d="M71.6368 46.7406C69.5 46 67.6436 43.9701 66.7655 43.0807C58.7284 34.94 59.762 17.214 66.2291 8.50042C70.7873 2.36442 78.3084 0.759621 84.1389 6.3161C93.8802 15.6037 92.1337 40.8109 78.8421 46.1413C76.9536 46.8988 74 47.5 71.6368 46.7406Z" 
                fill="#ffffff"
              />
              {/* Original Eye Detail - exactly as provided */}
              <path 
                d="M64.9697 37.1614C61.7914 39.7718 59.2812 36.0447 59.348 32.7756C59.6391 17.8288 80.3604 6.94802 92.7635 17.5139C95.0781 19.4848 100.394 26.2949 95.8941 28.2945C92.7588 29.6832 90.8308 25.6077 88.6928 23.966C80.8185 17.91 72.8774 22.2241 68.3485 29.8216C67.3845 31.4442 65.824 36.4598 64.9697 37.1661V37.1614Z" 
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping opacity-20"></div>
        </div>
      </a>
    </div>
  )
}