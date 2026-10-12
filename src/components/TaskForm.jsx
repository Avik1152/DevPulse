import { useState, useRef } from "react";
// import "./TaskForm.css";
import "../CSS/TaskForm.css";

export default function TaskForm({ onAddTask }) {
  // Controlled inputs state
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  // Uncontrolled input ref
  const noteRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title.trim()) {
      setError("Task title cannot be empty!");
      return;
    }

    // Accessing uncontrolled input value using ref
    const quickNote = noteRef.current.value;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      note: quickNote,
      completed: false,
    };

    onAddTask(newTask);

    // Reset form inputs
    setTitle("");
    setPriority("Medium");
    if (noteRef.current) noteRef.current.value = "";
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>Add New Task</h3>

      {error && <p className="task-form-error">{error}</p>}

      {/* Controlled Input: Title */}
      <div className="task-form-title-container">
        <label className="task-form-label">Task Title (Controlled):</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Master Custom Hooks"
          className="task-form-input"
        />
      </div>

      {/* Controlled Input: Priority Select */}
      <div className="task-form-priority-container">
        <label className="task-form-label">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="task-form-select"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Uncontrolled Input: Ref-based Note */}
      <div className="task-form-note-container">
        <label className="task-form-label">
          Quick Note (Uncontrolled / Ref):
        </label>
        <input
          type="text"
          ref={noteRef}
          placeholder="Optional note..."
          className="task-form-input"
        />
      </div>

      <button type="submit" className="task-form-submit-button">
        + Add Task
      </button>
    </form>
  );
}
