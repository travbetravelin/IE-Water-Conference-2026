"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Speakers" },
  { href: "/registration", label: "Registration" },
  { href: "/accommodations", label: "Accommodations" },
  { href: "/venue", label: "Venue" },
  { href: "/getting-there", label: "Getting There" },
  { href: "/activities", label: "Activities" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "var(--water-dark)" }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/images/logo.svg"
            alt="Synergia Ranch Agroecology"
            width={44}
            height={16}
            style={{ filter: "brightness(0) invert(1)", height: "32px", width: "auto" }}
          />
          <span className="text-white font-semibold text-sm tracking-wide leading-tight">
            Synergy 2026
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  pathname === href
                    ? "bg-white/20 text-white font-medium"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/registration"
          style={{ backgroundColor: "var(--clay)" }}
          className="hidden lg:inline-flex items-center px-4 py-1.5 rounded text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Register
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "var(--water-dark)" }} className="lg:hidden border-t border-white/10 px-4 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                pathname === href ? "text-white font-medium" : "text-white/75"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/registration"
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "var(--clay)" }}
            className="mt-3 block text-center px-4 py-2 rounded text-white text-sm font-medium"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
