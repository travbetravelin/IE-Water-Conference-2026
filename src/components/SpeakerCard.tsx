"use client";

import { useState } from "react";

type CoPresenter = {
  name: string;
  id?: string;
  role?: string;
  image?: string;
  imagePosition?: string;
};

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
  coPresenter?: CoPresenter;
};

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="w-full h-full flex items-center justify-center text-2xl font-bold opacity-30" style={{ backgroundColor: "var(--sand)" }}>
      {initials}
    </div>
  );
}

export default function SpeakerCard(props: SpeakerCardProps) {
  const { id, name, role, bio, talkTitle, talkAbstract, note, image, imagePosition, coPresenter } = props;
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
      {/* Photos */}
      {coPresenter ? (
        <div className="flex gap-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-black/10 shrink-0">
            {image ? (
              <img src={image} alt={name} className="object-cover w-full h-full" style={{ objectPosition: imagePosition ?? "center" }} />
            ) : (
              <Initials name={name} />
            )}
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden bg-black/10 shrink-0">
            <span id={coPresenter.id} />
            {coPresenter.image ? (
              <img src={coPresenter.image} alt={coPresenter.name} className="object-cover w-full h-full" style={{ objectPosition: coPresenter.imagePosition ?? "center" }} />
            ) : (
              <Initials name={coPresenter.name} />
            )}
          </div>
        </div>
      ) : image ? (
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-black/10 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
            style={{ objectPosition: imagePosition ?? "center" }}
          />
        </div>
      ) : null}

      {/* Primary presenter */}
      <h2 className="text-lg font-semibold mb-0.5">{name}</h2>
      {role && <p className="text-sm opacity-50 mb-1">{role}</p>}

      {/* Co-presenter name + role */}
      {coPresenter && (
        <div className="mt-2 mb-1">
          <h2 className="text-lg font-semibold mb-0.5">{coPresenter.name}</h2>
          {coPresenter.role && <p className="text-sm opacity-50">{coPresenter.role}</p>}
        </div>
      )}

      {talkTitle && (
        <p style={{ color: "var(--clay)" }} className="text-sm font-medium italic mb-2 mt-2">
          {talkTitle}
        </p>
      )}
      {talkAbstract && (
        <p className="text-sm opacity-70 leading-relaxed mb-3">{talkAbstract}</p>
      )}
      {note && (
        <div className="text-xs opacity-50 mt-1 font-mono space-y-0.5">
          {note.split("\n").map((line, i) => <p key={i}>{line}</p>)}
        </div>
      )}
      {!bio && !talkAbstract && (
        <p className="text-sm opacity-40 italic">Bio coming soon.</p>
      )}

      {hasBio && (
        <>
          <div
            className={`overflow-hidden transition-all duration-300 ${bioOpen ? "max-h-[3000px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
          >
            <div className="text-sm opacity-60 leading-relaxed border-t border-black/10 pt-3 space-y-3">
              {bio!.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <p className="text-xs mt-3 opacity-40 self-start">
            {bioOpen ? "Hide bio ↑" : "Read bio ↓"}
          </p>
        </>
      )}
    </div>
  );
}
