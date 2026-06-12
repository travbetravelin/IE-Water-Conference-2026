import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Synergy 2026",
};

const faqs = [
  {
    q: "What is included in the registration fee?",
    a: "Registration includes full access to all conference sessions, keynotes, breakouts, and evening programming, as well as all meals (breakfast, lunch, and dinner) for each day of the conference.",
  },
  {
    q: "Is on-site accommodation available?",
    a: "Synergia Ranch has limited on-site accommodation including camping. Availability is not guaranteed. Please contact the organizing team to inquire. See the Accommodations page for more information.",
  },
  {
    q: "What should I pack?",
    a: "The ranch is in the Sonoran Desert at elevation. July temperatures can be hot during the day and cool at night. We recommend light, sun-protective clothing for daytime activities, a warm layer for evenings, sturdy walking shoes for field work and walks, and sun protection (hat, sunscreen).",
  },
  {
    q: "Are there dietary accommodations?",
    a: "Please indicate any dietary needs or restrictions during registration. We will do our best to accommodate. Contact the organizing team with specific requirements.",
  },
  {
    q: "Is the venue accessible?",
    a: "We are working to ensure accessibility across the ranch for all participants. Please reach out to the organizing team with specific accessibility needs so we can make arrangements.",
  },
  {
    q: "What is the refund policy?",
    a: "Refund policy details will be provided with registration. Contact the organizing team with questions.",
  },
  {
    q: "Can I attend just part of the conference?",
    a: "The conference is designed as an integrated three-day experience. We encourage full attendance. Contact us if you have specific circumstances.",
  },
  {
    q: "How do I get to Synergia Ranch?",
    a: "Synergia Ranch is located at 26 Synergia Rd, Santa Fe, NM 87508. The nearest major airport is Albuquerque International Sunport (ABQ), about an hour away. Santa Fe Regional Airport (SAF) is closer but serves limited routes. See the Getting There page for full directions and carpool details.",
  },
  {
    q: "When is the deadline to register?",
    a: "Registration deadline will be announced shortly. Space is limited — we recommend registering early.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        FAQ
      </h1>
      <p className="opacity-60 mb-10">Frequently asked questions. More answers coming soon.</p>

      <div className="space-y-6">
        {faqs.map(({ q, a }) => (
          <div key={q} className="border-b border-black/10 pb-6">
            <h2 className="text-base font-semibold mb-2">{q}</h2>
            <p className="text-sm opacity-70 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <div
        style={{ backgroundColor: "var(--sand)" }}
        className="mt-12 rounded-xl p-6 text-sm"
      >
        <p className="font-semibold mb-1">Have a question not answered here?</p>
        <p className="opacity-70">
          Reach out to the organizing team directly. We will continue updating this page as
          more details are confirmed.
        </p>
      </div>
    </div>
  );
}
