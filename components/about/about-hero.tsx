import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-navy-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%281%29-dQaRbzoO5MRQXZwAxqhuX5JrOoc1EQ.png"
          alt="Decorative vector"
          fill
          className="object-contain opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            ABOUT US
          </h1>
          <div className="w-20 h-1 bg-gold-400 mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Connecting Ethiopia's global community to foster unity, cultural
            pride, and national progress.
          </p>
        </div>
      </div>
    </section>
  );
}
