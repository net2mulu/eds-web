"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ServiceExplorer from "@/components/services/explore/service-explorer";
import ServiceSidebar from "@/components/services/explore/service-sidebar";
import ServiceDetail from "@/components/services/explore/service-detail";
import ServiceFAQ from "@/components/services/explore/service-faq";
import { servicesData } from "@/lib/services-data";

export default function ExplorePage() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service") || "franco-valuta";
  const [activeService, setActiveService] = useState(
    servicesData.find((s) => s.id === serviceId) || servicesData[0]
  );
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const service = servicesData.find((s) => s.id === serviceId);
    if (service) {
      setActiveService(service);
    }

    // Don't scroll on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [serviceId]);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Service Explorer with horizontal scrolling */}
      <ServiceExplorer
        services={servicesData}
        activeServiceId={activeService.id}
      />

      {/* Service Detail Section */}
      <div ref={contentRef} className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ServiceSidebar
              services={servicesData}
              activeServiceId={activeService.id}
            />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            <ServiceDetail service={activeService} />
            <ServiceFAQ serviceId={activeService.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
