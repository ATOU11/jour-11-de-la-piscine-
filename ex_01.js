//Déclaration de la fonction promiseMe qui prend un argument message
function promiseMe(message) {
    //Retour d'une nouvelle Promise
    //La fonction new Promise() prend deux arguments : resolve et reject.
    //Ici, on utilise resolve car on veut résoudre la Promise avec un message.
    return new Promise((resolve, reject) => {
        //Appel de resolve pour renvoyer la chaîne "I promise you to " + message
        resolve("I promise you to " + message);
    });
}

//Appel de la fonction promiseMe avec l'argument "fly to the moon"
//Cette fonction retourne une Promise, et donc .then() est utilisé pour capturer la valeur une fois la Promise résolue.
promiseMe("fly to the moon").then((value) => {
    //Affichage dans la console de la valeur résolue ("I promise you to fly to the moon")
    console.log(value);
});
