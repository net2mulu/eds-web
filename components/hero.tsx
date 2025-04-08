"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import AvatarCollage from "./avatar-collage"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Your Roots, Your Heritage, Your Ethiopia",
    subtitle: "Empowering the Ethiopian Diaspora to build bridges of progress, unity, and shared responsibility.",
  },
  {
    id: 2,
    title: "Your Impact, Your Innovation, Your Ethiopia",
    subtitle:
      "Empowering visionary global changemakers to invest, innovate, and create sustainable progress for Ethiopia.",
  },
  {
    id: 3,
    title: "Stay Informed, Stay Connected, Stay Involved",
    subtitle:
      "Empowering the Ethiopian Diaspora to stay informed, engaged, and connected with the latest news, events, and essential resources for collective progress.",
  },
  {
    id: 4,
    title: "Your Support, Your Success, Your Ethiopia",
    subtitle:
      "Empowering Ethiopians abroad with tailored support, dedicated services, and expert guidance to overcome challenges, build stronger communities, and celebrate our shared heritage.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    slideInterval.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
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

    setIsAnimating(true)

    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 500)

    startSlideTimer()
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Accent elements - keeping only the small ones */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-navy-900 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Vector graphic in bottom right corner - partially visible */}
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] pointer-events-none z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-XtohcHGu4U1j0l8aNAwCgaFW1eVU9O.png"
          alt="Decorative vector"
          fill
          className="object-contain opacity-70"
        />
      </div>

      {/* Hero content - side by side layout */}
      <div className="container mx-auto px-4 py-12 md:py-16 pt-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16">
          {/* Text content with sliding animation */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="relative h-[200px] md:h-[250px]">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-in-out",
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    isAnimating && index === currentSlide ? "opacity-0 translate-y-8" : "",
                  )}
                >
                  <div className="text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">{slide.title}</h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">{slide.subtitle}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-navy-900 text-white px-6 py-3 rounded-md hover:bg-navy-800 transition-colors"
                    >
                      Get Involved
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar Collage */}
          <div className="w-full md:w-1/2 h-[450px] md:h-[550px]">
            <AvatarCollage />
          </div>
        </div>
      </div>

      {/* Feature boxes with top border indicator */}
      <div className="bg-navy-900 text-white relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={cn(
                  "p-6",
                  index === currentSlide ? "border-t-4 border-gold-400" : "border-t-4 border-transparent",
                )}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Connect With Your Roots</h3>
                    <p className="text-sm text-gray-300">
                      Learn how we're building bridges between Ethiopia and its global community.
                    </p>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Empower Your Impact</h3>
                    <p className="text-sm text-gray-300">
                      Discover opportunities to invest, innovate, and contribute to Ethiopia's progress.
                    </p>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                    <p className="text-sm text-gray-300">
                      Access the latest news, events, and resources about Diaspora involvement.
                    </p>
                  </>
                )}
                {index === 3 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Get Support & Services</h3>
                    <p className="text-sm text-gray-300">
                      Explore the tailored services we provide for Ethiopians abroad.
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

