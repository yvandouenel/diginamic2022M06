/**
 * Fonction de test qui affiche dans la console l'argument avec une concaténation dans des backticks
 * 
 * @param {String} name 
 * @returns String
 */
function test(name) { //paramètre (déclaration de variable)

  console.log(`Hello my name is ${name}`);

  return 'Salut, mon nom est ' + name;
}
// Appel de fonction
//let return_test = test("toto");// argument (assignation du paramètre correspondant)
//test("titi");
//console.log(`return_test : `, return_test);
console.log(`return : `, test("titi")); // Appel de la fonction et affichage de son retour dans le log de la console

// Pour apprendre à utiliser une fonction, il faut connaître sa signature
// - son nom,
// - ses paramètres (optionnels),
// - son retour (optionnel)

let string1 = "Hello";
let string2 = "World";
let hl = `${string1} ${string2}`; // concaténation
console.log(hl);