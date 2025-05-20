document.addEventListener('DOMContentLoaded', () => {
    const formDiv = document.getElementById('form');
    const lotoForm = document.getElementById('lotoForm');
    const grilleDiv = document.getElementById('grille');
    const tirageDiv = document.getElementById('tirage');
    const btnreset = document.getElementById('btnreset')


    // Générer les cases à cocher pour les numéros de loto
    for (let i = 1; i <= 49; i++) {
        const div = document.createElement('div');
        div.className = 'case';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'loto[]';
        input.id = 'case' + i;
        input.value = i;
        const label = document.createElement('label');
        label.htmlFor = 'case' + i;
        label.textContent = i;
        div.appendChild(input);
        div.appendChild(label);
        formDiv.appendChild(div);
    }

    // Gérer la soumission du formulaire
    lotoForm.addEventListener('submit', event => {
        event.preventDefault();// Empêche la soumission par défaut (rechargement de la page)

        // Logique personnalisée après la soumission du formulaire
        // console.log('Formulaire soumis sans recharger la page');
        const selectedNumbers = [];
        document.querySelectorAll('input[name="loto[]"]:checked').forEach(checkbox => {
            selectedNumbers.push(parseInt(checkbox.value));
        });

        if (selectedNumbers.length !== 6) {
            alert('Veuillez sélectionner exactement 6 numéros.');
            return;
        }

        // Afficher les numéros sélectionnés
        grilleDiv.innerHTML = '';
        selectedNumbers.forEach(num => {
            const div = document.createElement('div');
            div.className = 'case';
            div.textContent = num;
            grilleDiv.appendChild(div);
        });

        // Générer le tirage aléatoire
        const tirage = [];
        while (tirage.length < 6) {
            const numero = Math.floor(Math.random() * 49) + 1;
            if (!tirage.includes(numero)) {
                tirage.push(numero);
            }
        }

        // Afficher le tirage
        tirageDiv.innerHTML = '';
        tirage.forEach(num => {
            const div = document.createElement('div');
            div.className = 'case';
            div.textContent = num;
            tirageDiv.appendChild(div);
        });

        // Colorer les numéros selon qu'ils sont dans le tirage ou non
        document.querySelectorAll('#grille .case').forEach(div => {
            if (tirage.includes(parseInt(div.textContent))) {
                div.classList.add('vert');
                //console.log(grilleDiv)
            } else {
                div.classList.add('rouge');
            }
        });
    });

    // Réinitialiser la page lorsqu'on clique sur le bouton "Reset"
    btnreset.addEventListener('click', () => {
        window.location.reload(); // recharge la page actuelle
        // console.log("le bouton rest a été cliqué")
    })
});
