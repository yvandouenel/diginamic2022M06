// Fonction de generation de dom
function domGenerator(tagName, tagParent, tagText) {
  const element = window.document.createElement(tagName);
  tagParent.appendChild(element);
  element.textContent = tagText;
  return element
}

// Création d'un bouton
const button = domGenerator("button", window.document.body, "Ajouter un paragraphe");

// Création d'une section
const section = domGenerator("section", window.document.body);


// Quand on clique sur le bouton, on apelle la fonction "domGenerator" avec comme parametre le nom "p" dans la section "section" avec pour texte "lorem yadi yada..."
button.onclick = function () {
  domGenerator("p", section, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa?");
}

