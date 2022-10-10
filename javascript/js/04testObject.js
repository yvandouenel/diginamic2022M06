/**
 * Constructeur de vélo
 * @param {String} trade 
 * @param {String} model 
 */
function Bike(trade, model, weight) {
  this.trade = trade;
  this.model = model;
  this.weight = weight;
  
} 
// Le prototype est une propriété de la fonction constructeur qui sera partagée par toutes
// les instances issues de la dite fonction constructeur
Bike.prototype.dumpBike = function (){
  console.log(`Voici votre magnifique ${this.model} de chez ${this.trade} qui pèse ${this.weight} kg`);
}
Bike.prototype.dumpWeight = function (){
  console.log(`Poid du ${this.model} de chez ${this.trade} :  ${this.weight} kg`);
}
Bike.prototype.dumpHandlebar = function() {
  console.log(`Définition du guidon : ${this.handlebar}`);
}
Bike.prototype.handlebar = "Un truc pour diriger le vélo";

// instanciation de l'objet vt500 et assignation à la variable vt500
let vt500 = new Bike("MBK", "VT500", 10);
vt500.dumpBike();
let rockRider = new Bike("Decathlon", "RockRider", 15);
rockRider.dumpBike();
rockRider.dumpWeight();
rockRider.dumpHandlebar();


console.log(`vt500`, vt500);
console.log(`vt500 a t-il pour propriété directe weight`, vt500.hasOwnProperty("weight"));
console.log(`vt500 a t-il pour propriété directe weight`, vt500.hasOwnProperty("titi"));
console.log(`vt500 a t-il pour propriété directe weight`, vt500.hasOwnProperty("dumpWeight"));
/*console.log(`rockRider`, rockRider); */

