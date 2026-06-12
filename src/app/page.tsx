import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--water-dark)" }}
        className="text-white py-24 px-4 text-center"
      >
        <p className="text-sm uppercase tracking-widest opacity-70 mb-3">
          July 17–19, 2026 · Synergia Ranch
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Synergy 2026
        </h1>
        <p
          style={{ color: "var(--sand)" }}
          className="text-xl md:text-2xl font-light mb-2"
        >
          Water, Wind and Wisdom
        </p>
        <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto mt-4 mb-10">
          Inspiring regenerative solutions to desertification — bringing together
          scientists, practitioners, artists, and communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/registration"
            style={{ backgroundColor: "var(--clay)" }}
            className="px-8 py-3 rounded font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Register Now
          </Link>
          <Link
            href="/schedule"
            className="px-8 py-3 rounded font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors"
          >
            View Schedule
          </Link>
        </div>
      </section>

      {/* Theme */}
      <section style={{ backgroundColor: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--water-dark)" }} className="text-2xl font-bold mb-4">
            About the Conference
          </h2>
          <p className="text-base leading-relaxed opacity-80">
            Synergy 2026 convenes at the historic Synergia Ranch to address one of the defining
            challenges of our time: desertification. Over three days, speakers, practitioners, and
            participants from across disciplines will share knowledge, demonstrate techniques, and
            build lasting connections around regenerative land and water stewardship.
          </p>
        </div>
      </section>

      {/* Keynotes */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ color: "var(--water-dark)" }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Featured Keynotes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Jan-Willem Jansens",
                org: "Ecotone Landscape Planning",
                title: "Crisis of our times, crisis of New Mexico",
                day: "Friday",
              },
              {
                name: "James Skeet",
                org: "Spirit Farm",
                title: "Spirit Farm Keynote",
                day: "Saturday",
              },
              {
                name: "Indra",
                org: "",
                title:
                  "Indigenous decentralised water management and river revival",
                day: "Saturday",
              },
              {
                name: "Eden In Iraq / IE Directors",
                org: "",
                title: "Eden In Iraq Presentation",
                day: "Sunday",
              },
            ].map((k) => (
              <div
                key={k.name}
                style={{ borderLeft: "4px solid var(--clay)" }}
                className="pl-4 py-2"
              >
                <p className="font-semibold text-base">{k.name}</p>
                {k.org && <p className="text-sm opacity-60 mb-1">{k.org}</p>}
                <p className="text-sm italic opacity-80">{k.title}</p>
                <span
                  style={{
                    backgroundColor: "var(--water)",
                    color: "white",
                  }}
                  className="inline-block mt-2 text-xs px-2 py-0.5 rounded"
                >
                  {k.day}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/speakers"
              style={{ color: "var(--water)" }}
              className="text-sm font-medium underline underline-offset-2 hover:opacity-70"
            >
              View all speakers →
            </Link>
          </div>
        </div>
      </section>

      {/* Activities teaser */}
      <section style={{ backgroundColor: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ color: "var(--water-dark)" }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Activities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            {[
              { icon: "🌿", label: "Volunteer Field Work" },
              { icon: "💃", label: "Dance & Movement" },
              { icon: "🏛️", label: "Ranch Historical Tour" },
              { icon: "🌊", label: "Arroyo & Orchard Walk" },
            ].map((a) => (
              <div
                key={a.label}
                className="bg-white rounded-lg p-5 shadow-sm"
              >
                <p className="text-3xl mb-2">{a.icon}</p>
                <p className="font-medium">{a.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/activities"
              style={{ color: "var(--water)" }}
              className="text-sm font-medium underline underline-offset-2 hover:opacity-70"
            >
              Learn more about activities →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{ backgroundColor: "var(--clay)" }}
        className="py-14 px-4 text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-3">Join Us This July</h2>
        <p className="opacity-80 mb-6 max-w-lg mx-auto">
          Secure your spot at Synergy 2026. Space at Synergia Ranch is limited.
        </p>
        <Link
          href="/registration"
          className="inline-block bg-white font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          style={{ color: "var(--clay)" }}
        >
          Register Now
        </Link>
      </section>
    </div>
  );
}
