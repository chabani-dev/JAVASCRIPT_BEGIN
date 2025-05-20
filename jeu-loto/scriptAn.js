document.addEventListener("DOMContentLoaded", () => {
    const message = "Jeu de loto!";
    let msgCount = 0;
    let blinkCount = 0;
    let blinkFlag = false;
    let timer1, timer2;

    const jeuloto = document.querySelector(".jeuloto");

    // Fonction pour afficher progressivement le texte
    function typeText() {
        jeuloto.textContent = message.substring(0, msgCount);
        if (msgCount === message.length) {
            clearInterval(timer1); // Arrêter l'animation de saisie
            timer2 = setInterval(blinkText, 300); // Démarrer le clignotement
        } else {
            msgCount++;
        }
    }

    // Fonction pour gérer le clignotement
    function blinkText() {
        if (blinkCount < 6) { // Clignote 6 fois
            jeuloto.style.visibility = blinkFlag ? "visible" : "hidden";
            blinkFlag = !blinkFlag;
            blinkCount++;
        } else {
            clearInterval(timer2); // Arrêter le clignotement
            jeuloto.style.visibility = "visible"; // Assurer que le texte reste visible
        }
    }

    // Démarrer l'animation
    timer1 = setInterval(typeText, 150); // Appeler `typeText` toutes les 150ms
});



//
//
// document.addEventListener('DOMContentLoaded', () => {
//     const h1JeuLoto = document.querySelector('.jeuloto');
//     if (h1JeuLoto) {
//         h1JeuLoto.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
//         h1JeuLoto.style.transform = 'translateY(0)';
//         h1JeuLoto.style.opacity = '1';
//
//         // Départ initial (avant l'animation)
//         setTimeout(() => {
//             h1JeuLoto.style.transform = 'translateY(-20px)';
//             h1JeuLoto.style.opacity = '0.8';
//         }, 1000);
//     }
// });
