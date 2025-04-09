import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative w-full bg-navy-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Vector graphic in bottom right corner */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20%281%29-dQaRbzoO5MRQXZwAxqhuX5JrOoc1EQ.png"
          alt="Decorative vector"
          fill
          className="object-contain opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            {title}
          </h1>
          <div className="w-20 h-1 bg-gold-400 mb-8"></div>
          {description && (
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
