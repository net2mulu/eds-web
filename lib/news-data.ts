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

const seedNews: NewsItem[] = [
    {
        id: "seed-1",
        title: "Ethiopian Diaspora Service reviewing decade-old Diaspora policy",
        description: "Addis Ababa, November 14, 2024 (EPC) – The Ethiopian Diaspora Service in collaboration with Wollo, Jimma, and Addis Ababa Universities is reviewing the country's decade-old diaspora policy.",
        content: "The Ethiopian Diaspora Service has initiated a comprehensive review of the country's diaspora policy, which has been in place for over a decade.",
        image: "/News/sectionOne/fitsum4.webp",
        date: "Nov 14, 2024",
        category: "Policy",
        featured: true,
    },
    {
        id: "seed-2",
        title: "Global Ethiopian Professionals Networking Night",
        description: "Bringing Together Ethiopian Experts Worldwide for Knowledge Exchange and Collaboration",
        content: "The Global Ethiopian Professionals Networking Night successfully connected Ethiopian professionals from various fields across the globe.",
        image: "/News/sectionTwo/Global Ethiopian Professionals Networking Night.webp",
        date: "Jan 3, 2024",
        category: "Event",
        featured: true,
    },
    {
        id: "seed-3",
        title: "Ethiopian Diaspora Service Launches New Digital Platform",
        description: "A Streamlined Hub for Diaspora Engagement, Services, and Resources",
        content: "The Ethiopian Diaspora Service has launched a new digital platform designed to streamline access to services, information, and engagement opportunities.",
        image: "/News/sectionTwo/Ethiopian Diaspora Service Launches New Digital Platform.webp",
        date: "April 3, 2023",
        category: "Technology",
        featured: true,
    },
    {
        id: "seed-4",
        title: "Diaspora Business & Innovation Expo",
        description: "Focused on showcasing Ethiopian-owned businesses abroad and fostering collaboration with local enterprises.",
        image: "/News/sectionTwo/Diaspora Business .webp",
        date: "June 15, 2023",
        category: "Business",
    },
    {
        id: "seed-5",
        title: "Ethiopian New Year Celebration (Enkutatash)",
        description: "An annual festival showcasing traditional music, dance, cuisine, and authentic Ethiopian culture.",
        image: "/News/sectionTwo/newyear.webp",
        date: "Sept 9, 2022",
        category: "Culture",
    },
    {
        id: "seed-6",
        title: "Heritage and Arts Festival",
        description: "A multi-day event celebrating Ethiopian art, literature, and history.",
        image: "/News/sectionTwo/Heritage and Arts Festival.webp",
        date: "Oct 12, 2022",
        category: "Arts",
    },
    {
        id: "seed-7",
        title: "Diaspora Leadership Forum (2023)",
        description: "Brought together young diaspora leaders to discuss their role in Ethiopia's social and economic transformation.",
        image: "/News/sectionTwo/Diaspora Leadership Forum.webp",
        date: "Nov 1, 2023",
        category: "Leadership",
    },
]

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

async function getDbNews(): Promise<NewsItem[]> {
    try {
        const collection = await getCollection("newsArticles");
        const docs = await collection.find({}).sort({ date: -1 }).toArray();
        return docs.map(formatDoc);
    } catch {
        return [];
    }
}

export async function getAllNews(): Promise<NewsItem[]> {
    const [dbNews, seed] = await Promise.all([getDbNews(), Promise.resolve(seedNews)]);
    const dbIds = new Set(dbNews.map((n) => n.id));
    const remainingSeed = seed.filter((s) => !dbIds.has(s.id));
    return [...dbNews, ...remainingSeed];
}

export async function getFeaturedNews(): Promise<NewsItem[]> {
    const all = await getAllNews();
    return all.filter((item) => item.featured);
}

export async function getRecentNews(): Promise<NewsItem[]> {
    const all = await getAllNews();
    return all.filter((item) => !item.featured).slice(0, 6);
}

export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
    const all = await getAllNews();
    return all.filter((item) => item.category.toLowerCase() === category.toLowerCase());
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
    const all = await getAllNews();
    return all.find((item) => item.id === id);
}
