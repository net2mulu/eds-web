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

// Hard-coded flag to control whether to show the coming soon page
// Set to true to show coming soon page, false to show the normal site
const SHOW_COMING_SOON = false;

export default function Home() {
  // If SHOW_COMING_SOON is true, render the coming soon page
  // Otherwise, render the normal site
  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  // Normal site content
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
      <UpcomingEvents />
      <NewsSection />
    </div>
  );
}
