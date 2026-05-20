"use client";

import { GUARANTEE_NOTE, SITE } from "@/lib/constants";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useCheckoutContext } from "@/context/CheckoutContext";

type BuyCtaProps = {
  label?: string;
  size?: "md" | "lg";
  align?: "center" | "start";
  className?: string;
  buttonClassName?: string;
};

export function BuyCta({
  label = `Kup ebook za ${formatPrice(SITE.price)}`,
  size = "lg",
  align = "center",
  className,
  buttonClassName,
}: BuyCtaProps) {
  const { checkout, isLoading } = useCheckoutContext();

  return (
    <div
      className={cn(
        align === "center" && "text-center",
        align === "start" && "text-left",
        className,
      )}
    >
      <Button
        size={size}
        onClick={checkout}
        isLoading={isLoading}
        className={cn(
          align === "center" && "mx-auto",
          buttonClassName,
        )}
      >
        {label}
      </Button>
      <p className="mt-2 text-xs text-neutral-500">{GUARANTEE_NOTE}</p>
    </div>
  );
}
