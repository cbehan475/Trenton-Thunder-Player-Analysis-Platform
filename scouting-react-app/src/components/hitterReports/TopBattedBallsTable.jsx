import React from "react";

export default function TopBattedBallsTable({ rows }) {
  return (
    <div className="card table-wrap">
      <div style={{padding:"0 12px 10px 12px"}}>Top Batted Balls (by EV)</div>
      <table className="table">
        <thead>
          <tr>
            <th>EV (mph)</th>
            <th>LA (°)</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {(rows ?? []).map((r, i) => (
            <tr key={i}>
              <td className="tabnums">{r.ev}</td>
              <td className="tabnums">{r.la}</td>
              <td>{r.result}</td>
            </tr>
          ))}
          {(!rows || rows.length === 0) && (
            <tr><td colSpan={3} className="subtle" style={{padding:"14px 12px"}}>No batted balls in range.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

