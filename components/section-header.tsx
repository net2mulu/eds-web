interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  titleColor?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  titleColor = "text-[#0e87be]",
  className = "",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={`flex flex-col ${alignmentClasses[align]} mb-12 ${className}`}
    >
      {label && (
        <div className="inline-block px-4 py-1 border border-navy-900 rounded-full text-navy-900 font-medium mb-6">
          {label}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor} max-w-4xl`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-700 mt-4 max-w-3xl">{description}</p>
      )}
    </div>
  );
}
