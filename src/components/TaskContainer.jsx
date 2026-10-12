import React from "react";
import TaskCard from "./TaskCard";

export default function TaskContainer({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", opacity: 0.6 }}>No tasks found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
