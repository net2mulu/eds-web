"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  formatter?: (value: number) => string;
  decimals?: number;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value) => value.toString(),
  decimals = 0,
}: UseCountUpProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Delay the start of the animation if needed
    if (delay > 0) {
      timerRef.current = setTimeout(startCounting, delay);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else {
      startCounting();
    }

    function startCounting() {
      const startTime = Date.now();
      const endValue = end;

      const updateCount = () => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Use easeOutQuad for smoother animation
        const easeProgress = 1 - (1 - progress) * (1 - progress);

        const currentCount = start + (endValue - start) * easeProgress;
        countRef.current = currentCount;

        // Round to the specified number of decimals
        const roundedCount = Number(currentCount.toFixed(decimals));
        setCount(roundedCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [start, end, duration, delay, decimals]);

  return formatter(count);
}
