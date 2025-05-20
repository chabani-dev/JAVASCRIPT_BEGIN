// Variables pour activer/désactiver les catégories de caractères
let includeLower = false;
let includeUpper = false;
let includeNumbers = false;
let includeSpecial = false;

// Fonction pour générer un mot de passe
function generatePassword(length) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    // Créer un ensemble de caractères basé sur les options choisies
    let allCharacters = '';
    if (includeLower) allCharacters += lowerCase;
    if (includeUpper) allCharacters += upperCase;
    if (includeNumbers) allCharacters += numbers;
    if (includeSpecial) allCharacters += specialChars;

    if (allCharacters === '') {
        alert('Please select at least one character set!');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

// Afficher la longueur du mot de passe choisie
document.getElementById("rangeInput").addEventListener("input", () => {
    document.getElementById("rangeInputValue").textContent =
        document.getElementById("rangeInput").value;
});

// Attacher un événement au bouton "Generate Password"
document.getElementById("generateBtn").addEventListener("click", () => {
    const passwordLength = document.getElementById("rangeInput").value;
    const password = generatePassword(Number(passwordLength));
    document.getElementById("password").value = password; // Afficher le mot de passe dans l'input
});

// Gestion des boutons pour activer/désactiver les types de caractères
document.getElementById("btnLower").addEventListener("click", () => {
    includeLower = !includeLower;
    document.getElementById("btnLower").style.backgroundColor = includeLower ? 'lightgreen' : '';
});

document.getElementById("btnUpper").addEventListener("click", () => {
    includeUpper = !includeUpper;
    document.getElementById("btnUpper").style.backgroundColor = includeUpper ? 'lightgreen' : '';
});

document.getElementById("btnNumber").addEventListener("click", () => {
    includeNumbers = !includeNumbers;
    document.getElementById("btnNumber").style.backgroundColor = includeNumbers ? 'lightgreen' : '';
});

document.getElementById("btnRegExp").addEventListener("click", () => {
    includeSpecial = !includeSpecial;
    document.getElementById("btnRegExp").style.backgroundColor = includeSpecial ? 'lightgreen' : '';
});

function resetPMD() {

    // Cibler le champ de texte contenant le mot de passe
    const passwordInput = document.getElementById("password")

    // Réinitialiser la valeur du champ
    passwordInput.value = "";

    // Optionnel : Réinitialiser la valeur du range slider (si nécessaire)
    const rangeInput = document.getElementById("rangeInput");
    rangeInput.value = 12; // Par défaut à 12
    document.getElementById("rangeInputValue").textContent = "12"; // Mettre à jour l'affichage
}
