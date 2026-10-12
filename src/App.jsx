import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatsPanel from "./components/StatsPanel";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskContainer from "./components/TaskContainer";
import { taskReducer } from "./reducers/taskReducer";
import "./App.css";

const INITIAL_TASKS = [
  {
    id: 1,
    title: "Master React Components & Props",
    priority: "High",
    note: "Core focus",
    completed: true,
  },
  {
    id: 2,
    title: "Build custom hook for LocalStorage",
    priority: "Medium",
    note: "",
    completed: false,
  },
];

export default function App() {
  const getInitialTasks = () => {
    try {
      const saved = localStorage.getItem("devpulse_tasks");
      return saved ? JSON.parse(saved) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  };

  const [tasks, dispatch] = useReducer(taskReducer, [], getInitialTasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("devpulse_tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const pendingCount = tasks.filter((t) => !t.completed).length;
    document.title =
      pendingCount > 0
        ? `DevPulse (${pendingCount} pending)`
        : "DevPulse - All Done!";
  }, [tasks]);

  const handleAddTask = useCallback((newTask) => {
    dispatch({ type: "ADD_TASK", payload: newTask });
  }, []);

  const handleToggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  }, []);

  const handleDeleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "all"
          ? true
          : filterStatus === "completed"
            ? task.completed
            : !task.completed;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, searchTerm, filterStatus]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return (
    <ThemeProvider>
      <div
        className="app-container"
        style={{ minHeight: "100vh", fontFamily: "sans-serif" }}
      >
        <Header
          className="header"
          appName="DevPulse"
          // tagline="Your Advanced React Learning Dashboard"
        />

        <div style={{ display: "flex" }}>
          <Sidebar />

          <main style={{ flex: 1, padding: "2rem", maxWidth: "800px" }}>
            <StatsPanel stats={stats} />
            <TaskForm onAddTask={handleAddTask} />

            <h2>Task Manager</h2>
            <TaskFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />

            <TaskContainer
              tasks={filteredTasks}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
            />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
