"use client";

import { SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { useCheckoutContext } from "@/context/CheckoutContext";

export function FinalCta() {
  const { checkout, isLoading } = useCheckoutContext();

  return (
    <Section className="pb-28 sm:pb-32">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              30% wystarczy, żeby zdać.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-neutral-400">
              Zacznij dziś. Jeden plan, jeden ebook, jeden cel — zdana poprawka
              w sierpniu.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8 border-0 bg-accent text-neutral-950 hover:bg-accent/90"
              onClick={checkout}
              isLoading={isLoading}
            >
              Kup teraz — {formatPrice(SITE.price)}
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
