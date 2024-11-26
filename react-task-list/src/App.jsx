import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];
  const backlogAndInProgressTasks = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );
  const completedTasks = tasks.filter((task) => task.state === "completed");
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <section>
        <h2>Current Tasks({backlogAndInProgressTasks.length})</h2>
        <ul>
          {backlogAndInProgressTasks.map((task) => (
            <li key={task.id}>
              <div className="task">
                <h3>{task.title}</h3>
                <p>Priorità: {task.priority}</p>
                <p>Tempo stimato: {task.estimatedTime} minuti</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <h2>Completed Tasks({completedTasks.length})</h2>
        <ul>
          {completedTasks.map((task) => (
            <li key={task.id}>
              <div className="task">
                <h3>{task.title}</h3>
                <p>Priorità: {task.priority}</p>
                <p>Tempo stimato: {task.estimatedTime} minuti</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
