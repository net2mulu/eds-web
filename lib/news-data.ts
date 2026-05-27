import { getCollection } from "@/lib/mongodb";

export type NewsItem = {
    id: string
    title: string
    description: string
    content?: string
    image: string
    date: string
    category: string
    featured?: boolean
}

function formatDoc(doc: any): NewsItem {
    const { _id, ...rest } = doc;
    return {
        id: _id.toString(),
        ...rest,
        date: rest.date
            ? new Date(rest.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
              })
            : "",
    };
}

export async function getAllNews(): Promise<NewsItem[]> {
    try {
        const collection = await getCollection("newsArticles");
        const docs = await collection.find({}).sort({ date: -1 }).toArray();
        return docs.map(formatDoc);
    } catch {
        return [];
    }
}

export async function getFeaturedNews(): Promise<NewsItem[]> {
    try {
        const collection = await getCollection("newsArticles");
        const docs = await collection
            .find({ featured: true })
            .sort({ date: -1 })
            .toArray();
        return docs.map(formatDoc);
    } catch {
        return [];
    }
}

export async function getRecentNews(): Promise<NewsItem[]> {
    try {
        const collection = await getCollection("newsArticles");
        const docs = await collection
            .find({ featured: { $ne: true } })
            .sort({ date: -1 })
            .limit(6)
            .toArray();
        return docs.map(formatDoc);
    } catch {
        return [];
    }
}

export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
    try {
        const collection = await getCollection("newsArticles");
        const docs = await collection
            .find({ category: { $regex: new RegExp(`^${category}$`, "i") } })
            .sort({ date: -1 })
            .toArray();
        return docs.map(formatDoc);
    } catch {
        return [];
    }
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
    try {
        const { ObjectId } = await import("mongodb");
        const collection = await getCollection("newsArticles");
        const doc = await collection.findOne({ _id: new ObjectId(id) });
        if (!doc) return null;
        return formatDoc(doc);
    } catch {
        return null;
    }
}