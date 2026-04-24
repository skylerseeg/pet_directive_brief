import { Hero } from "@/components/sections/Hero";
import { TheProblem } from "@/components/sections/TheProblem";
import { SolutionSection } from "@/components/sections/solution-section";
import { MarketSection } from "@/components/sections/market-section";
import { TractionSection } from "@/components/sections/traction-section";
import { AskSection } from "@/components/sections/ask-section";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TheProblem />
      <SolutionSection />
      <MarketSection />
      <TractionSection />
      <AskSection />
    </main>
  );
}
