import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Problem() {
  return (
    <Section className="py-20 sm:py-28">
      <FadeIn>
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-3xl sm:leading-tight lg:text-4xl">
            Większość osób nie oblewa poprawki, bo jest głupia.{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Oblewa przez brak planu.</span>
              <span
                aria-hidden
                className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-accent/70 sm:bottom-1.5 sm:h-4"
              />
            </span>
          </p>
        </blockquote>
      </FadeIn>
    </Section>
  );
}
