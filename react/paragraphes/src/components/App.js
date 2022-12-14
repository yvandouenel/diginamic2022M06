import React, { Component } from "react";
import FormAddSection from "./FormAddSection";
import FormEditSection from "./FormEditSection";
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
      form_update_is_visible: false,
      current_update_section: -1,
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
  handleClickEditButton = (event, index) => {
    console.log(`Dans handleClickEditButton`);
    // Modification de form_update_is_visible du state local
    this.setState((previous_state) => ({
      form_update_is_visible: !previous_state.form_update_is_visible,
      current_update_section: index,
    }));
  };
  handleSubmitAddSection = (event, form_values) => {
    console.log(`Dans handleSubmitAddSection`);
    // Déclaration et affectations des variables title et text via
    // le "destructuring" ou la "décomposition"
    const { title, text } = form_values;
    // Modification du state
    // Ici, on utilise setState avec la fonction de callback qui nous donne automatiquement une copie du state en premier paramètre
    this.setState((state) => {
      state.sections.push({
        id: state.sections.length + 1,
        title: title,
        text: text,
        text_visible: false,
      });
      return state;
    });
  };
  handleSubmitEditSection = (event, title, text) => {
    console.log(`dans handleSubmitEditSection`);
    this.setState({
      sections: this.state.sections.map((section, i) => {
        if (i == this.state.current_update_section) {
          section.title = title;
          section.text = text;
        }
        return section;
      }),
      form_update_is_visible: false,
      current_update_section: -1,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="mt-4">Exercice des paragraphes {this.props.toto}</h1>
        <FormAddSection handleSubmitAddSection={this.handleSubmitAddSection} />
        {/* Affichage du formulaire de modification d'une section */}
        Section à modifier : {this.state.current_update_section}
        {this.state.form_update_is_visible && (
          <FormEditSection
            section={this.state.sections[this.state.current_update_section]}
            handleSubmitEditSection={this.handleSubmitEditSection}
          />
        )}
        {/* Rendu des sections */}
        {this.state.sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            handleClickTitle={this.handleClickTitle}
            handleClickEditButton={this.handleClickEditButton}
            index={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
