import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities — Synergia 2026",
};

type Activity = {
  icon: string;
  title: string;
  lead: string;
  description: React.ReactNode;
  id?: string;
};

const activities: Activity[] = [
  {
    icon: "🌿",
    title: "Volunteer Field Work",
    lead: "Jan-Willem Jansens, Ecotone Landscape Planning",
    description:
      "Hands-on restoration work on the ranch lands, including building erosion control structures from ecologically harvested piñon-juniper materials and the Shram Dan (gift of labor) sessions. A direct opportunity to learn and contribute to regenerative land stewardship.",
  },
  {
    icon: "🔥",
    title: "Biochar in Practice",
    lead: "James Skeet, Spirit Farm · David Sundberg, Santa Fe Farmers Market Institute",
    description: (
      <>
        In these two two-hour sessions,{" "}
        <Link href="/schedule#friday" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
          Friday
        </Link>{" "}
        and{" "}
        <Link href="/schedule#saturday" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
          Saturday
        </Link>{" "}
        respectively, participants will learn how to make Biochar at a small farm scale. Various barrels for burning will be used, and the principles behind why Biochar is useful for composting and regenerating soils will be uncovered.
      </>
    ),
  },
  {
    icon: "🌺",
    title: "Herbal Preparations",
    lead: "Joyce Skeet, Spirit Farm",
    description: (
      <>
        Following{" "}
        <Link href="/speakers#joyce-skeet" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
          her talk on Friday
        </Link>
        ,{" "}
        <Link href="/speakers#joyce-skeet" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
          Joyce Skeet
        </Link>{" "}
        takes us on a two-hour practical session making Herbal Preparations with native herbs.
      </>
    ),
  },
  {
    icon: "💃",
    title: "Movement and Metaphor, Body as Earth",
    id: "movement",
    lead: "Kristin Swiat · Stonegate Farm, Balmville, NY",
    description: (
      <>
        Embodied movement sessions with{" "}
        <Link href="/speakers#kristin-swiat" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
          Kristin Swiat
        </Link>{" "}
        exploring the relationship between body, land, and water. Open to all experience levels.
      </>
    ),
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
];

export default function ActivitiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Activities
      </h1>
      <p className="opacity-60 mb-3">
        Beyond the formal sessions,{" "}
        <Link href="/" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
          Synergia 2026
        </Link>{" "}
        offers a range of participatory activities woven throughout the three days.
      </p>
      <p className="text-sm opacity-40 italic mb-10">
        Final activity schedule will be confirmed closer to the event.
      </p>

      {/* Arroyo restoration photo */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-md mb-10" style={{ height: "280px" }}>
        <Image
          src="/images/arroyo.jpg"
          alt="Aerial view of restoration work in the arroyo at Synergia Ranch"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 px-5 py-3 text-white text-sm" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}>
          Restoration work in the arroyo at Synergia Ranch
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((a) => (
          <div
            key={a.title}
            id={a.id}
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
