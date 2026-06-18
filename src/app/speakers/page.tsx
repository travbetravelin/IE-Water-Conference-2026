import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers — Synergy 2026",
};

type Speaker = {
  name: string;
  id?: string;
  role?: string;
  bio?: string;
  talkTitle?: string;
  talkAbstract?: string;
  note?: string;
  image?: string;
  imagePosition?: string;
};

const speakers: Speaker[] = [
  {
    name: "Jan-Willem Jansens",
    id: "jan-willem-jansens",
    role: "Ecotone Landscape Planning",
    talkTitle: "Crisis of our times, crisis of New Mexico",
    talkAbstract:
      "Inaugural keynote examining the interconnected crises of desertification, land degradation, and community resilience across New Mexico and the broader Southwest.",
    image: "/images/jan-willem-jansens.JPG",
    imagePosition: "top",
  },
  {
    name: "Joyce Skeet",
    id: "joyce-skeet",
    role: "Spirit Farm",
    talkTitle: "Wild Plants, Herbs and Churro Sheep",
    talkAbstract: "Explore the realm of plants, their energy and medicine. Dive into some herbal formulas using local plants that benefit our well-being. Then take a journey several hundred years ago to immerse ourselves with the Landrace Churro Sheep, exploring the incredible traits they carry with them into the current century.",
  },
  {
    name: "James Skeet",
    id: "james-skeet",
    role: "Spirit Farm",
    talkTitle: "Bio Cosmology and the Use of Biochar",
    talkAbstract: "Changing our paradigms to become more indigenous by weaving insights from 40,000 years of ancestral knowledge that connects the heart and soul to the earth that escorts us into a new awareness of agriculture. Examine Indigenous farming and biochar perspectives that regenerate the land and food systems so that soil health, environmental health and human health can prosper.",
  },
  {
    name: "Mark Nelson",
    id: "mark-nelson",
    talkTitle: "Our shared challenge is to intelligently restore the health of our global biosphere, acting with urgency as if our lives depend on it, which they do",
    bio: "Dr. Mark Nelson, Chairman emeritus of Institute of Ecotechnics (www.ecotechnics.edu), Director, Wastewater Gardens International (www.wastewatergardens.com), works in closed ecological systems, ecological engineering, restoration of damaged ecosystems, and ecological wastewater recycling. Mark served in the \"biospherian\" crew for Biosphere 2's closure experiment, 1991-1993. Books include \"Pushing Our Limits: Insights from Biosphere 2\" (2018), \"The Wastewater Gardener: Preserving the Planet One Flush at a Time\" (2014) and \"Life Under Glass: Crucial Lessons in Planetary Stewardship\" (2020). Wastewater Gardens were implemented in 14 countries, current project: Eden In Iraq for 10,000 Marsh Arabs (www.edeniniraq.com). BA Dartmouth College, MS University of Arizona, PhD University of Florida.",
    image: "/images/mark-nelson.jpg",
  },
  {
    name: "Indra Shekhar Singh",
    id: "indra-shekhar-singh",
    talkTitle: "Indigenous Decentralised Water Management and River Revival",
    talkAbstract:
      "This talk will about ways to survive using indigenous water wisdom and community science to revive rivers and construct water structures. During the talk we shall go over the principles which are universal and the talk will also tell the story of how communities using low tech nature based methods have gained water sovereignty and dignity.",
    image: "/images/indra-shekhar-singh.jpg",
    imagePosition: "top",
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
    id: "amanda-bramble",
    role: "Ampersand Sustainable Learning Center",
    talkTitle: "We Are The Land and Waters",
    talkAbstract:
      "Restoring the land is not just something done \"out there.\" We are the land and waters. Techniques for living in harmony with the elements of our place are not new. Developing lifestyles that allow us to live appropriately with the changing availability of our resources is totally possible. The future asks us to streamline, and people are responding. Developing islands of coherence and hubs of resilience is essential. Connecting them is how we will thrive. In this presentation Amanda will share about the work of Ampersand Sustainable Learning Center and how mentorship and facilitating connection expands our possibilities, and invite discussion among the participants to promote cross-pollination.",
    note: "Discussion Panel · 2:30–3:00 pm",
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
            id={s.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-black/5"
          >
            {s.image && (
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-black/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.name}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: s.imagePosition ?? "center" }}
                />
              </div>
            )}
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
            {s.note && (
              <p className="text-xs opacity-50 mt-2 font-mono">{s.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
