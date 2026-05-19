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

const seedEvents: EventItem[] = [
    {
        id: "seed-e1",
        title: "Cultural Exchange Webinar",
        description: "Join a panel of Ethiopian cultural experts and community leaders for an insightful discussion on bridging the gap between generations and preserving Ethiopian heritage abroad.",
        image: "/Home/sectionEight/CulturalExchange.webp?height=250&width=400",
        date: "Jan 14, 2025",
        time: "7:00 PM EST",
        location: "Online via Zoom",
        category: "webinar",
    },
    {
        id: "seed-e2",
        title: "Ethiopian Diaspora encouraged to embrace economic reforms for active role in national development",
        description: "As part of the event, a Bazaar and Exhibition showcasing financial institutions and investment opportunities in Ethiopia will be presented.",
        image: "/Home/sectionEight/Ethiopian.webp?height=250&width=400",
        date: "Jan 22, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Addis Ababa Exhibition Center",
        category: "conference",
    },
    {
        id: "seed-e3",
        title: "Ethiopian Heritage Festival Exchange Webinar",
        description: "A celebration of Ethiopian music, art, food, and culture. Experience Ethiopia like never before through an immersive virtual event.",
        image: "/Home/sectionEight/lalibela.webp?height=250&width=400",
        date: "Jan 4, 2025",
        time: "2:00 PM EST",
        location: "Online via Zoom",
        category: "festival",
    },
]

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
        time:
            rest.time ||
            new Date(rest.date).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
              }),
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
    const [dbEvents, seed] = await Promise.all([getDbEvents(), Promise.resolve(seedEvents)]);
    const dbIds = new Set(dbEvents.map((e) => e.id));
    const remainingSeed = seed.filter((s) => !dbIds.has(s.id));
    return [...dbEvents, ...remainingSeed];
}

export async function getUpcomingEvents(limit: number = 10): Promise<EventItem[]> {
    const all = await getAllEvents();
    return all.slice(0, limit);
}

export async function getFeaturedEvents(): Promise<EventItem[]> {
    const all = await getAllEvents();
    return all.filter((item) => item.featured);
}

export async function getEventById(id: string): Promise<EventItem | undefined> {
    const all = await getAllEvents();
    return all.find((item) => item.id === id);
}
