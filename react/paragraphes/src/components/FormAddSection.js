const FormAddSection = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // Récupération du titre et du texte provenant du formulaire
        const title = document.querySelector("#title").value;
        const text = document.querySelector("#text").value;

        // appel du gestionnaire d'événement qui se trouve dans App.js
        props.handleSubmitAddSection(event, title, text);
      }}
      className="my-5 d-flex gap-3"
    >
      <label htmlFor="title">Titre</label>
      <input type="text" id="title" />
      <label htmlFor="text">Texte</label>
      <input type="text" id="text" />
      <input type="submit" value="Ajouter une section" />
    </form>
  );
};

export default FormAddSection;
