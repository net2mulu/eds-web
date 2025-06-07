import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, BookOpen, Stethoscope, Building, Droplet } from "lucide-react";

export default function DonationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-[#0a1e56] text-white py-16 md:py-24 ">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 pt-20">
            Together, We Build Ethiopia
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Join us in our mission to strengthen Ethiopia through unity,
            resilience, and collective contribution.
          </p>
          <Button
            className="bg-[#f0ad4e] hover:bg-[#eea236] text-[#0a1e56] font-bold text-lg px-8 py-6"
            size="lg"
            asChild
          >
            <a href="#donate">Donate Now</a>
          </Button>
        </div>
      </section>

      {/* Ambassador's Message */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Ambassador Photo - Full Width */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src="/About/sectionOne/fitsum3.webp"
                  alt="Ambassador Fitsum Arega"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    Ambassador Fitsum Arega
                  </h3>
                  <p className="text-lg text-gray-200">
                    Ethiopian Diaspora Service
                  </p>
                  <div className="w-16 h-1 bg-[#f0ad4e] rounded-full mt-3"></div>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-8 lg:p-12">
                <div className="relative">
                  <div className="absolute -top-4 -left-2 text-6xl text-[#0a1e56] opacity-20 font-serif">
                    "
                  </div>
                  <h2 className="text-3xl font-bold text-[#0a1e56] mb-6">
                    A Message of Hope and Unity
                  </h2>

                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold text-[#0a1e56]">
                        Fellow Ethiopians,
                      </span>
                    </p>

                    <p className="leading-relaxed">
                      Ethiopia stands as a testament to resilience, unity, and
                      boundless potential. Our nation's journey is marked by the
                      collective efforts of its people — each contribution
                      weaving into the fabric of our shared destiny.
                    </p>

                    <p className="leading-relaxed">
                      Every act of generosity, whether grand or humble, fuels
                      the engine of progress. It's through these selfless
                      gestures that we empower communities, nurture dreams, and
                      lay the foundation for a brighter tomorrow.
                    </p>

                    <p className="leading-relaxed">
                      Your support transcends mere donation; it becomes a beacon
                      of hope, a catalyst for change, and a pledge to the
                      enduring spirit of Ethiopia.
                    </p>

                    <div className="bg-[#0a1e56]/5 rounded-lg p-6 my-6">
                      <p className="font-semibold text-[#0a1e56] mb-3">
                        Let us join hands in this noble endeavor. Together, we
                        can:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#f0ad4e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Elevate Education:</strong> Opening doors to
                            knowledge for every child.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#f0ad4e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Enhance Healthcare:</strong> Ensuring
                            well-being reaches every corner.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#f0ad4e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Empower Economies:</strong> Fostering
                            opportunities that uplift lives.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[#f0ad4e] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Enrich Communities:</strong> Building
                            infrastructures that stand the test of time.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed">
                      Your contribution is more than a gift; it's an investment
                      in a future where every Ethiopian thrives.
                    </p>

                    <div className="bg-gradient-to-r from-[#0a1e56] to-[#1a2f66] text-white p-6 rounded-lg text-center my-6">
                      <p className="text-xl font-bold mb-2">
                        Donate today. Be the change. Build the nation.
                      </p>
                    </div>

                    <div className="text-right mt-8">
                      <p className="text-gray-600 mb-1">
                        With heartfelt gratitude,
                      </p>
                      <p className="font-bold text-[#0a1e56] text-lg">
                        Ambassador Fitsum Arega
                      </p>
                      <div className="w-24 h-0.5 bg-[#f0ad4e] ml-auto mt-2"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-2 text-6xl text-[#0a1e56] opacity-20 font-serif rotate-180">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section id="donate" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0a1e56] mb-12">
            Donation Categories
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Choose a cause that resonates with your vision for Ethiopia. Every
            contribution, regardless of size, brings us one step closer to a
            stronger, more prosperous nation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Abay Dam */}
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#0a1e56] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Droplet className="mr-2 h-5 w-5" />
                  Abay Dam
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-700 text-base min-h-[80px]">
                  Help power Ethiopia's future through sustainable energy and
                  support the Great Ethiopian Renaissance Dam.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0a1e56] hover:bg-[#0a1e56]/90">
                  Donate
                </Button>
              </CardFooter>
            </Card>

            {/* Education */}
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#0a1e56] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-700 text-base min-h-[80px]">
                  Fund schools, supplies, and scholarship programs to empower
                  the next generation of Ethiopian leaders.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0a1e56] hover:bg-[#0a1e56]/90">
                  Donate
                </Button>
              </CardFooter>
            </Card>

            {/* Healthcare */}
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#0a1e56] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-700 text-base min-h-[80px]">
                  Support clinics, medical equipment, and healthcare outreach
                  programs across Ethiopia.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0a1e56] hover:bg-[#0a1e56]/90">
                  Donate
                </Button>
              </CardFooter>
            </Card>

            {/* Infrastructure */}
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#0a1e56] text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-700 text-base min-h-[80px]">
                  Invest in long-term community development projects that
                  strengthen Ethiopia's foundation.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0a1e56] hover:bg-[#0a1e56]/90">
                  Donate
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0a1e56] text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be a beacon of hope. Donate today and help build the Ethiopia of
            tomorrow.
          </h2>
          <Button
            className="bg-[#f0ad4e] hover:bg-[#eea236] text-[#0a1e56] font-bold text-lg px-8 py-6"
            size="lg"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0a1e56] mb-6">
              How Your Donation Makes an Impact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#0a1e56] p-2 rounded-full mr-4 mt-1">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Immediate Relief</h4>
                  <p className="text-gray-600">
                    Your donations provide immediate assistance to communities
                    in need, supporting essential services and emergency relief
                    efforts.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0a1e56] p-2 rounded-full mr-4 mt-1">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    Sustainable Development
                  </h4>
                  <p className="text-gray-600">
                    We invest in long-term projects that create lasting change,
                    from infrastructure development to educational initiatives.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0a1e56] p-2 rounded-full mr-4 mt-1">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    Community Empowerment
                  </h4>
                  <p className="text-gray-600">
                    Your support helps empower local communities to take charge
                    of their own development and build a brighter future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
