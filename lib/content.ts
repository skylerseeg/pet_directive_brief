/**
 * Pitch content. Single source of truth for every section on the page.
 * Sections render off `type`; the union keeps per-type data strongly typed.
 */

type SectionBase = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
};

export type HeroSection = SectionBase & {
  type: "hero";
};

export type ProblemSection = SectionBase & {
  type: "problem";
  points: string[];
};

export type OriginalIdeaSection = SectionBase & {
  type: "original-idea";
  credit: string;
  points: string[];
};

export type EvolutionSection = SectionBase & {
  type: "evolution";
  points: string[];
};

export type Layer = { name: string; description: string };
export type LayersSection = SectionBase & {
  type: "layers";
  layers: Layer[];
};

export type WhyWinsSection = SectionBase & {
  type: "why-wins";
  points: string[];
};

export type CompetitorRow = { player: string; owns: string };
export type CompetitiveGapSection = SectionBase & {
  type: "competitive-gap";
  matrix: CompetitorRow[];
};

export type PricingTier = { name: string; price: string; includes: string };
export type PricingSection = SectionBase & {
  type: "pricing";
  tiers: PricingTier[];
};

export type RoadmapPhase = { name: string; window: string; ships: string };
export type RoadmapSection = SectionBase & {
  type: "roadmap";
  phases: RoadmapPhase[];
};

export type CallSection = SectionBase & {
  type: "call";
  points: string[];
};

export type PitchSection =
  | HeroSection
  | ProblemSection
  | OriginalIdeaSection
  | EvolutionSection
  | LayersSection
  | WhyWinsSection
  | CompetitiveGapSection
  | PricingSection
  | RoadmapSection
  | CallSection;

export type PitchSectionType = PitchSection["type"];

export const SECTIONS = [
  {
    id: "hero",
    type: "hero",
    eyebrow: "Pet Directive",
    headline:
      "What if your pet's collar was the beginning of something bigger?",
    body: "A tag that comes home with a stranger's phone. A directive that outlives you. A platform built on the oldest contract — I'll take care of them.",
  },
  {
    id: "problem",
    type: "problem",
    eyebrow: "The problem",
    headline: "Three quiet failures. One missing layer.",
    body: "Pet ownership runs on love and sticky notes. That works until it doesn't.",
    points: [
      "Pets get lost — 10M+ a year in the US; roughly 1 in 5 comes home wearing ID.",
      "Seniors worry — 'who takes her if something happens to me?' has no product answer.",
      "Legacy planning is broken — wills mention pets as property, never as plans.",
    ],
  },
  {
    id: "original-idea",
    type: "original-idea",
    eyebrow: "The seed",
    headline: "Cody called it first: a pet advance directive.",
    body: "Same shape as the human version — care wishes, decision rights, named guardian — scoped to an animal. The document is the atom.",
    credit: "Original concept: Cody.",
    points: [
      "Living document, signed, shared with vet and next-of-kin guardian.",
      "Removes ambiguity at the worst possible moment.",
      "Every later layer assumes this atom exists.",
    ],
  },
  {
    id: "evolution",
    type: "evolution",
    eyebrow: "The evolution",
    headline: "From document to platform.",
    body: "The directive is load-bearing, but paper doesn't scale. The QR tag is the wedge — cheap, tactile, on the pet 24/7.",
    points: [
      "Document → account: the directive becomes a living record.",
      "Account → object: a tag on the collar makes it physical, scannable, real.",
      "Object → network: every scan is a recovery signal and a growth loop.",
    ],
  },
  {
    id: "layers",
    type: "layers",
    eyebrow: "The stack",
    headline: "Four layers. One pet.",
    body: "Each layer works standalone; each one makes the next more valuable.",
    layers: [
      {
        name: "Hardware",
        description:
          "NFC/QR tag, GPS optional. The handle in the physical world.",
      },
      {
        name: "Recovery",
        description:
          "A scan routes finder → owner in one tap. No app install.",
      },
      {
        name: "Management",
        description:
          "Vet records, meds, feeding, sitters. The pet's operating system.",
      },
      {
        name: "Legacy",
        description:
          "Advance directive and guardian designation. The part no one else builds.",
      },
    ],
  },
  {
    id: "why-wins",
    type: "why-wins",
    eyebrow: "Why this wins",
    headline: "The loops bend toward us.",
    body: "Recovery earns trust, trust earns records, records earn legacy — each one subsidizes the next.",
    points: [
      "Network effects — every found pet is an origin story.",
      "Data moat — longitudinal vet and behavior data no competitor accumulates.",
      "Inverted CAC — tags get bought as gifts; recipients become users.",
    ],
  },
  {
    id: "competitive-gap",
    type: "competitive-gap",
    eyebrow: "The gap",
    headline: "Everyone owns a slice. No one owns the pet.",
    body: "The category is fragmented by layer. Our seam is vertical.",
    matrix: [
      {
        player: "AirTag / Tile",
        owns: "Finds objects. Not pet-aware, not recoverable by strangers.",
      },
      {
        player: "Petco / Chewy",
        owns: "Commerce. Not records, not directives.",
      },
      { player: "Rover / Wag", owns: "The sitter hour. Not the relationship." },
      {
        player: "Vet PIMS (eVet, Covetrus)",
        owns: "The clinic. Not the household.",
      },
      {
        player: "Pet Directive",
        owns: "The pet's identity across its whole life — and after.",
      },
    ],
  },
  {
    id: "pricing",
    type: "pricing",
    eyebrow: "Pricing architecture",
    headline: "A small object. A recurring promise. A one-time peace of mind.",
    body: "Three price points, three jobs — hardware margin, software subscription, legacy service fee.",
    tiers: [
      {
        name: "Tag",
        price: "$29 one-time",
        includes: "Hardware + recovery network, forever.",
      },
      {
        name: "Plus",
        price: "$6 / month",
        includes:
          "Records, sharing, multi-caregiver, directive draft.",
      },
      {
        name: "Legacy",
        price: "$149 one-time",
        includes: "Notarized directive + guardian onboarding.",
      },
    ],
  },
  {
    id: "roadmap",
    type: "roadmap",
    eyebrow: "Roadmap",
    headline: "Shippable in weeks, not years.",
    body: "Four phases. Each one ends with something a real user can touch.",
    phases: [
      {
        name: "Phase 1",
        window: "6 weeks",
        ships: "QR tag + public recovery page. No app required.",
      },
      {
        name: "Phase 2",
        window: "8 weeks",
        ships: "Account, directive builder, vet share.",
      },
      {
        name: "Phase 3",
        window: "10 weeks",
        ships: "Guardian flow, notarization partner, mobile app.",
      },
      {
        name: "Phase 4",
        window: "Ongoing",
        ships: "NFC/GPS hardware, vet PIMS integrations.",
      },
    ],
  },
  {
    id: "call",
    type: "call",
    eyebrow: "Next moves",
    headline: "Twenty calls between us and a yes.",
    body: "Before production code, validate with the people who'd buy it or block it.",
    points: [
      "Call 20 owners, vets, and estate attorneys in the next two weeks.",
      "Validate: price, directive wording, recovery UX, who actually pays.",
      "Build the thinnest slice that makes one owner cry — then one vet nod.",
    ],
  },
] as const satisfies readonly PitchSection[];

export type SectionId = (typeof SECTIONS)[number]["id"];

/**
 * Typed accessor — returns the section narrowed to the variant matching
 * the given `type`. Throws at module init if a section is missing, which
 * would be a bug, not a runtime case to handle.
 */
export function getSection<T extends PitchSectionType>(
  type: T,
): Extract<PitchSection, { type: T }> {
  const found = SECTIONS.find((s) => s.type === type);
  if (!found) throw new Error(`Pitch section "${type}" is missing from SECTIONS`);
  return found as Extract<PitchSection, { type: T }>;
}
