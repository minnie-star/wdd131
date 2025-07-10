/*const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#hamburger-menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});*/


  const hamburger = document.querySelector('.hamburger-menu');
  const header = document.querySelector('header');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('hamburger-active');

  });
