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

const newsData: NewsItem[] = [
    {
        id: "1",
        title: "Ethiopian Diaspora Service reviewing decade-old Diaspora policy",
        description:
            "Addis Ababa, November 14, 2024 (EPC) – The Ethiopian Diaspora Service in collaboration with Wollo, Jimma, and Addis Ababa Universities is reviewing the country's decade-old diaspora policy.",
        content:
            "The Ethiopian Diaspora Service has initiated a comprehensive review of the country's diaspora policy, which has been in place for over a decade. This initiative aims to update the policy framework to better address the evolving needs of the Ethiopian diaspora community worldwide and enhance their contribution to national development.",
        image: "/News/sectionOne/fitsum4.webp",
        date: "Nov 14, 2024",
        category: "Policy",
        featured: true,
    },
    {
        id: "2",
        title: "Global Ethiopian Professionals Networking Night",
        description: "Bringing Together Ethiopian Experts Worldwide for Knowledge Exchange and Collaboration",
        content:
            "The Global Ethiopian Professionals Networking Night successfully connected Ethiopian professionals from various fields across the globe. The event facilitated meaningful discussions on how diaspora expertise can contribute to Ethiopia's development goals.",
        image: "/News/sectionTwo/Global Ethiopian Professionals Networking Night.webp",
        date: "Jan 3, 2024",
        category: "Event",
        featured: true,
    },
    {
        id: "3",
        title: "Ethiopian Diaspora Service Launches New Digital Platform",
        description: "A Streamlined Hub for Diaspora Engagement, Services, and Resources",
        content:
            "The Ethiopian Diaspora Service has launched a new digital platform designed to streamline access to services, information, and engagement opportunities for Ethiopians living abroad. The platform offers a user-friendly interface with personalized service recommendations.",
        image: "/News/sectionTwo/Ethiopian Diaspora Service Launches New Digital Platform.webp",
        date: "April 3, 2023",
        category: "Technology",
        featured: true,
    },
    {
        id: "4",
        title: "Diaspora Business & Innovation Expo",
        description:
            "Focused on showcasing Ethiopian-owned businesses abroad and fostering collaboration with local enterprises, featuring product competitions and networking sessions with industry leaders.",
        image: "/News/sectionTwo/Diaspora Business .webp",
        date: "June 15, 2023",
        category: "Business",
    },
    {
        id: "5",
        title: "Ethiopian New Year Celebration (Enkutatash)",
        description:
            "An annual festival showcasing traditional music, dance, cuisine, and authentic Ethiopian culture. Over 2,000 diaspora members attended, strengthening cultural ties and community pride.",
        image: "/News/sectionTwo/newyear.webp",
        date: "Sept 9, 2022",
        category: "Culture",
    },
    {
        id: "6",
        title: "Heritage and Arts Festival",
        description:
            "A multi-day event celebrating Ethiopian art, literature, and history. Featured exhibitions from renowned artists, cultural workshops, and forums showcasing Ethiopia's rich cultural heritage.",
        image: "/News/sectionTwo/Heritage and Arts Festival.webp",
        date: "Oct 12, 2022",
        category: "Arts",
    },
    {
        id: "7",
        title: "Diaspora Leadership Forum (2023)",
        description:
            "Brought together young diaspora leaders to discuss their role in Ethiopia's social and economic transformation.",
        image: "/News/sectionTwo/Diaspora Leadership Forum.webp",
        date: "Nov 1, 2023",
        category: "Leadership",
    },
]

export function getAllNews(): NewsItem[] {
    return newsData
}

export function getFeaturedNews(): NewsItem[] {
    return newsData.filter((item) => item.featured)
}

export function getRecentNews(): NewsItem[] {
    return newsData.filter((item) => !item.featured).slice(0, 6)
}

export function getNewsByCategory(category: string): NewsItem[] {
    return newsData.filter((item) => item.category.toLowerCase() === category.toLowerCase())
}

export function getNewsById(id: string): NewsItem | undefined {
    return newsData.find((item) => item.id === id)
}
