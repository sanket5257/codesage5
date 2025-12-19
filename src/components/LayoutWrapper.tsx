'use client'

import { useState, useEffect } from 'react'
import Loader from './Loader'
import SmoothScroll from './SmoothScroll'
import Mascot from './Mascot'
import VerticalLines from './VerticalLines'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasShownLoader = sessionStorage.getItem('loaderShown')
    
    if (!hasShownLoader) {
      // First visit - show loader
      setIsLoading(true)
      setShowContent(false)
    } else {
      // Already shown loader - skip it
      setIsLoading(false)
      setShowContent(true)
    }
  }, [])

  const handleLoaderComplete = () => {
    // Mark loader as shown for this session
    sessionStorage.setItem('loaderShown', 'true')
    setIsLoading(false)
    
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  return (
    <>
      <SmoothScroll />
      <VerticalLines />
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div 
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ display: showContent ? 'block' : 'none' }}
      >
        {children}
        <Mascot />
      </div>
    </>
  )
}