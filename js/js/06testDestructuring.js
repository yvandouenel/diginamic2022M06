const p = {
  nom: "Dylan",
  prenom: "Bob",
};
// Déclaration et assignation classique
// const n = p.nom;
// const pr = p.prenom;

// Avec le "destructuring" ou la "décomposition"
const { nom: n, prenom: pr } = p;

console.log(`nom, prenom`, n, pr);

const fruits = ["Banane", "Cerise"];

// const banane = fruits[0];
// const cerise = fruits[1];

const [b, c] = fruits;
console.log(`banane, cerise`, b, c);
