const fruits = ["kiwi", "kaki", "pommes"];
//const fruits = new Array("banane", "cerise", "pommes");

// ajout d'une propriété de type string au prototype de Array
// donc toutes les instances de Array (les tableaux) y ont accès
Array.prototype.test_nouvelle_propriete = "ma propriété custom";

console.log("fruits", fruits);
console.log(`typeof fruits`, typeof fruits);
console.log(`constructeur de fruit`, fruits.constructor.name);
console.log(`test_nouvelle_propriete`, fruits.test_nouvelle_propriete);

fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(
  "fruits modifié",
  fruits.map(function (fruit) {
    if (fruit.length > 5) return fruit.substring(0, 3);
    else return fruit;
  })
);
console.log("fruits", fruits);
