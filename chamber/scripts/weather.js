// Replace with your own OpenWeatherMap API key
const apiKey = '13a78fd05f79568d392d2a682e37e4de';
const latitude = "5.614369";
const longitude = "-0.200454";

// DOM container for forecast cards
const forecastContainer = document.querySelector('#forecast');

// Fetch forecast data (3-hour increments)
async function fetchForecast() {
    const forecastApiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(forecastApiURL);
        if (response.ok) {
            const forecastData = await response.json();

            // View the raw data in the browser console
            console.log("Forecast Data (3-hour increments):", forecastData);

            displayForecast(forecastData);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

// Display 3-day forecast using only the 12:00 PM readings
function displayForecast(data) {
    forecastContainer.innerHTML = ''; // Clear previous content

    const forecastList = data.list;
    const dailyForecasts = forecastList.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyForecasts.forEach(day => {
        const date = new Date(day.dt_txt);
        const temp = day.main.temp;
        const desc = day.weather[0].description;
        const icon = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

        const dayCard = document.createElement('div');
        dayCard.classList.add('forecast-day');

        dayCard.innerHTML = `
            <h4>${date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</h4>
            <img src="${iconUrl}" alt="${desc}">
            <p>${temp.toFixed(1)}°F</p>
            <p>${desc}</p>
        `;

        forecastContainer.appendChild(dayCard);
    });
}

// Run the forecast function
fetchForecast();
