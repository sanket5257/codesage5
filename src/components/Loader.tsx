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
  { text: 'Sawubona', language: 'Zulu' },
  { text: 'Sanibonani', language: 'Ndebele' },
  { text: 'Dumela', language: 'Tswana' },
  { text: 'Molo', language: 'Xhosa' },
  { text: 'Avuxeni', language: 'Tsonga' },
  { text: 'Ndaa', language: 'Venda' },
  { text: 'Lumela', language: 'Sotho' },
  { text: 'Habari', language: 'Swahili' },
  { text: 'Salaam', language: 'Amharic' },
  { text: 'Bawo', language: 'Yoruba' },
  { text: 'Ndewo', language: 'Igbo' },
  { text: 'Sannu', language: 'Hausa' },
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
    
    // Initial fade in
    timeline.fromTo('.loader-text', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    )

    // Cycle through greetings
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length
        
        // Animate text change - faster animations
        gsap.to('.loader-text', {
          opacity: 0,
          y: -20,
          duration: 0.15,
          onComplete: () => {
            gsap.to('.loader-text', {
              opacity: 1,
              y: 0,
              duration: 0.15
            })
          }
        })
        
        return nextIndex
      })
    }, 400) // Reduced from 800ms to 400ms

    // Complete loader after showing all greetings
    const completeTimer = setTimeout(() => {
      clearInterval(interval)
      
      // Final animation - fade out faster
      gsap.to('.loader-container', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6, // Reduced from 1s to 0.6s
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false)
          onComplete()
        }
      })
    }, greetings.length * 400 + 500) // Show all greetings + 0.5 second (reduced from 1s)

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