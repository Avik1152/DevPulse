import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme } = useTheme();
  // State to track whether the sidebar is open or closed
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Toggle Button (You can move this to your Navbar later if needed) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "12px",
          left: "15px",
          zIndex: 1001,
          padding: "0.4rem 0.75rem",
          background: theme === "dark" ? "#333" : "#ddd",
          color: theme === "dark" ? "#fff" : "#000",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar Container */}
      <aside
        style={{
          width: "200px",
          padding: "1.5rem 1rem",
          position: "fixed",
          top: "60px",
          left: 0,
          background: theme === "dark" ? "#181818" : "#e5e5e5",
          color: theme === "dark" ? "#fff" : "#000",
          borderRight: "1px solid #333",
          minHeight: "calc(100vh - 70px)",
          // Smooth slide-in/slide-out effect
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <a
            href="#dashboard"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📌 Dashboard
          </a>
          <a
            href="#tasks"
            style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}
          >
            📝 My Tasks
          </a>
          <a
            href="#settings"
            style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}
          >
            ⚙️ Settings
          </a>
        </nav>
      </aside>
    </>
  );
}
