// Sélection des éléments du DOM
let pokemonListDiv = document.getElementById("pokemon-list");
let number = document.getElementById("pokemon-number");
let image = document.getElementById("pokemon-img");
let nom = document.getElementById("pokemon-name");
let searchInput = document.getElementById("searchInput");
const resetButton = document.getElementById("resetButton");


let allPokemon = []; // Variable globale pour stocker tous les Pokémon

// Fonction pour récupérer tous les Pokémon
let fetchAllPokemon = async () => {
    //     try {
    //         const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
    //         const allPokemon = await response.json();
    //         return allPokemon;
    //     } catch (error) {
    //         console.error("Erreur lors de la récupération des Pokémon :", error);
    //         return [];
    //     }
    // };
    try {
        const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des Pokémon :", error);
        pokemonListDiv.innerHTML = `<p>Impossible de charger les Pokémon. Veuillez réessayer plus tard.</p>`;
        return [];
    }
};

// Fonction pour afficher les Pokémon filtrés
const displayFilteredPokemon = (pokemonList, filter = "") => {
    // Nettoyer l'affichage
    pokemonListDiv.innerHTML = "";

    // Filtrer les Pokémon par le texte entré
    // const filteredPokemon = pokemonList.filter((pokemon) =>
    //     pokemon.name.toLowerCase().startsWith(filter.toLowerCase())
    // );

    const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filter.toLowerCase())
    );
    // Vérifier si aucun Pokémon n'est trouvé
    if (filteredPokemon.length === 0) {
        pokemonListDiv.innerHTML = `<p>Aucun Pokémon trouvé</p>`;
        return;
    }

    // Afficher chaque Pokémon correspondant
    filteredPokemon.forEach((pokemon) => {
        // Ajouter l'élément à la liste
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';
        pokemonCard.innerHTML = `
             <a href="pokemon.html?id=${pokemon.id}" target="_blank">
                <img src="${pokemon.image}" alt="Image of ${pokemon.name}" class="pokemon-image" />
                <div class="pokemon-number">#${pokemon.pokedexId}</div>
                <div class="pokemon-name">${pokemon.name}</div>
             </a>
        `;
        pokemonCard.addEventListener('click', () => {
            // Mise à jour directe des informations dans la carte principale
            number.textContent = `Numero : ${pokemon.pokedexId}`;
            nom.textContent = `Nom : ${pokemon.name}`;
            image.src = pokemon.image;
            image.alt = `Image of ${pokemon.name}`;
        });
        pokemonListDiv.appendChild(pokemonCard);
    });
};

// Initialisation
const initializeSearch = async () => {
    const allPokemon = await fetchAllPokemon();

    // Affiche tous les Pokémon au départ
    displayFilteredPokemon(allPokemon);

    // Écoute l'input de recherche
    searchInput.addEventListener("input", (e) => {
        const filter = e.target.value.trim();
        displayFilteredPokemon(allPokemon, filter);
    });
    resetButton.addEventListener("click", () => {
        searchInput.value = "";
        displayFilteredPokemon(allPokemon);
    });
};

initializeSearch();