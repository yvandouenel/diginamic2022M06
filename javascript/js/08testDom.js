const h1 = window.document.getElementById("title1");
console.log(h1);
// Assignation d'une chaîne de caractères 
h1.textContent += " HelloWorld";

// propriété de type fonction soit une méthode ()
h1.setAttribute("class", "toto");
//h1.remove();

// createElement permet de créer des élément du DOM
// dans le document qui correspond à la balise html
const header = window.document.createElement("header");

// Insertion du header dans body
window.document.body.prepend(header);

// On déplace le h1 dans header
header.prepend(h1);

// Création d'un main
domGenerator("main", window.document.body, "Contenu du main");

// Création d'un footer
const footer = domGenerator("footer", window.document.body, "Contenu du footer");

// Navigation dans le footer
domGenerator("nav", footer, "Contenu de la nav");

// Création d'un paragraphe
const p = domGenerator(
  "p",
  footer,
  "Contenu du paragraphe",
  [
    {
      attribute_name: "id",
      attribute_value: "p1",
    },
    {
      attribute_name: "class",
      attribute_value: "paragraphe",
    },
    {
      attribute_name: "title",
      attribute_value: "Tite de mon paragraphe",
    }
  ]
);

// Place p juste avant footer dans le body
document.body.insertBefore(p, footer);
/**
 * 
 * @param {String} tagName 
 * @param {DomElement} tagParent 
 * @param {String} tagText 
 * @param {Array} tagAttributes : tableau d'objets
 * @returns 
 */
function domGenerator(tagName, tagParent, tagText, tagAttributes = []) {
  // Création d'un élement du dom
  const domElement = window.document.createElement(tagName);

  // Déplacement de l'élément créé dans tagParent
  tagParent.appendChild(domElement);

  // Ajout de text dans l'élément du DOM créé
  domElement.textContent = tagText;

  // parcours du tableau
  tagAttributes.forEach((htmlAttribute) => {
    domElement.setAttribute(htmlAttribute.attribute_name, htmlAttribute.attribute_value);
  })


  return domElement;

}