import Link from "next/link";
import { Plus } from "lucide-react";
import { getAllNews } from "@/lib/news-data";
import { NewsList } from "./news-list";

export default async function AdminNewsPage() {
  const news = await getAllNews();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">News Management</h1>
          <p className="text-gray-500 mt-1">
            Create and manage news articles
          </p>
        </div>
        <Link
          href="/admin/news/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 text-sm font-medium"
        >
          <Plus size={16} />
          Add News
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Title
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Date
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <NewsList news={news} />
          </table>
        </div>
        {news.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No news articles yet. Create your first one!
          </div>
        )}
      </div>
    </div>
  );
}
