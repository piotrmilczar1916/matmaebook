import Image from "next/image";
import { ABOUT_GREETING, ABOUT_ME } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function AboutMe() {
  return (
    <Section id="kim-jestem" className="bg-white/60">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Kim jestem
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Po drugiej stronie ebooka
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-10 rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-soft sm:p-10">
            <div className="relative mx-auto mb-8 size-36 overflow-hidden rounded-full border-2 border-accent/40 bg-white shadow-soft sm:size-40">
              <Image
                src="/author.jpg"
                alt="Zdjęcie autora ebooka MATMA NA 30%"
                fill
                sizes="160px"
                className="object-cover object-center"
              />
            </div>
            <p className="mb-6 text-center text-xl font-bold text-neutral-950 sm:text-2xl">
              {ABOUT_GREETING}
            </p>
            <div className="space-y-5 text-center">
              {ABOUT_ME.map((sentence) => (
                <p
                  key={sentence}
                  className="text-base leading-relaxed text-neutral-700 sm:text-lg"
                >
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
