import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white" style={{ minHeight: "520px" }}>
        <Image
          src="/images/ranch-aerial.jpg"
          alt="Aerial view of Synergia Ranch"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(20,45,60,0.65)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-28">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Water, Wind and Wisdom
          </h1>
          <p style={{ color: "var(--sand)" }} className="text-xl md:text-2xl font-light mb-2 drop-shadow">
            2026 Synergia Ranch Conference
          </p>
          <p className="text-sm uppercase tracking-widest opacity-70 mt-2 mb-10">
            July 17–19, 2026 · Santa Fe, NM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              style={{ backgroundColor: "var(--clay)" }}
              className="px-8 py-3 rounded font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Register Now
            </Link>
            <Link
              href="/schedule"
              className="px-8 py-3 rounded font-semibold text-white border border-white/50 hover:bg-white/15 transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ backgroundColor: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--water-dark)" }} className="text-2xl font-bold mb-4">
            About the Conference
          </h2>
          <p className="text-base leading-relaxed opacity-80">
            Convening at the historic Synergia Ranch to address one of the defining
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
                title: "Indigenous decentralised water management and river revival",
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
                  style={{ backgroundColor: "var(--water)", color: "white" }}
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

      {/* Activities teaser with arroyo photo */}
      <section style={{ backgroundColor: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ color: "var(--water-dark)" }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-md" style={{ height: "240px" }}>
              <Image
                src="/images/arroyo.jpg"
                alt="Restoration work in the arroyo at Synergia Ranch"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              {[
                { icon: "🌿", label: "Volunteer Field Work" },
                { icon: "💃", label: "Dance & Movement" },
                { icon: "🏛️", label: "Ranch Historical Tour" },
                { icon: "🌊", label: "Arroyo & Orchard Walk" },
                { icon: "🔨", label: "Hands-on Workshops" },
              ].map((a) => (
                <div key={a.label} className="bg-white rounded-lg p-5 shadow-sm">
                  <p className="text-3xl mb-2">{a.icon}</p>
                  <p className="font-medium">{a.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
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

      {/* Flyer */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2
            style={{ color: "var(--water-dark)" }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Conference Flyer
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/conference-flyer.jpg"
              alt="Synergy 2026 Conference Flyer"
              width={676}
              height={954}
              className="w-full h-auto"
            />
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
