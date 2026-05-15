"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import type { EventItem } from "@/lib/events-data";

const categoryColors: Record<string, string> = {
  webinar: "bg-blue-100 text-blue-800",
  conference: "bg-purple-100 text-purple-800",
  festival: "bg-amber-100 text-amber-800",
  workshop: "bg-green-100 text-green-800",
};

const categoryLabels: Record<string, string> = {
  webinar: "Webinar",
  conference: "Conference",
  festival: "Festival",
  workshop: "Workshop",
};

interface EventsListProps {
  events: EventItem[];
}

export function EventsList({ events }: EventsListProps) {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.refresh();
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <tbody>
      {events.map((event) => (
        <tr
          key={event.id}
          className="border-b border-gray-50 hover:bg-gray-50"
        >
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                {event.image && (
                  <img
                    src={event.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span className="text-sm font-medium text-gray-900 line-clamp-1">
                {event.title}
              </span>
            </div>
          </td>
          <td className="px-6 py-4">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                categoryColors[event.category] || "bg-gray-100 text-gray-800"
              }`}
            >
              {categoryLabels[event.category] || event.category}
            </span>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">{event.date}</td>
          <td className="px-6 py-4 text-sm text-gray-500">
            {event.location}
          </td>
          <td className="px-6 py-4 text-right">
            <div className="flex items-center justify-end gap-2">
              <Link
                href={`/admin/events/${event.id}`}
                className="p-1.5 text-gray-400 hover:text-navy-900 rounded-md hover:bg-gray-100"
              >
                <Pencil size={16} />
              </Link>
              <button
                onClick={() => handleDelete(event.id)}
                className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
