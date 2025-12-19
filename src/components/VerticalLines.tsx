'use client'

export default function VerticalLines() {
  return (
    <>
      {/* Left grey line */}
      <div 
        className="fixed left-20 top-0 h-screen w-px z-50 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(156, 163, 175, 0.3) 10%, rgba(156, 163, 175, 0.6) 50%, rgba(156, 163, 175, 0.3) 90%, transparent 100%)'
        }}
      />
      
      {/* Right grey line */}
      <div 
        className="fixed right-20 top-0 h-screen w-px z-50 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(156, 163, 175, 0.3) 10%, rgba(156, 163, 175, 0.6) 50%, rgba(156, 163, 175, 0.3) 90%, transparent 100%)'
        }}
      />
    </>
  )
}