"use client";

import { useEffect, useState } from "react";
import { EXAM } from "@/lib/constants";

function getDaysLeft(): number {
  const target = new Date(EXAM.dateIso);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function msUntilNextMidnight(): number {
  const now = new Date();
  const next = new Date(now);
  next.setHours(24, 0, 0, 0);
  return next.getTime() - now.getTime();
}

export function ExamCountdown() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setDays(getDaysLeft());
    update();

    let dailyInterval: ReturnType<typeof setInterval> | undefined;
    const midnightTimeout = setTimeout(() => {
      update();
      dailyInterval = setInterval(update, 24 * 60 * 60 * 1000);
    }, msUntilNextMidnight());

    return () => {
      clearTimeout(midnightTimeout);
      if (dailyInterval) clearInterval(dailyInterval);
    };
  }, []);

  const dayLabel = days === 1 ? "dzień" : "dni";

  return (
    <section
      aria-label="Licznik dni do matury poprawkowej"
      className="mx-auto max-w-6xl px-5 pb-10 sm:px-8"
    >
      <p className="text-center text-sm text-neutral-500">
        Do matury poprawkowej zostało{" "}
        <span
          className="font-semibold tabular-nums text-neutral-950"
          suppressHydrationWarning
        >
          {days ?? "—"} {days !== null ? dayLabel : ""}
        </span>
        <span aria-hidden className="mx-2 text-neutral-300">
          ·
        </span>
        <span>{EXAM.label}</span>
      </p>
    </section>
  );
}
