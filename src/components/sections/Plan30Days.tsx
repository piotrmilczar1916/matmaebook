import { PLAN_WEEKS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Plan30Days() {
  return (
    <Section id="plan" className="bg-white/60">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Plan 30 dni
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Cztery tygodnie do poprawki
          </h2>
          <p className="mt-4 text-neutral-600">
            Każdy tydzień ma jeden cel — bez rozpraszania i bez nauki „wszystkiego
            naraz”.
          </p>
        </div>
      </FadeIn>

      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-[1.125rem] top-0 h-full w-px bg-neutral-200 sm:left-1/2"
        />

        <ol className="space-y-6 pl-8 sm:space-y-8 sm:pl-0">
          {PLAN_WEEKS.map((week, index) => (
            <FadeIn key={week.week} delay={index * 80}>
              <li className="relative sm:grid sm:grid-cols-2 sm:gap-10">
                <div
                  className={
                    index % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:col-start-2 sm:pl-12"
                  }
                >
                  <article className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card sm:p-8">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Tydzień {week.week}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-950 sm:text-2xl">
                      {week.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {week.description}
                    </p>
                  </article>
                </div>

                <div
                  aria-hidden
                  className="absolute -left-[1.625rem] top-8 h-3 w-3 rounded-full border-2 border-white bg-accent shadow-sm sm:left-1/2 sm:-translate-x-1/2"
                />
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </Section>
  );
}
