"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type CheckoutContextValue = {
  checkout: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const checkout = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Nie udało się rozpocząć płatności.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił błąd.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({ checkout, isLoading, error, clearError }),
    [checkout, isLoading, error, clearError],
  );

  return (
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
}

export function useCheckoutContext() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) {
    throw new Error("useCheckoutContext must be used within CheckoutProvider");
  }
  return ctx;
}
