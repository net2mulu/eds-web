"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function JoinBanner() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2 + 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="my-16 md:my-24" ref={ref}>
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/About/sectionEight/bg.webp"
          alt="Ethiopian community gathering with flags"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-[#0e87be]/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h2
            variants={variants}
            initial="hidden"
            animate={controls}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            Your Roots, Your Heritage, Your Ethiopia
          </motion.h2>

          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl"
          >
            Connect, Share, Grow – Be Part of the Global Ethiopian Community
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.div
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
            >
              <Link
                href="/membership"
                className="inline-block bg-white hover:bg-gray-100 text-navy-900 font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
              >
                Become a Member
              </Link>
            </motion.div>

            <motion.div
              custom={2}
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
            >
              <Link
                href="/volunteer"
                className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
              >
                Volunteer
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
