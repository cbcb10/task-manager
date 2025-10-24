import { useState } from "react";
import "./App.css";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  return (
    <div className="app">
      <h1>ניהול משימות</h1>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="הוסיפי משימה חדשה..."
        />
        <button onClick={addTask}>הוספה</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => editTask(index, e.target.value)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            />
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
