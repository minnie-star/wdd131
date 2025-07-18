document.addEventListener("DOMContentLoaded", () => {
  // Footer: Copyright year and last modified date
  const footerDate = document.getElementById("lastModified");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  // Update footer content
  footerDate.textContent = `© ${currentYear} | Last Modified: ${lastModified}`;

  // Static values (can be replaced with dynamic values later)
  const temperature = 10; // in Celsius
  const windSpeed = 5; // in km/h

  function calculateWindChill(temp, wind) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    );
  }

  // Check viability before calculating wind chill
  function displayWindChill() {
    const windChillElement = document.querySelector('.weather-box ul li:last-child');

    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
      windChillElement.textContent = `Wind Chill: ${windChill}°C`;
    } else {
      windChillElement.textContent = 'Wind Chill: N/A';
    }
  }

  // Call wind chill display
  displayWindChill();
});
