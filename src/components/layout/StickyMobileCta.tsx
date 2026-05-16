"use client";

import { SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useCheckoutContext } from "@/context/CheckoutContext";

export function StickyMobileCta() {
  const { checkout, isLoading } = useCheckoutContext();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-surface/95 p-4 backdrop-blur-md md:hidden">
      <Button
        size="lg"
        className="w-full"
        onClick={checkout}
        isLoading={isLoading}
      >
        Kup teraz — {formatPrice(SITE.price)}
      </Button>
    </div>
  );
}
