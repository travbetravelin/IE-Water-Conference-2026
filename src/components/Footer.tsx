export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--charcoal)", color: "var(--sand)" }} className="mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold text-white mb-1">Synergia 2026</p>
          <p className="opacity-70">Water, Wind and Wisdom</p>
          <p className="opacity-70">July 16–19, 2026</p>
          <p className="opacity-70">
            <a href="https://synergiaranch.com/" className="hover:text-white transition-colors">Synergia Ranch</a>
            {" · Santa Fe, NM"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Quick Links</p>
          <ul className="space-y-1 opacity-70">
            {[
              ["Schedule", "/schedule"],
              ["Speakers", "/speakers"],
              ["Registration", "/registration"],
              ["Getting There", "https://synergiaranch.com/directions/"],
              ["FAQ", "/faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Sponsors</p>
          <ul className="space-y-1 opacity-70">
            {[
              "Cruces Creatives",
              "New Mexico Healthy Soil Working Group",
              "Institute of Ecotechnics",
              "Santa Fe Pojoaque Soil and Water Conservation District",
              "Synergia Ranch",
              "Anonymous donors",
            ].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs opacity-40 py-4">
        © 2026 IE Water Conference. All rights reserved.
      </div>
    </footer>
  );
}
