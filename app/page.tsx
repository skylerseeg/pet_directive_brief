import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { TheProblem } from "@/components/sections/TheProblem";
import { OriginalIdea } from "@/components/sections/OriginalIdea";
import { Evolution } from "@/components/sections/Evolution";
import { FourLayers } from "@/components/sections/FourLayers";
import { WhyThisWins } from "@/components/sections/WhyThisWins";
import { CompetitiveGap } from "@/components/sections/CompetitiveGap";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { TheCall } from "@/components/sections/TheCall";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="flex flex-col">
        <Hero />
        <TheProblem />
        <OriginalIdea />
        <Evolution />
        <FourLayers />
        <WhyThisWins />
        <CompetitiveGap />
        <Pricing />
        <Roadmap />
        <TheCall />
      </main>
    </>
  );
}
