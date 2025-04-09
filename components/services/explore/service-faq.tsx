"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  serviceId: string;
}

export default function ServiceFAQ({ serviceId }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Sample FAQs - in a real app, these would come from a database or API
  const faqs: Record<string, FAQItem[]> = {
    "franco-valuta": [
      {
        question: "What is Franco Valuta Service?",
        answer:
          "Franco Valuta Service supports diaspora members in participating in investment and business sectors in Ethiopia by facilitating the import of goods without foreign exchange payment from the Ethiopian banking system.",
      },
      {
        question: "Who is eligible for Franco Valuta Service?",
        answer:
          "Ethiopian diaspora members who have issued permission to participate in various investment and business sectors are eligible for this service.",
      },
      {
        question: "How long does the application process take?",
        answer:
          "The application process typically takes 5-7 business days once all required documents are submitted correctly.",
      },
      {
        question: "Can I apply for Franco Valuta Service online?",
        answer:
          "Yes, you can initiate the application process online through the Ethiopian Diaspora Service portal, but some documents may need to be submitted in person or through a representative.",
      },
    ],
    "investment-support": [
      {
        question: "What types of investments are supported?",
        answer:
          "The Investment Support Service assists with various sectors including manufacturing, agriculture, tourism, mining, and technology investments in Ethiopia.",
      },
      {
        question: "What are the minimum investment requirements?",
        answer:
          "Minimum investment requirements vary by sector, ranging from $50,000 to $200,000 depending on the industry and location.",
      },
    ],
  };

  const serviceFaqs = faqs[serviceId] || [];

  if (serviceFaqs.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-navy-900 mb-4">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {serviceFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left font-medium text-navy-900"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-navy-900" />
              ) : (
                <Plus className="h-5 w-5 text-navy-900" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
