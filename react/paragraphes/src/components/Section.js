const Section = (props) => {
  // destructuring
  const { title, text_visible, text } = props.section;

  return (
    <section>
      <h2
        onClick={(event) => {
          props.handleClickTitle(event, props.index);
        }}
      >
        {title}
      </h2>
      {text_visible && <p>{text}</p>}
    </section>
  );
};

export default Section;
