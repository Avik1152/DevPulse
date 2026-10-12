import React from "react";

export default function TaskCard({ task, onToggleTask, onDeleteTask }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.8rem",
        marginBottom: "0.5rem",
        border: "1px solid #333",
        borderRadius: "6px",
      }}
    >
      <div>
        <span
          onClick={() => onToggleTask(task.id)}
          style={{
            cursor: "pointer",
            textDecoration: task.completed ? "line-through" : "none",
            fontWeight: "bold",
            marginRight: "0.5rem",
          }}
        >
          {task.title}
        </span>
        <small style={{ opacity: 0.7 }}>[{task.priority}]</small>
        {task.note && (
          <p
            style={{
              margin: "0.2rem 0 0 0",
              fontSize: "0.85rem",
              color: "#888",
            }}
          >
            Note: {task.note}
          </p>
        )}
      </div>

      <button
        onClick={() => onDeleteTask(task.id)}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "0.3rem 0.6rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}
