"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CollageImage {
  id: number
  shape: "circle" | "rounded" | "square"
  size: "sm" | "md" | "lg" | "xl"
  position: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  zIndex: number
  delay: number
  mask?:
    | "none"
    | "quarter-top-left"
    | "quarter-top-right"
    | "quarter-bottom-left"
    | "quarter-bottom-right"
    | "semi-left"
    | "semi-right"
    | "semi-top"
    | "semi-bottom"
}

interface FaceCollageProps {
  className?: string
}

// Editorial-style layout with central portrait
const collageImages: CollageImage[] = [
  // Central large square portrait - the focal point
  {
    id: 1,
    shape: "square",
    size: "xl",
    position: { top: "50%", left: "50%" },
    zIndex: 10,
    delay: 0.1,
    mask: "none",
  },
  // Top row
  {
    id: 2,
    shape: "circle",
    size: "md",
    position: { top: "5%", left: "20%" },
    zIndex: 3,
    delay: 0.2,
    mask: "none",
  },
  {
    id: 3,
    shape: "rounded",
    size: "lg",
    position: { top: "8%", right: "18%" },
    zIndex: 4,
    delay: 0.3,
    mask: "quarter-top-right",
  },
  // Middle row - left
  {
    id: 4,
    shape: "square",
    size: "md",
    position: { top: "35%", left: "5%" },
    zIndex: 5,
    delay: 0.4,
    mask: "quarter-top-left",
  },
  {
    id: 5,
    shape: "circle",
    size: "sm",
    position: { top: "55%", left: "22%" },
    zIndex: 6,
    delay: 0.5,
    mask: "none",
  },
  // Middle row - right
  {
    id: 6,
    shape: "rounded",
    size: "md",
    position: { top: "38%", right: "3%" },
    zIndex: 7,
    delay: 0.6,
    mask: "semi-right",
  },
  // Bottom row
  {
    id: 7,
    shape: "circle",
    size: "lg",
    position: { bottom: "10%", left: "15%" },
    zIndex: 8,
    delay: 0.7,
    mask: "none",
  },
  {
    id: 8,
    shape: "square",
    size: "md",
    position: { bottom: "5%", left: "40%" },
    zIndex: 9,
    delay: 0.8,
    mask: "quarter-bottom-left",
  },
  {
    id: 9,
    shape: "rounded",
    size: "sm",
    position: { bottom: "18%", right: "20%" },
    zIndex: 2,
    delay: 0.9,
    mask: "none",
  },
  {
    id: 10,
    shape: "square",
    size: "md",
    position: { bottom: "8%", right: "8%" },
    zIndex: 1,
    delay: 1.0,
    mask: "quarter-bottom-right",
  },
  // An additional small circle for balance
  {
    id: 11,
    shape: "circle",
    size: "sm",
    position: { top: "25%", right: "25%" },
    zIndex: 2,
    delay: 1.1,
    mask: "none",
  },
]

export default function FaceCollage({ className }: FaceCollageProps) {
  const collageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = collageRef.current?.querySelectorAll(".collage-image")
            images?.forEach((img) => {
              img.classList.add("animate-in")
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (collageRef.current) {
      observer.observe(collageRef.current)
    }

    return () => {
      if (collageRef.current) {
        observer.unobserve(collageRef.current)
      }
    }
  }, [])

  // Helper function to get size class
  const getSizeClass = (size: string) => {
    switch (size) {
      case "sm":
        return "w-16 h-16 md:w-20 md:h-20"
      case "md":
        return "w-24 h-24 md:w-32 md:h-32"
      case "lg":
        return "w-36 h-36 md:w-44 md:h-44"
      case "xl":
        return "w-48 h-48 md:w-64 md:h-64"
      default:
        return "w-24 h-24"
    }
  }

  // Helper function to get shape class
  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "circle":
        return "rounded-full"
      case "rounded":
        return "rounded-2xl"
      case "square":
        return "rounded-xl"
      default:
        return "rounded-xl"
    }
  }

  // Helper function to get mask class
  const getMaskClass = (mask: string) => {
    switch (mask) {
      case "quarter-top-left":
        return "absolute top-0 left-0 w-1/2 h-1/2 bg-white rounded-full"
      case "quarter-top-right":
        return "absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-full"
      case "quarter-bottom-left":
        return "absolute bottom-0 left-0 w-1/2 h-1/2 bg-white rounded-full"
      case "quarter-bottom-right":
        return "absolute bottom-0 right-0 w-1/2 h-1/2 bg-white rounded-full"
      case "semi-left":
        return "absolute top-0 left-0 w-1/2 h-full bg-white"
      case "semi-right":
        return "absolute top-0 right-0 w-1/2 h-full bg-white"
      case "semi-top":
        return "absolute top-0 left-0 w-full h-1/2 bg-white"
      case "semi-bottom":
        return "absolute bottom-0 left-0 w-full h-1/2 bg-white"
      default:
        return ""
    }
  }

  return (
    <div ref={collageRef} className={cn("relative w-full h-full bg-white overflow-hidden", className)}>
      {/* Abstract vector accents */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-navy-900 opacity-5 rounded-full transform -rotate-12"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gold-400 opacity-5 rounded-full transform rotate-45"></div>
      <div className="absolute top-2/3 left-1/2 w-16 h-16 bg-navy-900 opacity-5 rounded-full transform -translate-x-1/2"></div>
      <div className="absolute top-10 right-10 w-24 h-24 border-8 border-gold-400 opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-36 h-36 border-8 border-navy-900 opacity-5 rounded-full"></div>

      {/* Subtle geometric accents */}
      <div className="absolute top-1/2 left-1/3 w-40 h-1 bg-gold-400 opacity-5 transform rotate-45"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-40 bg-navy-900 opacity-5 transform -rotate-12"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-1 bg-gold-400 opacity-5 transform -rotate-45"></div>

      {/* Collage images */}
      {collageImages.map((img) => (
        <div
          key={img.id}
          className={cn(
            "collage-image absolute shadow-lg transition-all duration-500 ease-in-out",
            getSizeClass(img.size),
            getShapeClass(img.shape),
            "border-4 border-white overflow-hidden",
            "transform hover:scale-105 hover:z-20 hover:shadow-xl",
            "opacity-0 translate-y-4",
            // For the centered main image, we need to adjust position with transform
            img.id === 1 ? "transform -translate-x-1/2 -translate-y-1/2" : "",
          )}
          style={{
            top: img.position.top || "auto",
            left: img.position.left || "auto",
            right: img.position.right || "auto",
            bottom: img.position.bottom || "auto",
            zIndex: img.zIndex || 1,
            transitionDelay: `${img.delay}s`,
          }}
        >
          <Image
            src={`/placeholder.svg?height=${Number.parseInt(getSizeClass(img.size).split("h-")[1]) * 4}&width=${Number.parseInt(getSizeClass(img.size).split("w-")[1]) * 4}`}
            alt={`Ethiopian portrait ${img.id}`}
            fill
            className="object-cover"
          />

          {/* Mask shapes */}
          {img.mask && img.mask !== "none" && <div className={getMaskClass(img.mask)}></div>}
        </div>
      ))}
    </div>
  )
}

