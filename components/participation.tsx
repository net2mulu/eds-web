"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TabContent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ParticipationTabs() {
  const [activeTab, setActiveTab] = useState("cultural");

  const tabContents: TabContent[] = [
    {
      id: "cultural",
      title: "Cultural Exchange Programs",
      description: "Deepen your connection to Ethiopian heritage.",
      imageUrl:
        "/Home/sectionFour/coffee.webp",
      imageAlt: "Traditional Ethiopian coffee ceremony with decorated cups",
    },
    {
      id: "tourism",
      title: "Tourism & Investment Projects",
      description:
        "Explore opportunities to contribute to Ethiopia's development.",
      imageUrl: "/Home/sectionFour/ethiopia.webp",
      imageAlt: "Tourism and investment opportunities in Ethiopia",
    },
    {
      id: "knowledge",
      title: "Knowledge Transfer",
      description:
        "Share expertise to modernize institutions and systems back home.",
      imageUrl: "/Home/sectionFour/ethiotelecom.webp",
      imageAlt: "Knowledge transfer and expertise sharing",
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeContent = tabContents.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-gradient-to-tr from-navy-700 to-navy-900 text-white py-0">
      <div className="container py-0 mx-auto px-0">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Left side - Text and tabs */}
          <div className="w-full md:w-1/2 py-12 px-4 md:px-8 lg:px-12">
            {/* Section header */}
            <div className="mb-8">
              <div className="inline-block px-4 py-1 border border-white rounded-full text-white font-medium mb-6">
                Diaspora Participation Opportunities
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Your Journey, Your Impact
              </h2>
              <p className="text-lg text-gray-300">
                Be part of Ethiopia's journey to a brighter future
              </p>
            </div>

            {/* Tabs */}
            <div className="space-y-4">
              {tabContents.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "w-full border border-white text-left p-6 rounded-md transition-all duration-300 hover:scale-105",
                    activeTab === tab.id
                      ? "bg-white text-navy-900"
                      : "bg-transparent text-white "
                  )}
                >
                  <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
                  <p
                    className={
                      activeTab === tab.id ? "text-gray-700" : "text-gray-300"
                    }
                  >
                    {tab.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Image (full 50% width with no padding) */}
          <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
            {activeContent && (
              <Image
                src={activeContent.imageUrl || "/placeholder.svg"}
                alt={activeContent.imageAlt}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
