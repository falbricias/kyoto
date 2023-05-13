const bntMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

bntMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
});

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
});

