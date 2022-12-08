const bob = {
  name: "bob",
};
const robert = bob; // passage par référence
bob.lastName = "Dylan";
robert.lastName = "De Niro";
console.log(`bob`, bob);
robert.lastName = "De Niro";
// copie de bob en utilisant le spread operator
const bob_bis = { ...bob, lastName: "Redford", age: 99 };
//bob_bis.lastName = "Redford";
console.log(`robert`, robert);
console.log(`bob_bis`, bob_bis);

const fruits = ["kiwi", "kaki", "pommes"];
// copie du tableau avec le spread operator
const fruits_bis = [...fruits, "Fraise", "Poire"];
console.log(`fruits`, fruits);
console.log(`fruits_bis`, fruits_bis);
