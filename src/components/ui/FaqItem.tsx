"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-neutral-200/80 last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-neutral-950 transition-colors hover:text-neutral-700 sm:text-lg"
        >
          {question}
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none",
          open ? "pb-5" : "pb-0",
        )}
      >
        <p className="pr-8 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}
