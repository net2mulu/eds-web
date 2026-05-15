import ComingSoon from "@/components/coming-soon";
import WhoWeAre from "@/components/who-we-are";
import OurApproach from "@/components/our-approach";
import DiasporaImpact from "@/components/diaspora-impact";
import ParticipationTabs from "@/components/participation";
import CommunityHighlights from "@/components/community-highlights";
import JoinMovement from "@/components/join-movement";
import Testimonials from "@/components/testimonials";
import GERDDonation from "@/components/gerd-donation";
import UpcomingEvents from "@/components/upcoming-events";
import NewsSection from "@/components/news-section";
import HeroCarousel from "@/components/hero-carousel";
import { getAllEvents } from "@/lib/events-data";
import { getAllNews } from "@/lib/news-data";

const SHOW_COMING_SOON = false;

export default async function Home() {
  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  const [events, news] = await Promise.all([getAllEvents(), getAllNews()]);

  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <WhoWeAre />
      <GERDDonation />
      <OurApproach />
      <DiasporaImpact />
      <ParticipationTabs />
      <CommunityHighlights />
      <JoinMovement />
      <Testimonials />
      <UpcomingEvents events={events} />
      <NewsSection news={news} />
    </div>
  );
}
