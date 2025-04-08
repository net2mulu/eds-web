"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full h-20 md:h-24">
      <header className={cn("fixed top-4 left-0 right-0 z-50 w-full transition-all duration-300 px-4")}>
        <div
          className={cn(
            "w-full mx-auto rounded-xl transition-all duration-300",
            isScrolled ? "bg-navy-900/95 backdrop-blur-sm shadow-lg" : "bg-navy-900 shadow-md",
          )}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20%281%29-frb9OMQGJ8kY7zQzmbFmER06HXw6NT.png"
                alt="Ethiopian Diaspora Service Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {isMobile ? (
              <>
                <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                  <Menu className="h-6 w-6 text-white" />
                </Button>

                {isMenuOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-navy-900 rounded-xl shadow-lg py-4">
                    <nav className="flex flex-col space-y-4 px-4">
                      <Link href="/" className="text-white hover:text-gold-400 transition-colors py-2">
                        Home
                      </Link>
                      <Link href="/about" className="text-white hover:text-gold-400 transition-colors py-2">
                        About
                      </Link>
                      <Link href="/services" className="text-white hover:text-gold-400 transition-colors py-2">
                        Services
                      </Link>
                      <Link href="/news-events" className="text-white hover:text-gold-400 transition-colors py-2">
                        News and Events
                      </Link>
                      <Link href="/resources" className="text-white hover:text-gold-400 transition-colors py-2">
                        Resources
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-gold-400 text-navy-900 hover:bg-gold-500 transition-colors py-2 px-4 rounded text-center"
                      >
                        Contact Us
                      </Link>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <nav className="flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-gold-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-gold-400 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-white hover:text-gold-400 transition-colors">
                  Services
                </Link>
                <Link href="/news-events" className="text-white hover:text-gold-400 transition-colors">
                  News and Events
                </Link>
                <Link href="/resources" className="text-white hover:text-gold-400 transition-colors">
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="bg-gold-400 text-navy-900 hover:bg-gold-500 transition-colors py-2 px-6 rounded"
                >
                  Contact Us
                </Link>
              </nav>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

