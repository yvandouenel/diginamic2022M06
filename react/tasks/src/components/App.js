import React, { useState, useEffect } from "react";
import Task from "./Task";
function App() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  // useState renvoie un tableau. Le premier élément de ce dernier est un état et le deuxième élément est une référence vers la fonction qui permet de modifier cet état.
  const [tasks, setTasks] = useState([
    { title: "Faire le ménage", id: 0, is_validate: false },
  ]);

  // Equivalent du componentDidMount si le deuxième paramètre de useEffect est []
  useEffect(() => {
    document.title = `Test de useEffect`;
    // Ajout d'une tâche dans le state "tasks"
    setTasks([
      ...tasks,
      { title: "Faire du sport", id: 1, is_validate: false },
    ]);
  }, []);

  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      {tasks.map((task, index) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}

export default App;
