import { FEATURES } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Section } from "@/components/ui/Section";

export function WhatsInside() {
  return (
    <Section id="zawartosc" className="bg-white/60">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Co jest w środku
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Wszystko, czego potrzebujesz do 30%
          </h2>
          <p className="mt-4 text-neutral-600">
            Konkretny materiał pod poprawkę — bez zbędnej teorii na 100%.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {FEATURES.map((feature, index) => (
          <FadeIn key={feature.title} delay={index * 60}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="h-full"
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
