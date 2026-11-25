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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer";

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
    sm: "px-4 py-2 text-sm gap-1.5 min-w-[96px]",
    md: "px-6 py-3 text-[15px] gap-2 min-w-[130px]",
    lg: "px-7 py-3.5 text-[15px] sm:text-base gap-2.5 min-w-[150px]",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed hover:scale-100",
    className
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={combinedClassName}
          style={{ fontFamily: "var(--font-accent)" }}
        >
          {children}
        </a>
      );
    }

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
