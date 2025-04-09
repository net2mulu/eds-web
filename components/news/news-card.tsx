import type { NewsItem } from "@/lib/news-data";

interface NewsCardProps {
  newsItem: NewsItem;
}

const categoryColors: Record<string, string> = {
  Policy: "bg-blue-100 text-blue-800",
  Event: "bg-purple-100 text-purple-800",
  Technology: "bg-green-100 text-green-800",
  Business: "bg-amber-100 text-amber-800",
  Culture: "bg-red-100 text-red-800",
  Arts: "bg-pink-100 text-pink-800",
  Leadership: "bg-indigo-100 text-indigo-800",
  Default: "bg-gray-100 text-gray-800",
};

export function NewsCard({ newsItem }: NewsCardProps) {
  const categoryColor =
    categoryColors[newsItem.category] || categoryColors.Default;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={newsItem.image || "/placeholder.svg"}
          alt={newsItem.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColor}`}
          >
            {newsItem.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-navy-blue mb-2 line-clamp-2">
          {newsItem.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {newsItem.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-gray-500 text-sm">{newsItem.date}</span>
          <a
            href="#"
            className="text-navy-blue text-sm font-medium hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
