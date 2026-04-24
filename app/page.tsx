import { Hero } from "@/components/sections/Hero";
import { TheProblem } from "@/components/sections/TheProblem";
import { OriginalIdea } from "@/components/sections/OriginalIdea";
import { Evolution } from "@/components/sections/Evolution";
import { FourLayers } from "@/components/sections/FourLayers";
import { WhyThisWins } from "@/components/sections/WhyThisWins";
import { TractionSection } from "@/components/sections/traction-section";
import { AskSection } from "@/components/sections/ask-section";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TheProblem />
      <OriginalIdea />
      <Evolution />
      <FourLayers />
      <WhyThisWins />
      <TractionSection />
      <AskSection />
    </main>
  );
}
