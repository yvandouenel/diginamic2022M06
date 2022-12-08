export default class Person {
  static foot_number = 20;
  constructor(name) {
    this.name = name;
    console.log(`this`, this);
  }
  static add = (a, b) => a + b;
}
export const test = "Ceci est un test";
export const testbis = "Ceci est un test bis";
