"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ResourcesSidebarProps {
  selectedContentType: string | null;
  setSelectedContentType: (type: string | null) => void;
  selectedMonth: string | null;
  setSelectedMonth: (month: string | null) => void;
  selectedTimeframe: string | null;
  setSelectedTimeframe: (timeframe: string | null) => void;
}

export default function ResourcesSidebar({
  selectedContentType,
  setSelectedContentType,
  selectedMonth,
  setSelectedMonth,
  selectedTimeframe,
  setSelectedTimeframe,
}: ResourcesSidebarProps) {
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  const contentTypes = [
    { id: "guides", label: "Guides & Handbooks" },
    { id: "legal", label: "Legal & Policy Documents" },
    { id: "forms", label: "Forms & Applications" },
    { id: "reports", label: "Reports & Publications" },
    { id: "media", label: "Media & Press Releases" },
    { id: "links", label: "Official Links" },
  ];

  const months = ["November", "October", "September", "August"];

  const timeframes = [
    { id: "today", label: "Today" },
    { id: "week", label: "This week" },
    { id: "month", label: "This month" },
    { id: "year", label: "This year" },
  ];

  return (
    <div className="space-y-6">
      {/* Content type filter */}
      <div className="bg-blue-50 rounded-md overflow-hidden">
        <div className="bg-blue-200 p-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-navy-900"
          >
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
          </svg>
          <span className="font-medium text-navy-900">Content type</span>
        </div>
        <div className="p-3 space-y-3">
          {contentTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <input
                type="radio"
                id={`type-${type.id}`}
                name="content-type"
                className="h-4 w-4 text-navy-900 focus:ring-navy-900"
                checked={selectedContentType === type.id}
                onChange={() =>
                  setSelectedContentType(
                    selectedContentType === type.id ? null : type.id
                  )
                }
              />
              <label htmlFor={`type-${type.id}`} className="ml-2 text-gray-700">
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Month filter */}
      <div className="bg-blue-50 rounded-md overflow-hidden">
        <div
          className="bg-blue-200 p-3 flex items-center justify-between cursor-pointer"
          onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-navy-900"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span className="font-medium text-navy-900">Select Month</span>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-navy-900 transition-transform ${
              isMonthDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        {isMonthDropdownOpen && (
          <div className="p-3 space-y-3 border-t border-blue-100">
            {months.map((month) => (
              <div key={month} className="flex items-center">
                <input
                  type="radio"
                  id={`month-${month}`}
                  name="month"
                  className="h-4 w-4 text-navy-900 focus:ring-navy-900"
                  checked={selectedMonth === month}
                  onChange={() =>
                    setSelectedMonth(selectedMonth === month ? null : month)
                  }
                />
                <label
                  htmlFor={`month-${month}`}
                  className="ml-2 text-gray-700"
                >
                  {month}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Posted at filter */}
      <div className="bg-blue-50 rounded-md overflow-hidden">
        <div className="bg-blue-200 p-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-navy-900"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-medium text-navy-900">Posted at</span>
        </div>
        <div className="p-3 space-y-3">
          {timeframes.map((timeframe) => (
            <div key={timeframe.id} className="flex items-center">
              <input
                type="radio"
                id={`time-${timeframe.id}`}
                name="timeframe"
                className="h-4 w-4 text-navy-900 focus:ring-navy-900"
                checked={selectedTimeframe === timeframe.id}
                onChange={() =>
                  setSelectedTimeframe(
                    selectedTimeframe === timeframe.id ? null : timeframe.id
                  )
                }
              />
              <label
                htmlFor={`time-${timeframe.id}`}
                className="ml-2 text-gray-700"
              >
                {timeframe.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
