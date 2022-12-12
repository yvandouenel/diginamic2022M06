const FormEditSection = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.querySelector("#title_edit").value;
        const text = event.target.querySelector("#text_edit").value;
        props.handleSubmitEditSection(event, title, text);
      }}
      className="my-5 d-flex gap-3"
    >
      <label htmlFor="title">Titre</label>
      <input
        type="text"
        id="title_edit"
        name="title"
        defaultValue={props.section.title}
      />
      <label htmlFor="text">Texte</label>
      <input
        type="text"
        id="text_edit"
        name="text"
        defaultValue={props.section.text}
      />
      <input type="submit" value="Modifer" />
    </form>
  );
};

export default FormEditSection;
