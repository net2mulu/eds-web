"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AvatarCollage from "./avatar-collage";

interface AvatarItem {
  src: string;
  alt: string;
  gridClasses: string;
  roundedFull?: boolean;
  contain?: boolean;
  clipped?: boolean;
  className?: string;
}

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  avatarItems?: AvatarItem[];
  collageClassName?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Your Roots, Your Heritage, Your Ethiopia",
    subtitle:
      "Empowering the Ethiopian Diaspora to build bridges of progress, unity, and shared responsibility.",
    collageClassName: "floating-collage",
    avatarItems: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29-Tg5FfIbTh9sXoo5naozQNlc5CaspBQ.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-1 col-span-1 row-start-2 row-span-1",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2033-SBsADMQDogERQ6cntIMvCMdxuzKprb.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-2 col-span-3 row-start-1 row-span-3",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275126-N8dCMJ8dXiwWXj1Iz63s4fEsqajpm1.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-5 col-span-1 row-start-1 row-span-1",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%289%29-TZyYtyZKEeglcYdN529lZjgZMGcAOV.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-6 col-span-1 row-start-1 row-span-1",
        clipped: true,
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%289%29-TZyYtyZKEeglcYdN529lZjgZMGcAOV.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-7 col-span-1 row-start-2 row-span-1",
        clipped: true,
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275126-N8dCMJ8dXiwWXj1Iz63s4fEsqajpm1.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-7 col-span-1 row-start-3 row-span-1",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-31wKhN4ro95Tzy6TSliPynpDw2FmtL.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-5 col-span-2 row-start-2 row-span-2",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%287%29-RKmN2zopdDRUn9tuvRaySpn6PbDEPk.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-8 col-span-1 row-start-3 row-span-1",
        roundedFull: true,
        contain: true,
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%283%29-MT6oR9I187RvYXJ2BllKnhODYCTCHe.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-3 col-span-2 row-start-4 row-span-2",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275129-73kgvc24z1ifAE1JBc67cw8ClK1Fwa.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-5 col-span-1 row-start-4 row-span-1",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%286%29-mk1d7AQP0kB8lJ2cl20uIdczF4GRBx.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-2 col-span-1 row-start-4 row-span-1",
        className: "floating-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%288%29-xMQGBZWsNu7rCEnp00qImjFysZaQeA.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-1 col-span-1 row-start-4 row-span-1",
        clipped: true,
        className: "floating-avatar",
      },
    ],
  },
  {
    id: 2,
    title: "Your Impact, Your Innovation, Your Ethiopia",
    subtitle:
      "Empowering visionary global changemakers to invest, innovate, and create sustainable progress for Ethiopia.",
    avatarItems: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2033-SBsADMQDogERQ6cntIMvCMdxuzKprb.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-1 col-span-2 row-start-1 row-span-5",
        className: "slow-scale-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-31wKhN4ro95Tzy6TSliPynpDw2FmtL.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-3 col-span-3 row-start-2 row-span-6",
        className: "slow-scale-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%283%29-MT6oR9I187RvYXJ2BllKnhODYCTCHe.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-6 col-span-3 row-start-1 row-span-5",
        className: "slow-scale-avatar",
      },
    ],
  },
  {
    id: 3,
    title: "Stay Informed, Stay Connected, Stay Involved",
    subtitle:
      "Empowering the Ethiopian Diaspora to stay informed, engaged, and connected with the latest news, events, and essential resources for collective progress.",
    avatarItems: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29-Tg5FfIbTh9sXoo5naozQNlc5CaspBQ.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-1 col-span-2 row-start-1 row-span-3",
        className: "creative-layout-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2033-SBsADMQDogERQ6cntIMvCMdxuzKprb.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-3 col-span-4 row-start-1 row-span-4",
        className: "creative-layout-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201171275126-N8dCMJ8dXiwWXj1Iz63s4fEsqajpm1.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-7 col-span-2 row-start-1 row-span-2",
        className: "creative-layout-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-31wKhN4ro95Tzy6TSliPynpDw2FmtL.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-1 col-span-3 row-start-5 row-span-3",
        className: "creative-layout-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%287%29-RKmN2zopdDRUn9tuvRaySpn6PbDEPk.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-6 col-span-5 row-start-5 row-span-2",
        roundedFull: false,
        className: "creative-layout-avatar",
      },
    ],
  },
  {
    id: 4,
    title: "Your Support, Your Success, Your Ethiopia",
    subtitle:
      "Empowering Ethiopians abroad with tailored support, dedicated services, and expert guidance to overcome challenges, build stronger communities, and celebrate our shared heritage.",
    avatarItems: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2033-SBsADMQDogERQ6cntIMvCMdxuzKprb.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-1 col-span-4 row-start-1 row-span-6",
        className: "dramatic-avatar",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-31wKhN4ro95Tzy6TSliPynpDw2FmtL.png",
        alt: "Ethiopian portrait",
        gridClasses: "col-start-5 col-span-4 row-start-1 row-span-6",
        className: "dramatic-avatar",
      },
    ],
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);

    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 7000);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPaused]);

  const handleCollageHover = (isHovering: boolean) => {
    setIsPaused(isHovering);

    // If we're pausing, clear the interval immediately
    if (isHovering && slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    } else if (!isHovering) {
      // If we're unpausing, restart the timer
      startSlideTimer();
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) setCurrentSlide(index);
    startSlideTimer();
  };

  return (
    <section className="relative min-h-screen bg-white mt-24 overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-navy-900 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] pointer-events-none z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-XtohcHGu4U1j0l8aNAwCgaFW1eVU9O.png"
          alt="Decorative vector"
          fill
          className="object-contain opacity-70"
        />
      </div>

      {/* Slide Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 pt-24 relative z-10 h-[600px] md:h-[650px]">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 w-full transition-all duration-700 ease-in-out",
                  index < currentSlide
                    ? "-translate-x-full opacity-0"
                    : index > currentSlide
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                )}
                aria-hidden={!isActive}
              >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 h-full">
                  <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <div className="text-left">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-600 mb-8">
                        {slide.subtitle}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center bg-navy-900 text-white px-6 py-3 rounded-md hover:bg-navy-800 transition-colors"
                      >
                        Get Involved
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 h-[450px] md:h-[550px]">
                    {slide.avatarItems && (
                      <AvatarCollage
                        avatarItems={slide.avatarItems}
                        onHover={handleCollageHover}
                        className={slide.collageClassName}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Navigation */}
      <div className="bg-navy-900 text-white relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {heroSlides.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 cursor-pointer transition-all duration-300",
                  index === currentSlide
                    ? "border-t-4 border-gold-400"
                    : "border-t-4 border-transparent"
                )}
                onClick={() => goToSlide(index)}
                role="button"
                tabIndex={0}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {heroSlides[index].title.split(",")[0]}
                </h3>
                <p className="text-sm text-gray-300">
                  {heroSlides[index].subtitle.split(".")[0]}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
