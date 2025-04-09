import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

function ProgramCard({
  title,
  description,
  imageUrl,
  imageAlt,
}: ProgramCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-56">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow p-6 bg-navy-900 text-white">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default function ProgramsInitiatives() {
  const programs = [
    {
      title: "Investment Forums",
      description:
        "Organizing forums to connect diaspora investors with local businesses and government officials, facilitating investment opportunities in Ethiopia.",
      imageUrl:
        "/Home/sectionNine/fitsumarega.webp",
      imageAlt: "Investment forum speaker presenting to audience",
    },
    {
      title: "Cultural Events",
      description:
        "Hosting cultural events and festivals that celebrate Ethiopian heritage, fostering pride and unity among diaspora members.",
      imageUrl:
        "/Home/sectionNine/edtf.webp",
      imageAlt: "Ethiopian Diaspora Trust Fund promotional collage",
    },
    {
      title: "Outreach Programs",
      description:
        "Conducting outreach programs to educate the diaspora about their rights in their country and responsibilities, as well as available resources for support.",
      imageUrl:
        "/Home/sectionNine/celebration.webp",
      imageAlt: "Community outreach gathering with Ethiopian decorations",
    },
    {
      title: "Networking Opportunities",
      description:
        "Creating platforms for networking and collaboration among diaspora communities, encouraging collective action and engagement.",
      imageUrl:
        "/Home/sectionNine/NBE.webp",
      imageAlt: "Networking event with audience listening to speaker",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-flex items-center border border-navy-900 rounded-full px-4 py-1 mb-6">
            <span className="text-navy-900 font-medium">
              PROGRAMS AND INITIATIVES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Driving Change Through Action
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            To achieve its mission and vision, the Ethiopian Diaspora Service
            implements various programs and initiatives, including:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              imageUrl={program.imageUrl}
              imageAlt={program.imageAlt}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-6 text-lg rounded-md"
          >
            <Link href="/events">See More in Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
