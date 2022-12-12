const FormAddSection = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // Récupération du titre et du texte provenant du formulaire
        const title = document.querySelector("#title").value;
        const text = document.querySelector("#text").value;

        const formData = new FormData(event.target);
        const form_values = Object.fromEntries(formData.entries());
        console.log(`form_values : `, form_values);

        // appel du gestionnaire d'événement qui se trouve dans App.js
        props.handleSubmitAddSection(event, form_values);
      }}
      className="my-5 d-flex gap-3"
      id="form-add-section"
    >
      <label htmlFor="title">Titre</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="text">Texte</label>
      <input type="text" id="text" name="text" />
      <input type="submit" value="Ajouter une section" />
    </form>
  );
};

export default FormAddSection;
