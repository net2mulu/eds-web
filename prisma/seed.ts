import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newsData = [
  {
    id: "1",
    title: "Ethiopian Diaspora Service reviewing decade-old Diaspora policy",
    description: "Addis Ababa, November 14, 2024 (EPC) \u2013 The Ethiopian Diaspora Service in collaboration with Wollo, Jimma, and Addis Ababa Universities is reviewing the country's decade-old diaspora policy.",
    content: "The Ethiopian Diaspora Service has initiated a comprehensive review of the country's diaspora policy, which has been in place for over a decade. This initiative aims to update the policy framework to better address the evolving needs of the Ethiopian diaspora community worldwide and enhance their contribution to national development.",
    image: "/News/sectionOne/fitsum4.webp",
    date: "Nov 14, 2024",
    category: "Policy",
    featured: true,
  },
  {
    id: "2",
    title: "Global Ethiopian Professionals Networking Night",
    description: "Bringing Together Ethiopian Experts Worldwide for Knowledge Exchange and Collaboration",
    content: "The Global Ethiopian Professionals Networking Night successfully connected Ethiopian professionals from various fields across the globe.",
    image: "/News/sectionTwo/Global Ethiopian Professionals Networking Night.webp",
    date: "Jan 3, 2024",
    category: "Event",
    featured: true,
  },
  {
    id: "3",
    title: "Ethiopian Diaspora Service Launches New Digital Platform",
    description: "A Streamlined Hub for Diaspora Engagement, Services, and Resources",
    content: "The Ethiopian Diaspora Service has launched a new digital platform designed to streamline access to services.",
    image: "/News/sectionTwo/Ethiopian Diaspora Service Launches New Digital Platform.webp",
    date: "April 3, 2023",
    category: "Technology",
    featured: true,
  },
  {
    id: "4",
    title: "Diaspora Business & Innovation Expo",
    description: "Focused on showcasing Ethiopian-owned businesses abroad and fostering collaboration with local enterprises.",
    image: "/News/sectionTwo/Diaspora Business .webp",
    date: "June 15, 2023",
    category: "Business",
  },
  {
    id: "5",
    title: "Ethiopian New Year Celebration (Enkutatash)",
    description: "An annual festival showcasing traditional music, dance, cuisine, and authentic Ethiopian culture.",
    image: "/News/sectionTwo/newyear.webp",
    date: "Sept 9, 2022",
    category: "Culture",
  },
  {
    id: "6",
    title: "Heritage and Arts Festival",
    description: "A multi-day event celebrating Ethiopian art, literature, and history.",
    image: "/News/sectionTwo/Heritage and Arts Festival.webp",
    date: "Oct 12, 2022",
    category: "Arts",
  },
  {
    id: "7",
    title: "Diaspora Leadership Forum (2023)",
    description: "Brought together young diaspora leaders to discuss their role in Ethiopia's social and economic transformation.",
    image: "/News/sectionTwo/Diaspora Leadership Forum.webp",
    date: "Nov 1, 2023",
    category: "Leadership",
  },
];

const eventsData = [
  {
    title: "Cultural Exchange Webinar",
    description: "Join a panel of Ethiopian cultural experts and community leaders for an insightful discussion.",
    date: "Jan 14, 2025",
    time: "7:00 PM EST",
    location: "Online via Zoom",
    image: "/Home/sectionEight/CulturalExchange.webp",
    category: "webinar",
  },
  {
    title: "Ethiopian Diaspora encouraged to embrace economic reforms",
    description: "As part of the event, a Bazaar and Exhibition showcasing financial institutions.",
    date: "Jan 22, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Addis Ababa Exhibition Center",
    image: "/Home/sectionEight/Ethiopian.webp",
    category: "conference",
  },
  {
    title: "Ethiopian Heritage Festival Exchange Webinar",
    description: "A celebration of Ethiopian music, art, food, and culture.",
    date: "Jan 4, 2025",
    time: "2:00 PM EST",
    location: "Online via Zoom",
    image: "/Home/sectionEight/lalibela.webp",
    category: "festival",
  },
];

async function main() {
  console.log("Seeding news...");
  for (const item of newsData) {
    await prisma.news.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
  }

  console.log("Seeding events...");
  for (const event of eventsData) {
    await prisma.event.create({ data: event });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
