const Task = (props) => {
  return (
    <section className="d-flex justify-content-between border p-3 mt-3">
      <h2>{props.title}</h2>
      <div>
        {/* Gérer l'événement onClick sur le bouton valider */}
        <button className="btn btn-success me-2">Valider</button>
        <button className="btn btn-warning">Mettre à jour</button>
      </div>
    </section>
  );
};

export default Task;
