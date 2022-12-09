import Task from "./components/Task";
import React, { Component } from "react";
import FormAddTask from "./components/FormAddTask";

class App extends Component {
  constructor(props) {
    super(props);
    // Stat est ici une propriété de type objet
    this.state = {
      tasks: [
        { title: "Apprendre Reactjs", id: 1 },
        { title: "Acheter des chaussures", id: 2 },
        { title: "Acheter du pain", id: 3 },
      ],
      display_form: false,
    };
    console.log(`Dans le constructeur`);
  }
  componentDidMount() {
    console.log(`Dans componentDidMount`);
    // Modification du state
    window.setTimeout(() => {
      console.log(`this`, this);
      console.log(`this`, this.constructor.name);
      const new_tasks = [
        ...this.state.tasks,
        { title: "Apprendre Angularjs", id: 4, is_validate: false },
        { title: "Acheter des chaussettes", id: 5, is_validate: false },
        { title: "Acheter du miel", id: 6, is_validate: false },
      ];
      // new_tasks.push({ title: "Apprendre Angularjs", id: 4 });
      // ATTENTION, la modification directe du state
      // that.state.tasks.push({}) INTERDIT
      this.setState({ ...this.state, tasks: new_tasks });
    }, 3000);
  }
  render() {
    console.log(`Dans render`);
    return (
      <div className="App container mt-5">
        <button
          onClick={() => {
            const copy_state = { ...this.state };
            copy_state.display_form = copy_state.display_form ? false : true;
            // Pour modifier le state on est obligé de passer un "mutateur", "setter"
            this.setState((state, props) => {
              return { display_form: !state.display_form };
            });
          }}
          className="btn btn-danger"
        >
          Ajouter une tâche
        </button>
        {this.state.display_form && <FormAddTask />}
        {this.state.tasks.map((task) => (
          /* Equivalent à new Task(task.title) */
          <Task key={task.id} title={task.title} />
        ))}
      </div>
    );
  }
}

export default App;
