"use client";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  isLoading?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "disabled:cursor-not-allowed disabled:opacity-60",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" &&
          "bg-neutral-950 text-white shadow-soft hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-card active:translate-y-0",
        variant === "secondary" &&
          "border border-neutral-200 bg-white text-neutral-950 shadow-soft hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-card active:translate-y-0",
        variant === "ghost" &&
          "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Przekierowanie…
        </>
      ) : (
        children
      )}
    </button>
  );
}
