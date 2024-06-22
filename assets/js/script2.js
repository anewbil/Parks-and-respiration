document.addEventListener('DOMContentLoaded', () => {
  const apiKey = "99578f24910d157c10cde6c280b61a4f"; 
  const npsApiKey = "BwdZxBvggzA7pxuNEIGz1HxAEHkNB7ttYQhquqMO"
  const parkName = localStorage.getItem('parkName');
  const parkCode = localStorage.getItem('parkCode')
  const weatherInfo = document.querySelector("#weatherInfo");
  const airQualityInfo = document.querySelector("#airQualityInfo");
  const parkInfo = document.querySelector("#parkInfo");
console.log(parkCode)
  if (parkCode) {
    fetchParkData(parkCode);
    searchCity(parkName);
}

function fetchParkData(parkCode) {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${npsApiKey}`)
        .then(response => response.json())
        .then(data => displayParkInfo(data))
        .catch(error => {
            console.error("Error fetching park information:", error);
            parkInfo.innerHTML = `<p>Error fetching park information. Please try again later.</p>`;
        });
}

function displayParkInfo(data) {
    if (data.data && data.data.length > 0) {
        const park = data.data[0];
        const parkDetails = `
            <div>
                <h3>${park.fullName}</h3>
                <p>${park.description}</p>
                <p><strong>Location:</strong> ${park.states}</p>
                <p><strong>Directions:</strong> <a href="${park.directionsUrl}" target="_blank">Get Directions</a></p>
                <p><strong>Website:</strong> <a href="${park.url}" target="_blank">${park.url}</a></p>
            </div>
        `;
        parkInfo.innerHTML = parkDetails;
    } else {
        parkInfo.innerHTML = `<p>No information available for the specified park.</p>`;
    }
}

function searchCity(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    ).then(response => response.json())
    .then(data => {
        displayWeatherInfo(data);
        getAirQuality(data.coord.lat, data.coord.lon);
    })
    .catch(error => {
        console.error("Error fetching weather information:", error);
        weatherInfo.innerHTML = `<p>Error fetching weather information. Please try again later.</p>`;
    });
}

function displayWeatherInfo(data) {
    const code = data.weather[0].icon;
    const url = `https://openweathermap.org/img/wn/${code}.png`;
    const weatherDetails = `
        <div>
            <h3>${data.name}</h3>
            
            <img src="${url}" alt="${data.weather[0].description}" />
            <p>Temperature: ${data.main.temp} °F</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} MPH</p>
        </div>
    `;
    weatherInfo.innerHTML = weatherDetails;
}

function getAirQuality(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    ).then(response => response.json())
    .then(data => {
        displayAirQualityInfo(data);
    })
    .catch(error => {
        console.error("Error fetching air quality information:", error);
        airQualityInfo.innerHTML = `<p>Error fetching air quality information. Please try again later.</p>`;
    });
}

function displayAirQualityInfo(data) {
    const aqi = data.list[0].main.aqi;
    const aqiLevel = getAqiLevel(aqi);
    const airQualityDetails = `
        <div>
            <h3>Air Quality Index (AQI): ${aqi}</h3>
            <p>Level: ${aqiLevel}</p>
        </div>
    `;
    airQualityInfo.innerHTML = airQualityDetails;
}

function getAqiLevel(aqi) {
    if (aqi === 1) return "Good";
    if (aqi === 2) return "Fair";
    if (aqi === 3) return "Moderate";
    if (aqi === 4) return "Poor";
    if (aqi === 5) return "Very Poor";
    return "Unknown";
}
});