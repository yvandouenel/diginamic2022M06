// Objet littéraux : pratiquement la syntaxe du JSON

const bike1 = {
  brand: "Peugeot",
  model: "p1",
  weight: 12,
  
}
Object.prototype.pedal = function(){console.log(`Je pédale`);}
console.log(`bike1`, bike1);
bike1.pedal();