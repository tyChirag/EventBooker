import React from "react";
import { Film, Music, Ticket, MapPin, Sparkles } from "lucide-react";

const COLORS = {
  ink: "#14181F",
  inkSoft: "#1D2330",
  paper: "#F2EDE1",
  gold: "#E8A33D",
  crimson: "#C24D3D",
  slate: "#8B93A7",
};

const STATS = [
  { value: "12,400+", label: "Events listed" },
  { value: "180", label: "Cities covered" },
  { value: "9", label: "Live categories" },
  { value: "2.3M", label: "Tickets booked" },
];

const CATEGORIES = [
  { icon: Film, label: "Movies" },
  { icon: Music, label: "Concerts" },
  { icon: Sparkles, label: "Festivals" },
  { icon: Ticket, label: "Theatre" },
];

function Perforation() {
  const dots = new Array(28).fill(0);
  return (
    <div className="relative flex items-center py-2" aria-hidden="true">
      <div
        className="absolute left-0 right-0 border-t border-dashed"
        style={{ borderColor: "rgba(242,237,225,0.25)" }}
      />
      <div className="flex w-full justify-between px-1">
        {dots.map((_, i) => (
          <span
            key={i}
            className="block rounded-full"
            style={{
              width: 6,
              height: 6,
              background: COLORS.ink,
              boxShadow: "0 0 0 1px rgba(242,237,225,0.18)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section
      className="w-full px-6 py-20 sm:px-10 lg:px-16"
      style={{ background: COLORS.ink, fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
        .marquee-font { font-family: 'Bebas Neue', 'Inter', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span
            className="h-px w-10"
            style={{ background: COLORS.gold }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: COLORS.gold }}
          >
            About the box office
          </span>
        </div>

        {/* Headline */}
        <h2
          className="marquee-font leading-[0.95] tracking-wide"
          style={{
            color: COLORS.paper,
            fontSize: "clamp(2.75rem, 6vw, 5rem)",
          }}
        >
          Every seat in town,
          <br />
          <span style={{ color: COLORS.gold }}>one window to book it.</span>
        </h2>

        <p
          className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: COLORS.slate }}
        >
          We built this as the one place to find what's playing, playing
          live, or playing tonight &mdash; movies, concerts, festivals, and
          stage shows, pulled from venues across the city and handed to you
          with a straight path to a confirmed seat.
        </p>

        {/* Ticket stub card */}
        <div
          className="mt-14 overflow-hidden rounded-2xl"
          style={{ background: COLORS.inkSoft, border: "1px solid rgba(242,237,225,0.08)" }}
        >
          <div className="grid grid-cols-2 gap-y-8 px-6 py-8 sm:grid-cols-4 sm:px-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="marquee-font text-3xl tracking-wide sm:text-4xl"
                  style={{ color: COLORS.paper }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 text-xs font-medium uppercase tracking-wider"
                  style={{ color: COLORS.slate }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 sm:px-10">
            <Perforation />
          </div>

          <div className="flex flex-wrap gap-3 px-6 py-6 sm:px-10">
            {CATEGORIES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                style={{
                  color: COLORS.paper,
                  border: `1px solid rgba(242,237,225,0.18)`,
                }}
              >
                <Icon size={15} style={{ color: COLORS.crimson }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-10 flex items-center gap-2 text-sm" style={{ color: COLORS.slate }}>
          <MapPin size={16} style={{ color: COLORS.gold }} />
          Currently live in 180 cities, with new venues added every week.
        </div>
      </div>
    </section>
  );
}