import React from "react";
import { HITTER_NOTES, normalizeName } from "../constants/hitterNotes";

export default function HitterContextNotes({ hitterName }) {
  const key = normalizeName(hitterName);
  const notes = HITTER_NOTES[key] || null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 text-sm font-semibold opacity-90">
        Scouting Notes (manual)
      </div>

      {!notes || Object.keys(notes).length === 0 ? (
        <div className="opacity-70 text-[13px]">
          No manual notes yet. Add an entry for <b>{hitterName || "this hitter"}</b> in
          <code className="ml-1">src/constants/hitterNotes.js</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {notes.speed && <NoteRow label="Speed" text={notes.speed} />}
          {notes.defense && <NoteRow label="Defense" text={notes.defense} />}
          {notes.arm && <NoteRow label="Arm" text={notes.arm} />}
          {notes.build && <NoteRow label="Build" text={notes.build} />}
          {notes.overall && (
            <div className="md:col-span-2">
              <NoteRow label="Overall" text={notes.overall} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function NoteRow({ label, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] opacity-75">{label}</div>
      <div className="text-[13px] leading-5">{text}</div>
    </div>
  );
}
