import Image from "next/image";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Ethiopian Diaspora Service Launches New Website",
    date: "Nov 14, 2024",
    image: "/placeholder.svg?height=120&width=200",
    excerpt:
      "The platform brings together resources and tools to help the Ethiopian diaspora connect with their homeland.",
    url: "#",
  },
  {
    id: 2,
    title:
      "The Ethiopian Diaspora Trust Fund (EDTF) Reaches Milestone with $10 Million in Support of Ethiopia's Growth",
    date: "Oct 23, 2024",
    image: "/placeholder.svg?height=120&width=200",
    excerpt:
      "EDTF announces new funding round for community development projects across Ethiopia.",
    url: "#",
  },
  {
    id: 3,
    title: "Members of Ethiopian Diaspora Community Now Serve on Boards",
    date: "Sep 8, 2024",
    image: "/placeholder.svg?height=120&width=200",
    excerpt:
      "In a momentous development, Ethiopian professionals from the diaspora have been appointed to key positions.",
    url: "#",
  },
  {
    id: 4,
    title:
      "EDS Literary Digital Archive Preserves Ethiopian Heritage for Future Generations",
    date: "Aug 5, 2024",
    image: "/placeholder.svg?height=120&width=200",
    excerpt:
      "A new online platform preserves and showcases Ethiopian literary works and cultural artifacts.",
    url: "#",
  },
];

const NewsSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-4">
            <span className="text-gray-700 font-medium">News</span>
          </div>
          <h2 className="text-3xl font-bold text-[#0d2461] mb-3">
            Stay Updated with EDS
          </h2>
          <p className="text-gray-700">
            Essential updates on news, events, and stories connecting Ethiopia
            and its global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-40 bg-[#0d2461]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="p-4 bg-[#0d2461] text-white">
                <h3 className="font-semibold text-white mb-1 line-clamp-3 min-h-[4.5rem]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{item.date}</p>
                <p className="text-sm text-gray-200 mb-4 line-clamp-3 min-h-[4.5rem]">
                  {item.excerpt}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white hover:bg-white text-[#0d2461]"
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
