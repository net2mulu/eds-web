import { notFound } from "next/navigation";
import { getEventById } from "@/lib/events-data";
import { EventsForm } from "@/components/admin/events-form";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEventById(Number(id));

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Edit Event</h1>
        <p className="text-gray-500 mt-1">Update event details</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <EventsForm initialData={event} isEditing />
      </div>
    </div>
  );
}
