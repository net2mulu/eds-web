"use client";

import { useState, useEffect, useRef } from "react";
import type { NewsItem } from "@/lib/news-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedNewsProps {
  newsItems: NewsItem[];
}

export function FeaturedNews({ newsItems }: FeaturedNewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) =>
          prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovering, newsItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startAutoPlay();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
    startAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
    startAutoPlay();
  };

  if (newsItems.length === 0) return null;

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div
        className="relative rounded-xl overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-center">
          <div className="w-full md:w-2/3 p-6 md:p-12">
            <img
              src={newsItems[currentIndex].image || "/placeholder.svg"}
              alt={newsItems[currentIndex].title}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="hidden md:block w-1/3 p-12">
            <h2 className="text-2xl font-bold text-navy-blue mb-4">
              {newsItems[currentIndex].title}
            </h2>
            <p className="text-gray-700 mb-6">
              {newsItems[currentIndex].description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">
                {newsItems[currentIndex].date}
              </span>
              <a
                href="#"
                className="text-navy-blue font-medium flex items-center"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile view content */}
        <div className="block md:hidden p-6">
          <h2 className="text-xl font-bold text-navy-blue mb-2">
            {newsItems[currentIndex].title}
          </h2>
          <p className="text-gray-700 mb-4 text-sm">
            {newsItems[currentIndex].description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">
              {newsItems[currentIndex].date}
            </span>
            <a
              href="#"
              className="text-navy-blue font-medium flex items-center text-sm"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-5 h-5 text-navy-blue" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
          onClick={goToNext}
        >
          <ChevronRight className="w-5 h-5 text-navy-blue" />
        </button>
      </div>
    </section>
  );
}
