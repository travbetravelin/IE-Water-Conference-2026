import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule — Synergy 2026",
};

type Session = {
  time: string;
  title: string;
  speaker?: string;
  note?: string;
  type?: "keynote" | "breakout" | "social" | "ceremony" | "meal";
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
      { time: "Afternoon", title: "Arrivals & Orientation", note: "Host-guided welcome tour of the ranch" },
      { time: "7:00–8:00 pm", title: "Dinner", type: "meal" },
    ],
  },
  {
    label: "Friday",
    date: "July 17 — Day 1",
    sessions: [
      { time: "8:00 am", title: "Breakfast", type: "meal" },
      { time: "9:00–9:30", title: "Opening Water Ceremony", note: "All participants bring water to add to a shared vessel. Prayer and communal mixing to open the conference.", type: "ceremony" },
      { time: "9:45", title: "Opening Speech" },
      { time: "10:00–11:00", title: "Crisis of our times, crisis of New Mexico", speaker: "Jan-Willem Jansens (Ecotone Landscape Planning)", type: "keynote", note: "Inaugural keynote" },
      { time: "11:00–11:15", title: "Break" },
      { time: "11:15–11:45", title: "Presentation TBD", speaker: "Sim — Table TBD" },
      { time: "11:45–12:45", title: "On Churros and on Herbs", speaker: "Joyce Skeet, Spirit Farm" },
      { time: "1:00–2:00 pm", title: "Lunch", type: "meal" },
      { time: "2:15–3:00", title: "Botanical Walk", speaker: "Mike Halverson" },
      {
        time: "3:00–5:00",
        title: "Practical Breakout Sessions",
        type: "breakout",
        note: "① Building erosion control structures from ecologically harvested piñon-juniper materials — Jan-Willem Jansens\n② Dance and Movement — Krisha",
      },
      { time: "5:00–5:45", title: "Tea & Personal Time" },
      { time: "5:45–6:15", title: "Presentation Prep" },
      { time: "6:15–7:00", title: "Personal Time (bar open)", type: "social" },
      { time: "7:00 pm", title: "Dinner — Dining Hall", type: "meal" },
      { time: "8:00–9:00", title: "Breakout Groups Present to Full Group", note: "8 minutes each", type: "breakout" },
      { time: "9:00–11:00", title: "Music & Poetry Jamming — Open Mic", speaker: "Dave + Indra (Poetry MC)", type: "social" },
    ],
  },
  {
    label: "Saturday",
    date: "July 18 — Day 2",
    sessions: [
      { time: "10:00", title: "Presentation", speaker: "Indra", type: "keynote" },
      { time: "11:00", title: "Talk TBD" },
      { time: "12:00–12:30", title: "Break" },
      { time: "12:30", title: "Spirit Farm Keynote", speaker: "James Skeet", note: "Dance Studio", type: "keynote" },
      { time: "1:30 pm", title: "Lunch", type: "meal" },
      { time: "2:30–3:30", title: "Presentation", speaker: "Ampersand + Amanda Bramble" },
      {
        time: "3:30–5:30",
        title: "Breakout Sessions",
        type: "breakout",
        note: "① Art and Water — Krisha\n② Shram Dan (Gift of Labor): practical work session at Synergia — Jan-Willem Jansens",
      },
      { time: "5:30–6:30", title: "Austin + Graziers Discussion", type: "social" },
      { time: "6:30 pm", title: "Dinner", type: "meal" },
      { time: "7:30–8:00", title: "Breakout Groups Present to Full Group", note: "8 minutes each", type: "breakout" },
      { time: "8:00–9:30", title: "Performance", speaker: "Hanna Zana" },
      { time: "9:00–11:00", title: "DJ Set", type: "social" },
    ],
  },
  {
    label: "Sunday",
    date: "July 19 — Day 3",
    sessions: [
      { time: "9:00 am", title: "Breakfast", type: "meal" },
      { time: "10:00–12:30", title: "Eden In Iraq Presentation", speaker: "IE Directors + Chili", type: "keynote" },
      { time: "12:30 pm", title: "Lunch", type: "meal" },
      {
        time: "1:30–2:30",
        title: "Water Challenges Panel",
        speaker: "Moderated by Nick Est",
        note: "Mountain Protest Appalachia MVP · Ute Tribe Native Water Conservation Representative",
        type: "keynote",
      },
      {
        time: "3:30–5:30",
        title: "Breakout Sessions",
        type: "breakout",
        note: "① Art and Water — Krisha\n② Shram Dan (Gift of Labor): practical work session — Jan-Willem Jansens",
      },
      { time: "4:30–5:00", title: "Breakout: Actions & Declaration of Actions", type: "breakout" },
      { time: "5:00–5:30", title: "Closing Ceremony & Final Remarks", type: "ceremony" },
      { time: "6:00 pm", title: "Dinner", type: "meal" },
      { time: "Evening", title: "Theater Performance + Night Program — Dome", speaker: "Aubrey Williams · Chili · Dave", type: "social" },
    ],
  },
  {
    label: "Monday",
    date: "July 20 — Departure",
    sessions: [
      { time: "7:30 am", title: "Early Breakfast (buffet)" , type: "meal" },
      { time: "8:00 am", title: "Check-out of Rooms", note: "Please have rooms cleared by 8 am" },
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
      <p className="opacity-60 mb-10">July 16–20, 2026 · Synergia Ranch</p>

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

      <div className="space-y-12">
        {schedule.map((day) => (
          <section key={day.label}>
            <div
              style={{ backgroundColor: "var(--water-dark)" }}
              className="text-white rounded-lg px-5 py-3 mb-4"
            >
              <h2 className="text-lg font-bold">{day.label}</h2>
              <p className="text-sm opacity-70">{day.date}</p>
            </div>
            <div className="space-y-2">
              {day.sessions.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[120px_1fr] gap-4 items-start py-3 border-b border-black/5"
                >
                  <p className="text-xs opacity-60 pt-0.5 font-mono">{s.time}</p>
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
                      <p className="text-xs opacity-60 mt-0.5">{s.speaker}</p>
                    )}
                    {s.note && (
                      <p className="text-xs opacity-50 mt-1 whitespace-pre-line">{s.note}</p>
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
