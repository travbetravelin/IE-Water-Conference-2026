"use client";

import { useState } from "react";

type ActivityBioCardProps = {
  id?: string;
  icon: React.ReactNode;
  title: string;
  lead: string;
  description: React.ReactNode;
  bio?: string;
  images?: string[];
  note?: React.ReactNode;
};

export default function ActivityBioCard({ id, icon, title, lead, description, bio, images, note }: ActivityBioCardProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hasGallery = !!images && images.length > 0;
  const isClickable = !!bio || hasGallery;

  function handlePrev(e: React.MouseEvent) {
    e.stopPropagation();
    setImageIndex((i) => (i - 1 + images!.length) % images!.length);
  }
  function handleNext(e: React.MouseEvent) {
    e.stopPropagation();
    setImageIndex((i) => (i + 1) % images!.length);
  }

  return (
    <div
      id={id}
      className={`bg-white rounded-xl p-6 border border-black/5 shadow-sm${isClickable ? " cursor-pointer select-none" : ""}`}
      onClick={isClickable ? () => setOpen((o) => !o) : undefined}
      role={isClickable ? "button" : undefined}
      aria-expanded={isClickable ? open : undefined}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h2 className="text-base font-semibold mb-1">{title}</h2>
      <p className="text-xs opacity-50 mb-3">{lead}</p>
      <div className="text-sm opacity-70 leading-relaxed space-y-2">{description}</div>
      {note && <p className="text-xs opacity-50 mt-2 font-mono">{note}</p>}

      {isClickable && (
        <>
          <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[3000px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <div className="border-t border-black/10 pt-3 space-y-3">
              {hasGallery && (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images![imageIndex]}
                    alt={`${title} photo ${imageIndex + 1}`}
                    className="w-full rounded-xl object-contain max-h-80"
                  />
                  {images!.length > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <button
                        onClick={handlePrev}
                        className="text-sm px-3 py-1 rounded-full border border-black/20 hover:bg-black/5 transition-colors"
                      >
                        ←
                      </button>
                      <span className="text-xs opacity-40">{imageIndex + 1} / {images!.length}</span>
                      <button
                        onClick={handleNext}
                        className="text-sm px-3 py-1 rounded-full border border-black/20 hover:bg-black/5 transition-colors"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>
              )}
              {bio && (
                <div className="text-sm opacity-60 leading-relaxed space-y-3">
                  {bio.split("\n\n").map((para, i) => <p key={i}>{para.trim()}</p>)}
                </div>
              )}
            </div>
          </div>
          <p className="text-xs mt-3 opacity-40">
            {open
              ? hasGallery && !bio ? "Hide photo ↑" : "Hide ↑"
              : hasGallery && !bio ? "View photo ↓" : "Read bio ↓"}
          </p>
        </>
      )}
    </div>
  );
}
