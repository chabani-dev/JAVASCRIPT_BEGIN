const popup1 = document.querySelector('.popup1');
const popup2 = document.querySelector('.popup2');


// Fonction de détection de scroll
function handleScroll() {

    const scrollPosition = window.scrollY; // Position de défilement de l'utilisateur

    // Condition pour afficher le popup1 (par exemple à partir de 200px)
    if (scrollPosition > 200) {

        popup1.classList.add('show');
        // popup1.style.left = "-89px"
        // popup1.style.top = "184px"


    }

    // Condition pour afficher le popup2 (par exemple à partir de 600px)
    if (scrollPosition > 600) {
        popup2.classList.add('show');
    }
}
popupBtn.addEventListener("click", () => {
    if (popup2) {
        popup2.style.right = "-450px";
    }
});
// Écoute de l'événement scroll sur la fenêtre
window.addEventListener('scroll', handleScroll);
