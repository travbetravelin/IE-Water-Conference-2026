"use client";

import { useState } from "react";

type ActivityBioCardProps = {
  id?: string;
  icon: React.ReactNode;
  title: string;
  lead: string;
  description: React.ReactNode;
  bio: string;
  note?: React.ReactNode;
};

export default function ActivityBioCard({ id, icon, title, lead, description, bio, note }: ActivityBioCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={id}
      className="bg-white rounded-xl p-6 border border-black/5 shadow-sm cursor-pointer select-none"
      onClick={() => setOpen((o) => !o)}
      role="button"
      aria-expanded={open}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h2 className="text-base font-semibold mb-1">{title}</h2>
      <p className="text-xs opacity-50 mb-3">{lead}</p>
      <div className="text-sm opacity-70 leading-relaxed space-y-2">{description}</div>
      {note && <p className="text-xs opacity-50 mt-2 font-mono">{note}</p>}
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[3000px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-black/10 pt-3 text-sm opacity-60 leading-relaxed space-y-3">
          {bio.split("\n\n").map((para, i) => <p key={i}>{para.trim()}</p>)}
        </div>
      </div>
      <p className="text-xs mt-3 opacity-40">{open ? "Hide bio ↑" : "Read bio ↓"}</p>
    </div>
  );
}
