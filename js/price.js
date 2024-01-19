const switchButton = document.getElementById('switchButton');

const enginePrice = document.getElementById('enginePrice');
const virtualPrice = document.getElementById('virtualPrice');
const versePrice = document.getElementById('versePrice');

const priceParagraph = document.getElementById('priceParagraph');

let isParticulier = true;

function toggleContent() {
    isParticulier = !isParticulier;

    if (isParticulier) {
        priceParagraph.textContent = 'Prix pour Particulier';
        enginePrice.textContent = 'FREE';
        virtualPrice.textContent = 'FREE';
        versePrice.textContent = 'FREE';

    } else {
        priceParagraph.textContent = 'Prix pour Entreprise';
        enginePrice.textContent = '17€/mois';
        virtualPrice.textContent = '37€/mois';
        versePrice.textContent = '10€/mois';
    }
}
