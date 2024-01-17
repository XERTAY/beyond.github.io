// Fonction pour faire défiler vers le haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fonction pour afficher ou masquer le bouton
function toggleScrollButton() {
    var scrollButton = document.getElementById('scrollButton');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

window.onscroll = function () {
    toggleScrollButton();
};