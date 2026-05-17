import { AppProviders } from "@/components/providers/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForWho } from "@/components/sections/ForWho";
import { Hero } from "@/components/sections/Hero";
import { Plan30Days } from "@/components/sections/Plan30Days";
import { Problem } from "@/components/sections/Problem";
import { WhatsInside } from "@/components/sections/WhatsInside";

export default function HomePage() {
  return (
    <AppProviders>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Problem />
        <WhatsInside />
        <ForWho />
        <Plan30Days />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </AppProviders>
  );
}
