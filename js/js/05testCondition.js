let i = true;
let j = 12;

{
  i === true && j === 12 && console.log(`i est vrai`);
}
// A test avec du jsx
{
  i ? "i est vrai" : "i est faux";
}
// Equivalent sans jsx
console.log(i ? "i est vrai" : "i est faux");
