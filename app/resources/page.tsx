import PageHeader from "@/components/page-header";
import ResourcesContent from "@/components/resources/resources-content";

export const metadata = {
  title: "Resources | Ethiopian Diaspora Service",
  description:
    "Access guides, documents, forms, and publications to support Ethiopian diaspora members in connecting with their homeland.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="RESOURCES" />
      <ResourcesContent />
    </div>
  );
}
