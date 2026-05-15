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
      primary: "bg-dark-green text-primary hover:bg-forest",
      secondary: "border border-secondary text-dark-green hover:bg-secondary/10",
      glass: "border border-dark-green/20 bg-white/80 text-dark-green hover:bg-primary",
      ghost: "border border-transparent bg-transparent text-dark-green hover:bg-dark-green/5",
    };

    const classes = cn(
      "inline-flex min-h-11 items-center justify-center rounded-md font-medium transition-colors duration-200",
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
