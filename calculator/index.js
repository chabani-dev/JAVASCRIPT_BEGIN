/**
 * recuperer les element du DOM evec querySelectorAll
 * NodeList(19) ==> en tableau avec L'opérateur spread (...)
 */
const buttons = [...document.querySelectorAll(".bouton")];
// console.log(buttons);
/** les attributs data n'existent pas vraiment
on peut y accéder en js avec Element.dataset.nomDuDatset.*/

const listeKeycode = buttons.map(touche => touche.dataset.key);
// console.log(listeKeycode);
const ecran = document.querySelector('.ecran');

document.addEventListener("keydown", (e) => {
    // console.log(valeur, typeof valeur);
    const valeur = e.key.toString(); // key correspond à data-key
    calculer(valeur);
});

document.addEventListener("click", (e) => {

    const valeur = e.target.dataset.key;
    // console.log(valeur, typeof valeur);
    calculer(valeur);
});

/**
 *
avec cette fonction on n'avez le problème de l'arroder de chiffre aprés la virgule
et pour resoudre ce probleme en utilise la méthode toFixed(2) pour arrodir a deux
   chiffre après la virgule
*/
// const calculer = (valeur) => {
//     if (listeKeycode.includes(valeur)) {
//         switch (valeur) {
//             case "8": // Touche C : clear
//                 ecran.textContent = "";
//                 break;
//             case "13": // Touche = : évaluer
//                 try {
//                     ecran.textContent = eval(ecran.textContent); // Évalue l'expression mathématique
//
//                 } catch (error) {
//                     alert("Une erreur est survenue dans votre calcul : " + error.message);
//                     // ecran.textContent = "Erreur";
//                 }
//                 break;
//             default:
//                 const indexKeycode = listeKeycode.indexOf(valeur);
//                 const touche = buttons[indexKeycode];
//                 ecran.textContent += touche.innerHTML.trim(); // Ajoute le contenu du bouton à l'écran
//         }
//     }
// };

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "8": // Touche C : clear
                ecran.textContent = "";
                break;
            case "13": // Touche = : évaluer
                try {
                    let result = eval(ecran.textContent); // Évalue l'expression mathématique
                    result = parseFloat(result.toFixed(2)); // Arrondir à 2 chiffres après la virgule
                    ecran.textContent = result;
                } catch (error) {
                    alert("Une erreur est survenue dans votre calcul : " + error.message);
                    // ecran.textContent = "Erreur";
                }
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = buttons[indexKeycode];
                ecran.textContent += touche.innerHTML.trim(); // Ajoute le contenu du bouton à l'écran
        }
    }
};

// Testez si l'événement global "error" fonctionne
window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.message);
});


// Déclencher une erreur globale pour test
// setTimeout(() => {
//     undefinedFunction(); // Provoque une erreur
// }, 3000);