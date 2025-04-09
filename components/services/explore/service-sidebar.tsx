"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import type { ServiceItem } from "@/lib/services-data";

interface ServiceSidebarProps {
  services: ServiceItem[];
  activeServiceId: string;
}

export default function ServiceSidebar({
  services,
  activeServiceId,
}: ServiceSidebarProps) {
  const router = useRouter();

  // Custom click handler to prevent scrolling to top
  const handleServiceClick = (serviceId: string, e: React.MouseEvent) => {
    e.preventDefault();

    // Update URL without scrolling to top
    const url = `/services/explore?service=${serviceId}`;
    router.push(url, { scroll: false });
  };

  return (
    <div className="bg-navy-900 rounded-lg overflow-hidden shadow-md">
      {services.map((service) => (
        <a
          key={service.id}
          href={`/services/explore?service=${service.id}`}
          onClick={(e) => handleServiceClick(service.id, e)}
          className={`block px-4 py-3 border-b border-navy-800 last:border-b-0 transition-colors ${
            service.id === activeServiceId
              ? "bg-white text-navy-900 font-medium"
              : "text-white hover:bg-navy-800"
          }`}
        >
          {service.title}
        </a>
      ))}
    </div>
  );
}
