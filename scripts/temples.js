const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#hamburger-menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});