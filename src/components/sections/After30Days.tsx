import { CheckCircle2 } from "lucide-react";
import { AFTER_30_DAYS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { BuyCta } from "@/components/ui/BuyCta";
import { Section } from "@/components/ui/Section";

export function After30Days() {
  return (
    <Section id="po-30-dniach">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Efekty
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Co się zmieni po 30 dniach z planem
          </h2>
        </div>
      </FadeIn>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {AFTER_30_DAYS.map((item, index) => (
          <FadeIn key={item} delay={index * 70}>
            <li className="flex h-full items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:border-accent/40 hover:shadow-card">
              <CheckCircle2
                className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                strokeWidth={2}
                aria-hidden
              />
              <span className="text-base font-medium leading-relaxed text-neutral-900 sm:text-lg">
                {item}
              </span>
            </li>
          </FadeIn>
        ))}
      </ul>

      <FadeIn delay={120}>
        <BuyCta className="mt-12" />
      </FadeIn>
    </Section>
  );
}
