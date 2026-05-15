import { NewsForm } from "@/components/admin/news-form";

export default function NewNewsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Create News</h1>
        <p className="text-gray-500 mt-1">Add a new news article</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <NewsForm />
      </div>
    </div>
  );
}
