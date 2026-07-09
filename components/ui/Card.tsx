interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        p-6
        glassmorphism
        ${hoverEffect ? "glassmorphism-hover" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}