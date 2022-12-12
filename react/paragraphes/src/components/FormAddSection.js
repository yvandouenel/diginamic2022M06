const FormAddSection = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
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
