import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodations — Synergy 2026",
};

export default function AccommodationsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Accommodations
      </h1>
      <p className="opacity-60 mb-10">Where to stay during Synergy 2026</p>

      {/* On-site */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">On-Site at Synergia Ranch</h2>
        <div
          style={{ backgroundColor: "var(--sand)" }}
          className="rounded-xl p-6 text-sm leading-relaxed"
        >
          <p className="opacity-70 mb-3">
            Synergia Ranch has limited on-site accommodations including on-site camping.
            Availability is not guaranteed — please contact the organizing team directly to
            inquire about on-site stays.
          </p>
          <p className="opacity-70">
            Full details on room types, pricing, and booking will be shared as they are confirmed.
          </p>
        </div>
      </section>

      {/* Off-site */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Off-Site Options</h2>
        <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6 text-sm">
          <p className="opacity-60 italic">
            A list of nearby hotels, motels, and short-term rental options will be provided here
            as details are finalized. Check back closer to the event.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Planning Tips</h2>
        <ul className="space-y-3 text-sm">
          {[
            "Book accommodations early — July is peak travel season in the region.",
            "If you plan to stay on-site, reach out to confirm availability before making arrangements.",
            "Carpooling is encouraged — see the Getting There page for shuttle and carpool info.",
            "Meals are provided at the conference for all registered attendees.",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2 opacity-70">
              <span style={{ color: "var(--clay)" }} className="mt-0.5 shrink-0">→</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
