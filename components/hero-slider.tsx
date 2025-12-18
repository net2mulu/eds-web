"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
  id: number
  title: string
  subtitle: string
  imageUrl: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Your Roots, Your Heritage, Your Ethiopia",
    subtitle: "Empowering the Ethiopian Diaspora to build bridges of progress, unity, and shared responsibility.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-slide1-JzhZBE73vbXDaJRfqZnig5Tz2Uopaf.png",
  },
  {
    id: 2,
    title: "Your Impact, Your Innovation, Your Ethiopia",
    subtitle:
      "Empowering visionary global changemakers to invest, innovate, and create sustainable progress for Ethiopia.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-slide2-k5DnLz8JPRMi8Sl018M4wosKgVLu2b.png",
  },
  {
    id: 3,
    title: "Stay Informed, Stay Connected, Stay Involved",
    subtitle:
      "Empowering the Ethiopian Diaspora to stay informed, engaged, and connected with the latest news, events, and essential resources for collective progress.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-slide3-DsO4ZnzeEofPZ9uD9EelwOvcrV2rvI.png",
  },
  {
    id: 4,
    title: "Your Support, Your Success, Your Ethiopia",
    subtitle:
      "Empowering Ethiopians abroad with tailored support, dedicated services, and expert guidance to overcome challenges, build stronger communities, and celebrate our shared heritage.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-slide4-xWtnz358iSBe67Bxk13hGe5bZepZM6.png",
  },
]

// Placeholder images for the collage
// In a real implementation, these would be actual images of Ethiopian faces
const collageImages = [
  { id: 1, shape: "circle", size: "lg", top: "5%", left: "10%", zIndex: 2 },
  { id: 2, shape: "rounded", size: "md", top: "15%", right: "15%", zIndex: 3 },
  { id: 3, shape: "circle", size: "sm", top: "40%", left: "20%", zIndex: 1 },
  { id: 4, shape: "rounded", size: "lg", top: "30%", right: "25%", zIndex: 4 },
  { id: 5, shape: "circle", size: "md", bottom: "15%", left: "15%", zIndex: 5 },
  { id: 6, shape: "rounded", size: "sm", bottom: "25%", right: "10%", zIndex: 2 },
  { id: 7, shape: "circle", size: "lg", bottom: "5%", right: "30%", zIndex: 3 },
  { id: 8, shape: "rounded", size: "md", top: "60%", left: "30%", zIndex: 1 },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const slideInterval = useRef<NodeJS.Timeout | null>(null)

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    slideInterval.current = setInterval(() => {
      setDirection("right")
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setTimeout(() => {
          setIsAnimating(false)
        }, 50)
      }, 500)
    }, 7000)
  }

  useEffect(() => {
    startSlideTimer()
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    if (index === currentSlide) return

    setDirection(index > currentSlide ? "right" : "left")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 500)

    startSlideTimer()
  }

  // Helper function to get size class
  const getSizeClass = (size: string) => {
    switch (size) {
      case "sm":
        return "w-20 h-20 md:w-24 md:h-24"
      case "md":
        return "w-28 h-28 md:w-32 md:h-32"
      case "lg":
        return "w-36 h-36 md:w-40 md:h-40"
      default:
        return "w-28 h-28"
    }
  }

  // Helper function to get shape class
  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "circle":
        return "rounded-full"
      case "rounded":
        return "rounded-xl"
      default:
        return "rounded-lg"
    }
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-16">
      {/* Accent elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-navy-900 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-navy-900 opacity-10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gold-400 opacity-10 rounded-full"></div>

      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 flex flex-col items-center transition-all duration-500 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
              isAnimating && index === currentSlide
                ? direction === "right"
                  ? "translate-x-full"
                  : "-translate-x-full"
                : "translate-x-0",
            )}
          >
            <div className="container mx-auto px-4 py-12 md:py-0">
              {/* Text content */}
              <div className="w-full text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{slide.subtitle}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-navy-900 text-white px-6 py-3 rounded-md hover:bg-navy-800 transition-colors"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Collage of faces */}
              <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] mb-16">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M0,0 C20,10 50,30 80,10 L100,0 L100,100 L0,100 Z"
                      fill="none"
                      stroke="#11255A"
                      strokeWidth="0.2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>

                {/* Collage images */}
                {collageImages.map((img) => (
                  <div
                    key={img.id}
                    className={cn(
                      "absolute shadow-lg transition-all duration-500 ease-in-out",
                      getSizeClass(img.size),
                      getShapeClass(img.shape),
                      "border-4 border-white overflow-hidden",
                      "transform hover:scale-105 hover:z-10 hover:shadow-xl",
                    )}
                    style={{
                      top: img.top || "auto",
                      left: img.left || "auto",
                      right: img.right || "auto",
                      bottom: img.bottom || "auto",
                      zIndex: img.zIndex || 1,
                    }}
                  >
                    <Image
                      src={`/placeholder.svg?height=${Number.parseInt(getSizeClass(img.size).split("h-")[1]) * 4}&width=${Number.parseInt(getSizeClass(img.size).split("w-")[1]) * 4}`}
                      alt="Ethiopian face"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Decorative elements */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-32 md:bottom-40 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-navy-900 w-8" : "bg-gray-400",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Feature boxes */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-900 text-white z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Connect With Your Roots</h3>
              <p className="text-sm text-gray-300">
                Learn how we're building bridges between Ethiopia and its global community.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Empower Your Impact</h3>
              <p className="text-sm text-gray-300">
                Discover opportunities to invest, innovate, and contribute to Ethiopia's progress.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
              <p className="text-sm text-gray-300">
                Access the latest news, events, and resources about Diaspora involvement.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Get Support & Services</h3>
              <p className="text-sm text-gray-300">Explore the tailored services we provide for Ethiopians abroad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

