import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venue — Synergy 2026",
};

export default function VenuePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Venue
      </h1>
      <p className="opacity-60 mb-10">Synergia Ranch</p>

      {/* Placeholder image area */}
      <div
        style={{ backgroundColor: "var(--sand)" }}
        className="rounded-2xl w-full h-56 flex items-center justify-center mb-8 text-sm opacity-40"
      >
        Venue photo coming soon
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">About the Space</h2>
        <p className="text-sm opacity-70 leading-relaxed mb-4">
          Synergia Ranch is a historic working ranch and ecological research center located
          outside Tucson, Arizona. With decades of history in ecological experimentation,
          community living, and land stewardship, it provides an extraordinary setting for a
          conference on regenerative solutions.
        </p>
        <p className="text-sm opacity-70 leading-relaxed">
          The ranch features a dining hall, performance spaces including the Dome and Dance Studio,
          working orchards, arroyos, and extensive grounds shaped by decades of land restoration
          work — all of which will be woven into the conference program.
        </p>
        <p className="text-xs opacity-40 italic mt-4">
          Full venue description and photos will be added here shortly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Key Spaces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Dining Hall", desc: "Main gathering space for meals and large sessions" },
            { name: "Dance Studio", desc: "Keynotes and movement sessions" },
            { name: "The Dome", desc: "Evening programs and special performances" },
            { name: "Ranch Grounds", desc: "Botanical walks, arroyo tours, and field work" },
          ].map((space) => (
            <div
              key={space.name}
              className="bg-white rounded-xl p-5 border border-black/5 shadow-sm text-sm"
            >
              <p className="font-semibold mb-1">{space.name}</p>
              <p className="opacity-60">{space.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
