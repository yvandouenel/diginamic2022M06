import Task from "./components/Task";

function App() {
  return (
    <div className="App container mt-5">
      <button className="btn btn-danger">Ajouter une tâche</button>
      {/* Equivalent à new Task */}
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default App;
