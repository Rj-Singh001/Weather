const apiKey = "0e9c1a0799d356f0ca9f0b2400e2e004";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weathericon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
        weathericon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weathericon.src = "mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});
