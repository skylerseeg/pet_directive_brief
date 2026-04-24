import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { MarketSection } from "@/components/sections/market-section";
import { TractionSection } from "@/components/sections/traction-section";
import { AskSection } from "@/components/sections/ask-section";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <TractionSection />
      <AskSection />
    </main>
  );
}
