"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HighlightCard {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

export default function CommunityHighlights() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const highlightCards: HighlightCard[] = [
    {
      id: "youth-women",
      title: "Youth & Women Empowerment",
      description:
        "Promoting leadership and engagement among future changemakers.",
      date: "April 2024",
      imageUrl:
        "/Home/sectionFive/mothers.webp",
      imageAlt: "Women sorting coffee beans",
      link: "/insights/youth-women",
    },
    {
      id: "diaspora-associations",
      title: "Diaspora Associations",
      description:
        "Strengthening partnerships between global Ethiopian communities and the homeland.",
      date: "April 2024",
      imageUrl:
        "/Home/sectionFive/population.webp",
      imageAlt: "Ethiopian Diaspora Association logo",
      link: "/insights/diaspora-associations",
    },
    {
      id: "social-impact",
      title: "Social Impact Projects",
      description: "Supporting civic initiatives that foster national pride.",
      date: "April 2024",
      imageUrl:
        "/Home/sectionFive/abay.webp",
      imageAlt: "Dam project in Ethiopia",
      link: "/insights/social-impact",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-4 py-1 border border-navy-900 rounded-full text-navy-900 font-medium mb-6">
            Community Highlights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-navy-900 max-w-4xl mx-auto">
            Inspiring Stories, Shared Success
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {highlightCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-2xl border border-gray-100">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.imageUrl || "/placeholder.svg"}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 bg-navy-900 text-white flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {card.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{card.date}</span>
                    <Link
                      href={card.link}
                      className="inline-flex items-center text-white font-medium group/button"
                    >
                      Read More
                      <ArrowRight
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${hoveredCard === card.id ? "translate-x-1" : ""
                          }`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/insights"
            className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-md transition-all duration-300 flex items-center group"
          >
            See More In Insights
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
