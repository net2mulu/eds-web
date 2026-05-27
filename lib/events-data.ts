import { getCollection } from "@/lib/mongodb";

export type EventItem = {
    id: string
    title: string
    description: string
    content?: string
    image: string
    date: string
    time?: string
    location?: string
    category: string
    featured?: boolean
}

function formatDoc(doc: any): EventItem {
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
        time: rest.time || "",
    };
}

async function getDbEvents(): Promise<EventItem[]> {
    try {
        const collection = await getCollection("events");
        const docs = await collection.find({}).sort({ date: -1 }).toArray();
        return docs.map(formatDoc);
    } catch {
        return [];
    }
}

export async function getAllEvents(): Promise<EventItem[]> {
    return getDbEvents();
}

export async function getUpcomingEvents(limit: number = 10): Promise<EventItem[]> {
    const all = await getDbEvents();
    return all.slice(0, limit);
}

export async function getFeaturedEvents(): Promise<EventItem[]> {
    const all = await getDbEvents();
    return all.filter((item) => item.featured);
}

export async function getEventById(id: string): Promise<EventItem | undefined> {
    const all = await getDbEvents();
    return all.find((item) => item.id === id);
}