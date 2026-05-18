"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Newspaper, Calendar, Plus, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ news: 0, events: 0 });

  useEffect(() => {
    async function loadStats() {
      try {
        const [newsRes, eventsRes] = await Promise.all([
          fetch("/api/news"),
          fetch("/api/events"),
        ]);
        const newsData = await newsRes.json();
        const eventsData = await eventsRes.json();
        setStats({
          news: newsData.news?.length || 0,
          events: eventsData.events?.length || 0,
        });
      } catch (error) {
        console.error("Failed to load stats", error);
      }
    }
    loadStats();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Manage your news articles and events
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Newspaper className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-3xl font-bold text-navy-900">
              {stats.news}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-navy-900">News Articles</h3>
          <p className="text-gray-500 text-sm mt-1">
            Total news articles published
          </p>
          <Link
            href="/admin/news"
            className="flex items-center gap-1 text-gold-500 hover:text-gold-600 font-medium text-sm mt-4"
          >
            View all news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-50 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-3xl font-bold text-navy-900">
              {stats.events}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-navy-900">Events</h3>
          <p className="text-gray-500 text-sm mt-1">
            Total events scheduled
          </p>
          <Link
            href="/admin/events"
            className="flex items-center gap-1 text-gold-500 hover:text-gold-600 font-medium text-sm mt-4"
          >
            View all events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-navy-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/admin/news/new"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gold-400 hover:bg-gold-50/50 transition-all group"
          >
            <div className="bg-gold-50 p-2 rounded-lg group-hover:bg-gold-100 transition-colors">
              <Plus className="h-5 w-5 text-gold-500" />
            </div>
            <div>
              <p className="font-semibold text-navy-900">Add News</p>
              <p className="text-sm text-gray-500">
                Create a new news article
              </p>
            </div>
          </Link>
          <Link
            href="/admin/events/new"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gold-400 hover:bg-gold-50/50 transition-all group"
          >
            <div className="bg-gold-50 p-2 rounded-lg group-hover:bg-gold-100 transition-colors">
              <Plus className="h-5 w-5 text-gold-500" />
            </div>
            <div>
              <p className="font-semibold text-navy-900">Add Event</p>
              <p className="text-sm text-gray-500">
                Schedule a new event
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
