"use client";

import { CheckoutProvider } from "@/context/CheckoutContext";
import { CheckoutBanner } from "@/components/layout/CheckoutBanner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutProvider>
      <CheckoutBanner />
      {children}
    </CheckoutProvider>
  );
}
