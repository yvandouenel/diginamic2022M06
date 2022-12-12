const Task = (props) => {
  return (
    <section className="d-flex justify-content-between">
      <h2
        className={props.task.is_validate ? "text-decoration-line-through" : ""}
      >
        {props.task.title}
      </h2>
      <div>
        <button
          onClick={(event) => {
            props.handleClickValidateTask(props.index);
          }}
          className="btn btn-success me-3"
        >
          Valider
        </button>
        <button
          onClick={() => {
            props.handleClickDeleteTask(props.index);
          }}
          className="btn btn-danger"
        >
          Supprimer
        </button>
      </div>
    </section>
  );
};

export default Task;
