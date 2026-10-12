import React from "react";

export default function StatsPanel({ stats }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#2a2a2a",
        color: "#fff",
        borderRadius: "6px",
        marginBottom: "1.5rem",
      }}
    >
      <span>
        Total: <strong>{stats.total}</strong>
      </span>
      <span>
        Completed: <strong>{stats.completed}</strong>
      </span>
      <span>
        Pending: <strong>{stats.pending}</strong>
      </span>
    </div>
  );
}
