//  Déclaration d'une fonction asynchrone
async function asyncFunc() {
    //  Retourner une chaîne de caractères, cela résout la Promise avec "Hello World!"
    return "Hello World!";
}

// Appeler la fonction asynchrone, ce qui retourne une Promise
const promise = asyncFunc();

// 4. Afficher la Promise dans la console
console.log(promise);

// 5. Utiliser .then() pour afficher la valeur résolue de la Promise
promise.then(value => console.log(value));
