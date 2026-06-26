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
              { label: "Schedule", href: "/schedule" },
              { label: "Speakers", href: "/speakers" },
              { label: "Getting There", href: "/getting-there" },
              { label: "FAQ", href: "/faq" },
            ].map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">{label}</a>
              </li>
            ))}
            <li>
              <a
                href="https://crucescreatives.org/event-6623482?CalendarViewType=1&SelectedDate=7/25/2026"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Registration
              </a>
            </li>
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
        © 2026 Synergia Conference. All rights reserved.
      </div>
    </footer>
  );
}
