import Image from "next/image";
import SectionHeader from "@/components/section-header";

export default function AboutMission() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <SectionHeader
              label="WHO WE ARE"
              title="A Bridge Between Ethiopia and Its Global Community"
              align="left"
              titleColor="text-navy-900"
            />
            <div className="prose prose-base md:prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                The Ethiopian Diaspora Service is a government initiative
                dedicated to connecting, empowering, and supporting Ethiopians
                living abroad. Our mission is to foster a strong bond between
                the diaspora and their home country, facilitating meaningful
                contributions to Ethiopia's national development while
                celebrating its rich culture and heritage.
              </p>
              <p className="mb-4">
                As a dedicated institution, we serve as the primary bridge
                connecting Ethiopia with its global diaspora community. We work
                tirelessly to strengthen the ties between Ethiopians abroad and
                their homeland, creating pathways for collaboration, investment,
                and cultural exchange.
              </p>
              <p>
                Through our various programs and services, we aim to harness the
                immense potential of the Ethiopian diaspora, channeling their
                skills, resources, and passion toward the sustainable
                development and prosperity of Ethiopia.
              </p>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/About/sectionOne/fitsum3.webp"
                alt="Ethiopian Diaspora Service official speaking at an event"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-8 md:w-12 h-8 md:h-12 bg-gold-400 opacity-20 rounded-full"></div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 md:w-24 h-16 md:h-24 border-4 border-navy-900 opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
