// script.js
document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  if (city) {
    fetchWeatherData(city);
  }
});

function fetchWeatherData(city) {
  const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found!');
      } else {
        displayWeatherData(data);
      }
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  const weatherDetails = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p class="weather-details"><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p class="weather-details"><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p class="weather-details"><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p class="weather-details"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;

  weatherInfoDiv.innerHTML = weatherDetails;
}
