import type { NewsItem } from "@/lib/news-data";
import { NewsCard } from "./news-card";

interface RecentNewsProps {
  newsItems: NewsItem[];
}

export function RecentNews({ newsItems }: RecentNewsProps) {
  return (
    <section className="py-12 px-4 md:px-8 bg-navy-blue/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-8">
          Recent News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
