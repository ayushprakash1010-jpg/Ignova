import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer";

  const variants = {
    primary:
      "bg-orange text-white hover:bg-orange-dark shadow-lg hover:shadow-xl",
    secondary:
      "bg-navy text-white hover:bg-navy-light shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white shadow-sm hover:shadow-lg",
    ghost:
      "text-orange hover:bg-orange/10 underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs gap-1.5 min-w-[100px]",
    md: "px-7 py-3 text-sm gap-2 min-w-[140px]",
    lg: "px-10 py-4 text-base gap-3 min-w-[180px]",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed hover:scale-100",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      style={{ fontFamily: "var(--font-accent)" }}
    >
      {children}
    </button>
  );
}
