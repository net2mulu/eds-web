import PageHeader from "@/components/page-header";
import { FeaturedNews } from "@/components/news/featured-news";
import { RecentNews } from "@/components/news/recent-news";
import { EventsSection } from "@/components/news/events-section";
import { getFeaturedNews, getRecentNews } from "@/lib/news-data";
import { getAllEvents } from "@/lib/events-data";

export default async function NewsPage() {
  const [featuredNews, recentNews, events] = await Promise.all([
    getFeaturedNews(),
    getRecentNews(),
    getAllEvents(),
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader
        title="News and Events"
        description="Stay updated with the latest news, announcements, and upcoming events from the Ethiopian Diaspora Service."
      />
      <FeaturedNews newsItems={featuredNews} />
      <RecentNews newsItems={recentNews} />
      <EventsSection events={events} />
    </main>
  );
}
