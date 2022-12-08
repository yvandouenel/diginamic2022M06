import People, { test as imported_test, testbis } from "./class/Person.js";

const bob = new People("Bob");
console.log(`bob`, bob);
console.log(`foot_number`, People.foot_number);
console.log(`imported_test`, imported_test);
console.log(`testbis`, testbis);
