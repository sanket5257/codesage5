'use client'

import { useState, useEffect } from 'react'

interface CursorFollowerProps {
  text: string
  isVisible: boolean
}

export default function CursorFollower({ text, isVisible }: CursorFollowerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (isVisible) {
      document.addEventListener('mousemove', updatePosition)
    }

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
      style={{
        left: position.x,
        top: position.y - 20, // Offset above cursor
      }}
    >
      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        {text}
      </div>
    </div>
  )
}