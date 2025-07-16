document.addEventListener("DOMContentLoaded", () => {
  // Footer: Copyright year and last modified date
  const footerDate = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  footerDate.textContent = `Last Modified: ${lastModified}`;

  // Hamburger Menu Toggle
  const hamburger = document.querySelector("#hamburger-menu");
  const navMenu = document.querySelector(".navigation");

  // Create hamburger icon
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  hamburger.style.cursor = "pointer";

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    navMenu.classList.toggle("show");

    // Toggle icon: ☰ ↔ ✖
    const isOpen = navMenu.classList.contains("responsive");
    hamburger.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>' // X icon
      : '<i class="fas fa-bars"></i>'; // Hamburger icon
  });
});