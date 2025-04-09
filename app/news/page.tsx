import PageHeader from "@/components/page-header";
import { FeaturedNews } from "@/components/news/featured-news";
import { RecentNews } from "@/components/news/recent-news";
import { getFeaturedNews, getRecentNews } from "@/lib/news-data";

export default function NewsPage() {
  const featuredNews = getFeaturedNews();
  const recentNews = getRecentNews();

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader
        title="News and Events"
        description="Stay updated with the latest news, announcements, and upcoming events from the Ethiopian Diaspora Service."
      />

      <FeaturedNews newsItems={featuredNews} />

      <RecentNews newsItems={recentNews} />
    </main>
  );
}
