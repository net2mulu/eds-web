import ServiceHeader from "@/components/services/service-header";
import ServiceOverview from "@/components/services/service-overview";
import ServiceCards from "@/components/services/service-cards";
import OfficialLinks from "@/components/services/official-links";

export const metadata = {
  title: "Services | Ethiopian Diaspora Service",
  description:
    "Explore the range of services offered by the Ethiopian Diaspora Service to empower the Ethiopian diaspora and foster their connection with their homeland.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <ServiceOverview />
      <ServiceCards />
      <OfficialLinks />
    </div>
  );
}
