"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ResourceCard from "./resource-card";
import { resourcesData } from "@/lib/resources-data";
import ResourcesSidebar from "./resources-sidebar";

export default function ResourcesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContentType, setSelectedContentType] = useState<string | null>(
    null
  );
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string | null>(
    null
  );

  // Filter resources based on search query and filters
  const filteredResources = resourcesData.filter((resource) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Content type filter
    const matchesContentType =
      selectedContentType === null || resource.category === selectedContentType;

    // Month filter (simplified for demo)
    const matchesMonth =
      selectedMonth === null || resource.date.includes(selectedMonth);

    // Timeframe filter (simplified for demo)
    const matchesTimeframe = selectedTimeframe === null;

    return (
      matchesSearch && matchesContentType && matchesMonth && matchesTimeframe
    );
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Search bar */}
        <div className="flex justify-end mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="md:col-span-1">
            <ResourcesSidebar
              selectedContentType={selectedContentType}
              setSelectedContentType={setSelectedContentType}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              selectedTimeframe={selectedTimeframe}
              setSelectedTimeframe={setSelectedTimeframe}
            />
          </div>

          {/* Main content */}
          <div className="md:col-span-3 space-y-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
