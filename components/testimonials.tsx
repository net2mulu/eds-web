"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Card gradient
  const cardGradient =
    "linear-gradient(182.34deg, #11255A 1.96%, #0E5F84 92.03%, #083A51 122.43%)";

  return (
    <section className="w-full py-16 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 transform transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-4">
            <span className="text-navy-900 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-[#0e87be]">
            Voices of Connection & Impact
          </h2>
          <p className="text-lg text-gray-700">
            Hear from Ethiopians worldwide who are building bridges and making a
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Amanuel G. */}
            <div
              className="rounded-lg transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl overflow-hidden floating-card"
              style={{
                background: cardGradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                animationDelay: "0s",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <p className="text-white mb-6 flex-grow">
                  EDS gave me the tools to reconnect with my roots. It's
                  incredible to feel this close to home again
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/80 shadow-glow">
                    <Image
                      src="/Home/sectionSix/avatar.webp"
                      alt="Amanuel G."
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Amanuel G.</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">Sweden</span>
                      <span className="ml-2 text-xl">🇸🇪</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mekdes W */}
            <div
              className="rounded-lg transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl overflow-hidden floating-card"
              style={{
                background: cardGradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transitionDelay: "100ms",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                animationDelay: "0.5s",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <p className="text-white mb-6 flex-grow">
                  Our Diaspora association worked with EDS to launch a clean
                  water project in our hometown. The partnership was seamless,
                  and now over 1,000 families have access to safe drinking
                  water. It's truly life-changing.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/80 shadow-glow">
                    <Image
                      src="/Home/sectionSix/avatar.webp"
                      alt="Mekdes W"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Mekdes W</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">U.K</span>
                      <span className="ml-2 text-xl">🇬🇧</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-6">
            {/* Dawit T */}
            <div
              className="rounded-lg transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl overflow-hidden floating-card"
              style={{
                background: cardGradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "200ms",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                animationDelay: "1s",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <p className="text-white mb-6 flex-grow">
                  Being part of the Cultural Exchange Program was the most
                  enriching experience of my life. I visited Ethiopia for the
                  first time in 15 years and had the chance to share my skills
                  as an engineer with young professionals in Bahir Dar. This
                  program has deepened my pride in being Ethiopian.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/80 shadow-glow">
                    <Image
                      src="/Home/sectionSix/avatar.webp"
                      alt="Dawit T"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Dawit T</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">Canada</span>
                      <span className="ml-2 text-xl">🇨🇦</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sara H. */}
            <div
              className="rounded-lg transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl overflow-hidden floating-card"
              style={{
                background: cardGradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transitionDelay: "400ms",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                animationDelay: "1.5s",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <p className="text-white mb-6 flex-grow">
                  The GERD campaign brought us together as a Diaspora community.
                  Working with EDS gave us the platform to make an impact and
                  show that we're invested in Ethiopia's future.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/80 shadow-glow">
                    <Image
                      src="/Home/sectionSix/avatar.webp"
                      alt="Sara H."
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Sara H.</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">Saudi</span>
                      <span className="ml-2 text-xl">🇸🇦</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Selam B */}
            <div
              className="rounded-lg transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl overflow-hidden floating-card"
              style={{
                background: cardGradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "300ms",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                animationDelay: "0.75s",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <p className="text-white mb-6 flex-grow">
                  Thanks to EDS, I've started a business in Addis and created
                  jobs for 15 people. They've made investing back home so much
                  easier
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/80 shadow-glow">
                    <Image
                      src="/Home/sectionSix/avatar.webp"
                      alt="Selam B"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Selam B</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">U.S</span>
                      <span className="ml-2 text-xl">🇺🇸</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lemlem G. */}
            <div
              className="rounded-lg transform transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl overflow-hidden floating-card"
              style={{
                background: cardGradient,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(80px)",
                transitionDelay: "500ms",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                animationDelay: "1.25s",
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <p className="text-white mb-6 flex-grow">
                  Joining the Diaspora Business & Investment initiative was a
                  turning point for me. I always wanted to give back to
                  Ethiopia, but I didn't know where to start. Today, my small
                  agribusiness in Hawassa is thriving, and I'm proud to create
                  jobs while contributing to Ethiopia's economy.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/80 shadow-glow">
                    <Image
                      src="/Home/sectionSix/avatar.webp"
                      alt="Lemlem G."
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Lemlem G.</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">Finland</span>
                      <span className="ml-2 text-xl">🇫🇮</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
