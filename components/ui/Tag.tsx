interface TagProps {
  children: React.ReactNode;
  variant?: "blue" | "slate" | "green" | "purple" | "cyan";
  className?: string;
}

export default function Tag({
  children,
  variant = "blue",
  className = "",
}: TagProps) {
  // Mapa de clases de Tailwind para colores complementarios sobre fondos oscuros
  const variantStyles = {
    blue: "border-blue-500/20 bg-blue-500/10 text-blue-300",
    slate: "border-white/10 bg-white/5 text-gray-300",
    green: "border-green-500/20 bg-green-500/10 text-green-300",
    purple: "border-purple-500/20 bg-purple-500/10 text-purple-300",
    cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
  };

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        px-3
        py-1
        text-xs
        md:text-sm
        font-medium
        transition-all
        duration-300
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}