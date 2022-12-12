const FormEditSection = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="my-5 d-flex gap-3"
    >
      <label htmlFor="title">Titre</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="text">Texte</label>
      <input type="text" id="text" name="text" />
      <input type="submit" value="Modifer" />
    </form>
  );
};

export default FormEditSection;
