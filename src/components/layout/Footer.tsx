import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-sm text-neutral-600 sm:flex-row sm:px-8">
        <p className="font-medium text-neutral-950">{SITE.name}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <li>
            <Link
              href="/regulamin"
              className="transition-colors hover:text-neutral-950"
            >
              Regulamin
            </Link>
          </li>
          <li>
            <Link
              href="/polityka-prywatnosci"
              className="transition-colors hover:text-neutral-950"
            >
              Polityka prywatności
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-neutral-950"
            >
              {SITE.email}
            </a>
          </li>
        </ul>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
