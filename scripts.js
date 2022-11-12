const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const closeMenu = document.getElementById('close-menu');

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
})

menuOpen.addEventListener('click', () => {
    menu.style.display = 'flex'
})