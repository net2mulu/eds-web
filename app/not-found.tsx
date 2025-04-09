"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a production app, this would go to a search results page
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main content area with animation */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          <div className="text-center">
            {/* Animated logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20%281%29-frb9OMQGJ8kY7zQzmbFmER06HXw6NT.png"
                alt="Ethiopian Diaspora Service Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </motion.div>

            {/* Error code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-9xl font-bold text-navy-900">404</span>
            </motion.div>

            {/* Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 mb-8 max-w-md mx-auto"
            >
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </motion.p>

            {/* Search form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-8"
            >
              <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
                <div className="relative flex-grow">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search for something..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-l-none bg-navy-900 hover:bg-navy-800"
                >
                  Search
                </Button>
              </form>
            </motion.div>

            {/* Navigation options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-navy-900 text-white px-6 py-3 rounded-md hover:bg-navy-800 transition-colors"
              >
                <Home className="mr-2" size={16} />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white border border-navy-900 text-navy-900 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact Support
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer with links */}
      <div className="py-6 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-600 text-sm">
            <Link href="/" className="hover:text-navy-900">
              Home
            </Link>
            <Link href="/about" className="hover:text-navy-900">
              About Us
            </Link>
            <Link href="/services" className="hover:text-navy-900">
              Services
            </Link>
            <Link href="/news-events" className="hover:text-navy-900">
              News & Events
            </Link>
            <Link href="/resources" className="hover:text-navy-900">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-navy-900">
              Contact
            </Link>
          </div>
          <div className="text-center mt-4 text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Ethiopian Diaspora Service. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
