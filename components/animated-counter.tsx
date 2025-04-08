"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

interface AnimatedCounterProps {
  value: string;
  unit: string;
  description: string;
  delay?: number;
}

export default function AnimatedCounter({
  value,
  unit,
  description,
  delay = 0,
}: AnimatedCounterProps) {
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Parse the numeric value from strings like "587.8M", "3.56 B", "9,510"
  const parseNumericValue = (
    valueStr: string
  ): { number: number; decimals: number } => {
    // Remove commas and convert to lowercase for consistent processing
    const cleanValue = valueStr.replace(/,/g, "").toLowerCase();

    // Check if it's a number with a suffix (M, B, etc.)
    if (cleanValue.endsWith("m")) {
      const num = Number.parseFloat(cleanValue.slice(0, -1));
      // Count decimals in the original string
      const decimals = cleanValue.includes(".")
        ? cleanValue.split(".")[1].length - 1
        : 0;
      return { number: num, decimals };
    } else if (cleanValue.endsWith("b")) {
      const num = Number.parseFloat(cleanValue.slice(0, -1));
      const decimals = cleanValue.includes(".")
        ? cleanValue.split(".")[1].length - 1
        : 0;
      return { number: num, decimals };
    } else {
      // Just a regular number
      return { number: Number.parseFloat(cleanValue), decimals: 0 };
    }
  };

  const { number, decimals } = parseNumericValue(value);

  // Format the number back to the original format
  const formatNumber = (num: number): string => {
    if (value.toLowerCase().includes("m")) {
      return num.toFixed(decimals);
    } else if (value.toLowerCase().includes("b")) {
      return num.toFixed(decimals);
    } else if (value.includes(",")) {
      // Format with commas for thousands
      return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
    } else {
      return num.toFixed(decimals);
    }
  };

  const animatedValue = useCountUp({
    end: number,
    start: 0,
    duration: 2000,
    delay: isInView ? delay : 0,
    formatter: formatNumber,
    decimals,
  });

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

  return (
    <div ref={counterRef} className="flex flex-col items-center text-center">
      <div className="flex items-baseline mb-3">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900">
          {isInView ? animatedValue : "0"}
        </span>
        <span className="text-lg md:text-xl text-navy-900 ml-1 font-medium">
          {unit}
        </span>
      </div>
      <p className="text-gray-600 text-lg max-w-xs">{description}</p>
    </div>
  );
}
