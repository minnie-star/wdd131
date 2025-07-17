// Set current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set last modified date directly from the document object
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;

// Static values (can be replaced with dynamic values later)
const temperature = 10; // in Celsius
const windSpeed = 5; // in km/h

/**
 * Calculates the wind chill using the Celsius version of the formula.
 * Formula source: Environment Canada and the UK Met Office
 * Wind chill (°C) = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
 * T = temperature (°C), V = wind speed (km/h)
 */
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

// Call function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayWindChill);
