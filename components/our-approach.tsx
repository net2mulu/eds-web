import Image from "next/image";

interface ApproachCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

function ApproachCard({
  title,
  description,
  imageUrl,
  imageAlt,
}: ApproachCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group h-full">
      {/* Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  );
}

export default function OurApproach() {
  const approachCards = [
    {
      title: "Engagement",
      description:
        "Creating connections through cultural programs and transparent communication.",
      imageUrl:
        "/Home/sectionThree/culture.webp",
      imageAlt: "Ethiopian women in traditional dress at a cultural event",
    },
    {
      title: "Empowerment",
      description:
        "Equipping Ethiopians abroad to actively shape Ethiopia's future.",
      imageUrl:
        "/Home/sectionThree/city.webp",
      imageAlt: "Night cityscape of Addis Ababa showing urban development",
    },
    {
      title: "Integration",
      description:
        "Fostering unity among generations and addressing global realities.",
      imageUrl:
        "/Home/sectionThree/children.webp",
      imageAlt: "Smiling Ethiopian children representing future generations",
    },
    {
      title: "Collaboration",
      description:
        "Working with local and international partners for sustained progress.",
      imageUrl:
        "/Home/sectionThree/hands.webp",
      imageAlt:
        "Hands joined together representing collaboration and partnership",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-4 py-1 border border-navy-900 rounded-full text-navy-900 font-medium mb-6">
            OUR APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-navy-900">
            Building Bridges, Driving Progress
          </h2>
        </div>

        {/* Two rows with specific width distributions */}
        <div className="space-y-6">
          {/* First row: 40% | 60% */}
          <div className="flex flex-col md:flex-row gap-6 h-[250px]">
            <div className="w-full md:w-[40%] h-full">
              <ApproachCard
                title={approachCards[0].title}
                description={approachCards[0].description}
                imageUrl={approachCards[0].imageUrl}
                imageAlt={approachCards[0].imageAlt}
              />
            </div>
            <div className="w-full md:w-[60%] h-full">
              <ApproachCard
                title={approachCards[1].title}
                description={approachCards[1].description}
                imageUrl={approachCards[1].imageUrl}
                imageAlt={approachCards[1].imageAlt}
              />
            </div>
          </div>

          {/* Second row: 60% | 40% */}
          <div className="flex flex-col md:flex-row gap-6 h-[250px]">
            <div className="w-full md:w-[60%] h-full">
              <ApproachCard
                title={approachCards[2].title}
                description={approachCards[2].description}
                imageUrl={approachCards[2].imageUrl}
                imageAlt={approachCards[2].imageAlt}
              />
            </div>
            <div className="w-full md:w-[40%] h-full">
              <ApproachCard
                title={approachCards[3].title}
                description={approachCards[3].description}
                imageUrl={approachCards[3].imageUrl}
                imageAlt={approachCards[3].imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
