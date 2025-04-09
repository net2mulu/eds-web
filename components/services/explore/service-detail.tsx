import type { service } from "@/lib/services-data";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h2>
      <p className="text-gray-700 mb-6">{service.fullDescription}</p>

      {service.requirements && service.requirements.length > 0 && (
        <div className="mb-6 bg-white p-5 rounded-md shadow-sm">
          <ul className="list-disc pl-5 space-y-2">
            {service.requirements.map((requirement, index) => (
              <li key={index} className="text-gray-700">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.additionalInfo && service.additionalInfo.length > 0 && (
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="font-medium text-navy-900 mb-2">Remainder:-</h3>
          <ul className="list-disc pl-5 space-y-2">
            {service.additionalInfo.map((info, index) => (
              <li key={index} className="text-gray-700">
                {info}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
