import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities — Synergy 2026",
};

const activities = [
  {
    icon: "🌿",
    title: "Volunteer Field Work",
    lead: "Jan-Willem Jansens, Ecotone Landscape Planning",
    description:
      "Hands-on restoration work on the ranch lands, including building erosion control structures from ecologically harvested piñon-juniper materials and the Shram Dan (gift of labor) sessions. A direct opportunity to learn and contribute to regenerative land stewardship.",
  },
  {
    icon: "💃",
    title: "Dance & Movement Sessions",
    lead: "Krisha",
    description:
      "Embodied movement sessions exploring the relationship between body, land, and water. Open to all experience levels.",
  },
  {
    icon: "🏛️",
    title: "Historical Tour of Ranch Facilities",
    lead: "Synergia Ranch Hosts",
    description:
      "A guided tour of the ranch's history, architecture, and decades of ecological and community experimentation. Learn about the unique story of Synergia Ranch and its place in regenerative land stewardship.",
  },
  {
    icon: "🌊",
    title: "Walk Through Arroyos and Orchard",
    lead: "Ranch Guides",
    description:
      "Explore the living landscape of Synergia Ranch — walking the arroyos that channel seasonal water through the land, and through the working orchard that represents years of arid-land food cultivation.",
  },
  {
    icon: "🌱",
    title: "Botanical Walk",
    lead: "Mike Halverson",
    description:
      "A guided botanical walk identifying native and cultivated plants in the ranch environment, with a focus on water-adapted species and land relationships.",
  },
  {
    icon: "🎨",
    title: "Art and Water",
    lead: "Krisha",
    description:
      "A creative breakout session exploring artistic responses to water — its presence, absence, movement, and meaning. Open to all backgrounds.",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Activities
      </h1>
      <p className="opacity-60 mb-3">
        Beyond the formal sessions, Synergy 2026 offers a range of participatory activities
        woven throughout the three days.
      </p>
      <p className="text-sm opacity-40 italic mb-10">
        Final activity schedule will be confirmed closer to the event.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((a) => (
          <div
            key={a.title}
            className="bg-white rounded-xl p-6 border border-black/5 shadow-sm"
          >
            <p className="text-3xl mb-3">{a.icon}</p>
            <h2 className="text-base font-semibold mb-1">{a.title}</h2>
            <p className="text-xs opacity-50 mb-3">{a.lead}</p>
            <p className="text-sm opacity-70 leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
