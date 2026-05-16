import { Check } from "lucide-react";
import { FOR_WHO } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function ForWho() {
  return (
    <Section id="dla-kogo">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Dla kogo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Ten ebook jest dla Ciebie, jeśli…
          </h2>
          <p className="mt-4 max-w-md text-neutral-600">
            Nie musisz kochać matematyki. Musisz mieć plan i wiedzieć, na czym
            się skupić przed sierpniową poprawką.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <ul className="space-y-4">
            {FOR_WHO.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:border-accent/40 hover:shadow-card"
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
        </FadeIn>
      </div>
    </Section>
  );
}
