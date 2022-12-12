const Section = (props) => {
  // destructuring
  const { title, text_visible, text } = props.section;

  return (
    <section className="border p-3 my-3">
      <div className="d-flex gap-5 my-4 justify-content-between">
        <h2
          onClick={(event) => {
            props.handleClickTitle(event, props.index);
          }}
          role="button"
        >
          {title}
        </h2>
        <button
          onClick={(event) => {
            // appel du gestionnaire d'événemet qui a pour but d'afficher un formulaire
            props.handleClickEditButton();
          }}
          className="btn btn-warning"
        >
          Modifier
        </button>
      </div>
      {text_visible && <p>{text}</p>}
    </section>
  );
};

export default Section;
