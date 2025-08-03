document.addEventListener("DOMContentLoaded", () => {
  // Footer Date, Year & Time
  const footerDate = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

footerDate.textContent = `© ${currentYear} | Last Modified: ${lastModified}`;

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger-menu");
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


// Setting Function Variables
const dishCards = document.querySelectorAll(".grid figure");
const favoritesList = document.getElementById("favorites-list");
const FAV_KEY = 'favoriteDishes';

// Setting & Creating Array
const dishes = Array.from(dishCards).map(card => ({
  id: parseInt(card.dataset.id),
  name: card.querySelector("p").textContent,
  img: card.querySelector("img").src
}));

// Store Favorite Dish Locally
let favoriteDishes = JSON.parse(localStorage.getItem(FAV_KEY)) || [];

// Save Favorite Function
function saveFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify(favoriteDishes));
}

// Array Rendering Function
function renderFavorites() {
  favoritesList.innerHTML = favoriteDishes.map(dish =>
    `<li>
      <img src="${dish.img}" alt="${dish.name}" width="50">
      ${dish.name} 
      <button onclick="removeFavorite(${dish.id})">❌</button>
    </li>`
  ).join("");
}

// Add Favorite Function
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

// Remove Favortie Function
function removeFavorite(id) {
  favoriteDishes = favoriteDishes.filter(d => d.id !== id);
  saveFavorites();
  renderFavorites();
}

// Favorite Button
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const figure = e.target.closest("figure");
    const id = parseInt(figure.dataset.id);
    addFavorite(id);
  });
});

// Call Render Favorite Function & Remove Favorite Function
renderFavorites();
window.removeFavorite = removeFavorite;


})