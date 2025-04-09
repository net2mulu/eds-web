import AboutMission from "@/components/about/about-mission";
import AboutTabs from "@/components/about/about-tabs";
import JoinBanner from "@/components/about/join-banner";
import MajorAchievements from "@/components/about/major-achievements";
import MeetTeam from "@/components/about/meet-team";
import ProgramsInitiatives from "@/components/about/programs-initiatives";
import WhatWeDo from "@/components/about/what-we-do";
import PageHeader from "@/components/page-header";

export const metadata = {
  title: "About Us | Ethiopian Diaspora Service",
  description:
    "Learn about the Ethiopian Diaspora Service, our mission, vision, and how we connect Ethiopia with its global community.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="ABOUT US"
        description="Connecting Ethiopia's global community to foster unity, cultural pride, and national progress."
      />
      <AboutMission />
      <WhatWeDo />
      <AboutTabs />
      <ProgramsInitiatives />
      <MajorAchievements />
      <MeetTeam />
      <JoinBanner />
    </div>
  );
}
