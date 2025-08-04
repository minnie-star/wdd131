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

// Creating Array of Dishes
const dishes = Array.from(dishCards).map(card => ({
  id: parseInt(card.dataset.id),
  name: card.querySelector("p").textContent,
  img: card.querySelector("img").src
}));

// Load Favorites From LocalStorage
let favoriteDishes = JSON.parse(localStorage.getItem(FAV_KEY)) || [];

// Save to Loacalstorage Function
function saveFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify(favoriteDishes));
}

// Rendering Favorite List Function
function renderFavorites() {
  favoritesList.innerHTML = favoriteDishes.map(dish =>
    `<li data-id="${dish.id}">
      <img src="${dish.img}" alt="${dish.name}" width="50">
      ${dish.name} 
      <button class="remove-btn">❌</button>
    </li>`
  ).join("");
}

// Add Favorite Dish Function
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

// Event Listener for Add Favorite Button
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const figure = e.target.closest("figure");
    const id = parseInt(figure.dataset.id);
    addFavorite(id);
  });

  //Event Delegation for Removing Favorites
  favoritesList.addEventListener("click", e => {
    if (e.target.classList.contains("remove-btn")) {
      const id = parseInt(e.target.closest("li").dataset.id);
      removeFavorite(id);
    }
  })
});

// Call Render Favorite Function
renderFavorites();

})