import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
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
    <main className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[300px] md:min-h-[420px] bg-navy-900">
        <Image
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 md:mb-6 transition-colors text-sm"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            Back to News
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
              <Tag size={12} />
              {news.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/70">
              <CalendarDays size={12} />
              {news.date}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {news.title}
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-10 md:py-16">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-navy-900 pl-5">
          {news.description}
        </p>

        {news.content && (
          <div className="text-gray-700 leading-relaxed space-y-5 text-base md:text-lg">
            {news.content.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-navy-900 font-medium hover:underline"
          >
            <ArrowLeft size={16} />
            Back to all news
          </Link>
        </div>
      </article>
    </main>
  );
}