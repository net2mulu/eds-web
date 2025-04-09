"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCards: ServiceCard[] = [
    {
      id: "franco-valuta",
      title: "Franco Valuta Service",
      description:
        "Supports diaspora members in participating in investment and business sectors in Ethiopia.",
      imageUrl:
        "/service/sectionTwo/mony.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=75,y=55,w=30,h=30",
    },
    {
      id: "investment-support",
      title: "Investment support Service",
      description:
        "Facilitates diaspora involvement in Ethiopian investment opportunities.",
      imageUrl:
        "/service/sectionTwo/invest.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=355,y=55,w=30,h=30",
    },
    {
      id: "tin-service",
      title: "Taxpayer Identification Number (TIN) Service",
      description:
        "Assists diaspora members in acquiring TIN for financial or business activities.",
      imageUrl:
        "/service/sectionTwo/TIN.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=635,y=55,w=30,h=30",
    },
    {
      id: "foreign-currency",
      title: "Foreign Currency (Diaspora Account) Service",
      description:
        "Allows diaspora members to open foreign currency accounts in Ethiopia.",
      imageUrl:
        "/service/sectionTwo/MONY2.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=75,y=473,w=30,h=30",
    },
    {
      id: "housing-development",
      title: "40/60 Housing Development Savings Program",
      description:
        "Supports diaspora members in converting savings from foreign currency to birr for housing development projects.",
      imageUrl:
        "/service/sectionTwo/BUILDING.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=355,y=473,w=30,h=30",
    },
    {
      id: "knowledge-transfer",
      title: "Knowledge, Skills, and Technology Transfer Service",
      description:
        "Empowers diaspora professionals to share expertise and skills in Ethiopia.",
      imageUrl:
        "/service/sectionTwo/Knowledge.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=635,y=473,w=30,h=30",
    },
    {
      id: "refund-service",
      title: "Refund Service for the Great Ethiopian Renaissance Dam Bond",
      description:
        "Assists diaspora members in requesting refunds for purchased bonds.",
      imageUrl:
        "/service/sectionTwo/dam2.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=75,y=891,w=30,h=30",
    },
    {
      id: "legal-remittance",
      title: "Promoting Legal Remittance",
      description:
        "Educates and promotes the use of legal channels for remittances to Ethiopia.",
      imageUrl:
        "/service/sectionTwo/mony3.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=355,y=891,w=30,h=30",
    },
    {
      id: "good-governance",
      title: "Good Governance Problem Resolution Service",
      description:
        "Addresses diaspora challenges related to investment and development activities in Ethiopia.",
      imageUrl:
        "/service/sectionTwo/governance.webp",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OxvwCRrfZeFbG1qYF55HNsZl9u3nv7.png#x=635,y=891,w=30,h=30",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center border border-navy-900 rounded-full px-4 py-1 mb-6">
            <span className="text-navy-900 font-medium">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Specialized Services for the Diaspora
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our range of specialized services designed to support
            Ethiopian diaspora members in various aspects of engagement with
            their homeland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48">
                <Image
                  src={card.imageUrl || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-navy-900 rounded-md flex items-center justify-center">
                  <Image
                    src={card.icon || "/placeholder.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <Link
                  href={`/services/explore?service=${card.id}`}
                  className="inline-flex items-center text-white font-medium group"
                >
                  LEARN MORE
                  <motion.div
                    animate={{
                      x: hoveredCard === card.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
