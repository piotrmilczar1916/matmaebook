"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { BuyCta } from "@/components/ui/BuyCta";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:min-h-[85vh] sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <Badge>EBOOK · SIERPIEŃ · POPRAWKA</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Oblałeś maturę z matmy{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">w maju?</span>
              <span
                aria-hidden
                className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-accent/70 sm:bottom-1.5 sm:h-4"
              />
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-neutral-800 sm:text-2xl">
            Pokażę ci, jak zdać poprawkę na{" "}
            <span className="font-semibold text-neutral-950">30%</span> — w 30
            dni.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start">
            <BuyCta
              align="start"
              label={`Kup ebook — ${formatPrice(SITE.price)}`}
            />
            <a
              href="#zawartosc"
              className="self-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 sm:mt-4 sm:self-auto"
            >
              Zobacz, co dostaniesz ↓
            </a>
          </div>
        </FadeIn>

        <FadeIn
          delay={120}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative transition-transform duration-500 hover:-translate-y-1">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/ebook-cover.jpg"
                alt={`Okładka ebooka ${SITE.name}`}
                width={725}
                height={1024}
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
                className="h-auto w-full max-w-[300px] rounded-2xl sm:max-w-[360px] lg:max-w-[420px]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
