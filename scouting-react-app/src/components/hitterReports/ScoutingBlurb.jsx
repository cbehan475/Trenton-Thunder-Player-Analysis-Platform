import React from "react";

export default function ScoutingBlurb({ text }) {
  return <div className="card" style={{lineHeight:1.6}}>{text || "—"}</div>;
}
