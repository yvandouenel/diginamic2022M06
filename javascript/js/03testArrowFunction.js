
// une fonction est donnée en argument à une méthode. On dit que l'argument est un callback. En général, les fonctions de callback utilisent la syntaxe des "arrow function" car elles sont plus concises et donc un peu plus lisible

// setTimeout est une propriété de type fonction et c'est ce 
// que l'on appelle une méthode
window.setTimeout(() => {console.log(`Hello World`);}, 2000); 
console.log(`window`, window);
window.innerWidth = 600;
