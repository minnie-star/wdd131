document.addEventListener("DOMContentLoaded", () => {
  // Footer: Copyright year and last modified date
  const footerDate = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  footerDate.textContent = `Last Modified: ${lastModified}`;


  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.querySelector(".navigation");

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    navMenu.classList.toggle("responsive");

    const isOpen = navMenu.classList.contains("responsive");
    hamburger.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
});