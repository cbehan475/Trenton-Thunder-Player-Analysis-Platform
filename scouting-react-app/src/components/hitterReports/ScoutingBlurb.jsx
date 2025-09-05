import React from "react";

export default function ScoutingBlurb({ text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 leading-6 text-white/80">
      {text || "—"}
    </div>
  );
}
