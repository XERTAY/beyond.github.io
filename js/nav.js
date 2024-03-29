const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// Ferme le menu
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.classList.add('slideInOut'); // Ajout de la classe pour l'animation à l'ouverture

    document.body.style.overflow = "hidden";
    openMenu.style.pointerEvents = 'none'; // Désactiver les événements du bouton pendant l'animation
    openMenu.style.display = 'none';
}

function close() {
    mainMenu.style.top = '-100%';
    document.body.style.overflow = "auto"; // Réactiver le scrolling après le temps d'attente

    setTimeout(() => {
        mainMenu.style.display = 'none';
        document.body.style.overflow = "auto";
        openMenu.style.pointerEvents = 'auto';
        openMenu.style.display = 'block'; // Réactiver les événements du bouton après l'animation
    }, 1000); // Attendre la fin de l'animation (2 secondes) avant de masquer la barre de navigation

}


function validateForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var message = document.getElementById('message').value;

    if (!nom || !prenom || !email || !telephone || !message) {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    var telephonePattern = /^(\+33|0)[6-7](\d\d){4}$/;
    if (!telephonePattern.test(telephone)) {
        alert("Veuillez saisir un numéro de téléphone valide.");
        return false;
    }

    return true;
}