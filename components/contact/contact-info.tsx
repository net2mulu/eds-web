import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-navy-900 text-white rounded-xl p-8 h-full">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p className="text-gray-300 mb-8">Stay Connected, We're Here to Help.</p>

      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-300">011 554 4600</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-300">diaspora.service@mfa.gov.et</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-300">
              Addis Ababa, Kazanchis, Between Intercontinental and Jupiter
              International Hotels. Located in Bloom Tower @5th & 6th floor,
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 mr-4 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Working Hours</p>
            <p className="text-gray-300">
              Monday - Friday, 9:00 AM - 5:00 PM (EAT)
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFFFFF"
            d="M45.3,-59.1C58.9,-51.1,70.2,-37.8,76.1,-22.1C82,-6.4,82.5,11.7,75.8,26.1C69.1,40.5,55.3,51.3,40.3,58.4C25.4,65.5,9.3,68.9,-5.9,66.7C-21.2,64.5,-35.6,56.7,-48.2,45.8C-60.8,34.9,-71.5,20.9,-74.3,5.1C-77.1,-10.7,-72,-28.3,-61.3,-39.9C-50.6,-51.5,-34.3,-57.1,-19.3,-64.5C-4.3,-71.9,10.4,-81.1,25.3,-78.5C40.2,-75.9,55.3,-61.5,45.3,-59.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}
