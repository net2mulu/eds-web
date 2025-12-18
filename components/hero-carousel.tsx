"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Rediscover\nHome",
    subtitle: "Discover the Heart\nand Heritage of Ethiopia",
    imageUrl: "/hero/eds1.jpg",
    ctaText: "Ethiopian Reimagined ",
    ctaLink: "/about",
  },
  {
    id: 2,
    title: "A fresh era of\nunity and vision",
    subtitle:
      "Experience Ethiopia's breathtaking\nlandscapes and serene waters",
    imageUrl: "/hero/eds30.jpeg",
    ctaText: "Explore",
    ctaLink: "/resources",
  },
  {
    id: 3,
    title: "Home has\ngrown",
    subtitle:
      "Journey through Ethiopia's rich history\nand architectural marvels",
    imageUrl: "/hero/3.png",
    ctaText: "Discover",
    ctaLink: "/services",
  },
  {
    id: 4,
    title: "Come closer to\nwhat matters",
    subtitle: "Where tradition meets innovation\nin spectacular settings",
    imageUrl: "/hero/4.png",
    ctaText: "Experience",
    ctaLink: "/news-events",
  },
  {
    id: 5,
    title: "Embrace the\nVibrant City Life",
    subtitle: "Connect with Ethiopia's thriving\nurban communities",
    imageUrl: "/hero/5.png",
    ctaText: "Connect",
    ctaLink: "/contact",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useMobile();

  // Function to handle slide transitions
  const transitionToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setNextSlide(index);

    // After animation completes, update current slide
    setTimeout(() => {
      setCurrentSlide(index);
      setNextSlide(null);
      setIsTransitioning(false);
    }, 1000); // Match this with the CSS transition duration
  };

  // Auto-advance slides
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const nextIndex = (currentSlide + 1) % heroSlides.length;
        transitionToSlide(nextIndex);
      }, 7000); // Change slide every 7 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    transitionToSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Current Slide Image */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full hero-carousel-slide z-20",
          isTransitioning
            ? "opacity-0 translate-x-[-100%]"
            : "opacity-100 translate-x-0"
        )}
      >
        <div className="relative w-full h-full">
          <Image
            src={heroSlides[currentSlide].imageUrl || "/placeholder.svg"}
            alt={heroSlides[currentSlide].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Next Slide Image (for transition) */}
      {nextSlide !== null && (
        <div
          className={cn(
            "absolute inset-0 w-full h-full hero-carousel-slide z-10",
            isTransitioning
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src={heroSlides[nextSlide].imageUrl || "/placeholder.svg"}
              alt={heroSlides[nextSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-30">
        {/* Current Slide Content */}
        <div
          className={cn(
            "transition-all duration-700",
            isTransitioning
              ? "opacity-0 translate-y-[-50px]"
              : "opacity-100 translate-y-0"
          )}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-2 md:mb-4 max-w-6xl mx-auto whitespace-pre-line">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white opacity-70 mb-8 md:mb-10 max-w-3xl mx-auto whitespace-pre-wrap">
            {heroSlides[currentSlide].subtitle}
          </p>
          <Link
            href={heroSlides[currentSlide].ctaLink}
            className="inline-flex items-center px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 hero-cta-button group"
          >
            {heroSlides[currentSlide].ctaText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Next Slide Content (for transition) */}
        {nextSlide !== null && (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-700",
              isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[50px]"
            )}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-2 md:mb-4 max-w-6xl mx-auto whitespace-pre-line">
              {heroSlides[nextSlide].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white opacity-70 mb-8 md:mb-10 max-w-3xl mx-auto whitespace-pre-wrap">
              {heroSlides[nextSlide].subtitle}
            </p>
            <Link
              href={heroSlides[nextSlide].ctaLink}
              className="inline-flex items-center px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-navy-900 transition-all duration-300 hero-cta-button group"
            >
              {heroSlides[nextSlide].ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-40 flex justify-center space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-4 h-4 rounded-full transition-all duration-300 border-2 border-white cursor-pointer hover:scale-125",
              index === currentSlide
                ? "bg-white w-12"
                : "bg-transparent hover:bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
