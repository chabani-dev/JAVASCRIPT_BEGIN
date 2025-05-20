// Sélection des éléments du DOM
// let number = document.getElementById('pokemon-number');
// let image = document.getElementById('pokemon-img');
// let nom = document.getElementById('pokemon-name');
// let button = document.getElementById('button');


// Fonction pour récupérer un Pokémon
// let getPokemon = async () => {
//     let randomNumber = Math.ceil(Math.random() * 150); // Nombre aléatoire entre 1 et 150
//     let resPokemon = `https://pokebuildapi.fr/api/v1/pokemon/${randomNumber}`;
//
//     try {
//         // Appel à l'API
//         const response = await fetch(resPokemon);
//         const data = await response.json();
//
//         // Mise à jour du DOM avec les données
//         number.textContent = `Numéro : #${data.id}`;
//         nom.textContent = `Nom : ${data.name}`;
//         image.src = data.image;
//         image.alt = `Image of ${data.name}`;
//
//     } catch (error) {
//         console.error('Error fetching Pokémon data:', error);
//         number.textContent = '';
//         nom.textContent = 'Error fetching Pokémon';
//         image.src = '';
//         image.alt = 'Error image';
//
//     }
// }
//
// // Récupération de l'ID du Pokémon depuis l'URL
// const urlParams = new URLSearchParams(window.location.search);
// const pokemonId = urlParams.get('id');
//
// // Appel de la fonction pour afficher les détails du Pokémon
// if (pokemonId) {
//     getPokemonDetails(pokemonId);
// } else {
//     console.error('No Pokémon ID found in URL');
// }
// // Appel initial pour afficher un Pokémon dès le chargement
// // getPokemon();
//
// // Ajout d'un événement sur le bouton
// button.addEventListener("click", getPokemon);


// Sélection des éléments du DOM
const number = document.getElementById("pokemon-number");
const image = document.getElementById("pokemon-img");
const nom = document.getElementById("pokemon-name");
const button = document.getElementById("button");
const buttonReturn = document.getElementById("back-button")

// Fonction pour récupérer un Pokémon spécifique
const getPokemonById = async (id) => {
    const resPokemon = `https://pokebuildapi.fr/api/v1/pokemon/${id}`;
    try {
        const response = await fetch(resPokemon);
        const data = await response.json();

        // Mise à jour du DOM
        number.textContent = `Numéro : #${data.pokedexId}`;
        nom.textContent = `Nom : ${data.name}`;
        image.src = data.image;
        image.alt = `Image of ${data.name}`;
    } catch (error) {
        console.error("Erreur lors de la récupération du Pokémon :", error);
        number.textContent = "";
        nom.textContent = "Erreur lors de la récupération du Pokémon";
        image.src = "";
        image.alt = "Erreur d'image";
    }
};

// Vérification de l'ID dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

if (pokemonId) {
    getPokemonById(pokemonId);
} else {
    // Obtenir un Pokémon aléatoire si aucun ID n'est présent
    const randomId = Math.ceil(Math.random() * 150); // Nombre aléatoire entre 1 et 150
    getPokemonById(randomId);
}

// Événement pour afficher un Pokémon aléatoire
if (button) {
    button.addEventListener("click", () => {
        const randomId = Math.ceil(Math.random() * 150);
        getPokemonById(randomId);
    });
}

// Retourne à la page précédente ou utilisez window.location.href = "ListPokemon.html";
buttonReturn.addEventListener("click", () => {
    window.location.href = "ListPokemon.html";
});
