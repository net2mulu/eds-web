"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20%281%29-frb9OMQGJ8kY7zQzmbFmER06HXw6NT.png"
              alt="Ethiopian Diaspora Service Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
            <p className="text-gray-300 max-w-xs">
              Connecting Ethiopia's global community to foster unity, cultural pride, and national progress.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gold-400 pb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-gold-400 transition-colors">
                Our Services
              </Link>
              <Link href="/news-events" className="text-gray-300 hover:text-gold-400 transition-colors">
                News & Events
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-gold-400 transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gold-400 pb-2">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>011 554 4600</p>
              <p>diaspora.service@mfa.gov.et</p>
              <p>Bloom Tower 5th & 6th floor,</p>
              <p>Kazanchis, Addis Ababa,</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gold-400 pb-2">Working Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday,</p>
              <p>9:00 AM - 5:00 PM (EAT)</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4 border-b border-gold-400 pb-2">Social Media</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 — Ethiopian Diaspora Service. All rights reserved.</p>
          <div className="flex space-x-4 items-center">
            <button
              onClick={scrollToTop}
              className="bg-navy-800 hover:bg-navy-700 transition-colors rounded-full p-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </button>
            <div className="flex space-x-2">
              <Link href="#" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                EN
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                አማ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

