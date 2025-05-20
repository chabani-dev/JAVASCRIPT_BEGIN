let count = 0;

// Sélection du score
const score = document.getElementById("score");
const congratulations = document.getElementById("congratulations");

function bubbleMaker() {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble"); // Ajout d'une classe pour styliser si nécessaire
    document.body.appendChild(bubble);

    const size = Math.floor(Math.random() * 200 + 100) + "px";
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.top = Math.random() * 100 + 50 + "%";

    // Définir une taille aléatoire pour les bulles
    // const size = Math.floor(Math.random() * 100 + 50) + "px";
    // bubble.style.width = size;
    // bubble.style.height = size;

    // Position aléatoire
    // bubble.style.left = Math.random() * 90 + "%"; // Réduit pour éviter les bords
    // bubble.style.top = Math.random() * 90 + "%"; // Réduit pour éviter les bords

    // Ajouter une animation d'ascension
    bubble.style.animation = `ascend 5s linear infinite`;

    // Supprimer la bulle après 5 secondes
    setTimeout(() => {
        bubble.remove();
    }, 5000);

    // Ajout d'un événement au clic
    bubble.addEventListener("click", () => {
        bubble.remove(); // Supprime la bulle au clic
        count++;
        score.textContent = count;

        // Lancer la célébration si le score atteint 20
        if (count >= 20) {
            triggerCelebration();
            displayCongratulations();
        }
    });
}
// Générer des bulles toutes les 400ms
setInterval(bubbleMaker, 400);

function triggerCelebration() {
    // Couleurs possibles pour les feux d'artifice
    const colors = ['gold', 'silver', 'red', 'blue', 'green'];

    // Créer des feux d'artifice (paillettes animées)
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework"); // Ajout d'une classe pour styliser

        // Appliquer une couleur aléatoire
        const color = colors[Math.floor(Math.random() * colors.length)];
        firework.classList.add(color);

        document.body.appendChild(firework);

        // Taille et position aléatoires
        const size = Math.random() * 5 + 5 + "px";
        firework.style.width = size;
        firework.style.height = size;
        firework.style.left = Math.random() * 100 + "%";
        firework.style.top = Math.random() * 100 + "%";

        // Ajouter une animation de scintillement
        firework.style.animation = `star 1s infinite linear`;

        // Supprimer le feu d'artifice après l'animation
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}
function displayCongratulations() {
    congratulations.classList.remove("hidden");
    congratulations.classList.add("visible");
}