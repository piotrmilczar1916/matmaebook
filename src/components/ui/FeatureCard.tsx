import {
  AlertCircle,
  Calendar,
  CheckSquare,
  FileCheck,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  calendar: Calendar,
  "file-check": FileCheck,
  target: Target,
  "alert-circle": AlertCircle,
  star: Star,
  "check-square": CheckSquare,
} satisfies Record<string, LucideIcon>;

type FeatureCardProps = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className={cn(
        "group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-soft transition-all duration-300",
        "hover:-translate-y-1 hover:border-accent/40 hover:shadow-card",
        className,
      )}
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-neutral-900 transition-colors duration-300 group-hover:bg-accent">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </article>
  );
}
