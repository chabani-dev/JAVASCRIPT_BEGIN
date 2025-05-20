// alert("Hello, world!");
// clearInterval(timeId);

// les selecteurs
// document.querySelector('#btn-1').style.background = 'red';

// on cherche la balise et on la stocke dans une variable
// document.querySelector('h4') => on cherche la balise h4
// const baliseHTML => on stoke la balise dans la variable baliseHTML

// const baliseHTML = document.querySelector('h4')
// console.log(baliseHTML);
// baliseHTML.style.background = 'red';


// Click event
// on selectionne l'element avec sa classe
const questionBtn = document.querySelector('.click-event');

// on peut aussi utiliser getSelector pour selectionner un elemnt ('#btn-1')
// on selectionne l'element avec son id
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2');
// on selecte la balise p
const response = document.querySelector('p');

// console.log(questionBtn);
// questionBtn.style.borderRadius = '50px';
questionBtn.addEventListener('click', () => {
    // console.log('tu as clique sur le button');
    questionBtn.classList.toggle('question-clicked')
    // questionBtn.style.background = 'red';
    // questionBtn.style.border = '3px solid blue';

    // on ajoute une classe
    // questionBtn.classList.add('question-clicked')

    // on retire une classe avec toggle(add/remove)
});

btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    // response.style.visibility = 'visible';
    response.style.background = 'green';
    console.log('tu as clique sur le button 1 !');
})
// revele le P
btn2.addEventListener('click', () => {
    response.classList.add('show-response');
    // response.style.visibility = 'visible';
    response.style.background = 'red';
    console.log('tu as clique sur le button 2 !');
})

// ----------------------Mouse Event----------------------

// ----------------------Mouse move----------------------

const mousemove = document.querySelector('.mousemove');
console.log(mousemove);
// window est l'objet global de javascript qui represente le navigateur
window.addEventListener('mousemove', (e) => {
    /**(e) recupere toutes les informations sur l'evenement*/
    // console.log(e.target) => recupere l'element sur lequel on a clique
    // console.log(e);
    // console.log("MouseMove !!!");

    /** pageX et pageY recupere la position de la souris dans la page */
    mousemove.style.left = e.pageX + 'px';
    mousemove.style.top = e.pageY + 'px';
})

// ----------------------Mouse down----------------------

// mousedown => vers le bas (click)
window.addEventListener('mousedown', () => {
    console.log('mousedown');
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)'
})

// mouseup => vers le haut (click)
window.addEventListener('mouseup', () => {
    console.log('mousedown');
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)'
    mousemove.style.border = '2px solid teal';
})

// ----------------------Mouse over----------------------
// questionBtn.addEventListener('mouseover', () => {
//     questionBtn.style.background = "rgba(0,0,0,0.6)";
// })

// ----------------------Mouse enter----------------------

questionBtn.addEventListener('mouseenter', () => {
    questionBtn.style.background = "rgba(0,0,0,0.6)";
})

// ----------------------Mouse out----------------------
questionBtn.addEventListener('mouseout', () => {
    questionBtn.style.background = "pink";
})


response.addEventListener('mouseover', () => {
    response.style.transform = 'rotate(2deg)';
})



// ----------------------Keydown Event----------------------------

const KeyPress = document.querySelector('.keypress');
// console.log(KeyPress);
const key = document.getElementById('key');


// on cree une fonction qui va jouer le son
const ring = () => {
    const audio = new Audio();
    audio.src = './Enter.mp3';
    audio.play();
}

// on cree une fonction avec un parametre pour plusieur fichier audio

// const ring = (key) => {
//     const audio = new Audio();
//     // audio.src = key + ".mp3";
//     audio.src = `${key}.mp3`; // autre facon de faire
//     audio.play();
// }
/** keydown => capture toutes les touches, y compris les touches de contrôle
 * (Shift, Ctrl, Alt, Enter, etc.). */
document.addEventListener('keydown', (e) => {
    // e.key => recupere la touche sur laquelle on a clique (a,b,c,d...)
    // console.log(e.key);
    key.textContent = e.key;

    if (e.key === 'j') {
        KeyPress.style.background = 'pink';

    } else if (e.key === 'h') {
        KeyPress.style.background = 'teal';

    } else {
        KeyPress.style.background = 'red';
    }

    // condition pour le probleme de si on n'as qu'un seul fichier audio
    // if (e.key === 'Enter') ring(e.key);
    // ring(e.key);
    ring();
});

// ----------------------Scoll Event------------------------------

// on selectionne la balise nav

const nav = document.querySelector('nav')
console.log(nav);
window.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = '-50px';

    }
})

// ----------------------Form-------------------------------

// on selectionne le formulaire avec son type
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');

let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
    // console.log(e.target.value);
    pseudo = e.target.value;
    // console.log(pseudo);
})

select.addEventListener('input', (e) => {
    // console.log(e.target.value);
    language = e.target.value;
    // cosole.log(language);
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log ('envoi du formulaire');
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Language préféré : ${language}</h4>
        `
    }
    else {
        alert('veuillez accepter les CGV')
    }
})

// ----------------------- load event ---------------------------

// laod event se déclenche  se déclenche une fois que toute la page est complètement chargée
// window.addEventListener("load", () => {
//     console.log('Documenent chargé ! ')
// })


// ---------------------------------ForEach ------------------------------
// const boxes = document.getElementsByClassName('box')
// console.log(boxes);
// boxes.addEventListener('click', () => console.log("test"))
// j'ai erreur Uncaught TypeError: boxes.addEventListener is not a function
// il m'explique bien que boxes.addEventListener n'est pas une fonction

// la solution utiliser forEach
//
// boxes.forEach((box) => {
//     box.addEventListener('click', (e) => {
//         console.log(e.target)
//     })

// }); // j'ai cette erreur => Uncaught TypeError: boxes.forEach is not a function ?
// comprendre erreur : Le problème vient du fait que document.getElementsByClassName()ne retourne
// pas un tableau JavaScript standard, mais une collection HTML (de type HTMLCollection),
// qui n'a pas la méthode forEach.

// solution 1:
// const boxes = document.querySelectorAll('.box');
// console.log(boxes)
// boxes.forEach((box) => {
//     box.addEventListener('click', (e) => {
//         console.log(e.target)
//     })
// })

// solution 2: Exemple avec Array.from():
// const boxes = document.getElementsByClassName('box')
// console.log(boxes)
//
// Array.from(boxes).forEach((box) => {
//     box.addEventListener('click', (e) => {
//         console.log(e.target);
//     });
// });

// solution 3: Exemple avec l'opérateur de décomposition :
const boxes = document.getElementsByClassName('box');
console.log(boxes);
[...boxes].forEach((box) => {
    box.addEventListener('click', (e) => {
        // console.log(e.target);
        e.target.style.transform = "scale(0.7)";
    });
});


// --------------- addEventListener VS onclick ---------------------
// document.body.onclick = function () {
//     console.log("Click !");
// }

// ----------------------- useCapture & Bubbling ----------------------------

// Bubbling => fin de base l'eventListener est paramétré en mode bubbling
// document.body.addEventListener('click', () => {
//     console.log("click 1 !")
// }, false)
// Usecapture => immédiatement
// document.body.addEventListener('click', () => {
//     console.log("click 2 !")
// }, true)

// -----------------------------Stop propagation ------------------------------------------
//
// questionBtn.addEventListener("click", (e) => {
//     alert("Test ! ");
//     e.stopPropagation();
// })

// removeEventListener

//--------------------------- Browser Object Model  ----------------------------------------------------

// BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open('http://google.com', "cours js", "height=600 , with=800"); // pour ouvrire une nouvelle
// page
// window.close();
//---------------------------- Evénement adossés à window --------------------------
// window.alert('coucou');
// alert('coucou');

// confirm
btn2.addEventListener('click', () => {
    confirm("Voulez vous vraiment vous tromper ?")
})

// prompt
btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom ! ")
    questionBtn.innerHTML += "<h3>Bravo  " + answer + "</h3"
})


// setTimesOut ==> un temps en millisecondes avant de déclencher
// un compte à rebours

// setTimeout(() => {
//     questionBtn.style.borderRadius = "200px";
// }, 2000)
// setInterval()

// let interval = setInterval(() => {
//     document.body.innerHTML +=
//         `<div class='box'>
//     <h2>Nouvelle Boite ! </h2>
//     </div>
//     `
// }, 1000)
// document.body.addEventListener("click", (e) => {
//     if (e.target.classList.contains("box")) {
//         e.target.remove(); // Supprime uniquement les éléments ayant la classe "box"
//         clearInterval(interval); // Arrête la génération des boîtes
//         console.log("Interval arrêté, élément supprimé !");
//     }
// })
// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// on chargement de la page on envoie au href suivant
// window.onload = () => {
//     // Redirection vers GitHub
//     location.href = "https://github.com/chabani-dev"
//
//     // Attendre que la redirection se fasse avant d'effectuer un retour en arrière
//     setTimeout(() => {
//         window.history.back();
//     }, 1000) // Attente de 1 seconde
// }


// Navigator
// console.log(navigator.userAgent);

//Geolocation.getCurrentPosition()
// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
// };
//
// function success(pos) {
//     var crd = pos.coords;
//
//     console.log("Votre position actuelle est :");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
// }
//
// function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
// }
//
// navigator.geolocation.getCurrentPosition(success, error, options);


//-----------------History -------------------------------------
console.log(history);

// window.history.back();// revenir en arrière

// retour de  plusieurs pages en arrièrre
//
// history.go(-2);


// ----------------------------- setProporty -----------------------

// SetProperty

window.addEventListener('mousemove', (e) => {
    console.log(e)
    nav.style.setProperty("--x", e.layerX + "px")
    nav.style.setProperty("--y", e.layerY + "px")
})
