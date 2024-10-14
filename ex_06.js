// Définition de la fonction 'worker' qui prend en paramètres une tâche et le temps requis pour l'exécuter
function worker(task, timeRequired) {
  
  // Retourne une nouvelle Promesse
  return new Promise((resolve) => {
    
    // Utilise setTimeout pour simuler un délai asynchrone
    setTimeout(() => {
      
      // Une fois le délai écoulé, résout la Promesse avec le message de tâche terminée
      resolve(task + " done");
    
    }, timeRequired); // Temps d'attente en millisecondes spécifié par 'timeRequired'
  
  });
}

// Définition de la fonction asynchrone 'factory' qui prend un objet 'tasks' en paramètre
async function factory(tasks) {
  
  // Boucle à travers chaque objet 'task' dans le tableau 'tasks.tasks'
  for (const { task, timeRequired } of tasks.tasks) {
    
    // Attend que la Promesse retournée par 'worker' soit résolue et stocke le résultat dans 'result'
    const result = await worker(task, timeRequired);
    
    // Affiche le résultat de la tâche dans la console
    console.log(result);  
    
  }
  
  // Après avoir exécuté toutes les tâches, affiche un message final dans la console
  console.log("All tasks completed.");  
  
}

// Déclaration de l'objet 'tasks' contenant un tableau de tâches à exécuter
let tasks = {
  
  tasks: [
    
    { task: 'Teaching Astronomy', timeRequired: 500 }, // Tâche 1 avec un délai de 500ms
    { task: 'Going to work', timeRequired: 1000 },    // Tâche 2 avec un délai de 1000ms
    { task: 'Repair module', timeRequired: 1000 },     // Tâche 3 avec un délai de 1000ms
    { task: 'Refill fuel', timeRequired: 1500 },       // Tâche 4 avec un délai de 1500ms
    
  ],
  
};

// Appel de la fonction 'factory' en lui passant l'objet 'tasks' pour démarrer l'exécution des tâches
factory(tasks);
