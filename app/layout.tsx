import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethiopian Diaspora Service",
  description: "Connecting Ethiopia's global community to foster unity, cultural pride, and national progress.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative`}>
        {/* Global watermark - larger and positioned off the corner */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] opacity-[0.5]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-ROiMJW5PhQdeolCdLSoCDHsrzHblYL.png"
              alt="Background watermark"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'