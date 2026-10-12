import React from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
// import "./StatsPanel";
import "../CSS/Header.css";

export default function Header({ appName, tagline }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <div>
        <h1>{appName}</h1>
        {/* <p>{tagline}</p> */}
      </div>
      <ThemeToggleButton />
    </header>
  );
}
