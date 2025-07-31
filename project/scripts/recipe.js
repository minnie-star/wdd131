document.addEventListener("DOMContentLoaded", () => {
  
  const footerDate = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

footerDate.textContent = `© ${currentYear} | Last Modified: ${lastModified}`;

})