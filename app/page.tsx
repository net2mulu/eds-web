import Hero from "@/components/hero";
import ComingSoon from "@/components/coming-soon";

// Hard-coded flag to control whether to show the coming soon page
// Set to true to show coming soon page, false to show the normal site
const SHOW_COMING_SOON = true;

export default function Home() {
  // If SHOW_COMING_SOON is true, render the coming soon page
  // Otherwise, render the normal site
  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  // Normal site content
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Other sections can be added here */}
    </div>
  );
}
