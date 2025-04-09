import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/lib/resources-data";

interface ResourceCardProps {
  resource: Resource;
}

// Map category IDs to badge styles
const categoryStyles: Record<string, string> = {
  guides: "bg-blue-100 text-blue-800",
  legal: "bg-indigo-100 text-indigo-800",
  forms: "bg-purple-100 text-purple-800",
  reports: "bg-amber-100 text-amber-800",
  media: "bg-green-100 text-green-800",
  links: "bg-gray-100 text-gray-800",
};

// Map category IDs to display names
const categoryNames: Record<string, string> = {
  guides: "Guides & Handbooks",
  legal: "Legal & Policy Documents",
  forms: "Forms & Applications",
  reports: "Reports & Publications",
  media: "Media & Press Releases",
  links: "Official Links",
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const badgeStyle =
    categoryStyles[resource.categoryId] || "bg-gray-100 text-gray-800";
  const categoryName = categoryNames[resource.categoryId] || resource.category;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 lg:w-1/4 relative">
          <div className="h-48 md:h-full relative">
            <Image
              src={resource.imageUrl || "/placeholder.svg"}
              alt={resource.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 lg:w-3/4 p-6">
          <h2 className="text-xl font-bold text-navy-900 mb-2">
            {resource.title}
          </h2>
          <p className="text-gray-600 mb-4">{resource.description}</p>

          <div className="flex flex-wrap justify-between items-center">
            <Link
              href={resource.url || "#"}
              className="text-navy-900 font-medium hover:underline"
            >
              Read More
            </Link>

            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-gray-500 text-sm">{resource.date}</span>
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeStyle}`}
              >
                {categoryName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
