import { cn } from "@/lib/utils";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

function ServiceCard({
  number,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-navy-900 rounded-lg p-6 md:p-8 text-white h-full",
        className
      )}
    >
      <div className="text-6xl md:text-7xl font-bold opacity-30 mb-4">
        {number}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-block px-4 py-1 border border-navy-900 rounded-full text-navy-900 font-medium mb-6">
            What we do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 max-w-3xl">
            Creating Opportunities and Strengthening Ties Between Ethiopia and
            the World
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            number="1"
            title="Support & Empowerment"
            description="We provide essential resources to Ethiopians abroad, helping them navigate legal, financial, and social challenges with confidence and ease"
          />

          <ServiceCard
            number="2"
            title="Cultural Connection"
            description="We promote Ethiopian culture and heritage by encouraging diaspora communities to actively participate in cultural events, traditions, and celebrations"
          />

          <ServiceCard
            number="3"
            title="Investment Opportunities"
            description="Our platform facilitates investment by equipping diaspora members with the knowledge and support they need to make impactful contributions to Ethiopia's economy"
          />

          <ServiceCard
            number="4"
            title="Community Engagement"
            description="Through outreach programs, collaboration, and knowledge sharing, we strengthen ties between diaspora communities and local populations"
          />

          <ServiceCard
            number="5"
            title="Harnessing Potential"
            description="By tapping into the knowledge, skills, and expertise of Ethiopians worldwide, we aim to drive progress across various sectors in Ethiopia"
          />
        </div>
      </div>
    </section>
  );
}
