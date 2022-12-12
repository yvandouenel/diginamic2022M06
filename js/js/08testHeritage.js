const button = document.querySelector("button");
console.log(`button`, button);

console.log(`class`, button.constructor.name);
let objet = Object.getPrototypeOf(button);

while (objet) {
  console.log(`class prototype`, objet.constructor.name);
  objet = Object.getPrototypeOf(objet);
}
