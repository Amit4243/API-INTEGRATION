const apiKey = 'YOUR_API_KEY'; // Replace with your API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById('weather-result').innerHTML = "<p>City not found.</p>";
            } else {
                document.getElementById('weather-result').innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(error => console.error("Error fetching data:", error));}