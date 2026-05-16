"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useCheckoutContext } from "@/context/CheckoutContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { checkout, isLoading } = useCheckoutContext();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200/80 bg-surface/90 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8"
        aria-label="Główne menu"
      >
        <Link
          href="#"
          className="text-sm font-bold tracking-tight text-neutral-950 sm:text-base"
        >
          {SITE.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          size="md"
          onClick={checkout}
          isLoading={isLoading}
          className="hidden md:inline-flex"
        >
          Kup — {formatPrice(SITE.price)}
        </Button>
      </nav>
    </header>
  );
}
