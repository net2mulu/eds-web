"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceTabsProps {
  activeServiceId: string;
}

export default function ServiceTabs({ activeServiceId }: ServiceTabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLAnchorElement>(null);

  // Scroll to active tab on mount
  useEffect(() => {
    if (activeTabRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeTab = activeTabRef.current;

      // Calculate the scroll position to center the active tab
      const scrollLeft =
        activeTab.offsetLeft -
        container.clientWidth / 2 +
        activeTab.clientWidth / 2;

      // Scroll to the active tab (with smooth behavior)
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeServiceId]);

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-6">
      {/* Left scroll button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5 text-navy-900" />
      </button>

      {/* Scrollable tabs container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-8 bg-white rounded-lg shadow-sm"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {servicesData.map((service) => (
          <Link
            key={service.id}
            href={`/services/explore?service=${service.id}`}
            ref={service.id === activeServiceId ? activeTabRef : null}
            className={cn(
              "whitespace-nowrap px-4 py-2 mx-1 rounded-md transition-colors",
              activeServiceId === service.id
                ? "bg-navy-900 text-white font-medium"
                : "bg-gray-50 text-navy-900 hover:bg-gray-100"
            )}
          >
            {service.title}
          </Link>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5 text-navy-900" />
      </button>
    </div>
  );
}
