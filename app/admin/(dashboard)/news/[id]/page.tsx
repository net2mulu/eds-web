import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/news-data";
import { NewsForm } from "@/components/admin/news-form";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const newsItem = await getNewsById(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Edit News</h1>
        <p className="text-gray-500 mt-1">Update news article</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <NewsForm initialData={newsItem} isEditing />
      </div>
    </div>
  );
}
