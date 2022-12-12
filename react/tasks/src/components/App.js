import { useState, useEffect } from "react";
import Task from "./Task";
const initial_value = [{ title: "Faire le ménage", id: 0, is_validate: false }];
function App() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  // useState renvoie un tableau. Le premier élément de ce dernier est un état et le deuxième élément est une référence vers la fonction qui permet de modifier cet état.
  const [tasks, setTasks] = useState(initial_value);

  // Equivalent du componentDidMount si le deuxième paramètre de useEffect est []
  useEffect(() => {
    document.title = `Test de useEffect`;
    // Ajout d'une tâche dans le state "tasks"
    setTasks([
      ...tasks,
      { title: "Faire du sport", id: 1, is_validate: false },
    ]);
  }, []);

  /**
   * Gère le click sur le bouton supprimer
   * Utilisation de la méthode filter : si l'index de la tâche cliquée correspond à l'index de la tâche, cette dernière ne passe pas le filtre
   * Appel du mutateur de l'état tasks "setTasks"
   * @param {Number} index
   */
  const handleClickDeleteTask = (index) => {
    console.log(`Dans handleClickDeleteTask`);
    setTasks(tasks.filter((task, i) => i != index));
  };
  const handleClickValidateTask = (index) => {
    console.log(`Dans handleClickValidateTask`);
    setTasks(
      tasks.map((task, i) => {
        if (i == index) task.is_validate = !task.is_validate;
        return task;
      })
    );
  };
  return (
    <div className="App container">
      <h1>Liste des tâches</h1>
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={task.id}
          handleClickDeleteTask={handleClickDeleteTask}
          handleClickValidateTask={handleClickValidateTask}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
