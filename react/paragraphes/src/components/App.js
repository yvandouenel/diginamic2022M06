import React, { Component } from "react";
import FormAddSection from "./FormAddSection";
import Section from "./Section";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: 1,
          title: "Titre 1",
          text: "Texte du paragraphe 1",
          text_visible: true,
        },
        {
          id: 2,
          title: "Titre 2",
          text: "Texte du paragraphe 2",
          text_visible: false,
        },
      ],
    };
  }
  handleClickTitle = (event, index) => {
    console.log(`Dans handleClickTitle`);
    // Il faut maintenant changer le state pour la section qui contient
    // le titre cliqué
    const copy_state = { ...this.state };
    // Modification de la copie
    copy_state.sections[index].text_visible =
      !copy_state.sections[index].text_visible;
    // modification du state
    this.setState(copy_state);
  };
  handleSubmitAddSection = (event, title, text) => {
    console.log(`Dans handleSubmitAddSection`);
    // Modification du state
    this.setState((state, props) => {
      state.sections.push({
        id: state.sections.length + 1,
        title: title,
        text: text,
        text_visible: false,
      });
      return state;
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="mt-4">Exercice des paragraphes</h1>
        <FormAddSection handleSubmitAddSection={this.handleSubmitAddSection} />
        {/* Rendu des sections */}
        {this.state.sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            handleClickTitle={this.handleClickTitle}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
