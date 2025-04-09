"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServiceOverview() {
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

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            variants={variants}
            initial="hidden"
            animate={controls}
          >
            <div className="inline-flex items-center border border-navy-900 rounded-full px-4 py-1 mb-6">
              <span className="text-navy-900 font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Empowering Connections: Tailored Services for the Ethiopian
              Diaspora
            </h2>
            <p className="text-lg text-gray-700">
              The Ethiopian Diaspora Service offers a range of tailored services
              to empower the Ethiopian diaspora and foster their connection with
              their homeland. Below is an overview of the services provided,
              including requirements and processes for access.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k8GcOKQt7kqJxaqfOfRWFSDp7t4RJa.png"
                alt="Ethiopian Diaspora Agency office"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
