"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Calendar, Search } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
}

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function loadNews() {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data.news || []);
    } catch (error) {
      console.error("Failed to load news", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this article?")) return;
    setDeleting(id);
    try {
      await fetch(`/api/news/${id}`, { method: "DELETE" });
      setNews((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete news", error);
    } finally {
      setDeleting(null);
    }
  }

  const filtered = news.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">News Articles</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your news articles
          </p>
        </div>
        <Link
          href="/admin/news/new"
          className="flex items-center gap-2 bg-gold-400 text-navy-900 px-4 py-2 rounded-lg hover:bg-gold-500 transition-colors font-medium"
        >
          <Plus className="h-4 w-4" />
          Add News
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none text-sm"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-gray-400">
            Loading news...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            {news.length === 0
              ? "No news articles yet. Create your first one!"
              : "No news match your search."}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 hover:bg-gray-50/50 transition-colors"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-16 w-24 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gold-100 text-gold-700">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-navy-900 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/admin/news/${item.id}`}
                    className="p-2 text-gray-400 hover:text-navy-900 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deleting === item.id}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
