// 1. Déclaration de la fonction promiseMe qui prend un argument message
function promiseMe(message) {
    return new Promise((resolve, reject) => {
        // Résoudre la Promise si le message n'est pas vide
        if (message) {
            resolve("I promise to " + message);
        } else {
            reject("Message cannot be empty");
        }
    });
}

// 2. Déclaration de la fonction checkStatus qui prend une Promise comme argument
function checkStatus(promise) {
    // 3. Gérer la Promise avec .then() pour capturer la valeur résolue
    promise.then((message) => {
        // 4. Afficher le message dans la console
        console.log(message);
    })
    // 5. Gérer le cas de rejet de la Promise avec .catch()
    .catch((error) => {
        // 6. Afficher le message d'erreur dans la console
        console.log(error);
    })
    // 7. Afficher "Checking status over" à la fin du traitement
    .finally(() => {
        console.log("Checking status over");
    });
}

// Exemple d'utilisation de checkStatus avec une Promise
checkStatus(promiseMe("fly to the moon"));
