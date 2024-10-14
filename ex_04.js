// on déclare une fonction initializeMachine qui prend deux arguments
function initializeMachine(machineName, timeRequired) {
    // Retourne une nouvelle Promesse
    return new Promise((resolve, reject) => {
        // Utilise setTimeout pour attendre le temps spécifié (en millisecondes)
        setTimeout(() => {
            // Résout la promesse avec un message de succès
            resolve(`${machineName} initialisé.`);
        }, timeRequired * 1000); // Convertit les secondes en millisecondes
    });
}

// Exemple d'utilisation
initializeMachine("Ordinateur", 3).then(value => {
    console.log(value); // Affiche : Ordinateur initialisé.
});
