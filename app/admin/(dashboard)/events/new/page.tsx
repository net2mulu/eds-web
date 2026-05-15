import { EventsForm } from "@/components/admin/events-form";

export default function NewEventPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Create Event</h1>
        <p className="text-gray-500 mt-1">Add a new upcoming event</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <EventsForm />
      </div>
    </div>
  );
}
