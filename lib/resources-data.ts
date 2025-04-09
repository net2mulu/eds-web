export interface Resource {
    id: string
    title: string
    description: string
    imageUrl: string
    url?: string
    date: string
    category: string
    categoryId: string
}

export const resourcesData: Resource[] = [
    {
        id: "diaspora-investment-guide",
        title: "Diaspora Investment Guide",
        description:
            "A step-by-step handbook for Ethiopian diaspora members looking to invest in Ethiopia, covering legal requirements, opportunities, and incentives.",
        imageUrl:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbwOEWjbwoYfkSN87ORiRNH2fhmH8y.png#x=403,y=373,w=100,h=100",
        date: "October 28, 2024",
        category: "Guides & Handbooks",
        categoryId: "guides",
    },
    {
        id: "diaspora-engagement-policy",
        title: "Ethiopian Diaspora Engagement Policy",
        description:
            "Official policy outlining the rights, responsibilities, and opportunities for diaspora members in Ethiopia's development.",
        imageUrl:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbwOEWjbwoYfkSN87ORiRNH2fhmH8y.png#x=403,y=530,w=100,h=100",
        date: "October 28, 2024",
        category: "Legal & Policy Documents",
        categoryId: "legal",
    },
    {
        id: "franco-valuta-form",
        title: "Franco Valuta Application Form",
        description:
            "Required form for diaspora members applying for Franco Valuta privileges in investment and business sectors.",
        imageUrl:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbwOEWjbwoYfkSN87ORiRNH2fhmH8y.png#x=403,y=687,w=100,h=100",
        date: "October 28, 2024",
        category: "Forms & Applications",
        categoryId: "forms",
    },
    {
        id: "diaspora-contribution-report",
        title: "Annual Diaspora Contribution Report (2024)",
        description:
            "A detailed report on the economic and social contributions of the Ethiopian diaspora to national development.",
        imageUrl:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbwOEWjbwoYfkSN87ORiRNH2fhmH8y.png#x=403,y=844,w=100,h=100",
        date: "October 28, 2024",
        category: "Reports & Publications",
        categoryId: "reports",
    },
    {
        id: "digital-portal-launch",
        title: "Ethiopian Diaspora Service Launches New Digital Portal",
        description:
            "Official announcement regarding the launch of an online platform to streamline services for diaspora members.",
        imageUrl:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbwOEWjbwoYfkSN87ORiRNH2fhmH8y.png#x=403,y=1001,w=100,h=100",
        date: "October 28, 2024",
        category: "Media & Press Releases",
        categoryId: "media",
    },
    {
        id: "immigration-services",
        title: "Immigration and Citizenship Services",
        description:
            "This the official Link of Immigration and Citizenship Services https://www.ethiopianpassportservices.gov.et/",
        imageUrl:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbwOEWjbwoYfkSN87ORiRNH2fhmH8y.png#x=403,y=1158,w=100,h=100",
        date: "October 28, 2024",
        category: "Official Links",
        categoryId: "links",
    },
]
