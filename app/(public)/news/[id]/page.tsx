import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getNewsById } from "@/lib/news-data";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/news"
          className="inline-flex items-center text-navy-blue hover:underline mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to News
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-[300px] md:h-[450px]">
            <Image
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                {news.category}
              </span>
              <span className="flex items-center text-gray-500 text-sm">
                <CalendarDays size={16} className="mr-1" />
                {news.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
              {news.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg text-gray-600 mb-6">{news.description}</p>
              {news.content && (
                <div className="whitespace-pre-wrap">{news.content}</div>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}