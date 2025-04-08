"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CounterItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function CounterItem({ value, suffix, label, delay }: CounterItemProps) {
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const formattedValue = useCountUp({
    end: value,
    start: 0,
    duration: 2000,
    delay: isInView ? delay : 0,
    formatter: (val) => val.toLocaleString(),
  });

  return (
    <div ref={counterRef} className="text-center">
      <div className="flex items-baseline justify-center">
        <span className="text-4xl md:text-5xl font-bold text-white">
          {isInView ? formattedValue : "0"}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-white ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-sm md:text-base text-gray-300 mt-2">{label}</p>
    </div>
  );
}

export default function JoinMovement() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const mapPoints = [
    { x: 20, y: 30, delay: 0.5 }, // North America
    { x: 30, y: 20, delay: 0.7 }, // Europe
    { x: 40, y: 40, delay: 0.9 }, // Middle East
    { x: 50, y: 25, delay: 1.1 }, // Asia
    { x: 60, y: 35, delay: 1.3 }, // Southeast Asia
    { x: 70, y: 20, delay: 1.5 }, // East Asia
    { x: 80, y: 30, delay: 1.7 }, // Pacific
    { x: 25, y: 50, delay: 1.9 }, // South America
    { x: 35, y: 60, delay: 2.1 }, // West Africa
    { x: 45, y: 70, delay: 2.3 }, // East Africa (Ethiopia)
    { x: 55, y: 65, delay: 2.5 }, // Southern Africa
    { x: 65, y: 55, delay: 2.7 }, // India
    { x: 75, y: 60, delay: 2.9 }, // Australia
    { x: 85, y: 50, delay: 3.1 }, // New Zealand
  ];

  return (
    <section className="py-16 bg-navy-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-80"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-4 py-1 border border-white rounded-full text-white font-medium mb-6">
            Join the Movement
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white max-w-4xl mx-auto">
            Join a Global Network of Ethiopian Changemakers
          </h2>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
            Over 3 million Ethiopians across more than 80 countries are shaping
            Ethiopia's future.
            <br />
            Be part of this transformative journey.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* World map with glowing points */}
          <div
            ref={mapRef}
            className="w-full md:w-3/5 relative h-[300px] md:h-[400px]"
          >
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-ygJXzFkGcBKMaMjwX2DbTdX6bvJWJJ.svg"
                  alt="World map with Ethiopian diaspora locations"
                  fill
                  className="object-contain opacity-40"
                />

                {/* Animated map points */}
                {isMapVisible &&
                  mapPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-3 h-3 rounded-full bg-white"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1.5, 1],
                        opacity: [0, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        delay: point.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        repeatDelay: Math.random() * 2,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white"
                        animate={{
                          scale: [1, 2.5],
                          opacity: [0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: Math.random(),
                        }}
                      />
                    </motion.div>
                  ))}

                {/* Ethiopia highlight */}
                {isMapVisible && (
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-gold-400"
                    style={{ left: "45%", top: "70%" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      opacity: [0, 1, 0.9],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Stats counters */}
          <div className="w-full md:w-2/5">
            <div className="grid grid-cols-2 gap-8">
              <CounterItem
                value={1.13}
                suffix="M+"
                label="Registered Diasporas"
                delay={0}
              />
              <CounterItem
                value={100}
                suffix="+"
                label="Countries"
                delay={200}
              />
              <CounterItem
                value={500}
                suffix="+"
                label="Diaspora Association"
                delay={400}
              />
              <CounterItem
                value={50}
                suffix="+"
                label="Ethiopian Embassies & Consulates"
                delay={600}
              />
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Link
                href="/join"
                className="inline-flex items-center bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-3 rounded-md transition-all duration-300 font-medium group"
              >
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
