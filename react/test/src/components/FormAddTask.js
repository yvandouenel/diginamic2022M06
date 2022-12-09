const FormAddTask = () => {
  return (
    <form>
      <label className="form-label" htmlFor="task">
        Tâche
      </label>
      <input className="form-control" type="text" id="task" />
      <input className="form-control" type="submit" value="Ajouter" />
    </form>
  );
};

export default FormAddTask;
