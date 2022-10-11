//const fruits = ["Banane", "Pommes"];
const fruits = new Array("Banane", "Pommes");
fruits.push("Cerise");


//console.log(`fruits`, fruits);

// Afficher la taille du tableau
//console.log(`taille du tableau`, fruits.length);

//console.log(`dernier élément du tableau : `, fruits[fruits.length - 1]);

/* fruits.forEach((fruit, index) => { 
  console.log(`fruit : ` + fruit + " - index : ",index);
 }) */

// Vous avez vu avec Tyson
// pop, splice, shift, unshift, push, indexOf, findIndexOf, map, filter

// Sort permet de classer un tableau
fruits.sort();
//console.log(`Fruits classés : `, fruits);

const p1 = {
  name: "Toto",
  age: 25
}
const p2 = {
  name: "Titi",
  age: 50
}
const p3 = {
  name: "Gégé",
  age: 35
}
const people = [p1, p2, p3];
console.log(`people`, people);

people.sort((a, b) => {
  return a.age - b.age;
})

console.log(`people`, people);

// Lisez comment fonctionne la méthode sort et essayez 
// de classer les 3 personnes par âge croissant.



