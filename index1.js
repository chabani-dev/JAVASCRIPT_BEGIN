// alert('salut JS !')
/* commenter plusieurs lignes*/

// Syntaxe de Base

// déclarer une variable en js
// une variable est u espace mémoire qui va contenir une valeur

// var = variable global qui peut être modifier
var maVariable = 'salut';

// let = variable qui peut être modifier
// let x = 7;
// let y = 10;
// y = 15;

// Kamel Case
let maSuperVariable = 'salut';

// const = constante est une variable qui ne peut pas être modifier
const prenom = 'nassim';
console.log(prenom);
// prenom = 'toto';

// affiche les valeurs dans la console
// console.log(y);
// console.log(x);
// console.log(maSuperVariable);
// y = 20;

// chaine de caractère
// let chaine = 'je suis l\'a chaine de caractère';
// let chaine2 = "je suis l'autre chaine de caractère";

// la concaténation
// let nouvelleChaine = " Chaine de caractère : " + chaine +
//     " l'aute chaine caractère : " + chaine2
// console.log(nouvelleChaine);

// concaténation avec les backticks
// let chaine3 = `je suis la chaine 3 ${chaine} et ${chaine2}`;
// console.log(chaine3);

// LES Types de données

// string
// let string = "je suis une chaine de caractère";

// number
let number = 10;
// Boolean
let boolean = true;
let boolean2 = false;

// tableau
let tableau = ['nassim', 'toto', 'tata', 10, true];


// objet

let objet = {
    // clé : valeur
    prenom: 'nassim',
    nom: 'toto',
    age: 25,
    ville: 'paris'
}
// accéder à une valeur d'un objet
let arbre;
arbre = 'sapin';

// les opérateurs
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 / 5);
// console.log(10 * 5);
// modulo ou  puissance
// console.log(10 ** 5);

// opérateur d'affectation

// let total = 0;
// ajouter 1 à la variable total
// total = total + 1;
// incrémentation
// total++;

// total += 5;
// total -= 4;
// total = total * 2;
// total *= 2

// console.log(total);

// structure de contrôle

// let x = 2;
// let y = 2;

// if (condition à vérifier )
// si x et supérieur à y alors afficher x est supérieur à y dans la console
// if (x > y) {
//     alert('x est supérieur à y');
//
//     // sinon afficher y est supérieur à x
// } else {
//     alert("y est supérieyr à x");
// }

// autre exemple
// let age = 28;
// si l'age est supérieur ou égale à 18 alors afficher vous êtes majeur
// if (age > 18) {
//     alert('vous êtes majeur')
//
//     // sinon si l'age est égale à 18 alors afficher vous êtes tout juste majeur
// } else if (age === 18) {
//     alert('vous êtes tout juste majeur')
//
//     // sinon afficher vous êtes mineur
// } else {
//     alert('vous êtes mineur')
// }

// on test si x est vrai
// if (x) {
//     console.log('x est vrai !')
// }

// on test si x est faux
//
// if (!x) {
//     console.log('x est faux ! ')
// }

// égalité
// === égalité stricte test si les valeurs sont égales et si les types sont égaux

// if (x === 2) {
//     console.log('x est égale à 2')
//
// } else {
//     console.log('x est différent de 2')
// }

// != différent
// if (x != 2) {
//     console.log('x est différent de 2')
// }


// == égalité simple test si les valeurs sont égales sans tester les types
// x c'est un number et ça valeur est 2
// y c'est un string et ça valeur est '2' c'est une chaine de caractère
// x == y => true
// let x = 2; // number
// let y = "2"; // string
// type de x est un number
// type de y est un string
// 2 == '2' => true
// == teste l'égalité de valeur sans prendre en compte le type
// if (x == y) {
//     console.log('x est égale à y')
//
// } else {
//     console.log('x est différent de y')
// }


let x = 2;
let y = 10;
// < inférieur plus petit
// > supérieur plus grand
// <= inférieur ou égale


/** ou soit l'un soit l'autre*/


// if (x < y || x > 1) {
//     console.log('x est inférieur à y ou x est supérieur à 1')
// }


/** && et tous les deux */
// x est inférieur à y et x est supérieur à 1
// if (x < y && x > 1) {
//     console.log('x est inférieur à y et x est supérieur à 1')
// }

/** la boucle for */

// La boucle for est utilisée lorsque vous savez à l'avance combien de fois vous voulez exécuter un bloc de code.
// Elle est composée de trois partie : l'initialisation, la condition et l'incrémentation.

// Initialisation : let i = 0 initialise la variable de la boucle.
// Condition : i < 10 est la condition qui doit être vraie pour que la boucle continue de s'exécuter.
// Incrémentation : i++ augmente la variable i de 1 après chaque itération de la boucle.
//
// for (let i = 0; i < 10; ++i) {
//     console.log(i);
// }
// dans la boucle for on déclare une variable i qui est égale à 0 et on test si i est inférieur
// à 10 et on incrémente i de 1 à chaque tour de boucle for i++


/**boucle while */
// La boucle while est utilisée lorsque vous ne savez pas à l'avance combien de fois le bloc de code doit être exécuté.
// La boucle continue de s'exécuter tant qu'une condition donnée est vraie.
// tant que i est inférieur à 10 on affiche i
// la boucle while est une boucle qui s'éxecute tant que la condition est vrai,
// le différence entre la boucle for et la boucle while:
// la boucle for est une boucle avec un nombre de tour defini et
// la boucle whine est une boucle avec un nombre de tour indéfini

// Dans la boucle while on déclare une variable i qui est égale à 0 et on test si i est inférieur
// à 10 et on incrémente i de 1 à chaque tour de boucle while ++i

// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++;
// }


/** les fonctions  classique en js**/
// function maFonction() {
//     console.log('je suis une fonction')
//     console.log(5 + 6);
//     return; // on arrête la fonction ici
//     alert("Calcule terminé ! ")
// }
// appeler une fonction
// maFonction();


// la fonction fléchée avec les paramètres

// const maFonction2 = (a, b) => {
//     console.log(a + b);
// }
// maFonction2(10, 5)
// maFonction2(20, 5)


// la fonction fléchée sans paramètres

// const maFonction3 = () => {
//     console.log('je suis une fonction flèche sans paramètres')
// }
//
// maFonction3();

// la fonction fléchée avec un seul paramètre

const maFonction4 = (a) => {
    console.log(a);
}
maFonction4(10);

// la portée des variables

function maFonction5() {
    let a = 10
    console.log(a + 4)
}
maFonction5();

// document.addEventListener('DOMContentLoaded', function() {
//     setInterval(postHeightToParent, 100);
// });
// var oldHeight = 0;
// function postHeightToParent() {
//     if (oldHeight !== document.body.scrollHeight) {
//         oldHeight = document.body.scrollHeight;
//         const height = document.body.scrollHeight;
//         console.log('posting height', height);
//         window.parent.postMessage({
//             'frameHeight': height
//         }, "*");
//     }
// }
//
// function randomInRange(min, max) {
//     return Math.random() * (max - min) + min;
// }
// function throwConfetti() {
//     confetti({
//         angle: randomInRange(55, 125),
//         spread: randomInRange(50, 70),
//         particleCount: randomInRange(50, 100),
//         origin: {
//             y: 0.6
//         }
//     });
// }
// throwConfetti();
// setInterval(() => {
//     throwConfetti();
// }, 2000);
