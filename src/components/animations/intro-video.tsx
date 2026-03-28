"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IntroVideoProps {
  videoSrc?: string
  onComplete?: () => void
  autoPlay?: boolean
  skipEnabled?: boolean
}

export function IntroVideo({ 
  videoSrc = "/intro-video.mp4",
  onComplete,
  skipEnabled = true
}: IntroVideoProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    setMounted(true)
    
    // Check if video has been played before
    const played = localStorage.getItem("intro-video-played")
    if (played === "true") {
      setHasPlayed(true)
      return
    }

    // Check if video file exists - use a simple approach
    const checkVideoExists = () => {
      // Don't block rendering - just try to show video
      // If it fails, the onError handler will catch it
      setTimeout(() => {
        setIsVisible(true)
      }, 300)
    }

    // Small delay to ensure page has rendered
    const timer = setTimeout(checkVideoExists, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleVideoEnd = () => {
    setIsVisible(false)
    setIsPlaying(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem("intro-video-played", "true")
    }
    onComplete?.()
  }

  const handleSkip = () => {
    setIsVisible(false)
    setIsPlaying(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem("intro-video-played", "true")
    }
    onComplete?.()
  }

  const handlePlay = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        handleSkip()
      })
    }
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) return null
  if (hasPlayed) return null
  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
        aria-modal="true"
        role="dialog"
        aria-label="Introduction video"
      >
        <div className="relative w-full max-w-site mx-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            {skipEnabled && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSkip}
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                aria-label="Skip introduction video"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
            
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50"
              >
                <Button
                  onClick={handlePlay}
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90"
                  aria-label="Play introduction video"
                >
                  Play Introduction
                </Button>
              </motion.div>
            )}

            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              onError={handleSkip}
              playsInline
              muted={false}
              preload="none"
              aria-label="Introduction video about Prince Iranzi"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
