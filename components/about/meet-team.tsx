"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  experience?: string;
  vision?: string;
  imageUrl: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export default function MeetTeam() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const directorGeneral: TeamMember = {
    id: "director-general",
    name: "Amb. Fitsum Arega",
    title: "Director General",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4latCUKC6nMjBs8putwEOHr43Ue6R.png#x=211,y=335,w=348,h=348",
    bio: "As the Director of Ethiopian Diaspora Service, Amb. Fitsum Arega leads the organization's mission to connect and empower Ethiopians living abroad. With a deep passion for fostering unity and driving national progress, Amb. Arega has been instrumental in creating impactful programs that bridge the gap between the diaspora and Ethiopia.",
    experience:
      "With over 15 years of experience in public service, international relations, and diaspora engagement, Amb. Arega has worked closely with ambassadors, diplomats, and community leaders to promote investment, cultural exchange, and development opportunities.",
    vision:
      "Under their leadership, the Ethiopian Diaspora Service has expanded its outreach efforts, hosted major investment forums, and strengthened partnerships with global Ethiopian communities. Amb. Arega's vision is to harness the potential of the diaspora to contribute to Ethiopia's growth while preserving the country's rich cultural heritage.",
    email: "fitsum.arega@eds.gov.et",
    linkedin: "https://linkedin.com/in/fitsumarega",
    twitter: "https://twitter.com/fitsumarega",
  };

  const teamMembers: TeamMember[] = [
    {
      id: "deputy-director",
      name: "Abebe Kebede",
      title: "Deputy Director of Diaspora Engagement",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Abebe Kebede oversees diaspora engagement strategies and initiatives, focusing on building strong relationships with Ethiopian communities worldwide.",
      experience:
        "With 12 years of experience in community development and international relations, Abebe has developed innovative approaches to diaspora engagement.",
      email: "abebe.kebede@eds.gov.et",
    },
    {
      id: "ambassador",
      name: "Tigist Mengesha",
      title: "Ambassador for Diaspora Affairs",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Tigist Mengesha represents the Ethiopian Diaspora Service in international forums and coordinates with Ethiopian embassies and consulates worldwide.",
      experience:
        "A career diplomat with over 20 years of service, Tigist has served in multiple countries and specializes in diaspora relations.",
      email: "tigist.mengesha@eds.gov.et",
      linkedin: "https://linkedin.com/in/tigistmengesha",
    },
    {
      id: "cultural-affairs",
      name: "Yonas Tadesse",
      title: "Cultural Affairs Specialist",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Yonas Tadesse develops and implements cultural programs that celebrate Ethiopian heritage and strengthen cultural ties among diaspora communities.",
      experience:
        "With a background in cultural anthropology and arts management, Yonas has organized numerous cultural festivals and exchange programs.",
      email: "yonas.tadesse@eds.gov.et",
    },
    {
      id: "investment-advisor",
      name: "Sara Mohammed",
      title: "Investment and Trade Advisor",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Sara Mohammed facilitates investment opportunities between diaspora investors and Ethiopian businesses, focusing on sustainable economic development.",
      experience:
        "A former investment banker with expertise in emerging markets, Sara has helped channel millions in diaspora investment to Ethiopia.",
      email: "sara.mohammed@eds.gov.et",
      linkedin: "https://linkedin.com/in/saramohammed",
    },
    {
      id: "diplomatic-liaison",
      name: "Dawit Haile",
      title: "Diplomatic Liaison Officer",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Dawit Haile coordinates with diplomatic missions and international organizations to enhance support for Ethiopian diaspora communities.",
      experience:
        "With a background in international law and diplomacy, Dawit has strengthened partnerships with key international stakeholders.",
      email: "dawit.haile@eds.gov.et",
    },
    {
      id: "outreach-coordinator",
      name: "Hiwot Girma",
      title: "Outreach and Community Engagement Coordinator",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Hiwot Girma develops and implements outreach strategies to connect with Ethiopian diaspora communities and promote their active participation.",
      experience:
        "A community organizer with extensive experience in diaspora engagement, Hiwot has established networks across North America and Europe.",
      email: "hiwot.girma@eds.gov.et",
    },
    {
      id: "program-manager",
      name: "Bereket Tadesse",
      title: "Program Manager for Diaspora Initiatives",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Bereket Tadesse oversees the planning, implementation, and evaluation of diaspora-focused programs and initiatives.",
      experience:
        "With a background in project management and international development, Bereket has successfully managed multiple high-impact programs.",
      email: "bereket.tadesse@eds.gov.et",
    },
    {
      id: "pr-officer",
      name: "Meron Alemayehu",
      title: "Communications and Public Relations Officer",
      imageUrl: "/placeholder.svg?height=300&width=300",
      bio: "Meron Alemayehu manages the organization's communications strategy, media relations, and public outreach efforts.",
      experience:
        "A seasoned communications professional, Meron has developed effective messaging strategies for diverse international audiences.",
      email: "meron.alemayehu@eds.gov.et",
      twitter: "https://twitter.com/meronalema",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const openModal = (memberId: string) => {
    setSelectedMember(memberId);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const getSelectedMember = () => {
    if (selectedMember === "director-general") return directorGeneral;
    return teamMembers.find((member) => member.id === selectedMember) || null;
  };

  const member = getSelectedMember();

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center border border-navy-900 rounded-full px-4 py-1 mb-6">
            <span className="text-navy-900 font-medium">MEET THE TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Committed to Serving the Global Ethiopian Community
          </p>
        </div>

        {/* Director General - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-[300px] md:h-auto">
              <Image
                src={directorGeneral.imageUrl || "/placeholder.svg"}
                alt={directorGeneral.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                  {directorGeneral.name}
                </h3>
                <p className="text-lg text-blue-600">{directorGeneral.title}</p>
              </div>
              <p className="text-gray-700 mb-4">{directorGeneral.bio}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-navy-900 font-medium hover:text-blue-600 transition-colors"
                onClick={() => openModal("director-general")}
              >
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-b from-gray-100 to-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
              onClick={() => openModal(member.id)}
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Image
                  src={member.imageUrl || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 relative">
                <div className="absolute bottom-full left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors z-10"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {member && (
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative h-[300px] md:h-auto">
                        <Image
                          src={member.imageUrl || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6 md:p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                            {member.name}
                          </h3>
                          <p className="text-lg text-blue-600">
                            {member.title}
                          </p>
                        </div>

                        <div className="space-y-4 text-gray-700">
                          <p>{member.bio}</p>
                          {member.experience && <p>{member.experience}</p>}
                          {member.vision && <p>{member.vision}</p>}
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 flex space-x-4">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="text-navy-900 hover:text-blue-600 transition-colors"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="h-5 w-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-navy-900 hover:text-blue-600 transition-colors"
                              aria-label={`${member.name}'s LinkedIn profile`}
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-navy-900 hover:text-blue-600 transition-colors"
                              aria-label={`${member.name}'s Twitter profile`}
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
