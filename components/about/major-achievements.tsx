"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  number: string;
  title: string;
  description: string;
  impact?: string;
}

export default function MajorAchievements() {
  const [activeAchievement, setActiveAchievement] = useState("policy");

  const achievements: Achievement[] = [
    {
      id: "policy",
      number: "i",
      title: "Policy Improvement",
      description:
        "The Ethiopian Diaspora Service has a diaspora policy established in 2013. However, due to the evolving needs of the diaspora and advancements in information technology, there is a pressing need to improve this policy. The first draft of the policy brief was developed by a group of university professors.",
      impact:
        "The updated policy will effectively address the growing needs of the diaspora and empower the Ethiopian Diaspora Service to meet current demands",
    },
    {
      id: "support",
      number: "ii",
      title: "Establishment of Comprehensive Support Programs",
      description:
        "We have developed and implemented comprehensive support programs designed to assist Ethiopians living abroad with legal, financial, and social challenges. These programs provide essential resources and guidance to help diaspora members navigate complex issues in their host countries.",
      impact:
        "These support programs have directly benefited over 50,000 Ethiopians worldwide, providing critical assistance during times of need.",
    },
    {
      id: "investment",
      number: "iii",
      title: "Successful Investment Forums",
      description:
        "Our investment forums have created valuable connections between diaspora investors and local Ethiopian businesses. By facilitating these relationships, we've helped channel significant foreign investment into Ethiopia's growing economy, particularly in sectors like agriculture, manufacturing, and technology.",
      impact:
        "These forums have resulted in over $100 million in direct investment from the diaspora community into Ethiopian businesses and projects.",
    },
    {
      id: "cultural",
      number: "iv",
      title: "Cultural Events and Celebrations",
      description:
        "We have organized numerous cultural events and celebrations that showcase Ethiopia's rich heritage and traditions. These events have helped diaspora members, especially younger generations, maintain strong connections to their cultural roots while fostering a sense of community abroad.",
      impact:
        "Our cultural initiatives have reached over 200,000 Ethiopians across 30 countries, strengthening cultural identity and pride.",
    },
    {
      id: "online",
      number: "v",
      title: "Launch of Online Platforms",
      description:
        "We have developed and launched innovative online platforms that connect Ethiopians worldwide. These digital tools provide easy access to information, resources, and services, making it simpler for diaspora members to engage with their homeland regardless of geographic location.",
      impact:
        "Our digital platforms have seen over 1 million unique visitors, dramatically expanding our reach and accessibility.",
    },
    {
      id: "collaboration",
      number: "vi",
      title: "Enhanced Collaboration with International Organizations",
      description:
        "We have established strong partnerships with international organizations, NGOs, and government agencies worldwide. These collaborations have enhanced our capacity to serve the Ethiopian diaspora through shared resources, expertise, and support networks.",
      impact:
        "Through these partnerships, we've implemented joint programs in over 15 countries, significantly expanding our global impact.",
    },
    {
      id: "capacity",
      number: "vii",
      title: "Capacity Building Initiatives",
      description:
        "Our capacity building programs have focused on developing skills and knowledge within diaspora communities. Through workshops, training sessions, and educational resources, we've empowered Ethiopians abroad to contribute more effectively to both their host countries and their homeland.",
      impact:
        "Over 10,000 diaspora members have participated in our capacity building programs, gaining valuable skills and knowledge.",
    },
    {
      id: "strategy",
      number: "viii",
      title: "Development of a Diaspora Engagement Strategy",
      description:
        "We have formulated a comprehensive diaspora engagement strategy that outlines clear objectives, approaches, and metrics for success. This strategic framework guides our efforts to maximize the positive impact of diaspora contributions to Ethiopia's development.",
      impact:
        "This strategy has aligned our efforts with national development goals, resulting in more effective and targeted diaspora engagement.",
    },
  ];

  const handleAchievementClick = (id: string) => {
    setActiveAchievement(id);
  };

  const activeContent = achievements.find(
    (achievement) => achievement.id === activeAchievement
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center border border-navy-900 rounded-full px-4 py-1 mb-6">
            <span className="text-navy-900 font-medium">
              MAJOR ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Highlights of Our Success
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The Ethiopian Diaspora Service has made significant strides since
            its inception, focusing on engaging and supporting Ethiopians living
            abroad. Here are some notable achievements and milestones that
            should be highlighted:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Left side - Achievement buttons in two rows for desktop */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <button
                  key={achievement.id}
                  onClick={() => handleAchievementClick(achievement.id)}
                  className={cn(
                    "flex items-center text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md",
                    activeAchievement === achievement.id
                      ? "bg-navy-900 text-white shadow-lg"
                      : "bg-white text-navy-900 border border-gray-200"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-14 h-14 px-2 rounded-lg mr-3 text-lg font-bold",
                      activeAchievement === achievement.id
                        ? "bg-white text-navy-900"
                        : "bg-navy-900/10 text-navy-900"
                    )}
                  >
                    {achievement.number}
                  </div>
                  <span className="font-medium text-sm md:text-base">
                    {achievement.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Achievement details */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                {activeContent?.title}
              </h3>
              <p className="text-gray-700 mb-6">{activeContent?.description}</p>
              {activeContent?.impact && (
                <div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">
                    Impact:
                  </h4>
                  <p className="text-gray-700">{activeContent.impact}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
