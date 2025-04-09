"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface OfficialLink {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  buttonText: string;
  url: string;
}

export default function OfficialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const officialLinks: OfficialLink[] = [
    {
      id: "passport",
      title: "Passport Services",
      description: "Expedited E-Passport & Ethiopian Origin ID renewal Service",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd.png#x=206,y=217,w=95,h=58",
      buttonText: "Visit Site",
      url: "https://www.ethiopianembassy.org/passport-services/",
    },
    {
      id: "visa",
      title: "VISA",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd.png#x=445,y=217,w=95,h=58",
      buttonText: "Visit Site",
      url: "https://www.ethiopianembassy.org/visa-services/",
    },
    {
      id: "power-of-attorney",
      title: "Power of Attorney",
      description: "Fast, Secure And Easy Power Of Attorney Service",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd.png#x=684,y=145,w=95,h=95",
      buttonText: "Visit Site",
      url: "https://www.ethiopianembassy.org/power-of-attorney/",
    },
    {
      id: "authentication",
      title: "Authentication & Legalization Service",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd.png#x=206,y=490,w=95,h=58",
      buttonText: "Visit Site",
      url: "https://www.ethiopianembassy.org/authentication-services/",
    },
    {
      id: "laissez-passer",
      title: "LAISSEZ PASSER",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd.png#x=445,y=490,w=95,h=58",
      buttonText: "Visit Site",
      url: "https://www.ethiopianembassy.org/laissez-passer/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-6 bg-white shadow-sm">
            <span className="text-navy-900 font-medium">Official Links</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0288d1] mb-6">
            Official Site Links to Consular Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access official Ethiopian government services through these secure
            portals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {officialLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full group"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 flex flex-col items-center justify-center flex-grow">
                  <motion.div
                    className="relative h-20 w-full mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={link.imageUrl || "/placeholder.svg"}
                      alt={link.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  {link.description && (
                    <p className="text-center text-gray-600 text-sm mb-4">
                      {link.description}
                    </p>
                  )}
                  {link.id === "power-of-attorney" && (
                    <motion.div
                      className="mt-2 px-5 py-2 rounded-full bg-[#0288d1]/10 text-[#0288d1] text-sm font-medium"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(2, 136, 209, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      EPOA, start now
                    </motion.div>
                  )}
                </div>
                <div className="bg-gradient-to-r from-navy-900 to-[#0d3a6e] p-5">
                  <h3 className="text-white font-bold text-center mb-4">
                    {link.title}
                  </h3>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white hover:bg-gray-50 text-navy-900 font-medium py-2.5 px-4 rounded-md text-center transition-all duration-300 transform"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center justify-center">
                      {link.buttonText}
                      <motion.div
                        animate={{
                          x: hoveredLink === link.id ? 5 : 0,
                          opacity: hoveredLink === link.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
