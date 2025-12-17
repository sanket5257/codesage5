'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const greetings = [
  { text: 'Hello', language: 'English' },
  { text: 'Hola', language: 'Spanish' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Hallo', language: 'German' },
  { text: 'Ciao', language: 'Italian' },
  { text: 'Olá', language: 'Portuguese' },
  { text: 'Привет', language: 'Russian' },
  { text: '你好', language: 'Chinese' },
  { text: 'こんにちは', language: 'Japanese' },
  { text: '안녕하세요', language: 'Korean' },
  { text: 'مرحبا', language: 'Arabic' },
  { text: 'नमस्ते', language: 'Hindi' },
  { text: 'Habari', language: 'Swahili' },
  { text: 'Salaam', language: 'Amharic' },
  { text: 'Azul', language: 'Berber' },
  { text: 'Salama', language: 'Malagasy' },
  { text: 'Muraho', language: 'Kinyarwanda' },
  { text: 'Mwaramutse', language: 'Kirundi' },
  { text: 'Jambo', language: 'Kikuyu' },
  { text: 'Ola', language: 'Wolof' }
]

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeline = gsap.timeline()
    
    // Initial fade in - slower
    timeline.fromTo('.loader-text', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )

    // Cycle through greetings
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length
        
        // Animate text change - slower animations
        gsap.to('.loader-text', {
          opacity: 0,
          y: -20,
          duration: 0.4,
          onComplete: () => {
            gsap.to('.loader-text', {
              opacity: 1,
              y: 0,
              duration: 0.4
            })
          }
        })
        
        return nextIndex
      })
    }, 1000) // Increased to 1000ms for slower transitions

    // Complete loader after showing all greetings
    const completeTimer = setTimeout(() => {
      clearInterval(interval)
      
      // Final animation - slower fade out
      gsap.to('.loader-container', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2, // Increased to 1.2s for slower fade out
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false)
          onComplete()
        }
      })
    }, greetings.length * 1000 + 1000) // Show all greetings + 1 second for slower overall timing

    return () => {
      clearInterval(interval)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="loader-container fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="text-center">
        <div className="loader-text text-white text-4xl md:text-6xl font-bold mb-4">
          {greetings[currentIndex].text}
        </div>
        <div className="text-white/60 text-sm md:text-base">
          {greetings[currentIndex].language}
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}