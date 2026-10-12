import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
        borderRadius: "4px",
        border: "none",
        background: theme === "dark" ? "#333" : "#ddd",
        color: theme === "dark" ? "#fff" : "#000",
        fontWeight: "bold",
      }}
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
