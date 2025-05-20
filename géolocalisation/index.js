let map; // Déclaration globale de la variable pour la carte
let autocomplete;

// Fonction principale appelée par le callback de l'API Google Maps
window.initMap = function () {
    // Vérification de la disponibilité de la géolocalisation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Geo, erreurGeo, { maximumAge: 120000 });
    } else {
        alert('La géolocalisation n\'est pas prise en charge par ce navigateur.');
    }
};

// Fonction appelée en cas de succès de la géolocalisation
function Geo(position) {
    // Récupération des coordonnées
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    // Mise à jour des éléments HTML
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lng;

    // Chargement de la carte avec les coordonnées obtenues
    loadMap(lat, lng);
}

// Fonction pour charger la carte et afficher un marqueur
function loadMap(lat, lng) {
    // Options de configuration de la carte
    const options = {
        zoom: 8,
        center: { lat: lat, lng: lng }, // Utilisation d'un objet simple
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Création de la carte
    map = new google.maps.Map(document.getElementById('map'), options);

    // Création d'un marqueur avec AdvancedMarkerElement
    const markerElement = document.createElement('div');
    markerElement.innerHTML = "<div style='color: red;'>Je t'ai trouvé !</div>";

    new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat: lat, lng: lng },
        content: markerElement
    });

    // Ajouter l'autocomplétion
    // const input = document.getElementById('search-input');
    // autocomplete = new google.maps.places.Autocomplete(input);
    // autocomplete.bindTo('bounds', map);

    // Ajouter un écouteur d'événement pour l'autocomplétion
    //     autocomplete.addListener('place_changed', () => {
    //         const place = autocomplete.getPlace();
    //
    //         if (!place.geometry || !place.geometry.location) {
    //             alert("Aucun détail disponible pour l'adresse saisie : '" + place.name + "'");
    //             return;
    //         }
    //
    //         // Centrer la carte sur l'adresse saisie
    //         map.setCenter(place.geometry.location);
    //         map.setZoom(15); // Zoom sur l'adresse
    //
    //         // Ajouter un marqueur à la nouvelle position
    //         new google.maps.Marker({
    //             position: place.geometry.location,
    //             map: map,
    //             title: place.name
    //         });
    //     });
    // }
}
// Fonction appelée en cas d'erreur de géolocalisation
function erreurGeo(erreur) {
    let msg;
    switch (erreur.code) {
        case GeolocationPositionError.TIMEOUT:
            msg = 'Le temps de la requête a expiré.';
            break;
        case GeolocationPositionError.PERMISSION_DENIED:
            msg = 'Vous avez refusé la géolocalisation.';
            break;
        case GeolocationPositionError.POSITION_UNAVAILABLE:
            msg = 'Une erreur technique s\'est produite.';
            break;
        default:
            msg = 'Une erreur inconnue s\'est produite.';
            break;
    }
    alert(msg);
}
