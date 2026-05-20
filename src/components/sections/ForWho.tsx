import { Check, X } from "lucide-react";
import { FOR_WHO, FOR_WHO_NOT } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function ForWho() {
  return (
    <Section id="dla-kogo">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Dla kogo
          </p>
          <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-neutral-950 sm:text-3xl">
            Ten ebook jest dla Ciebie, jeśli…
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <ul className="mt-10 space-y-4">
            {FOR_WHO.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white px-5 py-4 shadow-soft"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-neutral-950">
                  <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </span>
                <span className="text-base font-medium text-neutral-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div
            aria-hidden
            className="my-8 border-t border-neutral-200"
          />

          <div className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-neutral-50 px-5 py-4">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600">
              <X className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            </span>
            <div>
              <p className="text-base font-semibold text-neutral-900">
                {FOR_WHO_NOT.title}
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                {FOR_WHO_NOT.description}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
