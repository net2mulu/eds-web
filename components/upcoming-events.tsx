"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: "webinar" | "conference" | "festival" | "workshop";
}

const events: Event[] = [
  {
    id: 1,
    title: "Cultural Exchange Webinar",
    description:
      "Join a panel of Ethiopian cultural experts and community leaders for an insightful discussion on bridging the gap between generations and preserving Ethiopian heritage abroad.",
    date: "Jan 14, 2025",
    time: "7:00 PM EST",
    location: "Online via Zoom",
    image: "/Home/sectionEight/CulturalExchange.webp?height=250&width=400",
    category: "webinar",
  },
  {
    id: 2,
    title:
      "Ethiopian Diaspora encouraged to embrace economic reforms for active role in national development",
    description:
      "As part of the event, a Bazaar and Exhibition showcasing financial institutions and investment opportunities in Ethiopia will be presented.",
    date: "Jan 22, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Addis Ababa Exhibition Center",
    image: "/Home/sectionEight/Ethiopian.webp?height=250&width=400",
    category: "conference",
  },
  {
    id: 3,
    title: "Ethiopian Heritage Festival Exchange Webinar",
    description:
      "A celebration of Ethiopian music, art, food, and culture. Experience Ethiopia like never before through an immersive virtual event.",
    date: "Jan 4, 2025",
    time: "2:00 PM EST",
    location: "Online via Zoom",
    image: "/Home/sectionEight/lalibela.webp?height=250&width=400",
    category: "festival",
  },
];

const categoryColors = {
  webinar: {
    badge: "bg-blue-100 text-blue-800",
    accent: "border-l-blue-500",
  },
  conference: {
    badge: "bg-purple-100 text-purple-800",
    accent: "border-l-purple-500",
  },
  festival: {
    badge: "bg-amber-100 text-amber-800",
    accent: "border-l-amber-500",
  },
  workshop: {
    badge: "bg-green-100 text-green-800",
    accent: "border-l-green-500",
  },
};

const UpcomingEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate events every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-4">
            <span className="text-gray-700 font-medium">Upcoming Events</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-[#0d2461]">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay connected with the Ethiopian Diaspora community by joining us
            at our upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          {/* Featured event with animation */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out h-[450px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2461] via-[#0d2461]/70 to-transparent z-10"></div>
            <Image
              src={events[activeIndex].image || "/placeholder.svg"}
              alt={events[activeIndex].title}
              fill
              className="object-cover transform transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div
                className={`text-xs font-bold inline-block px-3 py-1 rounded-full mb-3 ${
                  categoryColors[events[activeIndex].category].badge
                }`}
              >
                {events[activeIndex].category.toUpperCase()}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                {events[activeIndex].title}
              </h3>
              <p className="text-white/80 mb-4 line-clamp-3">
                {events[activeIndex].description}
              </p>
              <div className="flex items-center text-white/90 mb-1">
                <CalendarDays size={16} className="mr-2" />
                <span>{events[activeIndex].date}</span>
                <Clock size={16} className="ml-4 mr-2" />
                <span>{events[activeIndex].time}</span>
              </div>
              <div className="flex items-center text-white/90 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{events[activeIndex].location}</span>
              </div>
              <Button className="bg-[#d1b06c] hover:bg-[#c19a49] text-white group">
                Register Now
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 gap-4">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className={`p-0 overflow-hidden cursor-pointer transition-all duration-300 border-l-4 ${
                  categoryColors[event.category].accent
                } ${
                  activeIndex === index ? "ring-2 ring-[#d1b06c]" : ""
                } shadow-sm hover:shadow-md`}
                onClick={() => setActiveIndex(index)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-32 h-32">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div
                      className={`text-xs font-bold inline-block px-2 py-1 rounded-full mb-2 ${
                        categoryColors[event.category].badge
                      }`}
                    >
                      {event.category.toUpperCase()}
                    </div>
                    <h3 className="font-semibold text-[#0d2461] mb-1 line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <CalendarDays size={14} className="mr-1" />
                      <span className="mr-2">{event.date}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            <Button
              variant="outline"
              className="mt-2 w-full border-[#0d2461] text-[#0d2461] hover:bg-[#0d2461] hover:text-white"
            >
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
