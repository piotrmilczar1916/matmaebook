import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: `Regulamin — ${SITE.name}`,
};

export default function RegulaminPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
      >
        ← Strona główna
      </Link>
      <h1 className="mt-8 text-3xl font-bold tracking-tight">Regulamin</h1>
      <p className="mt-4 leading-relaxed text-neutral-600">
        Treść regulaminu sprzedaży ebooka — uzupełnij przed uruchomieniem
        płatności.
      </p>
    </div>
  );
}
