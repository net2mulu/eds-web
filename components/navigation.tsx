"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-0">
      <header className="fixed top-4 left-0 right-0 z-50 w-full transition-all duration-300 px-4">
        <div
          className={cn(
            "w-full mx-auto rounded-xl transition-all duration-300 shadow-lg",
            isHomePage
              ? "bg-[#3B3B3B99] backdrop-blur-md"
              : isScrolled
              ? "bg-white/95 backdrop-blur-sm"
              : "bg-white"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src={isHomePage ? "/EDS 2.png" : "/EDS B 2.png"}
                alt="Ethiopian Diaspora Service Logo"
                width={180}
                height={60}
                className="h-12 w-auto "
              />
            </Link>

            {isMobile ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  className={isHomePage ? "text-white" : "text-navy-900"}
                >
                  <Menu className="h-6 w-6" />
                </Button>

                {isMenuOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg py-4 z-50 border border-gray-100">
                    <nav className="flex flex-col space-y-2 px-4">
                      <Link
                        href="/"
                        className="text-navy-900 hover:text-gold-400 transition-colors py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-navy-900 hover:text-gold-400 transition-colors py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/services"
                        className="text-navy-900 hover:text-gold-400 transition-colors py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                      <Link
                        href="/donate"
                        className="text-navy-900 hover:text-gold-400 transition-colors py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Donations
                      </Link>
                      <Link
                        href="/news"
                        className="text-navy-900 hover:text-gold-400 transition-colors py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        News and Events
                      </Link>
                      <Link
                        href="/resources"
                        className="text-navy-900 hover:text-gold-400 transition-colors py-3 border-b border-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Resources
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-gold-400 text-navy-900 hover:bg-gold-500 transition-colors py-3 px-4 rounded text-center mt-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <nav className="flex items-center space-x-8">
                <Link
                  href="/"
                  className={cn(
                    "hover:text-gold-400 transition-colors",
                    isHomePage ? "text-white" : "text-navy-900"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "hover:text-gold-400 transition-colors",
                    isHomePage ? "text-white" : "text-navy-900"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    "hover:text-gold-400 transition-colors",
                    isHomePage ? "text-white" : "text-navy-900"
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/donate"
                  className={cn(
                    "hover:text-gold-400 transition-colors",
                    isHomePage ? "text-white" : "text-navy-900"
                  )}
                >
                  Donations
                </Link>
                <Link
                  href="/news"
                  className={cn(
                    "hover:text-gold-400 transition-colors",
                    isHomePage ? "text-white" : "text-navy-900"
                  )}
                >
                  News and Events
                </Link>
                <Link
                  href="/resources"
                  className={cn(
                    "hover:text-gold-400 transition-colors",
                    isHomePage ? "text-white" : "text-navy-900"
                  )}
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="bg-gold-400 text-navy-900 hover:bg-gold-500 transition-colors py-2 px-6 rounded"
                >
                  Contact Us
                </Link>
              </nav>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
