"use client";

import AnimatedCounter from "@/components/animated-counter";

export default function DiasporaImpact() {
  const impactStats = [
    {
      value: "587.8M",
      unit: "ETB",
      description: "COVID-19 Prevention Funding",
    },
    {
      value: "3.56 B",
      unit: "ETB",
      description:
        "Rehabilitation, Humanitarian Support, and Philanthropic Activities",
    },
    {
      value: "59.4 M",
      unit: "ETB",
      description: "Gebeta Lehager Project",
    },
    {
      value: "1.44 B",
      unit: "ETB",
      description: "Wealth Collected for the Grand Ethiopian Renaissance Dam",
    },
    {
      value: "9,510",
      unit: "MEMBERS",
      description:
        "Diaspora Members Recruited and Supported for Investment and Trade",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-4 py-1 border border-navy-900 rounded-full text-navy-900 font-medium mb-6">
            Diaspora Development Participation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-navy-900 max-w-4xl mx-auto">
            Impacting Ethiopia's Development Through the Power of the Diaspora
          </h2>
        </div>

        {/* Stats grid - centered layout */}
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {/* First row - 3 stats */}
          <div className="flex flex-wrap justify-center w-full mb-8">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <AnimatedCounter
                value={impactStats[0].value}
                unit={impactStats[0].unit}
                description={impactStats[0].description}
                delay={0}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <AnimatedCounter
                value={impactStats[1].value}
                unit={impactStats[1].unit}
                description={impactStats[1].description}
                delay={200}
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <AnimatedCounter
                value={impactStats[2].value}
                unit={impactStats[2].unit}
                description={impactStats[2].description}
                delay={400}
              />
            </div>
          </div>

          {/* Second row - 2 stats */}
          <div className="flex flex-wrap justify-center w-full">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <AnimatedCounter
                value={impactStats[3].value}
                unit={impactStats[3].unit}
                description={impactStats[3].description}
                delay={600}
              />
            </div>
            <div className="w-full md:w-1/3 px-4">
              <AnimatedCounter
                value={impactStats[4].value}
                unit={impactStats[4].unit}
                description={impactStats[4].description}
                delay={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
