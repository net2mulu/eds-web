import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// This should match the value in page.tsx
const SHOW_COMING_SOON = false;

export const metadata: Metadata = {
  title: SHOW_COMING_SOON
    ? "Ethiopian Diaspora Service - Coming Soon"
    : "Ethiopian Diaspora Service",
  description:
    "Connecting Ethiopia's global community to foster unity, cultural pride, and national progress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative`}>
        {/* Only show navigation and footer for the normal site */}
        {!SHOW_COMING_SOON && <Navigation />}
        <main>{children}</main>
        {!SHOW_COMING_SOON && <Footer />}
      </body>
    </html>
  );
}
