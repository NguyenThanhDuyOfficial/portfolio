"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden'

    // Slide up after 0.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 500)

    // Re-enable scroll when component unmounts or after animation
    return () => {
      document.body.style.overflow = 'unset'
      clearTimeout(timer)
    }
  }, [])

  // Re-enable scroll when loading screen hides
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  return (
    <div
      className={`fixed inset-0 min-h-screen max-h-screen w-full overflow-hidden z-[9999] flex justify-center items-center
        bg-[#1e1e2e] [background-image:radial-gradient(rgba(100,_116,_139,_0.2)_2px,_transparent_2px)] [background-size:16px_16px]
        text-[#cdd6f4]
        transition-transform duration-700 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#cdd6f4]/20 border-t-[#cdd6f4]" />
        <p className="text-sm font-light tracking-wider">Loading...</p>
      </div>
    </div>
  )
}
