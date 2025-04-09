import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactSocial() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-6">
          Connect With Us
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Follow us on social media to stay updated with the latest news,
          events, and opportunities for the Ethiopian diaspora community.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 text-navy-900" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6 text-navy-900" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-navy-900" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-navy-900" />
          </a>
        </div>
      </div>
    </div>
  );
}
