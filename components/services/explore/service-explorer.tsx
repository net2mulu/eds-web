"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ServiceItem } from "@/lib/services-data";

interface ServiceExplorerProps {
  services: ServiceItem[];
  activeServiceId?: string;
}

export default function ServiceExplorer({
  services,
  activeServiceId,
}: ServiceExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Filter services based on search query
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Find the index of the active service
  useEffect(() => {
    if (activeServiceId) {
      const index = filteredServices.findIndex(
        (service) => service.id === activeServiceId
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [activeServiceId, filteredServices]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || filteredServices.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % filteredServices.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, filteredServices.length]);

  // Scroll to a specific index
  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current && filteredServices.length > 0) {
      const cards = Array.from(scrollContainerRef.current.children);
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const cardWidth = card.offsetWidth;

        scrollContainerRef.current.scrollTo({
          left: card.offsetLeft - containerWidth / 2 + cardWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  // Handle card click
  const handleCardClick = (
    index: number,
    serviceId: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    setCurrentIndex(index);
    scrollToIndex(index);
    router.push(`/services/explore?service=${serviceId}`, { scroll: false });
  };

  // Scroll functions
  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(filteredServices.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="w-full bg-navy-900 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
          Explore Our Services Effortlessly
        </h1>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full py-3 px-4 pl-12 rounded-full bg-white text-navy-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-900"
              size={20}
            />
          </div>
        </div>

        {/* Horizontal scrolling services */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 rounded-full p-2 text-white hover:bg-white/30"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 py-4 px-10 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {filteredServices.map((service, index) => (
              <a
                key={service.id}
                href={`/services/explore?service=${service.id}`}
                onClick={(e) => handleCardClick(index, service.id, e)}
                data-service-id={service.id}
                className={`flex-shrink-0 w-72 bg-white rounded-lg p-6 cursor-pointer transition-all snap-center
                  ${
                    service.id === activeServiceId
                      ? "ring-4 ring-white/50"
                      : "hover:ring-2 hover:ring-white/30"
                  }
                  ${index === currentIndex ? "scale-105" : "scale-100"}`}
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                <div className="inline-flex items-center text-navy-900 font-medium group">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 rounded-full p-2 text-white hover:bg-white/30"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {filteredServices.map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === currentIndex ? "bg-white w-4" : "bg-white/40"
              }`}
              onClick={() => {
                setCurrentIndex(i);
                scrollToIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
