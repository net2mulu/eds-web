import { servicesData } from "@/lib/services-data";
import Link from "next/link";

export default function ExplorePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const serviceId =
    typeof searchParams.service === "string"
      ? searchParams.service
      : "franco-valuta";
  const activeService =
    servicesData.find((s) => s.id === serviceId) || servicesData[0];

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="w-full bg-navy-900 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
            Explore Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            {servicesData.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                href={`/services/explore?service=${service.id}`}
                className={`bg-white rounded-lg p-6 transition-all ${
                  service.id === activeService.id
                    ? "ring-4 ring-white/50"
                    : "hover:ring-2 hover:ring-white/30"
                }`}
              >
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                <div className="inline-flex items-center text-navy-900 font-medium">
                  LEARN MORE
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-navy-900 rounded-lg overflow-hidden shadow-md">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/services/explore?service=${service.id}`}
                className={`block px-4 py-3 border-b border-navy-800 last:border-b-0 transition-colors ${
                  service.id === activeService.id
                    ? "bg-white text-navy-900 font-medium"
                    : "text-white hover:bg-navy-800"
                }`}
              >
                {service.title}
              </Link>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-navy-900 mb-4">
                {activeService.title}
              </h1>
              <p className="text-gray-700 mb-6">{activeService.description}</p>

              {activeService.requirements &&
                activeService.requirements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium text-navy-900 mb-2">
                      Requirements:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {activeService.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {activeService.remainder &&
                activeService.remainder.length > 0 && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-navy-900 mb-2">
                      Remainder:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {activeService.remainder.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
