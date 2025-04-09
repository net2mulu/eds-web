import Image from "next/image";

export default function ServiceHeader() {
  return (
    <section className="relative bg-navy-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-XtohcHGu4U1j0l8aNAwCgaFW1eVU9O.png"
          alt="Decorative background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            SERVICES
          </h1>
          <div className="w-20 h-1 bg-gold-400 mb-8"></div>
        </div>
      </div>
    </section>
  );
}
