const btn = document.getElementById("colorBox");
const btn1 = document.getElementById("colorHex");

btn.addEventListener('click', () => {
    // Générer des composantes RGB aléatoires
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    // Construire le chaîne RGB
    const colorRGB = `rgb(${r},${g},${b})`;
    // Changer la couleur de fond de l'élément
    btn.style.backgroundColor = colorRGB;

    // Afficher la couleur à l'intérieur du bouton
    btn.innerHTML = `<h2 style="color: #fff; margin: 0;">${colorRGB}</h2>`;
});
// générer une couleur hexadécimale

btn1.addEventListener('click', () => {

    // Générer une couleur hexadécimale aléatoire
    const colorHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    /**
     * la Methode :
     * Math.random() * 16777215 : génère un nombre aléatoire entre 0 et 16777215 (le maximum pour un code couleur hexadécimal).
       .toString(16) : convertit ce nombre en une chaîne hexadécimale.
      .padStart(6, '0') : garantit que le code est toujours composé de 6 caractères, même si le nombre généré est petit.
     */

    // Appliquer la couleur hexadécimale générée comme arrière-plan
    btn1.style.backgroundColor = colorHex;

    // Afficher la couleur à l'intérieur du bouton

    btn1.innerHTML = `<h2 style="color: #fff; margin: 0;">${colorHex}</h2>`;
})

// setInterval(generateColor, 1000)
