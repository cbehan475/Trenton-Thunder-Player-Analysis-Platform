import React from "react";

export default function HitterHeader({ title, hitter, onChangeHitter, hitterOptions }) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",marginBottom:16}}>
      <h1 className="h1">{title} <span>⚡</span></h1>
      <div>
        <div className="subtle" style={{marginBottom:6}}>Select Hitter</div>
        <select className="select" value={hitter?.value ?? ""} onChange={e => onChangeHitter(e.target.value)}>
          {hitterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    </div>
  );
}
