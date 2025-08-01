document.addEventListener("DOMContentLoaded", () => {
  
  const footerDate = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

footerDate.textContent = `© ${currentYear} | Last Modified: ${lastModified}`;

// Hamburger Menu
  const hamburger = document.getElementById("#hamburger-menu");
  const navMenu = document.querySelector(".navigation");

  if (hamburger && navMenu) {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; 
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.innerHTML = navMenu.classList.contains("show")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }


const dishCards = document.querySelectorAll(".grid figure");
const favoritesList = document.getElementById("favorites-list");
const FAV_KEY = 'favoriteDishes';

// Step 1: Create recipe database using objects
const dishes = Array.from(dishCards).map(card => ({
  id: parseInt(card.dataset.id),
  name: card.querySelector("figcaption").textContent,
  img: card.querySelector("img").src
}));

// Step 2: Load favorites
let favoriteDishes = JSON.parse(localStorage.getItem(FAV_KEY)) || [];

function saveFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify(favoriteDishes));
}

function renderFavorites() {
  favoritesList.innerHTML = favoriteDishes.map(dish =>
    `<li>
      <img src="${dish.img}" alt="${dish.name}" width="50">
      ${dish.name} 
      <button onclick="removeFavorite(${dish.id})">❌</button>
    </li>`
  ).join("");
}

function addFavorite(id) {
  const dish = dishes.find(d => d.id === id);
  const alreadySaved = favoriteDishes.some(d => d.id === id);

  if (!alreadySaved) {
    favoriteDishes.push(dish);
    saveFavorites();
    renderFavorites();
  } else {
    alert(`"${dish.name}" is already saved.`);
  }
}

function removeFavorite(id) {
  favoriteDishes = favoriteDishes.filter(d => d.id !== id);
  saveFavorites();
  renderFavorites();
}

// Step 3: Wire up buttons
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const figure = e.target.closest("figure");
    const id = parseInt(figure.dataset.id);
    addFavorite(id);
  });
});

renderFavorites();
removeFavorite();

})