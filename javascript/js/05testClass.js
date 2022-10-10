class Bike {
  constructor(trade, model, weight) {
    this.trade = trade;
    this.model = model;
    this.weight = weight;
  }
  dumpBike (){
    console.log(`Voici votre magnifique ${this.model} de chez ${this.trade} qui pèse ${this.weight} kg`);
  }
} 

const p1 = new Bike("Peugeot", "p1", 12);
p1.dumpBike();