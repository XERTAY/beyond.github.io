const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// Ferme le menu
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

    document.body.style.overflow = "hidden";
    openMenu.style.display = 'none';
}

function close() {
    mainMenu.style.top = '-100%';

    document.body.style.overflow = "auto";
    openMenu.style.display = 'block';
}