import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const COLORS = {
    ink: "#14181F",
    inkSoft: "#1D2330",
    paper: "#F2EDE1",
    gold: "#E8A33D",
    crimson: "#C24D3D",
    slate: "#8B93A7",
};

const CHANNELS = [
    {
        icon: Mail,
        label: "Email",
        value: "help@boxwindow.com",
        note: "Replies within a day",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 98765 43210",
        note: "Mon–Sat, 10am–7pm",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "14 Marquee Lane, Meerut",
        note: "By appointment only",
    },
];

const TOPICS = ["Booking issue", "Refund", "List an event", "Something else"];

function Perforation() {
    const dots = new Array(24).fill(0);
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

export default function ContactPage() {
    const [topic, setTopic] = useState(TOPICS[0]);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <section
            className="w-full px-6 py-20 sm:px-10 lg:px-16"
            style={{ background: COLORS.ink, fontFamily: "'Inter', sans-serif" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
        .marquee-font { font-family: 'Bebas Neue', 'Inter', sans-serif; }
        .field:focus { outline: none; box-shadow: 0 0 0 2px ${COLORS.gold}; }
      `}</style>

            <div className="mx-auto max-w-5xl">
                {/* Eyebrow */}
                <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-10" style={{ background: COLORS.gold }} />
                    <span
                        className="text-xs font-semibold uppercase tracking-[0.25em]"
                        style={{ color: COLORS.gold }}
                    >
                        Get in touch
                    </span>
                </div>

                {/* Headline */}
                <h2
                    className="marquee-font leading-[0.95] tracking-wide"
                    style={{ color: COLORS.paper, fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
                >
                    Tell us what
                    <br />
                    <span style={{ color: COLORS.gold }}>went sideways.</span>
                </h2>

                <p
                    className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
                    style={{ color: COLORS.slate }}
                >
                    Booking trouble, a refund, or a venue you want listed &mdash; write
                    in and a real person on the team will get back to you, no ticket
                    queue theatrics.
                </p>

                {/* Main card: form + channels */}
                <div
                    className="mt-14 grid overflow-hidden rounded-2xl lg:grid-cols-[1.3fr_1px_1fr]"
                    style={{ background: COLORS.inkSoft, border: "1px solid rgba(242,237,225,0.08)" }}
                >
                    {/* Form */}
                    <div className="px-6 py-8 sm:px-10">
                        {submitted ? (
                            <div className="flex h-full flex-col items-start justify-center gap-3 py-10">
                                <Send size={22} style={{ color: COLORS.gold }} />
                                <h3 className="marquee-font text-2xl tracking-wide" style={{ color: COLORS.paper }}>
                                    Message sent.
                                </h3>
                                <p className="text-sm" style={{ color: COLORS.slate }}>
                                    We'll follow up at the email you gave us, usually within a day.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-2 text-sm font-medium underline underline-offset-4"
                                    style={{ color: COLORS.gold }}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="flex flex-col gap-2">
                                        <span
                                            className="text-xs font-semibold uppercase tracking-wider"
                                            style={{ color: COLORS.slate }}
                                        >
                                            Name
                                        </span>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your name"
                                            className="field rounded-lg px-4 py-3 text-sm"
                                            style={{
                                                background: COLORS.ink,
                                                color: COLORS.paper,
                                                border: "1px solid rgba(242,237,225,0.15)",
                                            }}
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span
                                            className="text-xs font-semibold uppercase tracking-wider"
                                            style={{ color: COLORS.slate }}
                                        >
                                            Email
                                        </span>
                                        <input
                                            required
                                            type="email"
                                            placeholder="you@example.com"
                                            className="field rounded-lg px-4 py-3 text-sm"
                                            style={{
                                                background: COLORS.ink,
                                                color: COLORS.paper,
                                                border: "1px solid rgba(242,237,225,0.15)",
                                            }}
                                        />
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span
                                        className="text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: COLORS.slate }}
                                    >
                                        What's this about
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {TOPICS.map((t) => (
                                            <button
                                                type="button"
                                                key={t}
                                                onClick={() => setTopic(t)}
                                                className="rounded-full px-4 py-2 text-xs font-medium transition-colors"
                                                style={{
                                                    background: topic === t ? COLORS.gold : "transparent",
                                                    color: topic === t ? COLORS.ink : COLORS.paper,
                                                    border: `1px solid ${topic === t ? COLORS.gold : "rgba(242,237,225,0.18)"}`,
                                                }}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span
                                        className="text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: COLORS.slate }}
                                    >
                                        Message
                                    </span>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Give us the details — booking ID, event name, whatever's relevant."
                                        className="field resize-none rounded-lg px-4 py-3 text-sm"
                                        style={{
                                            background: COLORS.ink,
                                            color: COLORS.paper,
                                            border: "1px solid rgba(242,237,225,0.15)",
                                        }}
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                                    style={{ background: COLORS.crimson, color: COLORS.paper }}
                                >
                                    <Send size={15} />
                                    Send message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Divider (vertical on desktop, perforation on mobile) */}
                    <div
                        className="hidden lg:block"
                        style={{ background: "rgba(242,237,225,0.08)" }}
                    />
                    <div className="px-6 lg:hidden sm:px-10">
                        <Perforation />
                    </div>

                    {/* Channels */}
                    <div className="flex flex-col gap-6 px-6 py-8 sm:px-10 lg:py-10">
                        {CHANNELS.map(({ icon: Icon, label, value, note }) => (
                            <div key={label} className="flex items-start gap-4">
                                <span
                                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
                                    style={{ border: "1px solid rgba(242,237,225,0.18)" }}
                                >
                                    <Icon size={16} style={{ color: COLORS.gold }} />
                                </span>
                                <div>
                                    <div
                                        className="text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: COLORS.slate }}
                                    >
                                        {label}
                                    </div>
                                    <div
                                        className="marquee-font mt-1 text-xl tracking-wide"
                                        style={{ color: COLORS.paper }}
                                    >
                                        {value}
                                    </div>
                                    <div className="mt-1 text-xs" style={{ color: COLORS.slate }}>
                                        {note}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div
                            className="mt-2 flex items-center gap-2 rounded-lg px-4 py-3 text-xs"
                            style={{ background: COLORS.ink, color: COLORS.slate, border: "1px solid rgba(242,237,225,0.1)" }}
                        >
                            <Clock size={14} style={{ color: COLORS.crimson }} />
                            Support desk is closed on public holidays.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}