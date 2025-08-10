import { forwardRef, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary: "bg-dark-green text-white hover:bg-forest shadow-sm hover:shadow-md",
      secondary: "border-2 border-secondary text-dark-green hover:bg-secondary/10",
      glass:
        "glass glass-hover text-dark-green hover:scale-[1.02]",
      ghost:
        "bg-transparent text-dark-green hover:bg-white/10 border border-transparent",
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button; 