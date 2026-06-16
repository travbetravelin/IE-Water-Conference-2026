import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schedule — 2026 Synergia Ranch Conference",
};

type Session = {
  time: string;
  title: string;
  speaker?: string;
  speakerUrl?: string;
  note?: string;
  type?: "keynote" | "breakout" | "social" | "ceremony" | "meal";
  breakoutOptions?: string[];
};

type Day = {
  label: string;
  date: string;
  sessions: Session[];
};

const schedule: Day[] = [
  {
    label: "Thursday",
    date: "July 16",
    sessions: [
      { time: "Afternoon", title: "Arrivals", note: "Check in and settle in at the ranch" },
      { time: "4:30–5:15 pm", title: "Historical Tour of the Ranch", type: "social" },
      { time: "5:30–6:00 pm", title: "Toasts & Welcome Speech", note: "Rounds of introductions", type: "social" },
      { time: "6:00–7:00 pm", title: "Dinner", type: "meal" },
    ],
  },
  {
    label: "Friday",
    date: "July 17 — Day 1",
    sessions: [
      { time: "8:00 am", title: "Breakfast", type: "meal" },
      { time: "9:00–9:15 am", title: "Opening Water Ceremony", note: "All participants bring water to add to a shared vessel. Prayer and communal mixing to open the conference.", type: "ceremony" },
      { time: "9:15–9:45 am", title: "Walk Through Arroyos and Orchard" },
      { time: "9:45 am", title: "Opening Speech" },
      { time: "10:00–11:00 am", title: "Crisis of our times, crisis of New Mexico", speaker: "Jan-Willem Jansens, Ecotone Landscape Planning", type: "keynote", note: "Inaugural keynote" },
      { time: "11:00–11:15 am", title: "Break" },
      { time: "11:15 am–12:15 pm", title: "Presentation", speaker: "Joyce Skeet, Spirit Farm" },
      { time: "12:15–1:15 pm", title: "Lunch", type: "meal" },
      { time: "1:15–2:15 pm", title: "Botanical Walk", speaker: "Mike Halverson" },
      { time: "2:30–3:00 pm", title: "Presentation" },
      {
        time: "3:00–5:00 pm",
        title: "Practical Breakout Sessions",
        type: "breakout",
        breakoutOptions: [
          "Building Erosion Control Structures — Jan-Willem Jansens",
          "Movement and Metaphor, Body as Earth — Kristin Swiat",
          "Biochar — James Skeet, Spirit Farm",
        ],
      },
      { time: "5:00–5:30 pm", title: "Tea & Personal Time" },
      { time: "5:30–6:00 pm", title: "Presentation Preparation for Session Groups" },
      { time: "6:00–7:00 pm", title: "Dinner — Dining Hall", type: "meal" },
      { time: "7:15–7:45 pm", title: "Breakout Groups Share Presentations", note: "8 minutes each", type: "breakout" },
      { time: "7:45–8:45 pm", title: "Poetry Jamming & Open Mic", speaker: "Dave Neita", type: "social" },
      { time: "8:45–10:00 pm", title: "Music and Dance at Dome", type: "social" },
    ],
  },
  {
    label: "Saturday",
    date: "July 18 — Day 2",
    sessions: [
      { time: "8:00–9:00 am", title: "Breakfast", type: "meal" },
      {
        time: "9:00–9:45 am",
        title: "Optional Morning Sessions",
        type: "breakout",
        breakoutOptions: [
          "Nature Walk in the Arroyos",
          "Painting in Nature",
        ],
      },
      { time: "10:00–11:00 am", title: "Presentation", speaker: "James Skeet — Dance Studio" },
      { time: "11:00 am–12:00 pm", title: "Indigenous Decentralised Water Management and River Revival", speaker: "Indra Shekhar Singh", speakerUrl: "/speakers#indra-shekhar-singh", type: "keynote" },
      { time: "12:15–1:15 pm", title: "Lunch", type: "meal" },
      { time: "1:15–1:45 pm", title: "Presentation", speaker: "Zack Withers" },
      { time: "1:45–2:15 pm", title: "Presentation", speaker: "Amanda Bramble, Ampersand Sustainable Learning Center" },
      { time: "2:15–2:45 pm", title: "Presentation", speaker: "Author" },
      {
        time: "3:00–5:00 pm",
        title: "Breakout Sessions",
        type: "breakout",
        breakoutOptions: [
          "Building Erosion Control Structures — Jan-Willem Jansens",
          "Movement and Metaphor, Body as Earth — Kristin Swiat",
          "Water, Information and Maps — Simtable",
        ],
      },
      { time: "5:00–5:30 pm", title: "Tea & Personal Time" },
      { time: "5:30–6:00 pm", title: "Presentation Prep", note: "Breakout spaces: Dome, Yurt, Courtyard, Orchard" },
      { time: "6:00–7:00 pm", title: "Dinner — Dining Hall", type: "meal" },
      { time: "7:15–7:45 pm", title: "Breakout Groups Share Presentations", note: "8 minutes each · Evening program at the Dome", type: "breakout" },
      { time: "7:45–9:15 pm", title: "Hanna Zana — Solo Folk Music Concert", type: "social" },
      { time: "9:15–9:30 pm", title: "\"The Municipal Abattoir\"", speaker: "Chili Hawes · Dave Neita", note: "A rare, politically charged one-act play written in the late 1960s, exploring themes of totalitarianism and the loss of individual free will.", type: "social" },
      { time: "9:30–11:00 pm", title: "Music and Dance at Dome", type: "social" },
    ],
  },
  {
    label: "Sunday",
    date: "July 19 — Day 3",
    sessions: [
      { time: "8:00–9:00 am", title: "Breakfast", type: "meal" },
      {
        time: "9:00–9:45 am",
        title: "Optional Morning Sessions",
        type: "breakout",
        breakoutOptions: [
          "Nature Walk in the Arroyos",
          "Painting in Nature",
        ],
      },
      { time: "10:00–11:00 am", title: "Structures of Managerial Thought", speaker: "Chili Hawes", type: "keynote" },
      { time: "11:00 am–12:00 pm", title: "Our shared challenge is to intelligently restore the health of our global biosphere, acting with urgency as if our lives depend on it, which they do", speaker: "Mark Nelson & Meridel Rubenstein", speakerUrl: "/speakers#mark-nelson", type: "keynote" },
      { time: "12:15–1:15 pm", title: "Lunch", type: "meal" },
      { time: "1:15–2:15 pm", title: "Beyond the Liquid: Architectural Responses to the States and Crises of Water", speaker: "Nino Saggio", type: "keynote" },
      { time: "2:15–2:45 pm", title: "Presentation TBD", speaker: "Amanda Bramble, Ampersand" },
      {
        time: "3:00–5:00 pm",
        title: "Breakout Sessions",
        type: "breakout",
        breakoutOptions: [
          "Movement and Metaphor, Body as Earth — Kristin Swiat",
          "Building Erosion Control Structures — Jan-Willem Jansens",
          "Composting Ceremony Preparation — James Skeet",
        ],
      },
      { time: "5:00–5:30 pm", title: "Tea & Personal Time" },
      { time: "5:30–6:00 pm", title: "Presentation Prep", note: "Breakout spaces: Dome, Yurt, Courtyard, Orchard" },
      { time: "6:00–7:00 pm", title: "Dinner — Dining Hall", type: "meal" },
      { time: "7:15–7:45 pm", title: "Breakout Groups Share Presentations", note: "8 minutes each · Evening program at the Dome", type: "breakout" },
      { time: "7:45–8:15 pm", title: "Compost Ceremony", type: "ceremony" },
      { time: "8:15–8:30 pm", title: "Closing Remarks", type: "ceremony" },
    ],
  },
  {
    label: "Monday",
    date: "July 20 — Departure",
    sessions: [
      { time: "7:30 am", title: "Early Breakfast Buffet", type: "meal" },
      { time: "8:00 am", title: "Check-out of Rooms", note: "Please have rooms cleared by 8:00 am" },
    ],
  },
];

const typeColors: Record<string, string> = {
  keynote: "#2b5f75",
  breakout: "#6b8f71",
  social: "#9b7a5e",
  ceremony: "#8b6bb1",
  meal: "#b0956a",
};

const typeLabels: Record<string, string> = {
  keynote: "Keynote",
  breakout: "Breakout",
  social: "Social",
  ceremony: "Ceremony",
  meal: "Meal",
};

export default function SchedulePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Schedule
      </h1>
      <p className="opacity-60 mb-10">July 16–20, 2026 · Synergia Ranch · Santa Fe, NM</p>

      <div className="flex flex-wrap gap-3 mb-10 text-xs">
        {Object.entries(typeLabels).map(([key, label]) => (
          <span
            key={key}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: typeColors[key] }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="space-y-10">
        {schedule.map((day) => (
          <section key={day.label}>
            <div
              style={{ backgroundColor: "var(--water-dark)" }}
              className="text-white rounded-t-xl px-5 py-3"
            >
              <h2 className="text-lg font-bold">{day.label}</h2>
              <p className="text-sm opacity-70">{day.date}</p>
            </div>
            <div className="bg-white rounded-b-xl shadow-sm border border-black/5 divide-y divide-black/5">
              {day.sessions.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[130px_1fr] gap-4 items-start px-5 py-3"
                >
                  <p className="text-xs opacity-50 pt-0.5 font-mono tabular-nums">{s.time}</p>
                  <div>
                    <div className="flex items-start gap-2 flex-wrap">
                      <p className="font-medium text-sm">{s.title}</p>
                      {s.type && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full text-white shrink-0"
                          style={{ backgroundColor: typeColors[s.type] }}
                        >
                          {typeLabels[s.type]}
                        </span>
                      )}
                    </div>
                    {s.speaker && (
                      <p className="text-xs opacity-60 mt-0.5">
                        {s.speakerUrl ? (
                          <Link href={s.speakerUrl} style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
                            {s.speaker}
                          </Link>
                        ) : s.speaker}
                      </p>
                    )}
                    {s.note && (
                      <p className="text-xs opacity-50 mt-1">{s.note}</p>
                    )}
                    {s.breakoutOptions && (
                      <ul className="mt-2 space-y-1">
                        {s.breakoutOptions.map((opt) => {
                          const [session, leader] = opt.split(" — ");
                          return (
                            <li key={opt} className="text-xs flex gap-1.5 items-baseline">
                              <span className="opacity-40 shrink-0">→</span>
                              <span>
                                {session === "Movement and Metaphor, Body as Earth" ? (
                                  <Link href="/activities#movement" style={{ color: "var(--water)" }} className="underline underline-offset-2 hover:opacity-70">
                                    <strong>{session}</strong>
                                  </Link>
                                ) : (
                                  <strong>{session}</strong>
                                )}
                                {leader && <span className="opacity-60"> — {leader}</span>}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
