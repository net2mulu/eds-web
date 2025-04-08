import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Hard-coded flag to control whether to show the coming soon page
// This should match the value in page.tsx
const SHOW_COMING_SOON = true;

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
        {/* Global watermark - larger and positioned off the corner */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] opacity-[0.5]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-ROiMJW5PhQdeolCdLSoCDHsrzHblYL.png"
              alt="Background watermark"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Only show navigation and footer for the normal site */}
        {!SHOW_COMING_SOON && <Navigation />}
        <main>{children}</main>
        {!SHOW_COMING_SOON && <Footer />}
      </body>
    </html>
  );
}
