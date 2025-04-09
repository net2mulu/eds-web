"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ServiceSidebar from "./service-sidebar";
import ServiceDetail from "./service-detail";
import ServiceFAQ from "./service-faq";
import { servicesData } from "@/lib/services-data";

interface ServiceExplorerClientProps {
  initialServiceId: string;
}

export default function ServiceExplorerClient({
  initialServiceId,
}: ServiceExplorerClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get("service") || initialServiceId;
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
  );
}
