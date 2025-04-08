"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AvatarCollageProps {
  className?: string
}

export default function AvatarCollage({ className }: AvatarCollageProps) {
  const collageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const avatars = collageRef.current?.querySelectorAll(".avatar-item")
            avatars?.forEach((avatar, index) => {
              setTimeout(() => {
                avatar.classList.add("animate-in")
              }, index * 100) // Staggered animation
            })
          }
        })
      },
      { threshold: 0.2 },
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

  return (
    <div
      ref={collageRef}
      className={cn("relative w-full h-full min-h-[500px] bg-gray-50/30 overflow-hidden", className)}
    >
      {/* Grid layout for avatar collage - 5 columns by 8 rows */}
      <div className="grid grid-cols-5 grid-rows-8 gap-3 h-full w-full p-4">
        {/* Left side small portrait */}
        <div className="avatar-item col-start-1 col-span-1 row-start-4 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29-Tg5FfIbTh9sXoo5naozQNlc5CaspBQ.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Central large portrait - main focal point */}
        <div className="avatar-item col-start-2 col-span-2 row-start-1 row-span-5 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2033-SBsADMQDogERQ6cntIMvCMdxuzKprb.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Top right portraits */}
        <div className="avatar-item col-start-4 col-span-1 row-start-1 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275126-N8dCMJ8dXiwWXj1Iz63s4fEsqajpm1.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="avatar-item col-start-5 col-span-1 row-start-1 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%289%29-TZyYtyZKEeglcYdN529lZjgZMGcAOV.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Middle right portrait - woman with headpiece */}
        <div className="avatar-item col-start-4 col-span-2 row-start-2 row-span-3 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-31wKhN4ro95Tzy6TSliPynpDw2FmtL.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom right small portraits */}
        <div className="avatar-item col-start-4 col-span-1 row-start-5 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%287%29-RKmN2zopdDRUn9tuvRaySpn6PbDEPk.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="avatar-item col-start-5 col-span-1 row-start-5 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%286%29-mk1d7AQP0kB8lJ2cl20uIdczF4GRBx.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom center portrait - woman with braids */}
        <div className="avatar-item col-start-2 col-span-2 row-start-6 row-span-2 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%283%29-MT6oR9I187RvYXJ2BllKnhODYCTCHe.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom left portraits */}
        <div className="avatar-item col-start-1 col-span-1 row-start-6 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275129-73kgvc24z1ifAE1JBc67cw8ClK1Fwa.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="avatar-item col-start-1 col-span-1 row-start-7 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%286%29-mk1d7AQP0kB8lJ2cl20uIdczF4GRBx.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom right portrait */}
        <div className="avatar-item col-start-4 col-span-1 row-start-6 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%288%29-xMQGBZWsNu7rCEnp00qImjFysZaQeA.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="avatar-item col-start-5 col-span-1 row-start-6 row-span-1 overflow-hidden opacity-0 translate-y-4 rounded-md">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275129-73kgvc24z1ifAE1JBc67cw8ClK1Fwa.png"
              alt="Ethiopian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

