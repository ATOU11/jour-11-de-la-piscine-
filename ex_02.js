// 1. Déclaration de la fonction checkFuel qui prend un argument fuel
function checkFuel(fuel) {
    // 2. Retourner une nouvelle Promise
    return new Promise((resolve, reject) => {
        // 3. Vérifier si le niveau de carburant est supérieur ou égal à 9
        if (fuel >= 9) {
            // 4. Si vrai, résoudre la Promise avec le message "Ready to launch"
            resolve("Ready to launch");
        } else {
            // 5. Sinon, rejeter la Promise avec le message "Please refill fuel"
            reject("Please refill fuel");
        }
    });
}

// 6. Exemple d'appel de la fonction avec un niveau de carburant
checkFuel(12).then((message) => {
    console.log(message); // Affichera "Ready to launch"
}).catch((error) => {
    console.log(error); // Affichera "Please refill fuel" en cas de rejet
});
