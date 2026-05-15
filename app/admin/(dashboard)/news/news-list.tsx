"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import type { NewsItem } from "@/lib/news-data";

const categoryColors: Record<string, string> = {
  Policy: "bg-blue-100 text-blue-800",
  Event: "bg-purple-100 text-purple-800",
  Technology: "bg-green-100 text-green-800",
  Business: "bg-amber-100 text-amber-800",
  Culture: "bg-red-100 text-red-800",
  Arts: "bg-pink-100 text-pink-800",
  Leadership: "bg-indigo-100 text-indigo-800",
};

interface NewsListProps {
  news: NewsItem[];
}

export function NewsList({ news }: NewsListProps) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;

    const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.refresh();
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <tbody>
      {news.map((item) => (
        <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span className="text-sm font-medium text-gray-900 line-clamp-1">
                {item.title}
              </span>
            </div>
          </td>
          <td className="px-6 py-4">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                categoryColors[item.category] || "bg-gray-100 text-gray-800"
              }`}
            >
              {item.category}
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
          <td className="px-6 py-4">
            {item.featured ? (
              <span className="text-xs bg-gold-100 text-gold-600 px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            ) : (
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                Standard
              </span>
            )}
          </td>
          <td className="px-6 py-4 text-right">
            <div className="flex items-center justify-end gap-2">
              <Link
                href={`/admin/news/${item.id}`}
                className="p-1.5 text-gray-400 hover:text-navy-900 rounded-md hover:bg-gray-100"
              >
                <Pencil size={16} />
              </Link>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
