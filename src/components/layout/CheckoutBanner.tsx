"use client";

import { X } from "lucide-react";
import { useCheckoutContext } from "@/context/CheckoutContext";

export function CheckoutBanner() {
  const { error, clearError } = useCheckoutContext();

  if (!error) return null;

  return (
    <div
      role="alert"
      className="fixed top-20 inset-x-4 z-[60] mx-auto max-w-lg rounded-xl border border-red-200 bg-white px-4 py-3 shadow-card sm:inset-x-auto sm:right-8 sm:left-auto"
    >
      <div className="flex items-start gap-3">
        <p className="flex-1 text-sm text-neutral-800">{error}</p>
        <button
          type="button"
          onClick={clearError}
          className="rounded-lg p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
          aria-label="Zamknij komunikat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
