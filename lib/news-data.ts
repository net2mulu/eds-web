import { prisma } from "./prisma";

export type NewsItem = {
  id: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
};

export async function getAllNews(): Promise<NewsItem[]> {
  return prisma.news.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getFeaturedNews(): Promise<NewsItem[]> {
  return prisma.news.findMany({
    where: { featured: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getRecentNews(): Promise<NewsItem[]> {
  return prisma.news.findMany({
    where: { featured: false },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}

export async function getNewsByCategory(
  category: string
): Promise<NewsItem[]> {
  return prisma.news.findMany({
    where: { category: { equals: category, mode: "insensitive" } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getNewsById(
  id: string
): Promise<NewsItem | null> {
  return prisma.news.findUnique({ where: { id } });
}

export async function createNews(
  item: Omit<NewsItem, "id">
): Promise<NewsItem> {
  return prisma.news.create({ data: item });
}

export async function updateNews(
  id: string,
  data: Partial<Omit<NewsItem, "id">>
): Promise<NewsItem | null> {
  try {
    return await prisma.news.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteNews(id: string): Promise<boolean> {
  try {
    await prisma.news.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
