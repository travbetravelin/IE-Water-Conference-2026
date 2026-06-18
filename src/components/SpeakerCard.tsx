"use client";

import { useState } from "react";

type SpeakerCardProps = {
  id?: string;
  name: string;
  role?: string;
  bio?: string;
  talkTitle?: string;
  talkAbstract?: string;
  note?: string;
  image?: string;
  imagePosition?: string;
};

export default function SpeakerCard(props: SpeakerCardProps) {
  const { id, name, role, bio, talkTitle, talkAbstract, note, image, imagePosition } = props;
  const [bioOpen, setBioOpen] = useState(false);
  const hasBio = !!bio;

  return (
    <div
      id={id}
      className={`bg-white rounded-xl p-6 shadow-sm border border-black/5 flex flex-col${hasBio ? " cursor-pointer select-none" : ""}`}
      onClick={hasBio ? () => setBioOpen((o) => !o) : undefined}
      role={hasBio ? "button" : undefined}
      aria-expanded={hasBio ? bioOpen : undefined}
    >
      {image && (
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-black/10 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
            style={{ objectPosition: imagePosition ?? "center" }}
          />
        </div>
      )}
      <h2 className="text-lg font-semibold mb-0.5">{name}</h2>
      {role && <p className="text-sm opacity-50 mb-3">{role}</p>}
      {talkTitle && (
        <p
          style={{ color: "var(--clay)" }}
          className="text-sm font-medium italic mb-2"
        >
          {talkTitle}
        </p>
      )}
      {talkAbstract && (
        <p className="text-sm opacity-70 leading-relaxed mb-3">{talkAbstract}</p>
      )}
      {note && (
        <p className="text-xs opacity-50 mt-1 font-mono">{note}</p>
      )}
      {!bio && !talkAbstract && (
        <p className="text-sm opacity-40 italic">Bio coming soon.</p>
      )}

      {hasBio && (
        <>
          <div
            className={`overflow-hidden transition-all duration-300 ${bioOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
          >
            <p className="text-sm opacity-60 leading-relaxed border-t border-black/10 pt-3">{bio}</p>
          </div>
          <p className="text-xs mt-3 opacity-40 self-start">
            {bioOpen ? "Hide bio ↑" : "Read bio ↓"}
          </p>
        </>
      )}
    </div>
  );
}
