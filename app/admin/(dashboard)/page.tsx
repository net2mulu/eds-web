import Link from "next/link";
import { Newspaper, Calendar, Plus } from "lucide-react";
import { getAllNews } from "@/lib/news-data";
import { getAllEvents } from "@/lib/events-data";

export default async function AdminDashboard() {
  const [news, events] = await Promise.all([getAllNews(), getAllEvents()]);

  const stats = [
    {
      label: "Total News",
      value: news.length,
      icon: Newspaper,
      color: "bg-blue-500",
      href: "/admin/news",
    },
    {
      label: "Featured News",
      value: news.filter((n) => n.featured).length,
      icon: Newspaper,
      color: "bg-gold-500",
      href: "/admin/news",
    },
    {
      label: "Total Events",
      value: events.length,
      icon: Calendar,
      color: "bg-purple-500",
      href: "/admin/events",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Manage news and events for the website
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/news/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 text-sm font-medium"
          >
            <Plus size={16} />
            New News
          </Link>
          <Link
            href="/admin/events/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-navy-900 rounded-lg hover:bg-gold-500 text-sm font-medium"
          >
            <Plus size={16} />
            New Event
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-3xl font-bold text-navy-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-navy-900 mb-4">
            Recent News
          </h2>
          <div className="space-y-3">
            {news.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Newspaper size={16} className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                {item.featured && (
                  <span className="text-xs bg-gold-100 text-gold-600 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            ))}
            {news.length === 0 && (
              <p className="text-sm text-gray-400">No news items yet.</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-navy-900 mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {events.slice(0, 5).map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Calendar size={16} className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {event.date} &middot; {event.location}
                  </p>
                </div>
              </div>
            ))}
            {events.length === 0 && (
              <p className="text-sm text-gray-400">No events yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
