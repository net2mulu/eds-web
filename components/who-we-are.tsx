import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="inline-block px-4 py-1 border border-navy-900 rounded-full text-navy-900 font-medium mb-6">
              WHO WE ARE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e87be] mb-6">
              Fostering Global Unity for a Prosperous Ethiopia
            </h2>
            <p className="text-gray-700 text-lg">
              Ethiopian Diaspora Services (EDS) is a dedicated institution
              bridging Ethiopia with its global Diaspora. Our mission is to
              empower Ethiopians abroad to contribute to the nation's
              development while nurturing cultural ties and fostering unity. EDS
              embodies the shared responsibility of building a united and
              prosperous Ethiopia
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3AM2QkxVY5le8Utijhso1OVD19xQ76.png"
                alt="Ethiopians celebrating with flags"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
