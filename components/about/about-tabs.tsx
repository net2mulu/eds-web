"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
  image?: string;
}

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("history");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabsContent: TabContent[] = [
    {
      id: "history",
      title: "History",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VzApHOKustb8EWB6oNe1V9A419Qo1P.png",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our History</h2>
          <div className="space-y-4">
            <p>
              The Ethiopian Diaspora Service was established in response to the
              growing need for a structured approach to engage and support
              Ethiopians living abroad. As migration patterns shifted and the
              Ethiopian diaspora expanded, it became evident that a dedicated
              service was necessary to address the unique challenges faced by
              these communities. Over the years, the service has evolved,
              reflecting changes in global dynamics and the increasing
              importance of the diaspora in national development.
            </p>
            <p>
              The establishment of the service coincided with Ethiopia's broader
              efforts to strengthen its international relations and promote
              economic growth through diaspora engagement. Recognizing the
              potential of the diaspora as a vital resource, the government
              initiated various programs aimed at fostering connections and
              facilitating contributions from Ethiopians living overseas.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "mission",
      title: "Mission",
      image: "/placeholder.svg?height=500&width=600",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <div className="space-y-4">
            <p>
              The Ethiopian Diaspora Service is committed to building strong,
              sustainable bridges between Ethiopia and its global diaspora
              community. Our mission is to empower Ethiopians abroad to maintain
              meaningful connections with their homeland while facilitating
              their contributions to national development.
            </p>
            <p>
              We strive to create an inclusive platform that addresses the
              diverse needs of the Ethiopian diaspora, providing essential
              services, resources, and opportunities for engagement. Through
              collaborative partnerships and innovative programs, we aim to
              harness the collective potential of Ethiopians worldwide for the
              benefit of Ethiopia's growth and prosperity.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "vision",
      title: "Vision",
      image: "/placeholder.svg?height=500&width=600",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
          <div className="space-y-4">
            <p>
              We envision a future where the Ethiopian diaspora is seamlessly
              integrated into the fabric of Ethiopia's development journey,
              contributing their knowledge, skills, and resources to build a
              prosperous nation. Our vision encompasses a global Ethiopian
              community that maintains strong cultural ties while actively
              participating in shaping Ethiopia's future.
            </p>
            <p>
              By 2030, we aim to establish the Ethiopian Diaspora Service as a
              world-class institution that serves as a model for diaspora
              engagement globally. We aspire to create a dynamic ecosystem where
              Ethiopians abroad feel connected, valued, and empowered to make
              meaningful impacts in both their host countries and their
              homeland.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "values",
      title: "Values",
      image: "/placeholder.svg?height=500&width=600",
      content: (
        <>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Values</h2>
          <div className="space-y-4">
            <p>
              <strong>Unity:</strong> We believe in the power of unity and
              collective action. By bringing together Ethiopians from diverse
              backgrounds and experiences, we create a stronger, more resilient
              community.
            </p>
            <p>
              <strong>Excellence:</strong> We are committed to delivering
              excellence in all our services and initiatives, setting high
              standards and continuously striving to exceed expectations.
            </p>
            <p>
              <strong>Innovation:</strong> We embrace innovation and creative
              thinking to address complex challenges and develop forward-looking
              solutions that meet the evolving needs of the Ethiopian diaspora.
            </p>
            <p>
              <strong>Integrity:</strong> We operate with transparency, honesty,
              and accountability, building trust with our stakeholders and
              ensuring ethical practices in all our endeavors.
            </p>
            <p>
              <strong>Inclusivity:</strong> We value diversity and ensure that
              our programs and services are accessible and responsive to the
              needs of all members of the Ethiopian diaspora, regardless of
              their background or location.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy-900 via-[#0e3a7e] to-[#0c2461] text-white">
      {/* Decorative elements - contained within the section */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold-400 opacity-5 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy-700 opacity-10 rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Tabs Navigation */}
          <div className="flex flex-wrap border-b border-white/20 mb-12 overflow-x-auto pb-1">
            {tabsContent.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 sm:px-6 py-3 text-base sm:text-lg font-medium transition-all duration-300 relative whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/60 hover:text-white/80 hover:bg-white/5"
                )}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                {tabsContent.find((tab) => tab.id === activeTab)?.content}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={
                    tabsContent.find((tab) => tab.id === activeTab)?.image ||
                    "/placeholder.svg"
                  }
                  alt={`${
                    tabsContent.find((tab) => tab.id === activeTab)?.title
                  } illustration`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
