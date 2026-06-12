import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers — Synergy 2026",
};

type Speaker = {
  name: string;
  role?: string;
  bio?: string;
  talkTitle?: string;
  talkAbstract?: string;
};

const speakers: Speaker[] = [
  {
    name: "Jan-Willem Jansens",
    role: "Ecotone Landscape Planning",
    talkTitle: "Crisis of our times, crisis of New Mexico",
    talkAbstract:
      "Inaugural keynote examining the interconnected crises of desertification, land degradation, and community resilience across New Mexico and the broader Southwest.",
  },
  {
    name: "Joyce Skeet",
    role: "Spirit Farm",
    talkTitle: "On Churros and on Herbs",
  },
  {
    name: "James Skeet",
    role: "Spirit Farm",
    talkTitle: "Spirit Farm Keynote",
  },
  {
    name: "Indra",
    talkTitle: "Indigenous Decentralised Water Management and River Revival",
    talkAbstract:
      "Ways to survive using indigenous water wisdom and community science to revive rivers and construct water structures. The talk covers universal principles and tells the story of how communities using low-tech, nature-based methods have gained water sovereignty and dignity.",
  },
  {
    name: "Nino Saggio",
    talkTitle:
      "Beyond the Liquid: Architectural Responses to the States and Crises of Water",
    talkAbstract:
      "Water remains a fundamental pillar of the architectural imagination. This talk avoids a standard historical overview of water in design, opting instead to analyze what we define as the &ldquo;states of water&rdquo;&mdash;liquid, solid, and gaseous—and their specific inspirations for the built environment. The second part confronts the urgent paradigm shift caused by the global climate crisis, exploring how the architectural community has pioneered a holistic synergy between landscape and architecture where water is no longer a threat to be managed but a vital resource for reimagining urban projects.",
  },
  {
    name: "Kristin Swiat",
    talkTitle: "Art and Water",
    bio: "Kristin Swiat, originally from the Shawangunk Mountains area of New York State, is a performer, bodyworker, textile artist, and farmer based in Brooklyn. She has performed in works across Europe and New York since graduating with a BFA in dance from Juilliard in 2003, and has maintained a trauma-informed, massage-based bodywork practice since graduating from the Swedish Institute in 2010, incorporating Somatic Experiencing, Craniosacral Therapy, Focusing, and other embodied practices. Deeply influenced by a season spent in 2020 living and working on the farm at Synergia Ranch, she is currently the farm manager at Stonegate Farm in Balmville, NY. Her primary interest is exploring the spaces where art and healing connect.",
  },
  {
    name: "Mike Halverson",
    talkTitle: "Botanical Walk",
  },
  {
    name: "Amanda Bramble",
    role: "Ampersand",
  },
  {
    name: "Austin",
    role: "Graziers Discussion",
  },
  {
    name: "Hanna Zana",
    role: "Evening Performance",
  },
  {
    name: "Aubrey Williams",
    role: "Theater Performance",
  },
  {
    name: "Chili Hawses",
  },
  {
    name: "Dave",
    role: "Music & Poetry / Open Mic MC",
  },
  {
    name: "Nick Est",
    role: "Panel Moderator",
    talkTitle: "Water Challenges Panel",
    talkAbstract:
      "A moderated conversation bringing together voices on water challenges including the Mountain Protest Appalachia MVP and a Ute Tribe Native Water Conservation Representative.",
  },
];

export default function SpeakersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Speakers
      </h1>
      <p className="opacity-60 mb-10">
        Full bios and session details for all confirmed speakers and presenters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="bg-white rounded-xl p-6 shadow-sm border border-black/5"
          >
            <h2 className="text-lg font-semibold mb-0.5">{s.name}</h2>
            {s.role && <p className="text-sm opacity-50 mb-3">{s.role}</p>}
            {s.talkTitle && (
              <p
                style={{ color: "var(--clay)" }}
                className="text-sm font-medium italic mb-2"
              >
                {s.talkTitle}
              </p>
            )}
            {s.talkAbstract && (
              <p className="text-sm opacity-70 leading-relaxed mb-3">
                {s.talkAbstract}
              </p>
            )}
            {s.bio && (
              <p className="text-sm opacity-60 leading-relaxed">{s.bio}</p>
            )}
            {!s.bio && !s.talkAbstract && (
              <p className="text-sm opacity-40 italic">Bio coming soon.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
