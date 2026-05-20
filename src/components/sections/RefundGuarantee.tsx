import { ShieldCheck } from "lucide-react";
import { GUARANTEE, SITE } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function RefundGuarantee() {
  return (
    <Section id="gwarancja" className="py-12 sm:py-16">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-white px-6 py-8 shadow-soft sm:px-10 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-2xl"
          />
          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/20">
              <ShieldCheck
                className="h-7 w-7 text-neutral-950"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                {GUARANTEE.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {GUARANTEE.textBeforeEmail}{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-neutral-950 underline decoration-accent/80 underline-offset-2 transition-colors hover:text-neutral-700"
                >
                  {SITE.email}
                </a>{" "}
                {GUARANTEE.textAfterEmail}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
