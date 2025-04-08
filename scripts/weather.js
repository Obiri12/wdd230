// Weather Elements in the DOM
const cityName = document.querySelector('#town');
const weatherDescription = document.querySelector('#description');
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');

// OpenWeatherMap API Key and Coordinates for your location (Accra, Ghana)
const apiKey = "f18574f349e2c43c02f7e2838e0105de"; 
const latitude = "5.614369"; 
const longitude = "-0.200454"; 

// Build the API URL with dynamic coordinates and API key
const weatherApiURL = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

// Fetch weather data from the API
async function fetchWeatherData() {
    try {
        const response = await fetch(weatherApiURL);
        
        // Check if the API response is successful
        if (response.ok) {
            const weatherData = await response.json(); // Parse the JSON response
            console.log(weatherData); // Log the data to the console for debugging
            updateWeatherDisplay(weatherData); // Update the UI with the fetched data
        } else {
            // If the API response is not OK, throw an error with the response message
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data: ", error); // Log any errors
    }
}

// Function to update the webpage with the weather data
function updateWeatherDisplay(weatherData) {
    // Set the city name in the UI
    cityName.textContent = weatherData.name;

    // Set the weather description (e.g., "Clear Sky", "Rain", etc.)
    weatherDescription.textContent = weatherData.weather[0].description;

    // Set the current temperature in Fahrenheit
    currentTemp.textContent = `${weatherData.main.temp}°F`;

    // Construct the URL for the weather icon based on the icon code
    const iconCode = weatherData.weather[0].icon;
    const iconImageUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    // Set the image source for the weather icon
    weatherIcon.src = iconImageUrl;
    
    // Set alternative text for the weather icon (for accessibility)
    weatherIcon.alt = weatherData.weather[0].description;
}

// Call the function to fetch and display the weather data
fetchWeatherData();
