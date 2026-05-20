import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { BuyCta } from "@/components/ui/BuyCta";
import { FaqItem } from "@/components/ui/FaqItem";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Faq() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Najczęstsze pytania
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Wszystko, co warto wiedzieć przed zakupem ebooka {SITE.name}.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-10 rounded-2xl border border-neutral-200/80 bg-white px-5 shadow-soft sm:px-8">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <BuyCta
            className="mt-12"
            label={`Kup teraz za ${formatPrice(SITE.price)}`}
            buttonClassName="w-full sm:w-auto"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
