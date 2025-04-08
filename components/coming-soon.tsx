"use client";

import type React from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-navy-900 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-navy-900 opacity-10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gold-400 opacity-10 rounded-full"></div>

      {/* Vector graphic in bottom right corner - partially visible */}
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] pointer-events-none z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-XtohcHGu4U1j0l8aNAwCgaFW1eVU9O.png"
          alt="Decorative vector"
          fill
          className="object-contain opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in-down">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20%281%29-frb9OMQGJ8kY7zQzmbFmER06HXw6NT.png"
            alt="Ethiopian Diaspora Service Logo"
            width={300}
            height={100}
            className="h-auto w-auto"
            priority
          />
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 animate-fade-in-up">
          Coming Soon
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-in-up animation-delay-300">
          We're working hard to bring you the new Ethiopian Diaspora Service
          website. Stay tuned for updates as we prepare to launch.
        </p>

        {/* Email Notification Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md animate-fade-in-up animation-delay-600"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="group bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                Notify Me
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-md animate-fade-in-up">
            Thank you! We'll notify you when we launch.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-gray-500 text-sm">
        © 2024 — Ethiopian Diaspora Service. All rights reserved.
      </div>
    </div>
  );
}
