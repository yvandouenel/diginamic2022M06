const FormAddTask = (props) => {
  return (
    <form
      onSubmit={(event) => {
        console.log(`Soumission du formulaire`);
        const task_title = document.querySelector("#task").value;
        event.preventDefault();
        props.handleSubmitAddTask(task_title);
      }}
      className="my-5 d-flex justify-content-start align-items-center gap-4"
    >
      <label className="form-label" htmlFor="task">
        Tâche
      </label>
      <input className="form-control" type="text" id="task" />
      <input
        className="form-control btn btn-danger w-25"
        type="submit"
        value="Ajouter"
      />
    </form>
  );
};

export default FormAddTask;
