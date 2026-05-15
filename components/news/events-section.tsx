import type { EventItem } from "@/lib/events-data";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EventsSectionProps {
  events: EventItem[];
}

const categoryColors: Record<string, { badge: string; accent: string }> = {
  webinar: {
    badge: "bg-blue-100 text-blue-800",
    accent: "border-l-blue-500",
  },
  conference: {
    badge: "bg-purple-100 text-purple-800",
    accent: "border-l-purple-500",
  },
  festival: {
    badge: "bg-amber-100 text-amber-800",
    accent: "border-l-amber-500",
  },
  workshop: {
    badge: "bg-green-100 text-green-800",
    accent: "border-l-green-500",
  },
};

export function EventsSection({ events }: EventsSectionProps) {
  if (events.length === 0) return null;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-4">
            <span className="text-gray-700 font-medium">Events</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-navy-900">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay connected with the Ethiopian Diaspora community by joining us
            at our upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto my-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`p-0 overflow-hidden border-l-4 ${
                categoryColors[event.category]?.accent || "border-l-gray-500"
              } shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <span
                    className={`text-xs font-bold inline-block px-2 py-1 rounded-full mb-3 ${
                      categoryColors[event.category]?.badge ||
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {event.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="bg-gold-400 hover:bg-gold-500 text-white group">
                    Register Now
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
