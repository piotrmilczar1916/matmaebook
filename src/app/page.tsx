import { AppProviders } from "@/components/providers/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { AboutMe } from "@/components/sections/AboutMe";
import { After30Days } from "@/components/sections/After30Days";
import { Faq } from "@/components/sections/Faq";
import { RefundGuarantee } from "@/components/sections/RefundGuarantee";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForWho } from "@/components/sections/ForWho";
import { ExamCountdown } from "@/components/sections/ExamCountdown";
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
        <ExamCountdown />
        <Problem />
        <AboutMe />
        <WhatsInside />
        <ForWho />
        <Plan30Days />
        <After30Days />
        <Faq />
        <RefundGuarantee />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </AppProviders>
  );
}
