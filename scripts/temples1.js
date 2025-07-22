document.addEventListener("DOMContentLoaded", () => {
  // Footer
  const footer = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  footer.textContent = `Last Modified: ${lastModified} | © ${currentYear}`;

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.querySelector(".navigation");

  if (hamburger && navMenu) {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // or use plain text ☰
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.innerHTML = navMenu.classList.contains("show")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }
});
