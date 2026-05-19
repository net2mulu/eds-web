import Image from "next/image";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  category: string;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

const NewsSection = ({ newsItems }: NewsSectionProps) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-4">
            <span className="text-gray-700 font-medium">News</span>
          </div>
          <h2 className="text-3xl font-bold text-navy-900 mb-3">
            Stay Updated with EDS
          </h2>
          <p className="text-gray-700">
            Essential updates on news, events, and stories connecting Ethiopia
            and its global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-40 bg-navy-900">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="p-4 bg-navy-900 text-white">
                <h3 className="font-semibold text-white mb-1 line-clamp-3 min-h-[4.5rem]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{item.date}</p>
                <p className="text-sm text-gray-200 mb-4 line-clamp-3 min-h-[4.5rem]">
                  {item.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white hover:bg-white text-navy-900"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
