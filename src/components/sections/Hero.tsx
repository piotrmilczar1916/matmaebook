"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { useCheckoutContext } from "@/context/CheckoutContext";

export function Hero() {
  const { checkout, isLoading } = useCheckoutContext();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <Badge>EBOOK · SIERPIEŃ · POPRAWKA</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-neutral-800 sm:text-2xl">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={checkout} isLoading={isLoading}>
              Kup ebook — {formatPrice(SITE.price)}
            </Button>
            <a
              href="#zawartosc"
              className="text-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 sm:text-left"
            >
              Zobacz, co jest w środku ↓
            </a>
          </div>
        </FadeIn>

        <FadeIn
          delay={120}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-card transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
              <Image
                src="/ebook-cover.jpg"
                alt={`Okładka ebooka ${SITE.name}`}
                width={725}
                height={1024}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                className="h-auto w-full max-w-[280px] rounded-2xl sm:max-w-[340px] lg:max-w-[380px]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
