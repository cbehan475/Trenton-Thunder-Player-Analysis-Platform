import React from "react";
import HitterBlurb from "./HitterBlurb";
import HitterContextNotes from "./HitterContextNotes";

export default function HitterScoutingCard({ events, logsCount, bipCount, hitterName, title = "Scouting Summary" }) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-4"
      style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", padding: 16 }}
    >
      <h3
        className="text-sm font-semibold mb-3 opacity-90"
        style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, opacity: 0.9 }}
      >
        {title}
      </h3>

      <div className="space-y-3">
        <HitterBlurb events={events} logsCount={logsCount} bipCount={bipCount} />

        <div className="h-px w-full bg-white/10 my-2" style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "8px 0" }} />

        <HitterContextNotes hitterName={hitterName} />
      </div>
    </div>
  );
}
