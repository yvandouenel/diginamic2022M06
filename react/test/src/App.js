import Task from "./components/Task";
import React, { Component } from "react";
import FormAddTask from "./components/FormAddTask";

class App extends Component {
  constructor(props) {
    super(props);
    // Stat est ici une propriété de type objet
    this.state = {
      tasks: [
        { title: "Apprendre Reactjs", id: 1, is_validate: false },
        { title: "Acheter des chaussures", id: 2, is_validate: false },
        { title: "Acheter du pain", id: 3, is_validate: false },
      ],
      display_form: false,
    };
    console.log(`Dans le constructeur`);
  }
  handleSubmitAddTask = (task_title) => {
    // this sera forcément l'instance de APP
    console.log(`Dans handleSubmitAddTask`);

    // copie du state
    const copy_state = { ...this.state };
    copy_state.tasks.unshift({
      title: task_title,
      id: copy_state.tasks.length + 1,
      is_validate: false,
    });
    copy_state.display_form = false;
    this.setState(copy_state);
  };
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
  handleClickValidateTask = (event, index) => {
    console.log(`Dans handleClickValidateTask`);
    // Il faut que je modifie le state et en particulier is_validate de la tâche qui correspond au bouton
    const copy_state = { ...this.state };
    copy_state.tasks[index].is_validate = !copy_state.tasks[index].is_validate;
    this.setState(copy_state);
  };
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
        {this.state.display_form && (
          <FormAddTask handleSubmitAddTask={this.handleSubmitAddTask} />
        )}
        {this.state.tasks.map((task, index) => (
          /* Equivalent à new Task(task.title) */
          <Task
            key={task.id}
            title={task.title}
            is_validate={task.is_validate}
            handleClickValidateTask={this.handleClickValidateTask}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
