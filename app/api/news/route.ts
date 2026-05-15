import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAllNews, createNews } from "@/lib/news-data";

export async function GET() {
  const news = await getAllNews();
  return NextResponse.json(news);
}

export async function POST(request: Request) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const newsItem = await createNews(body);
    return NextResponse.json(newsItem, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create news item" },
      { status: 500 }
    );
  }
}
