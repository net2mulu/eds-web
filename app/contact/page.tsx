import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";

export const metadata = {
  title: "Contact Us | Ethiopian Diaspora Service",
  description:
    "Get in touch with the Ethiopian Diaspora Service. We're here to help you connect with your roots and contribute to Ethiopia's future.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="CONTACT US" />

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <ContactMap />
    </div>
  );
}
