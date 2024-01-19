const switchButton = document.getElementById('switchButton');
const contentParagraph = document.getElementById('content');

let isParticulier = true;

function toggleContent() {
    isParticulier = !isParticulier;

    if (isParticulier) {
        contentParagraph.textContent = 'Contenu pour Particulier';
    } else {
        contentParagraph.textContent = 'Contenu pour Entreprise';
    }
}
