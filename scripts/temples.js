const mainnav = document.querySelector('.navigation');
const hamburger = document.querySelector('#hamburger-menu');
const img = document.querySelector('.grid');

  hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamburger.classList.toggle('show');
    img.classList.toggle('show');
  });

  // Set current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set last modified date directly from the document object
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;

